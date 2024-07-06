// src/components/ProductDetails.js
import React from "react";
import "../styles/ProductDetails.css";

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>{product.price}</p>
  </div>
);

export default ProductDetails;
