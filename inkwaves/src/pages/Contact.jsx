import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below or reach us directly.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> info@mypenstore.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Kozhikode, Kerala, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
