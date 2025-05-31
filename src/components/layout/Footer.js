import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaAmbulance } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="footer-logo">
              <FaAmbulance className="footer-logo-icon" />
              <h2>ArogyaSathi</h2>
            </div>
            <p>Your complete healthcare companion providing emergency services, telemedicine, health records management, and more.</p>
            <div className="contact">
              <p><FaPhoneAlt /> &nbsp; 1800-AROGYA-SATHI</p>
              <p><FaEnvelope /> &nbsp; contact@arogyasathi.com</p>
              <p><FaMapMarkerAlt /> &nbsp; 123 Healthcare Avenue, Medical District</p>
            </div>
            <div className="socials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
          
          <div className="footer-section services">
            <h3>Our Services</h3>
            <div className="footer-links">
              <Link to="/services/emergency-ambulance">Emergency Ambulance</Link>
              <Link to="/services/telemedicine">Telemedicine</Link>
              <Link to="/services/electronic-health-records">Electronic Health Records</Link>
              <Link to="/services/home-care">Home Care</Link>
              <Link to="/services/ai-health-assistant">AI Health Assistant</Link>
              <Link to="/services/blood-donation">Blood Donation</Link>
            </div>
          </div>
          
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/contact">Contact Us</Link>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          
          <div className="footer-section subscribe">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for health tips and updates.</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn-subscribe">Subscribe</button>
            </form>
            <div className="emergency-contact">
              <h4>24/7 Emergency</h4>
              <a href="tel:1800123456" className="emergency-number">
                <FaPhoneAlt /> 1800-AROGYA-911
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ArogyaSathi. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;