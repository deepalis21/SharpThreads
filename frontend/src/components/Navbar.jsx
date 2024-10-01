import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="logo">
            <img src="/sharpthread_logo.jpg" alt="Logo" className="logo-image" />
       </div>
      <div className="nav-actions">
      <div className="search-container">
      <input type="text"
      placeholder="search.."
      className="search-bar"
      />
      <span className="search-icon-inside">
      <FontAwesomeIcon icon={faSearch} /></span>
      </div>
        <a href="#" className="login-btn">Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;
