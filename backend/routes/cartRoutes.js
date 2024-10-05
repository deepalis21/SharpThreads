const express = require('express');
const { addToCart, getCart, removeFromCart } = require('../controllers/cartControllers');
const router = express.Router();

// Add to cart
router.post('/cart', addToCart);

// Get cart by user ID
router.get('/cart/:userId', getCart);

// Remove product from cart
router.delete('/cart', removeFromCart);

module.exports = router;
