import React from 'react';
import './BestSellers.css';

const BestSellers = () => {
  const products = [
    { id: 1, name: 'Men\'s Casual T-shirt', category: 'Men', img: '/men1.png' },
    { id: 2, name: 'Men\'s Graphic T-shirt', category: 'Men', img: '/men2.png' },
    { id: 3, name: 'Women\'s Floral T-shirt', category: 'Women', img: '/women1.png' },
    { id: 4, name: 'Women\'s Basic T-shirt', category: 'Women', img: '/women2.jpg' },
  ];

  return (
    <section className="best-sellers">
      <h2>BEST SELLERS</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.category}</h3>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;