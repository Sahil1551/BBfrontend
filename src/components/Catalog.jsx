import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('https://b-bbackend.vercel.app/api/getProduct');
      console.log(response.data.pr);
      setProducts(response.data.pr);
    };
    fetch();
  }, []);

  // Calculate the products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle pagination
  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>
        <h1 className='flex justify-center m-10 dancing-script-regular text-6xl'> Catalog </h1>
      </div>
      <div className='h-fit grid grid-cols-1 sm:grid-cols-2 shadow-3xl md:grid-cols-3 lg:grid-cols-3 gap-6 p-10'>
        {currentProducts.map((p) => (
           <div
           key={p.id}
           className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
         >
           <img
             src={p.images[0]}
             alt={p.name}
             className='w-full h-96 object-cover'
           />
           <div className='p-4 flex flex-col  h-fit'>
             <div className='mb-4'>
               <h2 className='text-2xl font-bold dancing-script-regular'>{p.name}</h2>
             </div>
             <div className=''>
               {Object.entries(p.price).map(([quantity, price]) => (
                 <div key={quantity} className='text-lg font-semibold'>
                   {quantity}: ₹{price}
                 </div>
               ))}
             </div>
           </div>
         </div>
        ))}
      </div>
    </>
  );
};

export default Catalog;
