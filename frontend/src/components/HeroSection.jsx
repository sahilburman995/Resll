import React from 'react';
import backgroundImage from '../assets/nit.png';
const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0  bg-cover bg-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: ".8", // Adjust the opacity as needed
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
  Welcome to <span className="text-black ">NIT Raipur</span>{" "}
  <h1 className="text-yellow-500">ReSell</h1>
</h1>

        <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-2 md:max-w-3xl">
        wide rage of products  Buy at lowest cost 
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Shop Now
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
