import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaHandHoldingMedical, FaUserMd, FaAmbulance } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Rajiv Sharma',
      position: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Dr. Sharma has over 20 years of experience in emergency medicine and healthcare management.'
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Priya leads our operations team and ensures smooth delivery of all healthcare services.'
    },
    {
      id: 3,
      name: 'Amit Singh',
      position: 'Technical Director',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Amit oversees the technical infrastructure that powers our digital health platforms.'
    },
    {
      id: 4,
      name: 'Dr. Sunita Desai',
      position: 'Telemedicine Lead',
      image: 'https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Dr. Desai specializes in telemedicine and has helped thousands of patients remotely.'
    }
  ];

  return (
    <div className="about-page page-transition">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About ArogyaSathi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your trusted healthcare companion for all medical needs
            </motion.p>
          </div>
        </div>
      </section>

      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>ArogyaSathi is on a mission to make quality healthcare accessible to everyone through innovative technology solutions. We aim to bridge the gap between patients and healthcare providers, ensuring timely and efficient medical assistance for all.</p>
              <p>Our team of dedicated professionals works tirelessly to provide reliable healthcare services that cater to the unique needs of each individual, with a particular focus on ensuring our platform is accessible and user-friendly for elderly patients.</p>
            </motion.div>
            
            <motion.div 
              className="mission-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Healthcare professionals" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="vision-section section">
        <div className="container">
          <div className="vision-content">
            <motion.div 
              className="vision-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Future of healthcare" />
            </motion.div>
            
            <motion.div 
              className="vision-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>We envision a future where healthcare is seamlessly integrated into people's lives through technology, making it more affordable, accessible, and efficient. ArogyaSathi strives to be the leading healthcare platform that connects patients with the right medical assistance at the right time.</p>
              <p>By leveraging artificial intelligence, telemedicine, and real-time tracking systems, we aim to revolutionize the way healthcare is delivered and experienced across India.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide our work and decisions</p>
          </div>
          
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <FaHeartbeat />
              </div>
              <h3>Compassion</h3>
              <p>We approach every patient with empathy and understanding, recognizing that each individual's healthcare journey is unique.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <FaHandHoldingMedical />
              </div>
              <h3>Accessibility</h3>
              <p>We are committed to making quality healthcare accessible to everyone, regardless of location, age, or technical proficiency.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <FaUserMd />
              </div>
              <h3>Excellence</h3>
              <p>We uphold the highest standards in our services, constantly innovating and improving to provide the best healthcare solutions.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">
                <FaAmbulance />
              </div>
              <h3>Reliability</h3>
              <p>We ensure that our services are dependable and consistent, especially during emergencies when patients need us the most.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The dedicated professionals behind ArogyaSathi</p>
          </div>
          
          <div className="team-carousel">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="team-member"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="member-card">
                  <div className="card-front">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h3>{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="member-bio">
                      <h3>{member.name}</h3>
                      <p>{member.bio}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From idea to India's trusted healthcare platform</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2019</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>ArogyaSathi was founded with a vision to revolutionize healthcare access through technology.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h3>COVID-19 Response</h3>
                <p>During the pandemic, we expanded our telemedicine services to help patients access healthcare safely from home.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2021</div>
              <div className="timeline-content">
                <h3>AI Integration</h3>
                <p>We introduced our AI Health Assistant to provide instant health guidance and first-aid information.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>National Expansion</h3>
                <p>ArogyaSathi expanded operations to cover major cities across India with real-time ambulance tracking.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>Elderly Focus</h3>
                <p>We redesigned our platform to be more accessible and user-friendly for elderly patients.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h3>Today & Beyond</h3>
                <p>We continue to innovate and expand our services to reach more communities and provide better healthcare solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;