const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

// Add product to cart
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Check if product already exists in the cart
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex >= 0) {
        // Update quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // Add new product
        cart.products.push({ productId, quantity });
      }
    } else {
      // If no cart exists, create a new one
      cart = new Cart({
        userId,
        products: [{ productId, quantity }],
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error });
  }
};

// Get cart by user ID
const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('products.productId');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
};

// Remove product from cart
const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    // Filter out the product
    cart.products = cart.products.filter(p => p.productId.toString() !== productId);
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart', error });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
