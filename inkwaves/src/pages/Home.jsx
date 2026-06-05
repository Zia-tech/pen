import React from "react";
import "../style/home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to My Pen Store</h1>
        <p>Discover premium pens crafted for elegance and precision.</p>
        <a href="#products" className="btn">Shop Now</a>
      </div>
    </section>
  );
}

export default Home;
