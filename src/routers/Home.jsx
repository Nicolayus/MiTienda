import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/CelesteInicio.jpg')", // asegúrate que esté en /public
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Overlay para oscurecer la imagen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          zIndex: 2,
        }}
      >
        <h1 style={{ color: "#949494ff", fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Bienvenido a <span style={{ color: "#f97316" }}>MiTienda</span>
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Encuentra los mejores productos al mejor precio 🚀
        </p>
        <Link
          to="/products"
          style={{
            background: "#2563eb",
            padding: "0.8rem 1.5rem",
            borderRadius: "12px",
            fontWeight: "600",
            textDecoration: "none",
            color: "white",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.background = "#2563eb")}
        >
          Explorar Productos
        </Link>
      </div>
    </div>
  );
}
