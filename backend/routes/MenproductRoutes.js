const express = require('express');
const router = express.Router();
const { getMenProducts, getProductById, addReview } = require('../controllers/Menproduct');

// Get all products for women
router.get('/products/men', getMenProducts);

// Get product details by ID
router.get('/products/:id', getProductById);

// Add a review
router.post('/products/review', addReview);

module.exports = router;
