import { Fragment } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container footer-grid">
        {/* Brand Info */}
        <div className="footer-col">
          <h3 className="logo-text">Turbo<span>Construction</span></h3>
          <p className="footer-text">
            Building trust through quality construction. We are dedicated to providing the best construction services in Tamil Nadu with over 15 years of excellence.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/service" className="footer-link">Services</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <div className="footer-links">
            <Link to="/service" className="footer-link">Architecture Design</Link>
            <Link to="/service" className="footer-link">Building Construction</Link>
            <Link to="/service" className="footer-link">Renovation</Link>
            <Link to="/service" className="footer-link">Interior Design</Link>
            <Link to="/service" className="footer-link">Consultation</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <span>123 Construction Avenue,<br />Chennai, Tamil Nadu 600001</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" size={20} />
              <a href="tel:+919944012736" style={{ color: 'inherit', textDecoration: 'none' }}>
                +91 99440 12736
              </a>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <a href="mailto:info@turboconstruction.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@turboconstruction.com
              </a>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon" size={20} />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Turbo Construction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
