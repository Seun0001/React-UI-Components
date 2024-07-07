import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "../styles/ProductList.css";
import TuxedoMenSuitImage from "../styles/images/TuxedoMenSuit.jpeg";
import WomensSuitImage from "../styles/images/WomenSuit.jpeg";
import WristwatchImage from "../styles/images/MenWristWatch.jpeg";
import LaptopImage from "../styles/images/ASUS-ROG-Zephyrus-G14.jpeg";
import BriefcaseImage from "../styles/images/Jack&Chris Mens-Leather-Briefcase.jpeg";
import BusinessShoesImage from "../styles/images/Men's-Oxfords-Derby-Shoes.jpeg";
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon from react-icons/fa

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Men's Business Suit",
      description: "A stylish business suit for men.",
      price: 299,
      imageUrl: TuxedoMenSuitImage,
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Women's Business Suit",
      description: "A professional business suit for women.",
      price: 259,
      imageUrl: WomensSuitImage,
      stock: "In Stock",
    },
    {
      id: 3,
      name: "Luxury Wristwatch",
      description: "A luxury wristwatch to complement your business attire.",
      price: 199,
      imageUrl: WristwatchImage,
      stock: "In Stock",
    },
    {
      id: 4,
      name: "High-end Laptop",
      description: "A powerful laptop for all your business needs.",
      price: 1499,
      imageUrl: LaptopImage,
      stock: "In Stock",
    },
    {
      id: 5,
      name: "Leather Briefcase",
      description: "A premium leather briefcase for your documents.",
      price: 149,
      imageUrl: BriefcaseImage,
      stock: "In Stock",
    },
    {
      id: 6,
      name: "Business Shoes",
      description: "Elegant shoes perfect for business meetings.",
      price: 99,
      imageUrl: BusinessShoesImage,
      stock: "In Stock",
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>
          <Link to={`/cart/${product.id}`} className="add-to-cart-link">
            <span className="ClickBait">
              <FaShoppingCart className="cart-icon" /> Add To Cart
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
