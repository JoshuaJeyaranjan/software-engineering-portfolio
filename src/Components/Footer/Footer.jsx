import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Joshua Jeyaranjan</h3>
            <p className="footer__description">
              Software Engineer passionate about creating innovative digital
              solutions and solving complex problems through code.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer__link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Connect</h4>
            <div className="footer__social">
              <a
                href="https://linkedin.com/in/yourprofile"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                        <img 
                className="contact-icon"
                src='/photoAssets/linkedin1.svg'
                >
                </img>
              </a>
              <a
                href="https://github.com/yourusername"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                        <img 
                className="contact-icon"
                src='/photoAssets/github.svg'
                >
                </img>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <img 
                className="contact-icon"
                src='/photoAssets/email1.svg'
                >
                </img>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Joshua Jeyaranjan. All rights reserved.
          </p>
          <p className="footer__built">Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
