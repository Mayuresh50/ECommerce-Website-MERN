import Button from './Button';

export default function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemove, total }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} aria-hidden="true" />
      <aside className="cart-sidebar" role="dialog" aria-label="Shopping cart">
        <div className="cart-header">
          <h2>Cart</h2>
          <button type="button" className="cart-close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.cartId} className="cart-item">
                <div className="cart-item-image">
                  {item.image ? (
                    <img src={item.image} alt="" />
                  ) : (
                    <div className="cart-item-placeholder" />
                  )}
                </div>
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  {(item.size || item.color) && (
                    <span className="cart-item-options">
                      {[item.size, item.color].filter(Boolean).join(' / ')}
                    </span>
                  )}
                  <span className="cart-item-price">${Number(item.price).toFixed(2)}</span>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartId, -1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartId, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => onRemove(item.cartId)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="btn-checkout" onClick={onClose}>
              Checkout
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
