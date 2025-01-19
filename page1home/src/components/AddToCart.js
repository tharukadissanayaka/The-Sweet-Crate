import React, { useState } from "react";
import "../cssfiles/AddToCart.css";

const AddToCart = ({ cartItems, setCartItems }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setCartItems([]); 
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            <button className="confirm-button" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {orderConfirmed && <p className="order-confirmed">Confirmed your Order!</p>}
    </div>
  );
};

export default AddToCart;



