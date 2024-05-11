import React from "react";
import { Link } from "react-router-dom";
import boo from '../assets/boo.jpg'
import shoo from '../assets/shoo.jpg'
import clt from '../assets/clt.jpg'
import elec from '../assets/elec.jpg'
import mob from '../assets/mob.jpg'

const CategorySection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {/* Category Card 1 */}
            <Link to={`/clothing`} className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition duration-300">
                <img src={clt} alt="Category 1" className="object-cover" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Clothing</p>
            </Link>
            {/* Category Card 2 */}
            <Link to={`/electronics`} className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition duration-300">
                <img src={elec} alt="Category 2" className="object-cover" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Electronics</p>
            </Link>
            {/* Category Card 3 */}
            <Link to={`/shoes`} className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition duration-300">
                <img src={shoo} alt="Category 3" className="object-cover" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Shoes</p>
            </Link>
            {/* Category Card 4 */}
            <Link to={`/books`} className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition duration-300">
                <img src={boo} alt="Category 4" className="object-cover" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Books</p>
            </Link>
            {/* Category Card 5 */}
            <Link to={`/Mobile`} className="group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition duration-300">
                <img src={mob} alt="Category 5" className="object-cover" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-900">Mobile</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
