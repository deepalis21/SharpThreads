import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopCollectionClick = () => {
    navigate('/women');  
  };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Discover Your Style with SharpThreads Today!</h1>
        <button className="shop-btn" onClick={handleShopCollectionClick}>Shop Collection</button>
      </div>
      <div className="hero-image">
        <img src="/images/homepage.png" alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
