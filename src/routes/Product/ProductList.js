import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('상품 정보를 가져오는데 실패했습니다:', error);
        setError('상품 정보를 불러올 수 없습니다. 나중에 다시 시도해주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product">
      <div className="product-list-container">
        <h1 className="product-list-title">사케 목록</h1>
        {products.length === 0 ? (
          <p className="no-products">현재 표시할 상품이 없습니다.</p>
        ) : (
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <Link to={`/ProductDetail?id=${product.id}`} className="product-link">
                  <div style={{ backgroundImage: `url(${product.image})` }} className="product-image" />
                  <h1 className="product-name">{product.name}</h1>
                  <p className="product-price">{product.price}원</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductList;
