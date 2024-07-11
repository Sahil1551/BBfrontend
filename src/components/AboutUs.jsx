import React from 'react';
import CEO from '/CEO.jpg'

const AboutUs = () => {
  return (
    <>
    <div className="about-us-container bg-white p-8 rounded-lg  flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 h-fit mb-6 md:mb-0 md:mr-6">
        <img 
          src={CEO} 
          alt="Bliss Bakers" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-center md:text-left mb-6 dancing-script-regular flex justify-center">Our Story</h1>
        <p className="text-lg leading-relaxed text-gray-700 ">
          Welcome to Bliss Bakers, where every bite is a blissful experience. Founded by Ms. Divya Chhabra, Bliss Bakers began as a humble home bakery in Phase 11, Mohali, and has quickly grown into a beloved name in the community. Ms. Chhabra, with her passion for baking and a heart full of dreams, turned her love for creating delectable treats into a reality after completing her Bakery Certification from the esteemed National Finishing and Cookery Institute (NFCI).
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          At Bliss Bakers, we believe that baking is an art that brings joy and warmth to every occasion. Our journey started with a simple mission: to craft delicious, high-quality baked goods that bring smiles to our customers' faces. Each of our creations is made with the finest ingredients, a dash of love, and a commitment to perfection.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Our bakery is more than just a business; it's a family. We take pride in our handcrafted cakes, cupcakes, and other sweet treats, all made in our cozy kitchen. From classic flavors to innovative combinations, we strive to cater to every palate and occasion. Whether it's a birthday, a wedding, or just a day you want to make special, Bliss Bakers has the perfect treat for you.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          As we continue to grow, our dedication to quality and customer satisfaction remains unwavering. We are grateful for the love and support of our community, and we are excited to share our sweet journey with you. Thank you for choosing Bliss Bakers, where every bite is a taste of bliss.
        </p>
      </div>
      
    </div>
    </>
  );
}

export default AboutUs;
