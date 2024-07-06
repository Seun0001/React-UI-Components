// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import HomePage from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./store/reducers";

// const App = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 100,
//       description: "Description of Product 1",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 200,
//       description: "Description of Product 2",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 50,
//       description: "Description of Product 3",
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       price: 75,
//       description: "Description of Product 4",
//     },
//     {
//       id: 5,
//       name: "Product 5",
//       price: 150,
//       description: "Description of Product 5",
//     },
//     {
//       id: 6,
//       name: "Product 6",
//       price: 90,
//       description: "Description of Product 6",
//     },
//   ];

//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const calculateTax = (total) => {
//     if (total >= 400) {
//       return 4;
//     } else if (total >= 100) {
//       return 2;
//     }
//     return 0;
//   };

//   const total = calculateTotal();
//   const tax = calculateTax(total);

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={<HomePage products={products} addToCart={handleAddToCart} />}
//         />
//         <Route
//           path="/product/:id"
//           element={<ProductPage products={products} />}
//         />
//         <Route
//           path="/cart"
//           element={<CartPage cartItems={cartItems} total={total} tax={tax} />}
//         />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/reducers";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "Description of Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "Description of Product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 50,
      description: "Description of Product 3",
    },
    {
      id: 4,
      name: "Product 4",
      price: 75,
      description: "Description of Product 4",
    },
    {
      id: 5,
      name: "Product 5",
      price: 150,
      description: "Description of Product 5",
    },
    {
      id: 6,
      name: "Product 6",
      price: 90,
      description: "Description of Product 6",
    },
  ];

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = (total) => {
    if (total >= 400) {
      return 4;
    } else if (total >= 100) {
      return 2;
    }
    return 0;
  };

  const total = calculateTotal();
  const tax = calculateTax(total);

  return (
    <CartProvider>
      <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage products={products} addToCart={handleAddToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} total={total} tax={tax} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </CartProvider>
    
  );
};

export default App;
