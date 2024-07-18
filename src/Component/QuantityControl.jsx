import React, { useState } from "react";

function QuantityControl({ initialQuantity = 1, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange && onQuantityChange(newQuantity);
  };

  const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="cart-item-quantity">
      <button className="quantity-btn" onClick={decrement}>
        -
      </button>
      <input type="text" value={quantity} className="quantity-input" readOnly />
      <button className="quantity-btn" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default QuantityControl;
