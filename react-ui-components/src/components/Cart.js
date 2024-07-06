import React, { useContext } from "react";
import "../styles/Cart.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Cart ({cart.length})</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>In Stock</p>
              <p>₦{item.price.toLocaleString()}</p>
              <div className="cart-item-quantity">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>
        Total: ₦
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toLocaleString()}
      </h3>
    </div>
  );
};

export default Cart;
