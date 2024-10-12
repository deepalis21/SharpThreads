import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './men.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Importing the images dynamically
import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import men3 from '../assets/men3.png';
import men4 from '../assets/men4.png';

export const Men = () => {
  const initialProducts = [
    {
      id: 1,
      name: "T-Shirt Name 1",
      price: 33,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "T-Shirts",
      color: "Red",
      brand: "Brand A",
      img: men1
    },
    {
      id: 2,
      name: "T-Shirt Name 2",
      price: 36,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "T-Shirts",
      color: "Blue",
      brand: "Brand B",
      img: men2
    },
    {
      id: 3,
      name: "T-Shirt Name 3",
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Hoodies",
      color: "Green",
      brand: "Brand C",
      img: men3
    },
    {
      id: 4,
      name: "T-Shirt Name 4",
      price: 34,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Hoodies",
      color: "Black",
      brand: "Brand A",
      img: men4
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "All",
    size: "All",
    color: "All",
    brand: "All",
    sort: "default"
  });

  const sortProducts = (productsToSort) => {
    let sortedProducts = [...productsToSort];
    
    if (filters.sort === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  const applyFilters = () => {
    let filteredProducts = [...initialProducts];

    if (filters.category !== "All") {
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    if (filters.size !== "All") {
      filteredProducts = filteredProducts.filter(product => product.sizes.includes(filters.size));
    }

    if (filters.color !== "All") {
      filteredProducts = filteredProducts.filter(product => product.color === filters.color);
    }

    if (filters.brand !== "All") {
      filteredProducts = filteredProducts.filter(product => product.brand === filters.brand);
    }

    return sortProducts(filteredProducts);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filteredProducts = applyFilters();

  return (
    <div>
            <Navbar />
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
           <Link to={`/men/${product.id}`}>
            <img src={product.img} alt={product.name} />
            <p className="category">MEN</p>
            <h2>{product.name}</h2>
            <p className="price">${product.price}.00</p>
            <div className="sizes">
              {product.sizes.map(size => (
                <span key={size}>{size}</span>
              ))}
            </div>
             </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};



export default Men;