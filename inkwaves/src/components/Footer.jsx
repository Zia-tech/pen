import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 My Pen Store | All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
