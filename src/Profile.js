// src/Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: ''
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setUser(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('There was an error fetching the user data!', error);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    axios.put('http://localhost:8000/api/profile/', user, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setMessage('Profile updated successfully!');
    })
    .catch(error => {
      console.error('There was an error updating the profile!', error);
      setMessage('There was an error updating the profile.');
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={user.username} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" value={user.first_name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" value={user.last_name} onChange={handleChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {message && <div className={`message ${message.includes('error') ? 'error' : 'success'}`}>{message}</div>}
    </div>
  );
};

export default Profile;
