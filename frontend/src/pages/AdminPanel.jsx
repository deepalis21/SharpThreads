import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [description, setDescription] = useState('');

    const fetchProducts = async () => {
        try {
            const category = selectedCategory === 'all' ? '' : `/${selectedCategory}`;
            const response = await fetch(`http://localhost:4000/api/admin/products${category}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError(`Failed to fetch products: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);
    

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const { name, price, stock, category } = e.target.elements;

        if (!imageFile) {
            setError('Please select an image file.');
            return;
        }

        const reader = new FileReader();

        // Wait for the file to be read as a DataURL
        reader.onloadend = async () => {
            try {
                const payload = {
                    name: name.value,
                    description: description,
                    price: parseFloat(price.value),
                    countInStock: parseInt(stock.value, 10),
                    category: category.value,
                    img: reader.result.split(',')[1], // Only include base64 data after the comma
                };

                const response = await fetch('http://localhost:4000/api/admin/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }

                setSuccess('Product added successfully!');
                fetchProducts(); // Refresh the product list
                e.target.reset();
                setImageFile(null);
                setDescription('');
            } catch (error) {
                console.error('Error adding product:', error);
                setError(`Failed to add product: ${error.message}`);
            }
        };

        reader.readAsDataURL(imageFile);
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/admin/products/${productId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            setSuccess('Product deleted successfully');
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            setError(`Failed to delete product: ${error.message}`);
        }
    };

    return (
        <div className="admin-panel">
             <Navbar />
            
            <h1>Admin Panel</h1>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <div className="product-form">
                <h2>Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" step="0.01" required />
                    <label htmlFor="stock">Stock:</label>
                    <input type="number" id="stock" name="stock" required />
                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="file"
                        id="imageUrl"
                        name="imageUrl"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        required
                    />
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" required>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                    <button type="submit">Add Product</button>
                </form>
            </div>
            <div className="product-list">
                <h2>Product List</h2>
                <label htmlFor="filter-category">Filter by Category:</label>
                <select id="filter-category" onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <h3>{product.name}</h3>
                            <img
                                src={`data:image/png;base64,${product.img}`}
                                alt={product.name}
                                style={{ width: '100px', height: '100px' }}
                            />
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <p>Stock: {product.countInStock}</p>
                            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanel;
