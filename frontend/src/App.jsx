import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx'; // Import your Home page component
import About from './pages/About.jsx'; // Import your About page component
import Contact from './pages/Contact.jsx'; // Import your Contact page component
import AdminForm from './pages/AdminForm.jsx';
import ProductInformation from './components/ProductInformation.jsx';
import CategoryInfo from './components/CategoryInfo.jsx';
import LoginPage from './pages/Login.jsx';
import Register from './pages/Register.jsx';
const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<AdminForm/>} />
          <Route path="/product-information/:productId" element={<ProductInformation />} />
          <Route path="/:category" element={<CategoryInfo />} />
          

          
        
        </Routes>

      </div>
    </Router>
  );
}

export default App;
