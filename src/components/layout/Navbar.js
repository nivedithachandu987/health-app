import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaAmbulance } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (servicesOpen) setServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaAmbulance className="logo-icon" />
          <span className="logo-text">ArogyaSathi</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>
              About Us
            </Link>
          </li>
          <li className="nav-item has-dropdown">
            <a href="#" className={`nav-link ${location.pathname.includes('/services') ? 'active' : ''}`} onClick={toggleServices}>
              Services <FaChevronDown className="dropdown-icon" />
            </a>
            <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              <li>
                <Link to="/services/emergency-ambulance" className="dropdown-link">
                  Emergency Ambulance
                </Link>
              </li>
              <li>
                <Link to="/services/telemedicine" className="dropdown-link">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link to="/services/electronic-health-records" className="dropdown-link">
                  EHR
                </Link>
              </li>
              <li>
                <Link to="/services/home-care" className="dropdown-link">
                  Home Care Service
                </Link>
              </li>
              <li>
                <Link to="/services/ai-health-assistant" className="dropdown-link">
                  AI Health Assistant
                </Link>
              </li>
              <li>
                <Link to="/services/blood-donation" className="dropdown-link">
                  Blood Donation
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/services/blood-donation" className={location.pathname === '/services/blood-donation' ? 'nav-link active' : 'nav-link'}>
              Blood Donation
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
              Contact Us
            </Link>
          </li>
        </ul>
        
        <div className="nav-cta">
          <Link to="/services/emergency-ambulance" className="button button-primary emergency-btn">
            <FaAmbulance className="emergency-icon" /> Emergency
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;