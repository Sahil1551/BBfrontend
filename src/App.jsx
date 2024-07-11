import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import AboutUs from './components/AboutUs'
import Catalog from './components/Catalog'
import ContactUs from './components/Contactus'
import SpecialOffer from './components/Specialoffer'
import Reviews from './components/Reviews'
import Login from './components/Login'

import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return (
    <> <Router>
     <Header/> 
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/SpecialOffer" element={<SpecialOffer />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/Login" element={<Login a={true} />} />
      <Route path="/Signin" element={<Login a={false} />} />
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App
