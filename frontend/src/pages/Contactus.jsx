import React, { useState } from 'react';
import './contactus.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);  // For button state
  const [responseMessage, setResponseMessage] = useState(''); // To display server response

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    // Send the form data to the backend via a POST request
    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`, // Combine first and last names
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.message) {
        setResponseMessage(result.message); // Use server message as feedback
        alert('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Clear form after submission
      } else {
        setResponseMessage('There was an issue sending your message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('Error sending message: ' + error.message); // Display error message
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission
    }
  };

  return (
    <div className="contact-container">
       <Navbar />
      <h1>Contact Us</h1>
      <hr />
      <p className="contact-intro">
        We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or
        just want to give us feedback, our team is here to help.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          <hr />
          <p>Customer Support:</p>
          <p>Email us at: support@sharpthreads.com</p>
          <p>Call us at: +91 9999300966</p>
          <p>Available: Monday to Friday, 9 AM - 6 PM (IST)</p>
          <p>Business Inquiries:</p>
          <p>For partnerships or business-related questions,</p>
          <p>email us at: business@sharpthreads.com</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email Address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'SEND'}
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;