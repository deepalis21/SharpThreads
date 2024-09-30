import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Discover Your Style with SharpThreads Today!</h1>
        <button className="shop-btn">Shop Collection</button>
      </div>
      <div className="hero-image">
        <img src="/homepage.png" alt="hero" />
      </div>
    </section>
  );
};

export default HeroSection;
