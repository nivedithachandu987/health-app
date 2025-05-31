import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHospitalSymbol,
  FaHospital,
  FaArrowRight,
} from 'react-icons/fa';

import './BloodDonation.css';

const BloodDonation = () => {
  const [camps, setCamps] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    age: '',
    gender: '',
    bloodType: '',
    contact: '',
    email: '',
    address: '',
    lastDonation: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const messageRef = useRef(null);

  useEffect(() => {
    fetchCamps();
    fetchRecipients();
  }, []);

  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message]);

  const fetchCamps = async () => {
    const response = [
      {
        id: 1,
        name: 'City Hospital Blood Drive',
        date: '2023-11-15',
        time: '9:00 AM - 4:00 PM',
        location: 'City Hospital, Main Street',
        bloodTypesNeeded: ['A+', 'O-', 'B+'],
      },
      {
        id: 2,
        name: 'Community Center Blood Camp',
        date: '2023-11-20',
        time: '10:00 AM - 3:00 PM',
        location: 'Downtown Community Center',
        bloodTypesNeeded: ['All types'],
      },
    ];
    setCamps(response);
  };

  const fetchRecipients = async () => {
    const data = [
      {
        id: 1,
        patientName: 'John Doe',
        bloodTypeNeeded: 'B+',
        hospital: 'City Hospital',
        urgency: 'Immediate',
        contact: '555-123-4567',
      },
      {
        id: 2,
        patientName: 'Mary Smith',
        bloodTypeNeeded: 'O-',
        hospital: 'Downtown Medical Center',
        urgency: 'Urgent',
        contact: '555-987-6543',
      },
      {
        id: 3,
        patientName: 'Robert Johnson',
        bloodTypeNeeded: 'A+',
        hospital: 'Community Health Clinic',
        urgency: 'Scheduled',
        contact: '555-555-5555',
      },
    ];
    setRecipients(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo({ ...donorInfo, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setDonorInfo({ ...donorInfo, consent: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setMessage('Registration successful! Thank you for your willingness to donate blood.');
      setIsSubmitting(false);
      setDonorInfo({
        name: '',
        age: '',
        gender: '',
        bloodType: '',
        contact: '',
        email: '',
        address: '',
        lastDonation: '',
        consent: false,
      });
    }, 1500);
  };

  // Blood type compatibility data
  const bloodCompatibility = [
    {
      donor: 'A+',
      canDonateTo: ['A+', 'AB+'],
    },
    {
      donor: 'A-',
      canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
    },
    {
      donor: 'B+',
      canDonateTo: ['B+', 'AB+'],
    },
    {
      donor: 'B-',
      canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
    },
    {
      donor: 'AB+',
      canDonateTo: ['AB+'],
    },
    {
      donor: 'AB-',
      canDonateTo: ['AB+', 'AB-'],
    },
    {
      donor: 'O+',
      canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
    },
    {
      donor: 'O-',
      canDonateTo: ['All types'],
    },
  ];

  return (
    <div className="blood-donation-page">
      <section className="hero-section">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaHeart /> Blood Donation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Donate blood, save lives
          </motion.p>
        </div>
      </section>

      <section className="compatibility-section">
        <div className="container">
          <h2>Blood Type Compatibility</h2>
          <div className="compatibility-chart">
            <div className="chart-header">
              <div className="header-cell">Donor Blood Type</div>
              <div className="header-cell">Can Donate To</div>
            </div>
            {bloodCompatibility.map((item, index) => (
              <div key={index} className="chart-row">
                <div className="chart-cell donor-type">{item.donor}</div>
                <div className="chart-cell">
                  <FaArrowRight className="arrow-icon" />
                </div>
                <div className="chart-cell recipient-types">
                  {item.canDonateTo[0] === 'All types' ? (
                    'All blood types'
                  ) : (
                    item.canDonateTo.join(', ')
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="compatibility-note">
            <p><strong>Note:</strong> O- is the universal donor (can donate to all blood types). AB+ is the universal recipient (can receive from all blood types).</p>
          </div>
        </div>
      </section>

      <section className="camps-section">
        <div className="container">
          <h2>Upcoming Blood Donation Camps</h2>
          <div className="camps-container">
            {camps.map((camp) => (
              <div key={camp.id} className="camp-card">
                <div className="camp-date">
                  <span className="day">{new Date(camp.date).getDate()}</span>
                  <span className="month">{new Date(camp.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="camp-details">
                  <h3>{camp.name}</h3>
                  <p><FaCalendarAlt /> {camp.time}</p>
                  <p><FaMapMarkerAlt /> {camp.location}</p>
                  <p><FaHeart /> Blood Types Needed: {camp.bloodTypesNeeded.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recipients-section">
        <div className="container">
          <h2>Recipient List</h2>
          <div className="recipients-container">
            {recipients.length === 0 ? (
              <p className="no-recipients">No current recipients need blood at this time.</p>
            ) : (
              recipients.map((recip) => (
                <div key={recip.id} className="recipient-card" role="region" aria-label={`Recipient ${recip.patientName}`}>
                  <div className="recipient-header">
                    <FaHospitalSymbol className="hospital-icon" />
                    <h3>{recip.patientName}</h3>
                    <span className={`urgency-tag urgency-${recip.urgency.toLowerCase()}`}>
                      {recip.urgency}
                    </span>
                  </div>
                  <p><strong>Blood Type Needed:</strong> {recip.bloodTypeNeeded}</p>
                  <p><strong>Hospital:</strong> {recip.hospital}</p>
                  <p><strong>Contact:</strong> {recip.contact}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="donor-registration">
        <div className="container">
          <h2>Become a Donor</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" value={donorInfo.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="age">Your Age</label>
              <input type="number" id="age" name="age" value={donorInfo.age} onChange={handleInputChange} min="18" max="65" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={donorInfo.gender} onChange={handleInputChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bloodType">Your Blood Type</label>
              <select id="bloodType" name="bloodType" value={donorInfo.bloodType} onChange={handleInputChange} required>
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="unknown">I don't know</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" id="contact" name="contact" value={donorInfo.contact} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={donorInfo.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" value={donorInfo.address} onChange={handleInputChange} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="lastDonation">Last Donation Date (if applicable)</label>
              <input type="date" id="lastDonation" name="lastDonation" value={donorInfo.lastDonation} onChange={handleInputChange} />
            </div>
            <div className="form-group consent-checkbox">
              <input type="checkbox" id="consent" name="consent" checked={donorInfo.consent} onChange={handleCheckboxChange} required />
              <label htmlFor="consent">I confirm that I am healthy and eligible to donate blood</label>
            </div>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register as Donor'}
            </button>
          </form>
          {message && <div ref={messageRef} className="message">{message}</div>}
        </div>
      </section>
    </div>
  );
};

export default BloodDonation;