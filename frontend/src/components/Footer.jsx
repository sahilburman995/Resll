import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
          {/* Footer Column 1 */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">About Us</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {/* Footer Column 2 */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Categories</h2>
            <ul className="text-gray-300">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              {/* Add more categories as needed */}
            </ul>
          </div>
          {/* Footer Column 3 */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Help & Support</h2>
            <ul className="text-gray-300">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Information</li>
              {/* Add more help & support links as needed */}
            </ul>
          </div>
          {/* Footer Column 4 */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Connect with Us</h2>
            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2.05c1.1 0 1.95.85 1.95 1.95v16c0 1.1-.85 1.95-1.95 1.95h-16c-1.1 0-1.95-.85-1.95-1.95v-16c0-1.1.85-1.95 1.95-1.95h16zm-3.5 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-12h-14c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm3.5 15h-7l1.52-7.23 1.48-1.73h-3v-3h4l-1.48 1.73h2.68l-1.35 6.77 5.65-5.77h3.47l-1.5 1.5v9z"/>
                </svg>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-300">© 2024 My Ecommerce Store. All rights reserved.</p>
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
