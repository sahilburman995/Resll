import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import AboutMePage from '../components/AboutMePage';
import { FaEdit, FaEnvelopeOpen, FaEvernote, FaFire } from 'react-icons/fa';
const AdminForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [location, setlocation] = useState('');
  const [condition, setcondition] = useState('');

  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null); // State to store the ID of the product being edited

  useEffect(() => {
 
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
      console.log("response is", response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !productDescription || !productImage || !productCategory || !productPrice || !sellerId) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('photo', productImage);
    formData.append('category', productCategory);
    formData.append('price', productPrice);
    formData.append('seller', sellerId);
    formData.append('location', location);
    formData.append('contact', contactNo);
    formData.append('condition', condition);

    try {
      const response = await axios.post('http://localhost:3000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setProductName('');
      setProductDescription('');
      setProductImage('');
      setProductCategory('');
      setProductPrice('');
      setSellerId('');
      setcondition('');
      setlocation('');
      setcontactNo('');
      fetchProducts();
      console.log('Post created successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find(product => product._id === productId);
    if (productToEdit) {
      setEditProductId(productId);
      setProductName(productToEdit.name);
      setProductDescription(productToEdit.description);
      setProductCategory(productToEdit.category);
      setProductPrice(productToEdit.price);
      setSellerId(productToEdit.seller);
    }
  };

  const handleUpdate = async () => {
    // Make a request to update the product data
    try {
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('description', productDescription);
      formData.append('photo', productImage);
      formData.append('category', productCategory);
      formData.append('price', productPrice);
      formData.append('seller', sellerId);

      const response = await axios.put(`http://localhost:3000/api/products/${editProductId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product updated successfully:', response.data);
      setEditProductId(null);
      setProductName('');
      setProductDescription('');
      setProductImage('');
      setProductCategory('');
      setProductPrice('');
      setSellerId('');
      fetchProducts();
    
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };
 
const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };


  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <h2 className="text-3xl font-bold text-gray-800 text-center mt-5">MY DASHBOARD</h2>
      <div className=" max-w-4xl mx-auto py-8 px-4">

        <div className="bg-white shadow-md rounded px-8 py-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full outline-none rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
            </div>
            <div>
              <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
                Product Description
              </label>
              <textarea
                id="productDescription"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="mt-1 block w-full outline-none rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              ></textarea>
            </div>
            <div>
              <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
                Product Category
              </label>
            <select
  id="productCategory"
  value={productCategory}
  onChange={(e) => setProductCategory(e.target.value)}
  className="mt-1 block w-full rounded-md border-gray-300  outline-none shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
>
  <option value="">Select a category...</option>
  <option value="books">Books</option>
  <option value="clothing">Clothing</option>
  <option value="Mobile">Mobile</option>
  <option value="electronics">Electronics</option>
  <option value="shoes">Shoes</option>
</select>
            </div>
            <div>
              <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                Product Price
              </label>
              <input
                id="productPrice"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="mt-1 block w-full rounded-md outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
            </div>
            <div>
              <label htmlFor="sellerId" className="block text-sm font-medium text-gray-700">
                Seller Email ID
              </label>
              <input
                id="sellerId"
                type="text"
                placeholder='e.g name@gmail.com'
                value={sellerId}
                onChange={(e) => setSellerId(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
            </div>
            <div>  
      
      <label htmlFor="contactno" className="block text-sm font-medium text-gray-700">
                Contact No
              </label>
              <input
                id="contactno"
                type="text"
                value={contactNo}
                onChange={(e) => setcontactNo(e.target.value)}
                className="mt-1 block w-full rounded-md shadow-sm outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
              </div>
              <div> 
              <label htmlFor="location" className="block text-sm    font-medium text-gray-700">
              Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
                className="mt-1  block w-full rounded-md border-gray-300  outline-none shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
              </div>
              <div>
               <label htmlFor="condition"  className="block text-sm  font-medium text-gray-700">
            condition
              </label>
              <input
                id="condition"
                type="text"
                placeholder='e.g New,Old, 1 year old'
                value={condition}
                onChange={(e) => setcondition(e.target.value)}
                className="mt-1  block w-full rounded-md border-gray-300 shadow-sm outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
              
              </div>
            <div>
              <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                id="productImage"
                type="file"
                name="photo"
                onChange={(e) => setProductImage(e.target.files[0])}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-10"
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              <button onClick={() => handleEdit(product._id)}> <FaEdit/></button> {/* Edit button */}
              {editProductId === product._id && (
                <div className='grid  gap-1 '>
                  <input className='bg-gray-300 rounded px-2' type="text"  value={productName} onChange={(e) => setProductName(e.target.value)} />
                  <input  className='bg-gray-300 rounded px-2' type="text" value={productDescription} onChange={(e)=>setProductDescription(e.target.value)}/>
                  <input className='bg-gray-300 rounded px-2' type="text" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
                  <input className='bg-gray-300 rounded px-2' type="text" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)}/>
                  
                  {/* Other input fields for editing */}
                  <button  className="  px-2 py-2  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleUpdate}>Update</button>
                </div>
              )}
              <div className="mt-2">
                <img src={`http://localhost:3000/${product.image}`} alt={product.name} className="rounded-md w-full h-40 object-cover" />
              </div>
              <div className="flex justify-between items-center mt-2"> 
                  <p className="text-gray-700 font-bold">${product.price}</p> {/* Price */}
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={()=>{handleDelete(product._id)}}
                  >
                   Delete
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default AdminForm;
