import React from "react";
import ProductList from "../components/ProductList";
import "../styles/HomePage.css";

const HomePage = ({ products, addToCart }) => (
  <div className="home-page">
    <h1>Welcome to My <span>E-Commerce Store</span></h1>
    <div className="product-container">
      <ProductList products={products} addToCart={addToCart} />
    </div>
  </div>
);

export default HomePage;
