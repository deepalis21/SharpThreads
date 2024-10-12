import React, { useState, useContext } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AdminContext } from '../pages/AdminContext';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; 
const Login = () => {
  const { loginAsAdmin } = useContext(AdminContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/users/login', {
        firstName,
        lastName,
        password
      });

      console.log(response.data);

      if (
        (firstName === 'Deepali' && lastName === 'Singh' && password === 'deep') ||
        (firstName === 'Anjana' && lastName === 'Panda' && password === '111')
      ) {
        loginAsAdmin(true);
      } else {
        loginAsAdmin(false);
      }

      navigate('/');
      alert(`Welcome, ${firstName} ${lastName}! Login successful.`);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <Navbar /> {/* Include Navbar component */}
      <h1 className="login-title">Login</h1>
      <hr className="title-divider" />

      <div className="login-box">
        <div className="welcome-section">
          <h2 className="brand-name">SharpThreads</h2>
          <p className="welcome-text">welcomes</p>
        </div>

        <div className="form-section">
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <input
                type="text"
                placeholder="First Name"
                className="input-field"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-field"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="input-field full-width"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">LOGIN</button>
          </form>
        </div>
      </div>
      <Footer /> 
    </div>
    
  );
};

export default Login;