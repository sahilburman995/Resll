import React from 'react';// Import Axios
import Navbar from '../components/Navbar.jsx'
import nitImage from '../assets/bus.avif';

import HeroSection from '../components/HeroSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import TrendingSection from '../components/TrendingSection.jsx'
import TestimonialSection from '../components/TestimonialSection.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {


  return (
    <div>
    <Navbar/>
    <HeroSection/>
    
    <CategorySection/>
    <TrendingSection/>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
  <h2 className="text-3xl font-bold text-yellow-500 text-center">Easy steps</h2>
  <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">How It Works</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex-1 rounded overflow-hidden shadow-md p-4 hover:shadow-2xl transition duration-300">
      <div className="bg-blue-500 text-white text-center py-2">
        <i className="fas fa-user-plus text-3xl"></i>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Create Account</div>
        <p className="text-gray-700 text-base">Join our community and unlock exclusive benefits with a few clicks. Create your account today and start exploring the possibilities!</p>
      </div>
    </div>

    <div className="flex-1 rounded overflow-hidden shadow-md p-4 hover:shadow-2xl transition duration-300">
      <div className="bg-green-500 text-white text-center py-2">
        <i className="fas fa-bullhorn text-3xl"></i>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Post an Ad</div>
        <p className="text-gray-700 text-base">Boost your online visibility with our 'Post an Ad' feature, a powerful tool for reaching a wider audience and promoting your products or services on your website.</p>
      </div>
    </div>

    <div className="flex-1 rounded overflow-hidden shadow-md p-4 hover:shadow-2xl transition duration-300">
      <div className="bg-yellow-500 text-white text-center py-2">
        <i className="fas fa-money-bill-alt text-3xl"></i>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Start Earning</div>
        <p className="text-gray-700 text-base">Unlock your financial potential and take the first step towards success with 'Start Earning.' Join us today and pave your path to prosperity.</p>
      </div>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row justify-around mt-10 mb-10">
    <div>
      <img src={nitImage} alt="Nit Logo" className="mx-auto" style={{ height: 'auto', maxWidth: '450px' }} />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6 sm:mt-0">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-black">Why Should You Trust Our Product</h1>
      </div>
      <ul className="list-disc list-inside text-gray-700">
        <li className="mb-4">Safe and Secure Process</li>
        <li className="mb-4">Verified Trustworthy Sellers</li>
        <li className="mb-4">Clear and fair policies for all</li>
      </ul>
    </div>
  </div>
</div>



    <TestimonialSection/>
    <Footer/>
      
    </div>
  )
}

export default Home
