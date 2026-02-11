import { useState, useCallback, useEffect } from 'react';
import { getProducts } from './api/client';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import './App.css';

function makeCartId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(Array.isArray(data?.data) ? data.data : []))
      .catch((err) => setError(err?.message || 'Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find(
        (c) =>
          c._id === item._id &&
          c.size === item.size &&
          c.color === item.color
      );
      if (existing) {
        return prev.map((c) =>
          c.cartId === existing.cartId
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
      }
      return [...prev, { ...item, cartId: makeCartId() }];
    });
  }, []);

  const updateQuantity = useCallback((cartId, delta) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.cartId === cartId
            ? { ...c, quantity: Math.max(0, c.quantity + delta) }
            : c
        )
        .filter((c) => c.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((cartId) => {
    setCart((prev) => prev.filter((c) => c.cartId !== cartId));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app">
      <Header
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={total}
      />
      <main className="main">
        {loading && <p className="status-message">Loading products…</p>}
        {error && <p className="status-message error">{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className="status-message">No products available.</p>
        )}
        {!loading && !error && products.length > 0 && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
