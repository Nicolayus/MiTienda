import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  // Calculamos la cantidad total de items en el carrito
  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Mi Tienda</Link>
      <ul className="nav-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/products">Productos</NavLink></li>
        <li>
          <NavLink to="/checkout" className="cart-link">
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="checkout-cart-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 
                2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 
                2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.82 
                14h8.97c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 
                0 00-.88-1.48H6.21L5.27 2H2v2h2l3.6 
                7.59-1.35 2.44C5.52 14.37 6.57 16 
                8.11 16H19v-2H7.82z"/>
              </svg>
                Carrito
            ({totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )})
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
