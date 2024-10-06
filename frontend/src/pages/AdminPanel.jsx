import React, { useState, useEffect } from 'react';
import './AdminPanel.css';  // Ensure the correct CSS path

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  // Simulate fetching products from a backend or database
  useEffect(() => {
    // Here, you can make a request to the backend to get products
    setProducts([
      { id: 1, name: 'Product 1', price: 100, stock: 10 },
      { id: 2, name: 'Product 2', price: 150, stock: 5 },
    ]);
  }, []);

  const handleAddProduct = () => {
    // Implement add product functionality here
    alert('Add product functionality goes here.');
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <button onClick={handleAddProduct}>Add Product</button>

      <div className="products">
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
