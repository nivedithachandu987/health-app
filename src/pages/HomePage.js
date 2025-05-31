import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAmbulance, FaUserMd, FaFileMedical, FaHome, FaRobot, FaHeartbeat } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const services = [
    {
      id: 1,
      icon: <FaAmbulance />,
      title: 'Emergency Ambulance',
      description: 'Book and track ambulances in real-time during emergencies.',
      path: '/services/emergency-ambulance',
      color: 'var(--error-500)'
    },
    {
      id: 2,
      icon: <FaUserMd />,
      title: 'Telemedicine',
      description: 'Connect with doctors virtually for consultations and follow-ups.',
      path: '/services/telemedicine',
      color: 'var(--primary-500)'
    },
    {
      id: 3,
      icon: <FaFileMedical />,
      title: 'Electronic Health Records',
      description: 'Store and access your medical records securely from anywhere.',
      path: '/services/electronic-health-records',
      color: 'var(--success-500)'
    },
    {
      id: 4,
      icon: <FaHome />,
      title: 'Home Care Service',
      description: 'Book professional healthcare services at your doorstep.',
      path: '/services/home-care',
      color: 'var(--primary-700)'
    },
    {
      id: 5,
      icon: <FaRobot />,
      title: 'AI Health Assistant',
      description: 'Get instant health advice and first-aid tips from our AI assistant.',
      path: '/services/ai-health-assistant',
      color: 'var(--primary-600)'
    },
    {
      id: 6,
      icon: <FaHeartbeat />,
      title: 'Blood Donation',
      description: 'Find blood donors or register as a donor to save lives.',
      path: '/services/blood-donation',
      color: 'var(--error-700)'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Complete Healthcare Companion
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access emergency services, telemedicine, health records, and more all in one place. Healthcare made simple for everyone.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/services" className="cta-button">
                Explore Services
              </Link>
              <Link to="/services/emergency-ambulance" className="cta-button cta-button-emergency">
                <FaAmbulance /> Emergency Help
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive healthcare solutions for you and your loved ones</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="service-link">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="services-cta">
            <Link to="/services" className="cta-button cta-button-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose ArogyaSathi</h2>
            <p>Trusted by thousands for reliable healthcare services</p>
          </div>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <img src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600" alt="24/7 Support" />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your healthcare needs.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Qualified Professionals" />
              </div>
              <h3>Qualified Professionals</h3>
              <p>Our team consists of certified healthcare specialists.</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <img src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fast Response" />
              </div>
              <h3>Fast Response</h3>
              <p>Quick response times for all emergency services.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Hear from those who have experienced our services</p>
          </div>

          <div className="testimonials-slider">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-content">
                <p>"The ambulance service was prompt, and the paramedics were extremely professional. They arrived within minutes of my call during my father's emergency."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rahul Sharma" />
                </div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Delhi</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-content">
                <p>"The telemedicine consultation saved me so much time. I got expert medical advice from the comfort of my home, and the medicine was delivered the same day."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Priya Patel" />
                </div>
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Mumbai</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-content">
                <p>"The AI Health Assistant gave me accurate first-aid advice when my son had a minor burn. It's like having a doctor available 24/7 for immediate guidance."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Vikram Singh" />
                </div>
                <div className="author-info">
                  <h4>Vikram Singh</h4>
                  <p>Bangalore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Experience Better Healthcare?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of users who trust ArogyaSathi for their healthcare needs.
            </motion.p>
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="cta-button">
                Get Started
              </Link>
              <Link to="/contact" className="cta-button cta-button-secondary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;