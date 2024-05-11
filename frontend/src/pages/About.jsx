// pages/About.jsx

import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>  <Navbar/>
    <div className="bg-gray-100 py-16">
  
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        {/* Company Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius et libero vel bibendum. Phasellus quis quam id ligula gravida pharetra ut vel nisi. In hac habitasse platea dictumst. Duis dictum odio a magna ullamcorper, sed blandit ligula eleifend. Vivamus nec semper nisl. Aliquam fringilla commodo urna, vitae convallis nisl finibus sit amet. Vestibulum tincidunt sapien ac nunc bibendum cursus.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Integer viverra metus sit amet augue bibendum, sed molestie eros auctor. Proin id urna non tortor ultrices faucibus. Donec in augue eros. In ultricies turpis at sapien feugiat, nec aliquam sem vehicula. Proin aliquam tortor non lorem rutrum, a molestie orci tristique. Morbi nec nisl a turpis rutrum vehicula id in mauris.
          </p>
          <p className="text-lg leading-relaxed">
            Fusce auctor sollicitudin augue, eu tincidunt eros gravida at. Aliquam et nunc a dui vestibulum tempus. Quisque gravida, dolor nec vestibulum commodo, arcu libero elementum magna, vitae convallis magna leo at dolor. Ut id dui id ex tincidunt volutpat vel at arcu.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Team member 1 */}
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-sm text-gray-600">CEO</p>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Quality</li>
            <li className="text-lg mb-2">Integrity</li>
            <li className="text-lg mb-2">Innovation</li>
            <li className="text-lg mb-2">Customer Satisfaction</li>
          </ul>
        </section>

        {/* Additional sections can be added as needed */}

      </div>
    </div>
    </div>
  );
}

export default About;
