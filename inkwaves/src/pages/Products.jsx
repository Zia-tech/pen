// src/pages/Products.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import "../style/products.css";



function Products() {
  const products = [
  { image: "/pen1.png", name: "Luxury Pen", price: 1200 },
  { image: "/pen2.png", name: "Classic Pen", price: 800 },
  { image: "/pen3.png", name: "Modern Pen", price: 950 },
];
  return (

    <div className="grid">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}

export default Products;
