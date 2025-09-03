import React, { useState } from "react";
import Modal from "./Modal";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Mensaje simulado:\nNombre: ${form.name}\nCorreo: ${form.email}\nMensaje: ${form.message}`
    );
    setForm({ name: "", email: "", message: "" });
    setOpen(false);
  };

  return (
    <>
      <footer>
  <div className="footer-container">
    {/* Columna 1 */}
    <div className="footer-col">
      <h3>MiTienda</h3>
      <p>
        Tu mejor lugar para encontrar productos de calidad al mejor precio.
      </p>
    </div>

    {/* Columna 2 */}
    <div className="footer-col">
      <h4>Enlaces útiles</h4>
      <a href="/">Inicio</a><br/>
      <a href="/productos">Productos</a><br/>
      <a href="/carrito">Carrito</a><br/>
      <a href="/faq">Preguntas frecuentes</a>
    </div>

    {/* Columna 3 */}
    <div className="footer-col">
      <h4>Contáctanos</h4>
      <p>📍 Av. Siempre Viva 123, Springfield</p>
      <p>📞 (555) 123-4567</p>
      <p>✉️ contacto@mitienda.com</p>
      <div className="footer-social">
        <a href="#">🌐 Facebook</a>
        <a href="#">📸 Instagram</a>
        <a href="#">🐦 Twitter</a>
      </div>
    </div>
  </div>

  <button
    className="footer-contact-btn"
    onClick={() => setOpen(true)}
  >
    Contáctanos
  </button>

  <div className="footer-bottom">
    © {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
  </div>
</footer>


      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title="Contáctanos">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="contact-form">
                <label>
                    Nombre
                    <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </label>

                <label>
                    Correo
                    <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </label>

                <label>
                    Mensaje
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md resize-vertical"
                    />
                </label>
            </div>
          <button type="submit" className="btn btn-primary mt-2">
            Enviar
          </button>
        </form>
      </Modal>
    </>
  );
}
