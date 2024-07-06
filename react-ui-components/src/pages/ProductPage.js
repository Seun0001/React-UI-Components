import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button className="add-to-cart-button" onClick={() => addToCart(product)}>
      +
    </button>
  </div>
);

export default ProductCard;
