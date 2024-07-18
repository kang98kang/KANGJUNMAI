// src/components/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get("id");

        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        const foundProduct = products.find((p) => p.id.toString() === id);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("상품을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("상품 정보를 가져오는데 실패했습니다:", error);
        setError("상품 정보를 불러올 수 없습니다. 나중에 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [location]);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">상품을 찾을 수 없습니다.</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>가격: {product.price}원</p>
      <button onClick={() => addToCart(product)}>
        <Link to="/Cart">장바구니에 추가</Link>
      </button>
    </div>
  );
}

export default ProductDetail;
