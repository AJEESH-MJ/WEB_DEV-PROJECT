/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets/index";

function Footer() {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Error loading logo." />
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link
                to="/home"
                className={activeLink === 0 ? "active" : ""}
                onClick={() => handleClick(0)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={activeLink === 1 ? "active" : ""}
                onClick={() => handleClick(1)}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/design"
                className={activeLink === 2 ? "active" : ""}
                onClick={() => handleClick(2)}
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeLink === 3 ? "active" : ""}
                onClick={() => handleClick(3)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div class="Fsocial-icons">
          <h3>Follow Us</h3>
          <div class="Fsocial-media">
            <a href="#" class="Fsocial-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="Fsocial-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="Fsocial-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="Fsocial-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 YBRO CORPORATIONS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
