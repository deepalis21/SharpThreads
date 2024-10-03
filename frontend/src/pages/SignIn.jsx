import React, { useState } from "react";
import './signIn.css'; // Use regular import if this is a standard CSS file
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios for making API requests

const SignIn = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages

  const navigate = useNavigate();

  // Form validation function
  const validateForm = () => {
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("All fields are required!");
      return false;
    }
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address!");
      return false;
    }
    setErrorMessage(""); // Clear any previous errors
    return true;
  };

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    
    // Validate the form before making an API request
    if (!validateForm()) return;

    try {
      // Make the API request to your backend
      const response = await axios.post('http://localhost:5175/api/users/signup', {
        firstName,
        lastName,
        email,
        password
      });      

      console.log(response.data); // Log the response for debugging

      // If registration is successful, redirect to the Login page
      navigate('/login');

      // Optional: Show a success message (or use alert)
      alert(`Welcome, ${firstName} ${lastName}! Registration successful.`);
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="welcome-box">
        <h1>SharpThreads</h1>
        <p className="wel">w e l c o m e s</p>
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <hr />
        {/* Display error messages */}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        
        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
