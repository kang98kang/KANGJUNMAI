import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './ProductDetail.css';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    
    
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const searchParams = new URLSearchParams(location.search);
        const productId = searchParams.get('id');

        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundProduct = data.find(p => p.id === parseInt(productId));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('제품을 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('상품 정보를 가져오는데 실패했습니다:', error);
        setError('상품 정보를 불러올 수 없습니다. 나중에 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [location]);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="no-product">제품을 찾을 수 없습니다.</div>;

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate('/Cart');
  };
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">{product.price}원</p>
        <p className="product-description">{product.description}</p>
        {product.details && (
          <ul className="product-details">
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        <div className="quantity-selector">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <Link to="/Cart">장바구니에 추가</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;