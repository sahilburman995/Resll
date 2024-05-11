import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Customer Testimonials</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial Card 1 */}
            <div className="testimonial-card ">
              <div className="p-6">
                <p className="text-base text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <div className="mt-4 flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Testimonial 1" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-800 font-semibold">John Doe</p>
                    <p className="text-gray-600">CEO, Company Name</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="testimonial-card ">
              <div className="p-6">
                <p className="text-base text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <div className="mt-4 flex items-center">
                  <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Testimonial 2" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-800 font-semibold">Jane Smith</p>
                    <p className="text-gray-600">Designer, Company Name</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Card 3 */}
            <div className="testimonial-card ">
              <div className="p-6">
                <p className="text-base text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <div className="mt-4 flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Testimonial 1" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-800 font-semibold">John Doe</p>
                    <p className="text-gray-600">CEO, Company Name</p>
                  </div>
                </div>
              </div>
            </div>
         
            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
