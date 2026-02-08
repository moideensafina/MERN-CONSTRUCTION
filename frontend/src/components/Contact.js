import { Fragment } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <Fragment>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <motion.h1
            style={{ color: "white" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            style={{ color: "rgba(255,255,255,0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd Love to Hear From You
          </motion.p>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "5rem" }}>
        <div className="contact-wrapper">
          {/* Left Panel: Info */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 style={{ marginBottom: "2rem" }}>Get In Touch</h3>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Visit Us</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>123 Construction Avenue,<br />Chennai, Tamil Nadu 600001</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Phone size={24} /></div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Call Us</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>+91 99440 12736</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Mail size={24} /></div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Email Us</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>info@turboconstruction.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><Clock size={24} /></div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Working Hours</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Form */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ marginBottom: "1.5rem", color: "var(--color-primary)" }}>Send a Message</h3>
            <form>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                onClick={(e) => e.preventDefault()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="map-placeholder" style={{ height: "400px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#888" }}>Google Map Embed Would Go Here</p>
      </div>
    </Fragment>
  );
}
