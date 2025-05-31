import React, { useState } from 'react';
import './HomeCare.css';

const caregiversList = [
  {
    id: 1,
    name: 'Anita Singh',
    profession: 'Nurse',
    gender: 'Female',
    experience: 5,
    image: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialization: 'Post-operative care, Elderly care',
    available: true,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    profession: 'Physiotherapist',
    gender: 'Male',
    experience: 3,
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialization: 'Sports injuries, Orthopedic rehabilitation',
    available: true,
  },
];

const HomeCare = () => {
  const [filters, setFilters] = useState({ profession: '', gender: '', experience: '' });

  const filteredCaregivers = caregiversList.filter((cg) => {
    const profMatch = !filters.profession || cg.profession === filters.profession;
    const genderMatch = !filters.gender || cg.gender === filters.gender;
    const experienceMatch =
      !filters.experience ||
      (filters.experience === '1-3' && cg.experience <= 3) ||
      (filters.experience === '3-5' && cg.experience > 3 && cg.experience <= 5) ||
      (filters.experience === '5+' && cg.experience > 5);
    return profMatch && genderMatch && experienceMatch;
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="home-care-page">
      <section className="page-header">
        <div className="container">
          <h1>Home Care Services</h1>
          <p>Healthcare at your doorstep</p>
        </div>
      </section>

      <section className="homecare-service">
        <div className="container">
          <h2>Professional Healthcare at Home</h2>
          <p>We bring qualified healthcare professionals to your home.</p>

          <div className="services-grid">
            {[
              { icon: 'procedures', title: 'Post-Operative Care', desc: 'Care after surgery' },
              { icon: 'heartbeat', title: 'Vital Monitoring', desc: 'Vital signs check' },
              { icon: 'pills', title: 'Medication Management', desc: 'Medication schedule help' },
              { icon: 'stethoscope', title: 'Routine Check-ups', desc: 'At-home medical visits' },
              { icon: 'user-md', title: 'Doctor Visits', desc: 'Physician at home' },
              { icon: 'hand-holding-medical', title: 'Elderly Care', desc: 'Senior care support' },
            ].map((service, i) => (
              <div key={i} className="service-item">
                <div className="service-icon">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="caregivers">
        <div className="container">
          <h2>Our Healthcare Professionals</h2>
          <div className="filter-section">
            <div className="filter-group">
              <label>Profession</label>
              <select name="profession" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Nurse">Nurse</option>
                <option value="Physiotherapist">Physiotherapist</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Gender</label>
              <select name="gender" onChange={handleFilterChange}>
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Experience</label>
              <select name="experience" onChange={handleFilterChange}>
                <option value="">Any</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
          </div>

          <div className="caregivers-grid">
            {filteredCaregivers.map((cg) => (
              <div key={cg.id} className="caregiver-card">
                <div className="caregiver-image">
                  <img src={cg.image} alt={cg.name} />
                </div>
                <div className="caregiver-info">
                  <h3>{cg.name}</h3>
                  <p className="caregiver-profession">{cg.profession}</p>
                  <p className="caregiver-details">
                    <i className="fas fa-venus-mars"></i> {cg.gender} | <i className="fas fa-star"></i> {cg.experience} years experience
                  </p>
                  <p className="caregiver-specialization">Specialization: {cg.specialization}</p>
                  <div className={`caregiver-availability ${cg.available ? 'available' : 'unavailable'}`}>
                    <i className="fas fa-check-circle"></i> {cg.available ? 'Available Now' : 'Currently Unavailable'}
                  </div>
                  <a href="#book-service" className="btn-primary">Book Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-form" id="book-service">
        <div className="container">
          <h2>Book Home Care Service</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Patient Name" required />
              <input type="number" placeholder="Patient Age" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Contact Number" required />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea rows="3" placeholder="Home Address" required />
            <div className="form-row">
              <select required>
                <option value="">Select Service</option>
                <option value="nursing">Nursing Care</option>
                <option value="physiotherapy">Physiotherapy</option>
              </select>
              <select>
                <option value="">Caregiver Preference</option>
                <option value="1">Anita Singh</option>
                <option value="2">Rajesh Kumar</option>
              </select>
            </div>
            <div className="form-row">
              <input type="date" required />
              <select required>
                <option value="">Preferred Time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </select>
            </div>
            <textarea rows="4" placeholder="Medical Condition/Requirements" required />
            <input type="file" multiple accept=".pdf,.jpg,.png" />
            <select required>
              <option value="">Select Duration</option>
              <option value="one-time">One-time Visit</option>
              <option value="weekly">Weekly</option>
            </select>
            <label>
              <input type="checkbox" required /> I agree to the terms and privacy policy.
            </label>
            <button type="submit" className="btn-primary">Submit Booking</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomeCare;
