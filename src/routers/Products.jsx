import { useState } from "react";
import { products } from "../data/products";
import Gallery from "../components/Gallery";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extraemos categorías únicas
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filtramos según la categoría elegida
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <h2>Productos</h2>

      {/* 🔘 Botones de categoría */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Galería filtrada */}
      <Gallery products={filteredProducts} />
    </div>
  );
}
