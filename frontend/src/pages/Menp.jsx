import React from "react";
import './menp.css';  // Ensure this path is correct
import men1 from '../assets/men1.png';  // Import the image

const Menp = () => {
  return (
    <div className="product-page">
      <div className="product-image">
        {/* Use the imported image */}
        <img src={men1} alt="T-Shirt" />
      </div>
      <div className="product-details">
        <h4>MEN</h4>
        <h1>T-Shirt Name 10</h1>
        <p className="price">$33.00 - $36.00 & Free Shipping</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus
          interdum eros. In blandit velit a lacus laoreet dictum.
        </p>

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
          <div className="sizes">
            <button className="size">XS</button>
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size">L</button>
            <button className="size">XL</button>
          </div>
        </div>

        <div className="quantity">
          <button className="minus">-</button>
          <input type="text" id="quantity" defaultValue="1" />
          <button className="plus">+</button>
        </div>

        <button className="add-to-cart">Add to Cart</button>

        <div className="product-info">
          <div className="info-item">
            Description <span className="toggle">+</span>
          </div>
          <div className="info-item">
            Additional Information <span className="toggle">+</span>
          </div>
          <div className="info-item">
            Reviews (0) <span className="toggle">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menp;
