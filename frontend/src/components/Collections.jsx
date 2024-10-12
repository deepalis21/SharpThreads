import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collections.css';

const Collections = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/men');  // Navigates to the Men page
  };

  const handleShopCollectionClick = () => {
    navigate('/women');  // Navigates to the Women page
  };

  return (
    <section className="collections">
      <div className="collection-item men-collection">
        <div className="content">
          <h2>Men</h2>
          <p>The base collection - Ideal every day</p>
          <button className="shop-btn" onClick={handleShopNowClick}>Shop Now</button>
        </div>
        <div className="image-container men-image">
          <img src="/images/men3.jpg" alt="Man wearing base collection" />
        </div>
      </div>
      <div className="collection-item women-collection">
        <div className="image-container women-image">
          <img src="/images/women3.jpg" alt="Woman wearing winter collection" />
        </div>
        <div className="content">
          <h2>Women</h2>
          <p>Winter Collection</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue nunc nec, volutpat orci. </p>
          <button className="shop-btn" onClick={handleShopCollectionClick}>Shop collection</button>
        </div>
      </div> 
    </section>
  );
};

export default Collections;