import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for the footer section

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +251 900 000 000</p>
          <p>Email: info@techstore.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>

        <div className="footer-images">
          <h3>Featured Products</h3>
          <div className="image-gallery">
            <img src="product1.jpg" alt="Product 1" className="footer-image" />
            <img src="product2.jpg" alt="Product 2" className="footer-image" />
            <img src="product3.jpg" alt="Product 3" className="footer-image" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
