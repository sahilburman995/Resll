import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const TrendingSection = () => {
  const [products, setProducts] = useState([]);
   const navigate=useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
        console.log("response is", response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleBuyClick = (productId) => {
    // Navigate to the product information page with the product ID as a parameter
    navigate(`/product-information/${productId}`);
  };
 
  return (
    <div className="bg-gray-100 " >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
  <Link to={`/product-information/${product._id}`} key={index}>
    <div className="bg-white rounded-md shadow-md p-4 hover:shadow-2xl transition duration-300">
      <div className="flex justify-center items-center"> 
        <img
          src={`http://localhost:3000/${product.image}`}
          alt={product.name}
          className="rounded-md w-full h-56 object-cover"
        />
      </div>
      <h3 className="font-bold text-lg mt-4 ">{product.name}</h3>
      <p className="text-gray-700 mb-2 ">{product.description}</p>
      <div className="flex justify-between items-center mt-2"> 
        <p className="text-gray-700 font-bold">${product.price}</p> {/* Price */}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => handleBuyClick(product._id)}
        >
          Buy
        </button>
      </div>
    </div>
  </Link>
))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
