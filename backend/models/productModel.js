const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    img: { type: String }, // Image URL
    sizes: { type: [String] }, // Array of sizes
    color: { type: String }, // Product color
    category: { type: String, required: true }, // E.g., 'T-Shirts', 'Hoodies'
    brand: { type: String }, // Brand of the product
    gender: { type: String, default: 'Women' } // 'Women' products
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
