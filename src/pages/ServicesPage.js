import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAmbulance, FaUserMd, FaFileMedical, FaHome, FaRobot, FaHeartbeat, FaHospital } from 'react-icons/fa';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: <FaAmbulance />,
      title: 'Emergency Ambulance',
      description: 'Book and track ambulances in real-time. Get immediate assistance during medical emergencies with various ambulance types including BLS, ALS, ICU, and more.',
      path: '/services/emergency-ambulance',
      color: 'var(--error-500)',
      bgGradient: 'linear-gradient(135deg, var(--error-50) 0%, white 100%)'
    },
    {
      id: 2,
      icon: <FaUserMd />,
      title: 'Telemedicine',
      description: 'Connect with doctors virtually for consultations. Filter doctors by specialty and availability, upload symptoms, and get matched with suitable healthcare professionals.',
      path: '/services/telemedicine',
      color: 'var(--primary-500)',
      bgGradient: 'linear-gradient(135deg, var(--primary-50) 0%, white 100%)'
    },
    {
      id: 3,
      icon: <FaFileMedical />,
      title: 'Electronic Health Records',
      description: 'Store and access your medical records securely from anywhere. Maintain your complete medical history in one place for easy access during emergencies.',
      path: '/services/electronic-health-records',
      color: 'var(--success-500)',
      bgGradient: 'linear-gradient(135deg, var(--success-50) 0%, white 100%)'
    },
    {
      id: 4,
      icon: <FaHome />,
      title: 'Home Care Service',
      description: 'Book professional healthcare services at your doorstep. Search and book home nurses, filter by gender & availability, and provide feedback for future visits.',
      path: '/services/home-care',
      color: 'var(--primary-700)',
      bgGradient: 'linear-gradient(135deg, var(--primary-100) 0%, white 100%)'
    },
    {
      id: 5,
      icon: <FaRobot />,
      title: 'AI Health Assistant',
      description: 'Get instant health advice and first-aid tips from our AI assistant. Ask health-related questions and receive immediate guidance for common health concerns.',
      path: '/services/ai-health-assistant',
      color: 'var(--primary-600)',
      bgGradient: 'linear-gradient(135deg, var(--primary-50) 0%, white 100%)'
    },
    {
      id: 6,
      icon: <FaHeartbeat />,
      title: 'Blood Donation',
      description: 'Find blood donors or register as a donor to save lives. Connect with blood donors in your area or volunteer to donate blood for those in need.',
      path: '/services/blood-donation',
      color: 'var(--error-700)',
      bgGradient: 'linear-gradient(135deg, var(--error-50) 0%, white 100%)'
    },
    {
      id: 7,
      icon: <FaHospital />,
      title: 'Hospital Appointment',
      description: 'Find the nearest hospitals and book appointments with specialized doctors. Reserve slots with specific departments and doctors at convenient times.',
      path: '/services/hospital-appointment',
      color: 'var(--primary-800)',
      bgGradient: 'linear-gradient(135deg, var(--primary-50) 0%, white 100%)'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="services-page page-transition">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Medical Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive healthcare solutions to meet all your medical needs
            </motion.p>
          </div>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="service-detail-card"
                variants={itemVariants}
                style={{ background: service.bgGradient }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="service-detail-link" style={{ color: service.color }}>
                  View Details
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="how-it-works section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Easy steps to access our healthcare services</p>
          </div>

          <div className="steps-container">
            <motion.div 
              className="step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <h3>Select a Service</h3>
              <p>Choose from our wide range of healthcare services based on your needs.</p>
            </motion.div>

            <div className="step-connector"></div>

            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <h3>Book or Request</h3>
              <p>Schedule an appointment, book an ambulance, or request a consultation.</p>
            </motion.div>

            <div className="step-connector"></div>

            <motion.div 
              className="step"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <h3>Receive Care</h3>
              <p>Get professional healthcare services either online, at home, or at a facility.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Need Immediate Assistance?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our emergency team is available 24/7 to help you during critical situations.
              </motion.p>
              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/services/emergency-ambulance" className="cta-button emergency-button">
                  <FaAmbulance /> Book Ambulance Now
                </Link>
                <a href="tel:1800AROGYA911" className="cta-button cta-button-secondary">
                  Call Helpline
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;