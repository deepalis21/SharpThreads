const Product = require('../models/adminModel');

// Controller function to create a product
exports.createProduct = async (req, res) => {
  const { name, description, price, category, countInStock, imageUrl } = req.body;

  try {
    console.log('Received product data:', {
      name,
      description,
      price,
      category,
      countInStock,
      imageUrl: imageUrl ? `${imageUrl.substring(0, 50)}...` : 'undefined'
    });

    // Check for required fields
    if (!name || !description || !price || !category || !countInStock || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate image size (base64 length)
    const base64Length = (imageUrl.length * (3 / 4)) - (imageUrl.endsWith('==') ? 2 : imageUrl.endsWith('=') ? 1 : 0);
    if (base64Length > 1024 * 1024) { // 1MB limit
      return res.status(400).json({ message: 'Image size exceeds the 1MB limit.' });
    }

    // Validate category
    if (!['Men', 'Women'].includes(category)) {
      return res.status(400).json({ message: 'Invalid category. Must be either "Men" or "Women"' });
    }

    // Validate price and countInStock
    if (isNaN(price) || isNaN(countInStock)) {
      return res.status(400).json({ message: 'Price and countInStock must be valid numbers' });
    }

    // Create and validate the new product
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      countInStock,
      imageUrl
    });

    await newProduct.validate(); // Validate the product before saving

    // Save the product to the database
    const savedProduct = await newProduct.save();
    console.log('Product saved successfully:', savedProduct._id);

    // Respond with success message and product data
    res.status(201).json({ message: 'Product created successfully', product: savedProduct });
  } catch (error) {
    console.error('Error in createProduct:', error);

    // Handle specific error types
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', error: error.message });
    }

    if (error.name === 'MongoError' && error.code === 11000) {
      return res.status(400).json({ message: 'Duplicate key error', error: error.message });
    }

    // Handle generic server error
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

// Controller function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

// Controller function to get products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    // Validate category
    if (!['Men', 'Women'].includes(category)) {
      return res.status(400).json({ message: 'Invalid category. Must be either "Men" or "Women"' });
    }

    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};
