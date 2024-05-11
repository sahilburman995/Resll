import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons from react-icons library
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <> <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
      <div className="flex justify-center items-center mb-8">
        <div className="w-1/2">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          {/* Contact Form (You can replace this with your actual contact form component) */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </form>
        </div>
        <div className="w-1/2 pl-8">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          {/* Address */}
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-4 text-indigo-600 text-xl" />
            <p className="text-gray-700">NIT Raipur CSE Sahil Burman</p>
          </div>
          {/* Email */}
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-4 text-indigo-600 text-xl" />
            <p className="text-gray-700">sahilburman277@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="flex items-center">
            <FaPhone className="mr-4 text-indigo-600 text-xl" />
            <p className="text-gray-700">+91 7879****14</p>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center">
        <a href="#" className="text-gray-700 hover:text-indigo-600 mr-4"><i className="fab fa-facebook fa-lg"></i></a>
        <a href="#" className="text-gray-700 hover:text-indigo-600 mr-4"><i className="fab fa-twitter fa-lg"></i></a>
        <a href="#" className="text-gray-700 hover:text-indigo-600 mr-4"><i className="fab fa-instagram fa-lg"></i></a>
        <a href="#" className="text-gray-700 hover:text-indigo-600 mr-4"><i className="fab fa-linkedin fa-lg"></i></a>
      </div>
    </div>
    </>
  );
};

export default Contact;
