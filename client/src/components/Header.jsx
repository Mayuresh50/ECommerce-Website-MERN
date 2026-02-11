import { useState } from 'react';
import CartSidebar from './CartSidebar';

export default function Header({ cart, onUpdateQuantity, onRemove, total }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Store</h1>
        <button
          type="button"
          className="cart-trigger"
          onClick={() => setCartOpen(true)}
          aria-label="Open cart"
        >
          Cart ({cart.length})
        </button>
      </div>
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={onUpdateQuantity}
        onRemove={onRemove}
        total={total}
      />
    </header>
  );
}
