import React from 'react';
import { useCart } from '../../contexts/CartContext';

function CartItem({ item }) {
  const { updateCartItemQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>€{item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="cart-item-total">€{item.price * item.quantity}</p>
      <button className="remove-item" onClick={() => removeFromCart(item.id)}>삭제</button>
    </div>
  );
}

export default CartItem;