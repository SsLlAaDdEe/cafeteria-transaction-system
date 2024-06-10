// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Covenant University: Cafe 1</h1>
            <div className="button-container">
                <Link to="/student-login" className="homepage-button">Login/Sign up as a Student</Link>
                <Link to="/staff-login" className="homepage-button">Login/Sign up as a Staff</Link>
            </div>
        </div>
    );
};

export default HomePage;
