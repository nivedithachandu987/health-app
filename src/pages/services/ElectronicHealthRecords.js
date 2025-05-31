import React, { useState } from 'react';
import './ElectronicHealthRecords.css';

const ElectronicHealthRecords = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    email: '',
    address: '',
    emergencyContact: '',
    bloodGroup: '',
    existingConditions: '',
    allergies: '',
    currentMedications: '',
    medicalDocuments: null,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="ehr-container">
      <section className="page-header">
        <div className="container">
          <h1>Electronic Health Records</h1>
          <p>Securely store and access your medical records</p>
        </div>
      </section>

      <section className="ehr-service">
        <div className="container">
          <div className="service-description">
            <h2>Your Health Data in One Place</h2>
            <p>Our Electronic Health Record (EHR) system provides a secure platform to store and access your complete medical history. Every patient gets a unique ID for easy retrieval of records. Doctors can update your records during consultations, ensuring your health information is always up-to-date.</p>
          </div>
        </div>
      </section>

      <section className="ehr-access">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="ehr-login">
                <h2>Access Your Records</h2>
                <form id="ehr-login-form">
                  <div className="form-group">
                    <label htmlFor="patient-id">Patient ID</label>
                    <input type="text" id="patient-id" placeholder="Enter your unique ID" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input type="date" id="date-of-birth" required />
                  </div>
                  <button type="submit" className="btn-primary">Access Records</button>
                </form>
                <div className="register-link">
                  <p>Don't have a Patient ID? <a href="#registration">Register Here</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ehr-benefits">
                <h2>Benefits of EHR</h2>
                <ul>
                  <li><i className="fas fa-check-circle"></i> Secure storage of all your medical data</li>
                  <li><i className="fas fa-check-circle"></i> Easy access to your health records anytime</li>
                  <li><i className="fas fa-check-circle"></i> Share records instantly with healthcare providers</li>
                  <li><i className="fas fa-check-circle"></i> Avoid duplicate tests and procedures</li>
                  <li><i className="fas fa-check-circle"></i> Track your health history over time</li>
                  <li><i className="fas fa-check-circle"></i> Get better coordinated care across providers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ehr-registration" id="registration">
        <div className="container">
          <h2>Register for EHR</h2>
          <p>Complete the form below to register for your unique Patient ID and start using our EHR system.</p>
          <form id="ehr-registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input 
                  type="text" 
                  id="first-name" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input 
                  type="text" 
                  id="last-name" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            {/* Rest of your form fields... */}
            <button type="submit" className="btn-primary">Register</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ElectronicHealthRecords;