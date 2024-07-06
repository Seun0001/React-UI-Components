import React from "react";
import "../styles/Checkout.css";

const Checkout = () => (
  <div className="checkout">
    <h2>Checkout</h2>
    <p>Please enter your credit card information to complete the purchase.</p>
    <form>
      <div>
        <label>Credit Card Number:</label>
        <input type="text" placeholder="1234 5678 9012 3456" />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input type="text" placeholder="MM/YY" />
      </div>
      <div>
        <label>CVV:</label>
        <input type="text" placeholder="123" />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          alert("This is a prototype. No actual payment will be processed.");
        }}
      >
        Complete Purchase
      </button>
    </form>
  </div>
);

export default Checkout;
