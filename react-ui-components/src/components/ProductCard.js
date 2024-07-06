// src/components/ProductCard.js
import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>+</button>
  </div>
);

export default ProductCard;
