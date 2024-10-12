import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './women.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Women = () => {
  const initialProducts = [
    {
      id: 1,
      name: "T-Shirt Name 1",
      price: 33,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "T-Shirts",
      color: "Red",
      brand: "Brand A",
      img: '/images/img1.jpg' 
    },
    {
      id: 2,
      name: "T-Shirt Name 2",
      price: 36,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "T-Shirts",
      color: "Blue",
      brand: "Brand B",
      img: '/images/img2.jpg'
    },
    {
      id: 3,
      name: "T-Shirt Name 3",
      price: 35,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Hoodies",
      color: "Green",
      brand: "Brand C",
      img: '/images/img3.jpg'
    },
    {
      id: 4,
      name: "T-Shirt Name 4",
      price: 34,
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Hoodies",
      color: "Black",
      brand: "Brand A",
      img: '/images/img4.jpg'
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
      
        <Link to="/">Home</Link> / <span>Women</span>
      </div>

      <section className="page-header">
        <h1>Women</h1>
        <p>Showing all {filteredProducts.length} results</p>
        <select name="sort" onChange={handleFilterChange}>
          <option value="default">Sort By</option>
          <optgroup label="Price">
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </optgroup>
          <optgroup label="Category">
            <option value="T-Shirts">T-Shirts</option>
            <option value="Hoodies">Hoodies</option>
          </optgroup>
          <optgroup label="Size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </optgroup>
          <optgroup label="Color">
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
          </optgroup>
          <optgroup label="Brand">
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </optgroup>
        </select>
      </section>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            {/* Updated Link to use dynamic product ID */}
            <Link to={`/women/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <p className="category">WOMEN</p>
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

export default Women;
