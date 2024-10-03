import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"; // Import Axios for API requests

const Login = () => {
  // State variables for login form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    try {
      // Make API request to your backend for login
    
      const response = await axios.post('http://localhost:5175/api/users/login', {
        firstName,
        lastName,
        password
      });
      
      console.log(response.data); // Check response from backend
      
      // On successful login, redirect to a dashboard or home page
      navigate('/');
      alert(`Welcome, ${firstName} ${lastName}! Login successful.`);
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalidd credentials. Please try again."); // Show error message to user
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <hr className="title-divider" />

      <div className="login-box">
        <div className="welcome-section">
          <h2 className="brand-name">SharpThreads</h2>
          <p className="welcome-text">welcomes</p>
        </div>

        <div className="form-section">
          {/* Display error messages */}
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
    </div>
  );
};

export default Login;
