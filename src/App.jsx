import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (currentPage === "landing") {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity — Discover Your Perfect Plant Companion</p>
          <button
            className="get-started-btn"
            onClick={() => setCurrentPage("products")}
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav className="navbar">
        <h2>?? Paradise Nursery</h2>
        <div>
          <button onClick={() => setCurrentPage("products")}>Products</button>
          <button onClick={() => setCurrentPage("cart")}>
            ?? Cart
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </button>
        </div>
      </nav>
      {currentPage === "products" && (
        <ProductList onGoToCart={() => setCurrentPage("cart")} />
      )}
      {currentPage === "cart" && (
        <CartItem onContinueShopping={() => setCurrentPage("products")} />
      )}
    </div>
  );
}

export default App;
