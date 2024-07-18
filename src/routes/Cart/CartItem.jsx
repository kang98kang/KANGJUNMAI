import React from "react";
import QuantityControl from "../../Component/QuantityControl";
import "./Cart.css";

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">가격: ${item.price.toFixed(2)}</div>
        <QuantityControl
          initialQuantity={item.quantity}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      <button className="cart-item-remove" onClick={() => onRemove(item.id)}>
        삭제
      </button>
    </div>
  );
}

export default CartItem;
