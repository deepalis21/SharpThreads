import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Womenp.css';
import { CartContext } from './CartContext'; // Import CartContext

const Womenp = () => {
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL

  // Sample initialProducts array
  const initialProducts = [
    {
      id: 1,
      name: "T-Shirt Name 1",
      price: 33.00,
      img: '/images/img1.jpg',
      description: "This women's classic t-shirt offers a perfect blend of style and comfort...",
      material: "100% Cotton",
      care: "Machine wash cold, tumble dry low",
    },
    {
      id: 2,
      name: "T-Shirt Name 2",
      price: 36.00,
      img: '/images/img2.jpg',
      description: "This is a stylish t-shirt perfect for casual outings.",
      material: "Polyester blend",
      care: "Machine wash warm, tumble dry low",
    },
    {
      id: 3,
      name: "T-Shirt Name 3",
      price: 35.00,
      img: '/images/img3.jpg',
      description: "Comfortable and stylish, great for everyday wear.",
      material: "Cotton",
      care: "Machine wash cold, do not iron",
    },
    {
      id: 4,
      name: "T-Shirt Name 4",
      price: 34.00,
      img: '/images/img4.jpg',
      description: "A classic t-shirt with a modern fit.",
      material: "100% Cotton",
      care: "Machine wash cold, hang dry",
    },
  ];

  // Find the product based on the ID from the URL
  const product = initialProducts.find(item => item.id === parseInt(id));

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product) {
      // Add product to the cart
      addToCart(product, quantity);
      // Redirect to cart page
      navigate('/cart');
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-details">
        <h4>WOMEN</h4>
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
          <select name="size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="quantity">
            <button onClick={decrementQuantity}>-</button>
            <input type="number" value={quantity} readOnly />
             <button onClick={incrementQuantity}>+</button>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Womenp;
