import React from "react";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>장바구니</h1>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          <div className="cart-total">총 금액: {total.toFixed(2)}원</div>
        </>
      )}
    </div>
  );
}

export default Cart;
