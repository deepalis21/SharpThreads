const express = require('express');
const { submitContactForm } = require('../controllers/contactControllers'); // Import the controller
const router = express.Router();

// Handle contact form submissions
router.post('/contact', submitContactForm);

module.exports = router;
