const express = require('express');
const {
  createProduct,
  getProductsByCategory,
  getAllProducts,
} = require('../controllers/adminControllers'); // Ensure this path is correct

const router = express.Router();

// Route for creating a product
router.post('/products', createProduct);

// Route for fetching all products
router.get('/products', getAllProducts);

// Route for fetching products by category (Men/Women)
router.get('/products/:category', getProductsByCategory);

module.exports = router;
