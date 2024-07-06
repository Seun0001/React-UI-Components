import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </div>
      )}
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default CartPage;
