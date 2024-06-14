import logo from './logo.svg';
import './App.css';
import React from 'react';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import StudentLogin from './StudentLogin';
import StaffLogin from './StaffLogin';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={HomePage} />
                <Route path="/student-login" component={StudentLogin} />
                <Route path="/staff-login" component={StaffLogin} />
            </Routes>
        </Router>
    );
};



export default App;
