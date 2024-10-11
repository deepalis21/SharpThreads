const express = require('express');
const { submitContactForm } = require('../controllers/contactControllers');
const router = express.Router();

// POST request to /api/contact
router.post('/', submitContactForm); // Ensure it's POSTing to '/'

module.exports = router