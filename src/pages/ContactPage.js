import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaAmbulance, FaUserMd, FaFlask, FaHome } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page page-transition">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch with our team for any questions or assistance
            </motion.p>
          </div>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-wrapper">
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>We'll get back to you as soon as possible</p>
              </div>
              
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number" 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      rows="5" 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              )}
            </motion.div>
            
            <motion.div 
              className="contact-info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels</p>
                
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="info-content">
                      <h3>Address</h3>
                      <p>123 Healthcare Avenue, Medical District, New Delhi - 110001</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FaPhone />
                    </div>
                    <div className="info-content">
                      <h3>Phone Number</h3>
                      <p><a href="tel:+911800AROGYASATHI">+91 1800-AROGYA-SATHI</a></p>
                      <p><a href="tel:+911800111222">+91 1800-111-222</a> (Emergency)</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="info-content">
                      <h3>Email Address</h3>
                      <p><a href="mailto:contact@arogyasathi.com">contact@arogyasathi.com</a></p>
                      <p><a href="mailto:support@arogyasathi.com">support@arogyasathi.com</a></p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FaClock />
                    </div>
                    <div className="info-content">
                      <h3>Working Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>24/7 Emergency Services Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="map-container">
                <div className="map-placeholder">
                  <p>Interactive Google Map would be embedded here</p>
                  <p>Location: 123 Healthcare Avenue, Medical District</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-contact section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services Contacts</h2>
            <p>Direct contacts for specific services</p>
          </div>
          
          <div className="services-contact-grid">
            <div className="service-contact-card">
              <div className="service-icon">
                <FaAmbulance />
              </div>
              <h3>Emergency Ambulance</h3>
              <p>For emergency medical transport and assistance</p>
              <a href="tel:+911800911" className="service-phone">1800-911</a>
            </div>
            
            <div className="service-contact-card">
              <div className="service-icon">
                <FaUserMd />
              </div>
              <h3>Telemedicine</h3>
              <p>For online doctor consultations and prescriptions</p>
              <a href="tel:+911800333444" className="service-phone">1800-333-444</a>
            </div>
            
            <div className="service-contact-card">
              <div className="service-icon">
                <FaFlask />
              </div>
              <h3>Lab Tests</h3>
              <p>For home sample collection and test reports</p>
              <a href="tel:+911800555666" className="service-phone">1800-555-666</a>
            </div>
            
            <div className="service-contact-card">
              <div className="service-icon">
                <FaHome />
              </div>
              <h3>Home Care</h3>
              <p>For nursing and medical care at your home</p>
              <a href="tel:+911800777888" className="service-phone">1800-777-888</a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common queries about our services</p>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>How quickly can I expect an ambulance after booking?</h3>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>Our ambulance dispatch system works to provide the fastest possible response. In most urban areas, you can expect an ambulance within 10-15 minutes of booking. The exact ETA will be shown on your tracking screen.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>How do I schedule a telemedicine appointment?</h3>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>You can schedule a telemedicine appointment through our app or website. Go to the Telemedicine section, choose your preferred speciality, select an available doctor, and book a convenient time slot. You'll receive confirmation and a reminder before the appointment.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>Are my medical records secure on your platform?</h3>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, we take data security very seriously. Our Electronic Health Records system uses advanced encryption and complies with all healthcare data protection regulations. Your medical information is accessible only to you and the healthcare providers you explicitly authorize.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>How can I become a blood donor?</h3>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>To register as a blood donor, go to the Blood Donation section of our app or website. Fill out the donor registration form with your details, blood type, and location. You'll be notified when there's a need for your blood type in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;