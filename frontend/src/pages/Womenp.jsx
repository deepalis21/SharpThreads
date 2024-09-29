import React, { useState } from "react"; // Import useState
import './Womenp.css'; // Ensure this path is correct

const Womenp = () => {
 
  const [quantity, setQuantity] = useState(1);

  
  const [showDescription, setShowDescription] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

 
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="product-page">
      <div className="product-image">
        
        <img src="/images/img1.jpg" alt="T-Shirt" />
      </div>
      <div className="product-details">
        <h4>WOMEN</h4>
        <h1>T-Shirt Name 1</h1>
        <p className="price">$33.00 - $36.00 & Free Shipping</p>
        <p className="description">
          This women's classic t-shirt offers a perfect blend of style and comfort. Made from soft, breathable fabric, it’s ideal for casual outings or layering under your favorite jacket. Featuring a flattering fit and available in a range of colors, this tee is a wardrobe essential for any season. Dress it up or down for a versatile look that works anytime!
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
          <button className="minus" onClick={decrementQuantity}>-</button>
          <input type="text" id="quantity" value={quantity} readOnly />
          <button className="plus" onClick={incrementQuantity}>+</button>
        </div>

        <button className="add-to-cart">Add to Cart</button>

        <div className="product-info">
          <div className="info-item" onClick={() => setShowDescription(!showDescription)}>
            Description <span className="toggle">{showDescription ? '-' : '+'}</span>
          </div>
          {showDescription && (
            <div className="info-content">
              <p>This women's classic t-shirt offers a perfect blend of style and comfort...</p>
            </div>
          )}
          
          <div className="info-item" onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}>
            Additional Information <span className="toggle">{showAdditionalInfo ? '-' : '+'}</span>
          </div>
          {showAdditionalInfo && (
            <div className="info-content">
              <p>Material: 100% Cotton</p>
              <p>Care: Machine wash cold, tumble dry low</p>
            </div>
          )}

          <div className="info-item" onClick={() => setShowReviews(!showReviews)}>
            Reviews (0) <span className="toggle">{showReviews ? '-' : '+'}</span>
          </div>
          {showReviews && (
            <div className="info-content">
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Womenp;
