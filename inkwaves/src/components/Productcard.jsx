
import React from "react";
import "../style/productcard.css";

function ProductCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
}

export default ProductCard;
