import React, { useState } from "react";
import './cart.css'; // Import CSS
import men1 from '../assets/men1.png'; 
import men2 from '../assets/men2.png';
const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Black Hoodie", price: 70, quantity: 1, image: men1 },
    { id: 2, name: "Sleeveless Shirt", price: 135, quantity: 1, image: men2 }
  ]);
  const [shipping, setShipping] = useState(0);

  const calculateTotal = () => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return subtotal + shipping;
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Shopping cart</h2>
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
            {items.map((item) => (
              <tr key={item.id}>
                <td><button className="remove-btn">×</button></td>
                <td><img src={item.image} alt={item.name} className="product-image" />{item.name}</td>
                <td>€{item.price.toFixed(2)}</td>
                <td><input type="number" value={item.quantity} readOnly /></td>
                <td>€{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="coupon">
          <input type="text" placeholder="Coupon code" />
          <button className="apply-coupon">Apply coupon</button>
        </div>
      </div>

      <div className="cart-totals">
        <h2>Cart totals</h2>
        <p>Subtotal: €{items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
        <div className="shipping-options">
          <p>Shipping:</p>
          <label>
            <input type="radio" name="shipping" value="0" checked={shipping === 0} onChange={() => setShipping(0)} />
            Free shipping
          </label>
          <label>
            <input type="radio" name="shipping" value="10" onChange={() => setShipping(10)} />
            Flat rate: €10.00
          </label>
          <label>
            <input type="radio" name="shipping" value="15" onChange={() => setShipping(15)} />
            Pickup: €15.00
          </label>
        </div>
        <p>Total: €{calculateTotal().toFixed(2)}</p>
        <button className="checkout-btn">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;