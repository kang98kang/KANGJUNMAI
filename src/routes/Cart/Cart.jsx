import React from 'react';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <h1>장바구니</h1>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          <div className="cart-headers">
            <span>상품</span>
            <span>수량</span>
            <span>소계</span>
          </div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-total">
            <span>배송시 요청사항 </span>
            <textarea placeholder="내용을 입력해주세요."></textarea>
          </div>
          <div className="cart-total">
            <span>총계: {getTotalPrice()}원</span>
            <p>세금 및 국제 배송대행비 포함</p>
          </div>
          <button className="checkout-button">결제하기</button>
        </>
      )}
    </div>
  );
}

export default Cart;