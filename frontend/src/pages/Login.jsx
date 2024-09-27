import React from 'react';
import './Login.css';

const Login = () => {
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
          <form>
            <div className="name-fields">
              <input type="text" placeholder="First Name" className="input-field" />
              <input type="text" placeholder="Last Name" className="input-field" />
            </div>
            <input type="password" placeholder="Password" className="input-field full-width" />
            <button type="submit" className="login-button">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;