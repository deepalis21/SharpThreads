import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><Link to="/Women">Women</Link></li>
        <li><Link to="/Men">Men</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Contactus">Contact</Link></li>
      </ul>

      <div className="logo">
        <img src="/images/sharpthread_logo.jpg" alt="SharpThreads Logo" className="logo-image" />
      </div>


      <div className="nav-actions">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <span className="search-icon-inside">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <Link to="/Login" className="login-btn">Log In</Link>  
      </div>
    </nav>
  );
};

export default Navbar;
