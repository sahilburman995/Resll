import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutMePage = ({sellerId}) => {
  const [adminInfo, setAdminInfo] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch admin info from backend when component mounts
    fetchAdminInfo();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/${sellerId}`);
      console.log(response) // Replace '/api/admin/info' with your backend endpoint
      setAdminInfo(response.data);
    } catch (error) {
      console.error('Error fetching admin info:', error);
    }
  };

  const handleEdit = () => {
    setName(adminInfo.name);
    setBio(adminInfo.bio);
    setEmail(adminInfo.email);
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put('/api/admin/info', { name, bio, email }); // Replace '/api/admin/info' with your backend endpoint
      setEditMode(false);
      // Optionally, you can fetch admin info again to update the displayed information after the update
      // fetchAdminInfo();
    } catch (error) {
      console.error('Error updating admin info:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <h2 className="text-3xl font-bold text-gray-800 text-center mt-5">About Me</h2>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white shadow-md rounded px-8 py-8 mb-8">
          {!editMode ? (
            <div>
              <h3 className="font-bold text-lg">{adminInfo.name}</h3>
              <p className="text-gray-700">{adminInfo.bio}</p>
              <p className="text-gray-700">{adminInfo.email}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          ) : (
            <div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button onClick={handleUpdate}>Update</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
