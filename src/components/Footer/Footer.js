import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer_container bd-grid">
        <h1> Akansha Elisha George </h1>
        <p>Designed and developed by Akansha George.</p>
        <div className="footer-icons">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/akansha-elisha-george-02474139/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/elisha_george_/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="footer-link"
            href="https://github.com/Elisha18"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; 2021. &nbsp;All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
