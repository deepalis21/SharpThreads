import React, { useContext } from 'react';
import './cart.css'; // Import your styles
import { CartContext } from './CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Use CartContext

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return subtotal;
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button></td>
                  <td><img src={item.img} alt={item.name} className="product-image" />{item.name}</td>
                  <td>€{item.price.toFixed(2)}</td>
                  <td><input type="number" value={item.quantity} readOnly /></td>
                  <td>€{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-totals">
          <h2>Cart totals</h2>
          <p>Subtotal: €{calculateTotal().toFixed(2)}</p>
          <p>Total: €{calculateTotal().toFixed(2)}</p>
          <button className="checkout-btn">Proceed to checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
