import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [review, setReview] = useState('');
  const [user, setUser] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const accessToken = localStorage.getItem('accesstoken');
  
  useEffect(() => {
    if (accessToken) {
      const fetchUser = async () => {
        try {
          const response = await axios.get('https://b-bbackend.vercel.app/user/info', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          setUser(response.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://b-bbackend.vercel.app/api/category');
        setCategories(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category) {
      const fetchProducts = async () => {
        try {
          const selectedCategory = categories.find(cat => cat.category === category);
          if (selectedCategory) {
            const response = await axios.get(`https://b-bbackend.vercel.app/api/getProduct/${selectedCategory._id}`);
            setProducts(response.data);
          }
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
    }
  }, [category, categories]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const Review={
        user:user._id,
        product:subcategory,
        review
      }
      await axios.post('https://b-bbackend.vercel.app/api/postReview',Review)
      window.location.href='/'
    }
    catch(err){
      console.error(err)
      window.location.href='/'
    }
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory('');
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.category}>{cat.category}</option>
            ))}
          </select>
        </div>
        {category && (
          <div className="mb-4">
            <label htmlFor="subcategory" className="block text-gray-700 font-bold mb-2">Product</label>
            <select
              id="subcategory"
              name="subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="" disabled>Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>{product.name}</option>
              ))}
            </select>
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700 font-bold mb-2">Review</label>
          <textarea
            id="review"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
            placeholder="Write your review"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;