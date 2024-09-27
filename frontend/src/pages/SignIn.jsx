import React, { useState } from "react";
import './signIn.css'; // Use regular import if this is a standard CSS file

const SignIn = () => {
  // Create state variables for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form validation function
  const validateForm = (event) => {
    event.preventDefault(); // Prevent the page from reloading

    // Basic validation logic
    if (!firstName || !lastName || !email || !password) {
      alert("All fields are required!");
      return false;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address!");
      return false;
    }

    alert(`Welcome, ${firstName} ${lastName}!`);
    return true;
  };

  return (
    <div className="container">
      <div className="welcome-box">
        <h1>SharpThreads</h1>
        <p>w e l c o m e s</p>
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <hr />
        <form id="signupForm" onSubmit={validateForm}>
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
