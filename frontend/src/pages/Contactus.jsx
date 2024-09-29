import React from 'react';
import './contactus.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <hr/>
      <p className="contact-intro">
        We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or
        just want to give us feedback, our team is here to help.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch With US</h2>
          <hr/>
          <p>Customer Support:</p>
          <p>Email us at: support@sharpthreads.com</p>
          <p>Call us at: +91 9999300966</p>
          <p>Available: Monday to Friday, 9 AM - 6 PM (IST)</p>
          <p>Business Inquiries:</p>
          <p>For partnerships or business-related questions,</p>
          <p>email us at: business@sharpthreads.com</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;