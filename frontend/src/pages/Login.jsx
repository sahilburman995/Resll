import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa'; // Importing icons from react-icons library

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
        {/* Username field */}
        <div className="mb-4 flex items-center border-b border-gray-300 py-2">
          <FaUser className="text-gray-500 mr-4" />
          <input type="text" placeholder="Username" className="flex-1 outline-none" />
        </div>
        {/* Password field */}
        <div className="mb-6 flex items-center border-b border-gray-300 py-2">
          <FaLock className="text-gray-500 mr-4" />
          <input type="password" placeholder="Password" className="flex-1 outline-none" />
        </div>
        {/* Login button */}
        <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
          Login
        </button>
        {/* Register link */}
        <p className="text-center mt-4 text-sm text-gray-600">Don't have an account? <a href="/register" className="text-indigo-600 font-semibold">Register</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
