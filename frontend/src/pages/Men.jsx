import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './men.css'; 

// Importing the images dynamically
import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import men3 from '../assets/men3.png';
import men4 from '../assets/men4.png';

export const Men = () => {
  const initialProducts = [
    {
      id: 1,
      name: "T-Shirt Name 10",
      price: 33,
      sizes: ["XS", "S", "M", "L", "XL"],
      img: men1 // Use imported image
    },
    {
      id: 2,
      name: "T-Shirt Name 2",
      price: 36,
      sizes: ["XS", "S", "M", "L", "XL"],
      img: men2 // Use imported image
    },
    {
      id: 3,
      name: "T-Shirt Name 4",
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL"],
      img: men3 // Use imported image
    },
    {
      id: 4,
      name: "T-Shirt Name 6",
      price: 34,
      sizes: ["XS", "S", "M", "L", "XL"],
      img: men4 // Use imported image
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const sortProducts = (event) => {
    const sortOption = event.target.value;

    let sortedProducts = [...products];
    if (sortOption === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Men</span>
      </div>

      <section className="page-header">
        <h1>Men</h1>
        <p>Showing all {products.length} results</p>
        <select id="sort" onChange={sortProducts}>
          <option value="default">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </section>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <p className="category">MEN</p>
            <h2>{product.name}</h2>
            <p className="price">${product.price}.00</p>
            <div className="sizes">
              {product.sizes.map(size => (
                <span key={size}>{size}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
