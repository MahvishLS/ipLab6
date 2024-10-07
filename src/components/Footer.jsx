import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>VIVEKANAND EDUCATION SOCIETY'S INSTITUTE OF TECHNOLOGY</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>&copy; 2024 VESIT. All rights reserved.</p>
          <p>HAMC, Collector Colony, Chembur, Mumbai</p>
          <p>Email: <a href="mailto:info@collegename.edu">vesit@gmail.com</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
