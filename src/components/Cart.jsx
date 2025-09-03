import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p>No hay nada en el carrito. ¡Sigue comprando! 🛒</p>;
  }

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between">
            {item.name} x {item.quantity} - ${item.price * item.quantity}
            <button onClick={() => removeFromCart(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart} className="btn btn-outline mt-2">
        Vaciar carrito
      </button>
    </div>
  );
}
