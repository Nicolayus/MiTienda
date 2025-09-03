import { useCart } from "../context/CartContext";
import React, { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";

export default function Checkout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className="checkout-container">
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="checkout-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="checkout-cart-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 
          2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 
          2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.82 
          14h8.97c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 
          0 00-.88-1.48H6.21L5.27 2H2v2h2l3.6 
          7.59-1.35 2.44C5.52 14.37 6.57 16 
          8.11 16H19v-2H7.82z"/>
        </svg> 
        Tu Carrito
      </h2>

      {cart.length === 0 ? (
        <p className="checkout-empty">
          No hay productos en el carrito.{" "}
          <a href="/products" className="checkout-link">
            Sigue comprando
          </a>
        </p>
      ) : (
        <div className="checkout-items-container">
          {/* Lista de productos */}
          <div className="checkout-items">
            {cart.map((p) => (
              <div key={p.id} className="checkout-item">
                <div className="checkout-item-info-container">
                  <img src={p.image} alt={p.name} className="checkout-item-img" />

                  <div className="checkout-item-info">
                    <h3 className="checkout-item-name">{p.name}</h3>
                    <p className="checkout-item-detail">
                      Precio: S/ {p.price.toFixed(2)}
                    </p>

                    {/* 🔽 Modificador de cantidad */}
                    <div className="checkout-item-detail">
                      <label>
                        Cantidad:
                        <input
                          type="number"
                          min="1"
                          value={p.quantity}
                          onChange={(e) =>
                            updateQuantity(p.id, parseInt(e.target.value) || 1)
                          }
                          className="checkout-qty-input"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="checkout-item-actions">
                  <p className="checkout-item-subtotal">
                    Subtotal: S/ {(p.price * p.quantity).toFixed(2)}
                  </p>
                  <button
                    className="checkout-remove-btn"
                    onClick={() => removeFromCart(p.id)}
                    aria-label="Eliminar producto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="checkout-trash-icon"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 
                           2-.9 2-2V7H6zm13-15h-3.5l-1-1h-5l-1 
                           1H5v2h14V4z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="checkout-summary">
            <h3 className="checkout-total">Total: S/ {total.toFixed(2)}</h3>
            <button
              className="checkout-pay-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Proceder al pago
            </button>
          </div>

          {/* 🔽 Modal de pasos */}
          <CheckoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
