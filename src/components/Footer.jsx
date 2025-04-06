import React, { useEffect } from 'react';
import logo from "../assets/images/logo/logo.png";

import './Footer.css'; // Assuming you have a separate CSS file for the footer section

const Footer = () => {
  // Add a hook to trigger the scroll-based animation
  useEffect(() => {
    const footer = document.querySelector('.footer');
    const handleScroll = () => {
      const footerPosition = footer.getBoundingClientRect().top;
      if (footerPosition < window.innerHeight) {
        footer.classList.add('animate-bounce');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  <div className="social-logo">
    {/* Add your logo here */}
    <img src={logo} alt="TechStore Logo" className="footer-logo" />
  </div>
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

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/store">Store Locator</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

       
      </div>
      <div className="footer-wave"></div> {/* Wave Effect */}
    </footer>
  );
};

export default Footer;
