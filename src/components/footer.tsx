import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>YOUR LOGO</h2>
        </div>
        <div className="footer-links">
          <a href="#">Xuất bản</a>
          <a href="#">Câu chuyện</a>
          <a href="#">Trò chơi</a>
          <a href="#">Trò chơi trên web</a>
          <a href="#">Nghề nghiệp</a>
          <a href="#">Ủng hộ</a>
          <a href="#">Tài khoản</a>
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
          <a href="#">Điều khoản và điều kiện</a>
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Chính sách về nội dung và hành vi</a>
          <a href="#">Chính sách Cookie</a>
          <a href="#">Cài đặt quyền riêng tư</a>
        </div>
        <p className="footer-text">&copy; 2025 YOUR COMPANY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;