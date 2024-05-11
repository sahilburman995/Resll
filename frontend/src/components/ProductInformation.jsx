import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const ProductInformation = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-center items-center ">
        <div className="max-w-lg bg-white overflow-hidden flex-none">
          <img src={`http://localhost:3000/${product.image}`} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="max-w-lg flex justify-center   rounded-lg shadow-lg overflow-hidden flex-grow " >
          <div className="p-7">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-4">Description: {product.description}</p>
            <p className="text-gray-700 mb-2">Seller: {product.seller}</p>
            <p className="text-gray-700 mb-2">Condition: {product.condition}</p>
            <p className="text-gray-700 mb-2">Contact Number: {product.contact}</p>
            <p className="text-gray-700 mb-4">Location: {product.location}</p>
            <p className="text-2xl font-bold text-green-700">Price: ${product.price} /-</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;
