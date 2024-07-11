import React from 'react'
import axios from 'axios'
const Contactus = () => {
  const handleSubmit=async(e)=>{
    const formData=new FormData(e.target);
    const name=formData.get('name')
    const email=formData.get('email')
    const query=formData.get('query')
    try{
      const contactData={
        name,
        email,
        query
      }
      await axios.post('http://localhost:5000/api/postQuery',contactData)
      window.location.href='/'
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-700">Query</label>
            <textarea id="query" name="query" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contactus
