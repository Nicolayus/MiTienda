import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutModal({ isOpen, onClose }) {
  const { cart, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    pais: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "",
    tarjetaNumero: "",
    tarjetaFecha: "",
    tarjetaCVV: "",
  });

  if (!isOpen) return null;

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleConfirm = () => {
    alert("✅ Pedido confirmado. ¡Gracias por tu compra!");
    clearCart();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Finalizar compra</h2>
          <button className="modal-close" onClick={onClose}>✖</button>
        </div>

        {/* Indicador de pasos */}
        <div className="checkout-steps">
          <div className={`step ${step === 1 ? "active" : ""}`}>Datos</div>
          <div className={`step ${step === 2 ? "active" : ""}`}>Pago</div>
          <div className={`step ${step === 3 ? "active" : ""}`}>Revisión</div>
        </div>

        <div className="modal-body">
          {/* PASO 1: Datos */}
          {step === 1 && (
            <>
              <form className="checkout-form">
                <label>Nombre
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </label>
                <label>Apellido
                  <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
                </label>
                <label>Dirección
                  <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
                </label>
                <label>País
                  <input type="text" name="pais" value={formData.pais} onChange={handleChange} required />
                </label>
                <label>Ciudad
                  <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required />
                </label>
                <label>Código Postal
                  <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required />
                </label>
              </form>
              <div className="checkout-modal-actions">
                <button className="btn-next" onClick={nextStep}>Siguiente ➡</button>
              </div>
            </>
          )}

          {/* PASO 2: Métodos de pago */}
          {step === 2 && (
            <>
              <form className="checkout-form">
                <label>
                  <input type="radio" name="metodoPago" value="Tarjeta" onChange={handleChange} /> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: "6px" }}>
                    <path d="M20 4H4c-1.11 0-2 .9-2 
                    2v12c0 1.1.89 2 2 
                    2h16c1.11 0 2-.9 
                    2-2V6c0-1.1-.89-2-2-2zm0 
                    14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                  Tarjeta de Crédito
                </label>
                {formData.metodoPago === "Tarjeta" && (
                  <div className="payment-card">
                    <input type="text" name="tarjetaNumero" placeholder="Número de tarjeta" value={formData.tarjetaNumero} onChange={handleChange} required />
                    <input type="text" name="tarjetaFecha" placeholder="MM/AA" value={formData.tarjetaFecha} onChange={handleChange} required />
                    <input type="text" name="tarjetaCVV" placeholder="CVV" value={formData.tarjetaCVV} onChange={handleChange} required />
                  </div>
                )}

                <label>
                  <input type="radio" name="metodoPago" value="PayPal" onChange={handleChange} /> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: "6px" }}>
                    <path d="M12 2C6.48 2 2 6.48 2 
                    12s4.48 10 10 10 10-4.48 
                    10-10S17.52 2 12 2zm0 18c-4.41 
                    0-8-3.59-8-8s3.59-8 
                    8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  PayPal
                </label>
                {formData.metodoPago === "PayPal" && (
                  <p className="payment-info">Serás redirigido a PayPal al confirmar tu compra.</p>
                )}

                <label>
                  <input type="radio" name="metodoPago" value="Transferencia" onChange={handleChange} /> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: "6px" }}>
                    <path d="M3 6l9-4 9 4v6c0 
                    5-3.58 9.74-9 11-5.42-1.26-9-6-9-11V6z"/>
                  </svg>
                  Transferencia Bancaria
                </label>
                {formData.metodoPago === "Transferencia" && (
                  <div className="payment-info">
                    <p><strong>Banco:</strong> Reflexoterapi</p>
                    <p><strong>Número de cuenta:</strong> 1525534</p>
                    <p><strong>Código SWIFT:</strong> ABCDPEPL</p>
                  </div>
                )}
              </form>
              <div className="checkout-modal-actions">
                <button className="btn-prev" onClick={prevStep}>⬅ Atrás</button>
                <button className="btn-next" onClick={nextStep} disabled={!formData.metodoPago}>Siguiente ➡</button>
              </div>
            </>
          )}

          {/* PASO 3: Revisión */}
          {step === 3 && (
            <>
              <div className="modal-review">
                <h3>Datos del Cliente</h3>
                <p>{formData.nombre} {formData.apellido}</p>
                <p>{formData.direccion}, {formData.ciudad}, {formData.pais}</p>
                <p>Código Postal: {formData.codigoPostal}</p>

                <h3>Método de Pago</h3>
                <p>{formData.metodoPago}</p>

                <h3>Carrito</h3>
                <ul>
                  {cart.map((p) => (
                    <li key={p.id}>
                      {p.name} x {p.quantity} = S/ {(p.price * p.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
                <h3>Total: S/ {total.toFixed(2)}</h3>
              </div>
              <div className="checkout-modal-actions">
                <button className="btn-prev" onClick={prevStep}>⬅ Atrás</button>
                <button className="btn-next" onClick={handleConfirm}>Confirmar ✅</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
