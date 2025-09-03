import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p style={{ color: "var(--color-primary)", fontWeight: "600" }}>${product.price}</p>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
        <input
          type="number"
          value={qty}
          min="1"
          style={{ width: "60px", textAlign: "center", borderRadius: "var(--radius)", border: "1px solid #ccc" }}
          onChange={(e) => setQty(Number(e.target.value))}
        />
        <button className="btn btn-primary" onClick={() => addToCart(product, qty)}>
          Agregar
        </button>

      </div>
    </div>
  );
}
