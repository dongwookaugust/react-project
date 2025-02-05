import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 HYPER. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
