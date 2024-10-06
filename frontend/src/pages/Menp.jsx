import React, { useContext, useState } from "react";
import './menp.css';  // Ensure this path is correct
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

// Import images
import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import men3 from '../assets/men3.png';
import men4 from '../assets/men4.png';

const products = [
  {
    id: 1,
    name: "T-Shirt Name 1",
    price: 33,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "T-Shirts",
    color: "Red",
    brand: "Brand A",
    img: men1,
    description: "This men's classic t-shirt offers a perfect blend of style and comfort...",
    material: "100% Cotton",
    care: "Machine wash cold, tumble dry low",
  },
  {
    id: 2,
    name: "T-Shirt Name 2",
    price: 36,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "T-Shirts",
    color: "Blue",
    brand: "Brand B",
    img: men2,
    description: "This is a stylish t-shirt perfect for casual outings.",
    material: "Polyester blend",
    care: "Machine wash warm, tumble dry low",
  },
  {
    id: 3,
    name: "T-Shirt Name 3",
    price: 35,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Hoodies",
    color: "Green",
    brand: "Brand C",
    img: men3,
    description: "Comfortable and stylish, great for everyday wear.",
    material: "Cotton",
    care: "Machine wash cold, do not iron",
  },
  {
    id: 4,
    name: "T-Shirt Name 4",
    price: 34,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Hoodies",
    color: "Black",
    brand: "Brand A",
    img: men4,
    description: "A classic t-shirt with a modern fit.",
    material: "100% Cotton",
    care: "Machine wash cold, hang dry",
  },
];

const Menp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    const cartProduct = {
      ...product,
      size: selectedSize,
      quantity,
    };

    addToCart(cartProduct, quantity);
    navigate('/cart');
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-details">
        <h4>MEN</h4>
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)} & Free Shipping</p>
        <p className="description">{product.description}</p>

        <div className="color-options">
          <p>Select Color:</p>
          <div className="colors">
            <div className="color black"></div>
            <div className="color white"></div>
            <div className="color pink"></div>
          </div>
        </div>

        <div className="size-options">
          <p>Select Size:</p>
          <select name="size" onChange={(e) => handleSizeSelect(e.target.value)}>
            <option value="">Select Size</option>
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="quantity">
          <button onClick={decrementQuantity}>-</button>
          <input type="text" value={quantity || 1} readOnly />
          <button onClick={incrementQuantity}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>

        <div className="product-info">
          <div className="info-item">
            Description <span className="toggle">+</span>
          </div>
          <div className="info-item">
            Material: {product.material}
          </div>
          <div className="info-item">
            Care Instructions: {product.care}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menp;