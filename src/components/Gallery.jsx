import ProductCard from "./ProductCard";

export default function Gallery({ products }) {
  return (
    <div className="grid grid-2 grid-3">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}