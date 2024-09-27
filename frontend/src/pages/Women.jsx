import React, { useState } from "react";
import styles from "./women.css"; // Assuming your styles are imported correctly

export const Women = () => {
  // Initial product data
  const [products, setProducts] = useState([
    {
      id: 1,
      imgSrc: "tshirt1.jpg",
      category: "WOMEN",
      name: "T-Shirt Name 1",
      price: 18.0,
      discountPrice: 20.0,
      sizes: ["XS", "S", "M", "L", "XL"],
      discount: "-14%",
    },
    {
      id: 2,
      imgSrc: "tshirt3.jpg",
      category: "WOMEN",
      name: "T-Shirt Name 3",
      price: 32.0,
      discountPrice: 34.0,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 3,
      imgSrc: "tshirt5.jpg",
      category: "WOMEN",
      name: "T-Shirt Name 5",
      price: 40.0,
      discountPrice: 42.0,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 4,
      imgSrc: "tshirt9.jpg",
      category: "WOMEN",
      name: "T-Shirt Name 9",
      price: 23.0,
      discountPrice: 28.0,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
  ]);

  // Sorting logic
  const sortProducts = (event) => {
    const selectedValue = event.target.value;
    let sortedProducts = [...products];
    if (selectedValue === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedValue === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts); // Update the product list based on sorting
  };

  return (
    <div>
      <div className={styles["breadcrumb"]}>
        <a href="#">Home</a> / <span>Women</span>
      </div>

      <section className={styles["page-header"]}>
        <h1>Women</h1>
        <p>Showing all {products.length} results</p>
        <select id="sort" onChange={sortProducts}>
          <option value="default">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </section>

      <div className={styles["product-grid"]}>
        {products.map((product) => (
          <div key={product.id} className={styles["product-card"]}>
            <img src={product.imgSrc} alt={product.name} />
            {product.discount && (
              <span className={styles["sale-badge"]}>{product.discount}</span>
            )}
            <p className={styles["category"]}>{product.category}</p>
            <h2>{product.name}</h2>
            <p className={styles["price"]}>
              ${product.price.toFixed(2)} - ${product.discountPrice.toFixed(2)}
            </p>
            <div className={styles["sizes"]}>
              {product.sizes.map((size) => (
                <span key={size}>{size}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};