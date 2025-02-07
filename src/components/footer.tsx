import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>BRUHTATO</h2>
        </div>
        <div className="footer-links">
          <a href="#">Publishing</a>
          <a href="#">Stories</a>
          <a href="#">Web Games</a>
        </div>
        <div className="footer-social">
          <FaTwitter />
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
          <FaApple />
          <FaGooglePlay />
          <FaGithub />
        </div>
        <div className="footer-policies">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Content and Behavior Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Settings</a>
          <a href="#">Privacy Settings</a>
        </div>
        <p className="footer-text">&copy; 2025 YOUR COMPANY. All rights reserved.</p>
      </div>
    </footer>

  );
};

export default Footer;