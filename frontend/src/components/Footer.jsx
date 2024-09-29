import React from 'react';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="subscribe-section">
                    <h2>Subscribe to get offers in your inbox</h2>
                    <p>Elevate Your Wardrobe with Sharp Threads.</p>
                </div>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/tshirts">Buy t-shirts</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/about-us">About</a></li>
                        <li><a href="/contact-us">Contact</a></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <p>Stay connected with us on:</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright &copy; 2024 | SharpThreads</p>
            </div>
        </footer>
    );
};

export default Footer;