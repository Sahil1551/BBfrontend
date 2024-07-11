import React, { useState, useEffect } from 'react';
import cake from '/cake.jpg';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import '../index.css';
import Slider from 'react-slick';
import Logo from '/Logo.png';
import { Divider } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Main = () => {
  const [selectedItem, setSelectedItem] = useState('Cakes');
  const [productcake, setProductcake] = useState([]);
  const [productcupcake, setProductcupcake] = useState([]);
  const [productcheesecake, setProductcheesecake] = useState([]);
  const [productdrycake, setProductdrycake] = useState([]);
  const [productbrownie, setProductbrownie] = useState([]);
  const [productcookie, setProductcookie] = useState([]);
  const [review,setReview]=useState([]);
  useEffect(() => {
    const fetch = async () => {
      const responsecake = await axios.get('http://localhost:5000/api/getProduct/668cbc64d38d86d38b46b6e9');
      const responsecupcake = await axios.get('http://localhost:5000/api/getProduct/668d2edc3b7c0f75f0db2557');
      const responsecheesecake = await axios.get('http://localhost:5000/api/getProduct/668d2ee53b7c0f75f0db255a');
      const responsecookie = await axios.get('http://localhost:5000/api/getProduct/668d2ee93b7c0f75f0db255d');
      const responseDrycake = await axios.get('http://localhost:5000/api/getProduct/668d2ef23b7c0f75f0db2560');
      //const responsebrownie = await axios.get('http://localhost:5000/api/getProduct/668d2efc3b7c0f75f0db2563');
      const response= await axios.get('http://localhost:5000/api/getReview');
      setReview(response.data);
      setProductcupcake(responsecupcake.data);
      setProductcake(responsecake.data);
      setProductcheesecake(responsecheesecake.data);
      setProductdrycake(responseDrycake.data);
      setProductcookie(responsecookie.data);
    };
    fetch();
  }, []);

  const hclick = async (p) => {
    // Handle click event
  };

  const renderContent = () => {
    const renderProductGrid = (products) => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products
          .filter((p) => p && p.images && p.images[0])
          .map((p) => (
            <div
              key={p._id}
              style={{ cursor: 'pointer' }}
              onClick={() => hclick(p)}
              className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 dancing-script-regular">{p.name}</h2>
            </div>
          ))}
      </div>
    );

    switch (selectedItem) {
      case 'Cakes':
        return renderProductGrid(productcake);
      case 'Cookies':
        return renderProductGrid(productcookie);
      case 'Dry Cakes':
        return renderProductGrid(productdrycake);
      case 'Cheese Cakes':
        return renderProductGrid(productcheesecake);
      case 'Brownie':
        return <div>Brownie items content</div>;
      case 'Cup Cakes':
        return renderProductGrid(productcupcake);
      default:
        return <div>Select an item to view its content</div>;
    }
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Changed to 1 for better mobile responsiveness
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div
        className="flex justify-end items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${cake})` }}
      >
        <div className="pr-8 md:pr-28 flex flex-col items-center justify-center min-h-screen">
          <img src={Logo} width={200} alt="Logo" />
          <h1 className="dancing-script-regular text-center text-4xl md:text-7xl text-red-700 font-bold mb-4 md:mb-8">
            Delicious Cakes <br /> To order
          </h1>
          <Button
            as={Link}
            to="/Catalog"
            className="!rounded-none bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 px-4 py-2 md:px-6 md:py-3 transition duration-300"
            auto
            shadow
          >
            See Catalog
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center m-5">
        <h1 className="dancing-script-regular text-6xl mb-5">Products</h1>
        <div className="flex flex-wrap justify-center mt-2 items-center space-x-4 text-small">
          <div className="w-1/4 md:w-auto" onClick={() => setSelectedItem('Cakes')} style={{ cursor: 'pointer' }}>Cakes</div>
          <Divider orientation="vertical" />
          <div className="w-1/4 md:w-auto" onClick={() => setSelectedItem('Cookies')} style={{ cursor: 'pointer' }}>Cookies</div>
          <Divider orientation="vertical" />
          <div className="w-1/4 md:w-auto" onClick={() => setSelectedItem('Dry Cakes')} style={{ cursor: 'pointer' }}>Dry Cakes</div>
          <Divider orientation="vertical" />
          <div className="w-1/4 md:w-auto" onClick={() => setSelectedItem('Cheese Cakes')} style={{ cursor: 'pointer' }}>Cheese Cakes</div>
          <Divider orientation="vertical" />
          <div className="w-1/4 md:w-auto" onClick={() => setSelectedItem('Cup Cakes')} style={{ cursor: 'pointer' }}>Cup Cakes</div>
        </div>
        <div className="mt-5">
          {renderContent()}
        </div>
      </div>
      <div className="flex flex-col justify-center text-center items-center dancing-script-regular text-6xl mb-5">
        Reviews
        <div className="container mx-auto m-10">
          <Slider {...settings}>
            {review.map((review) => (
              <div key={review._id} className="review-card p-4">
                <img src={review.Images[0]} alt='#' className="customer-photo" />
                <h3 className="text-lg font-bold">{review.product}</h3>
                <p className="text-sm text-gray-600">{review.review}</p>
                <p className="text-sm text-gray-500">- {review.user}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Main;
