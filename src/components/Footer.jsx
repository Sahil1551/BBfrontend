import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import Logo from '/Logo.png';

const Footer = () => {
  const handleClick = () => {
    window.location.href = 'https://www.instagram.com/bakedbydee24?igsh=MTEzamp1NGRzOG1lMA==';
  };

  return (
    <div className="bg-red-400 flex flex-col md:flex-row justify-evenly items-center md:h-72 gap-4 p-4 md:p-0">
      <div className="flex flex-col items-center text-center w-full md:w-1/3 md:px-4">
        <img src={Logo} alt="Logo" width="100px" className="mb-2" />
        <h1 className="dancing-script-regular text-4xl md:text-5xl text-white">
          Bliss Bakers
        </h1>
        <p className="text-base text-white">Indulge In Cake Bliss</p>
      </div>
      
      <div className="flex flex-col items-center w-full md:w-1/3 md:px-4 mt-4 md:mt-0">
        <h1 className="dancing-script-regular text-3xl md:text-4xl text-white">Company</h1>
        <div className="flex flex-col items-center text-lg md:text-2xl pt-4 w-fit dancing-script-regular">
          {['Home', 'Catalog', 'About Us', 'Special Offers', 'Reviews', 'Contact Us'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.replace(' ', '')}`}
              className="relative text-white mt-2 md:mt-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center w-full md:w-1/3 md:px-4 mt-4 md:mt-0">
        <h1 className="dancing-script-regular text-3xl md:text-4xl text-white text-center ">Address</h1>
        <div className="w-full flex flex-col items-center text-lg  text-white pt-4 dancing-script-regular text-center">
          <p>#1441/4 Phase 11 Mohali</p>
          <p>+91 6283974824</p>
          <p>sahilchhabra1551@gmail.com</p>
          <div className="flex items-center mt-2 cursor-pointer" onClick={handleClick}>
            <FaInstagram color="white" className="mr-2" /> BakedBydee24
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
