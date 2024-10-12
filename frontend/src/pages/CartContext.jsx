import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product, quantity) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product already exists, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with the quantity
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;