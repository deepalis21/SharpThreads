import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopCollectionClick = () => {
<<<<<<< HEAD
    navigate('/women');  // Navigates to the Women page
=======
    navigate('/women');  
>>>>>>> 99e76205509e4f197419b04fb74b5fcf1858bde9
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
