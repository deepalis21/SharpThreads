const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['Men', 'Women'], required: true }, // Category must be 'Men' or 'Women'
  countInStock: { type: Number, required: true },
  imageUrl: { type: String, required: true }, // Base64-encoded image
}, { timestamps: true });

// Check if the Product model is already defined to prevent OverwriteModelError
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
