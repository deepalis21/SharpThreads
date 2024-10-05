const express = require('express');
const router = express.Router();
const { getWomenProducts, getProductById, addReview } = require('../controllers/productControllers');

// Get all products for women
router.get('/products/women', getWomenProducts);

// Get product details by ID
router.get('/products/:id', getProductById);

// Add a review
router.post('/products/review', addReview);

module.exports = router;
