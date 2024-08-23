import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="square">
        <div className="brand">
          War Viruses
        </div>
        <div className="about">
          <p>We are dedicated to addressing the critical issue of rabies in Tunisia through comprehensive support and resources.</p>
        </div>
      </div>
      <h2 className="heading">Contact Us</h2>
      <ul className="contact">
        <li>Email: info@warviruses.com</li>
        <li>Phone: +216 123 456</li>
        <li>Address: Tunis, Tunisia</li>
      </ul>

      <ul className="social-media">
        <li><i className="fab fa-facebook-f"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-instagram"></i></li>
      </ul>

      <div className="copy">
        &copy; 2024 War Viruses. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
