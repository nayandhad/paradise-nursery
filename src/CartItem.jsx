import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateItemTotal = (item) => {
    const price = parseFloat(item.cost.replace("$", ""));
    return (price * item.quantity).toFixed(2);
  };

  const calculateCartTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.cost.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert("Coming Soon! Thank you for shopping at Paradise Nursery. ??");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        <div className="empty-cart">
          <p>?? Your cart is empty.</p>
          <button
            className="continue-btn"
            style={{ marginTop: "20px" }}
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>{item.cost} each</p>
            <p>Subtotal: <strong>${calculateItemTotal(item)}</strong></p>
          </div>
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item)}>+</button>
          </div>
          <button className="delete-btn" onClick={() => handleRemove(item)}>
            ?? Delete
          </button>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {cartItems.reduce((sum, i) => sum + i.quantity, 0)}</p>
        <p className="cart-total">Total: ${calculateCartTotal()}</p>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="continue-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartItem;
