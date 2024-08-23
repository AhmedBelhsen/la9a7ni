import React from 'react';
import './Footer.css';
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'; // Importez les icônes nécessaires


function Footer() {
  return (
    <footer>

      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: Info@WarViruses.com</p>
          <p>Phone: +121 56556 565556</p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
          <li style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#" aria-label="Facebook" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <CiFacebook style={{ fontSize: '24px', marginRight: '10px' }} />
            <span style={{ fontSize: '16px' }}>Warviruses_Official</span>
          </a>
        </li>         
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#" aria-label="Instagram" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <CiInstagram style={{ fontSize: '24px', marginRight: '10px' }} />
            <span style={{ fontSize: '16px' }}>Warviruses_Official</span>
          </a>
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#" aria-label="LinkedIn" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <CiLinkedin style={{ fontSize: '24px', marginRight: '10px' }} />
            <span style={{ fontSize: '16px' }}>Warviruses_Official</span>
          </a>
        </li>          </ul>
        </div>
        <div className="footer-content">
        <h3>Our Location</h3>
        <p>Location: Charguia-Ariana</p>
</div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 your company. All rights reserved</p>
      </div>

    </footer>
  );
}

export default Footer;
