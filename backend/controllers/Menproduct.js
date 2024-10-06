const Product = require('../models/Menproduct');
const Review = require('../models/Review'); // Add this

// Get all women products
const getMenProducts = async (req, res) => {
  try {
    const products = await Product.find({ gender: 'Men' });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get single product details
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Post a review for a product
const addReview = async (req, res) => {
  const { productId, username, comment, rating } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const review = new Review({ productId, username, comment, rating });
    await review.save();

    res.json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getMenProducts,
  getProductById,
  addReview,
};
