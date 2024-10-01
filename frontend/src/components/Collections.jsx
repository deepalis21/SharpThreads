import React from 'react';
import './Collections.css';

const Collections = () => {
  return (
    <section className="collections">
      <div className="collection-item men-collection">
        <div className="content">
          <h2>Men</h2>
          <p>The base collection - Ideal every day</p>
          <button className="shop-btn">Shop Now</button>
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
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue nunc nec, volutpat orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque.</p>
          <button className="shop-btn">Shop collection</button>
        </div>
      
      </div> 
    </section>
  );
};

export default Collections;
