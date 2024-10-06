import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AdminContext } from '../pages/AdminContext';

const Navbar = () => {
  const { isAdmin } = useContext(AdminContext);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/Women">Women</Link></li>
        <li><Link to="/Men">Men</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Contactus">Contact</Link></li>
        {isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}
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
        <Link to="/SignIn" className="login-btn">SignUp</Link>
        <Link to="/Cart" className="login-btn">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
