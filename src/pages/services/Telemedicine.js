import React, { useState, useEffect } from 'react';
import './Telemedicine.css';

const Telemedicine = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    doctorId: '',
    date: '',
    time: '',
    issue: '',
    records: null,
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/services/telemedicine/doctors');
        const data = await res.json();
        setDoctors(data);
        setFilteredDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    const filtered = doctors.filter((doc) => {
      return (
        (name === 'specialty' && value ? doc.specialty === value : true) &&
        (name === 'availability' && value ? doc.availableTimes.includes(value) : true) &&
        (name === 'gender' && value ? doc.gender === value : true) &&
        (name === 'status' && value ? (value === 'online' ? doc.online : !doc.online) : true)
      );
    });

    setFilteredDoctors(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    // You can send formData to your backend here
  };

  return (
    <div className="telemedicine-page">
      <section className="page-header">
        <div className="container">
          <h1>Online Doctor Consultations</h1>
          <p>
            Our telemedicine service allows you to consult with qualified healthcare professionals remotely through video calls.
            Upload your medical reports, describe your symptoms, and get expert medical advice without leaving your home.
          </p>
        </div>
      </section>

      <section className="doctor-list">
        <div className="container">
          <h2>Available Doctors</h2>
          <div className="filter-section">
            <select name="specialty" onChange={handleFilterChange}>
              <option value="">All Specialties</option>
              <option value="General Physician">General Physician</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Gynecologist">Gynecologist</option>
            </select>
            <select name="availability" onChange={handleFilterChange}>
              <option value="">Any Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            <select name="gender" onChange={handleFilterChange}>
              <option value="">Any Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select name="status" onChange={handleFilterChange}>
              <option value="">Any Status</option>
              <option value="online">Online Now</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div className="doctors-grid">
            {filteredDoctors.map((doc) => (
              <div className="doctor-card" key={doc.id}>
                <div className={`doctor-status ${doc.online ? 'online' : 'offline'}`}></div>
                <div className="doctor-image">
                  <img
                    src={
                      doc.image ||
                      (doc.gender === 'Male'
                        ? 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg'
                        : 'https://images.pexels.com/photos/5214959.jpeg')
                    }
                    alt={doc.name}
                  />
                </div>
                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <p className="doctor-specialty">{doc.specialty}</p>
                  <p>{doc.gender} | {doc.age} years</p>
                  <p>Available: {doc.availableTimes.join(', ')}</p>
                  <a href="#book-appointment" className="btn-primary">Book Appointment</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="appointment-form" id="book-appointment">
        <div className="container">
          <h2>Book an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Your Name" onChange={handleInputChange} required />
            <input name="age" type="number" placeholder="Your Age" onChange={handleInputChange} required />
            <select name="gender" onChange={handleInputChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input name="contact" type="tel" placeholder="Contact Number" onChange={handleInputChange} required />
            <input name="email" type="email" placeholder="Email" onChange={handleInputChange} required />

            {/* 🔽 Updated doctor selection */}
            <select name="doctorId" onChange={handleInputChange} required>

              <option value="Choose a doctor">Choose a doctor</option>
               <option value="General Physician">General Physician</option>  
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Gynecologist">Gynecologist</option>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} ({doc.specialty})
                </option>
              ))}
            </select>

            <input name="date" type="date" onChange={handleInputChange} required />
            <select name="time" onChange={handleInputChange} required>
              <option value="">Preferred Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            <textarea name="issue" placeholder="Describe Your Health Issue" onChange={handleInputChange} required />
            <input type="file" name="records" accept=".pdf,.jpg,.jpeg,.png" onChange={handleInputChange} />
            <button type="submit" className="btn-primary">Book Appointment</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Telemedicine;
