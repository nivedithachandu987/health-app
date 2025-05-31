import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAmbulance, FaMapMarkerAlt, FaPhone, FaUserMd, FaClock } from 'react-icons/fa';
import { Map } from 'react-map-gl';


import 'mapbox-gl/dist/mapbox-gl.css';
import './EmergencyAmbulance.css';

const EmergencyAmbulance = () => {
  const [ambulanceType, setAmbulanceType] = useState('bls');
  const [trackingMode, setTrackingMode] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [eta, setEta] = useState(null);
  
  const ambulanceTypes = [
    { 
      id: 'bls', 
      name: 'Basic Life Support (BLS)', 
      description: 'For stable patients requiring basic medical monitoring.',
      icon: <FaAmbulance />,
      cost: '₹1,200'
    },
    { 
      id: 'als', 
      name: 'Advanced Life Support (ALS)', 
      description: 'For patients requiring advanced medical care during transport.',
      icon: <FaAmbulance />,
      cost: '₹2,500'
    },
    { 
      id: 'icu', 
      name: 'ICU Ambulance', 
      description: 'Fully equipped mobile ICU for critical patients.',
      icon: <FaAmbulance />,
      cost: '₹4,500'
    },
    { 
      id: 'emergency', 
      name: 'Emergency Response', 
      description: 'Rapid response for emergencies with paramedics.',
      icon: <FaAmbulance />,
      cost: '₹1,800'
    },
    { 
      id: 'freezer', 
      name: 'Dead Body Freezer Van', 
      description: 'Temperature-controlled transport for deceased individuals.',
      icon: <FaAmbulance />,
      cost: '₹3,000'
    }
  ];

  // Mock driver information for demo
  const driverInfo = {
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    vehicle: 'ALS Ambulance',
    vehicleNumber: 'DL 01 AB 1234',
    rating: 4.8
  };

  useEffect(() => {
    if (navigator.geolocation && currentLocation === null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default location (Delhi)
          setCurrentLocation({
            latitude: 28.6139,
            longitude: 77.2090
          });
        }
      );
    }
  }, [currentLocation]);

  const handleBookAmbulance = () => {
    setIsLoading(true);
    
    <Map
  mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
  initialViewState={{
    longitude: currentLocation.longitude,
    latitude: currentLocation.latitude,
    zoom: 13
  }}
  style={{ width: '100%', height: '100%' }}
  mapStyle="mapbox://styles/mapbox/streets-v11"
/>

    // Simulate API call to book ambulance
    setTimeout(() => {
      setIsLoading(false);
      setTrackingMode(true);
      setEta(Math.floor(Math.random() * 10) + 5); // Random ETA between 5-15 minutes
    }, 2000);
  };

  const handleCancelBooking = () => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setTrackingMode(false);
      setEta(null);
    }
  };

  return (
    <div className="emergency-ambulance-page page-transition">
      <section className="emergency-hero">
        <div className="container">
          <div className="emergency-hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaAmbulance /> Emergency Ambulance Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Immediate medical transport available 24/7. Book and track ambulances in real-time.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="booking-section section">
        <div className="container">
          <div className="booking-container">
            <div className="booking-form">
              <h2>{trackingMode ? 'Tracking Your Ambulance' : 'Book an Ambulance'}</h2>
              
              {!trackingMode ? (
                <>
                  <div className="form-group">
                    <label>Pickup Location</label>
                    <div className="location-input">
                      <FaMapMarkerAlt className="input-icon" />
                      <input 
                        type="text" 
                        placeholder="Your current location"
                        value={currentLocation ? "Current Location (Auto-detected)" : ""}
                        readOnly
                      />
                      <button className="use-current-location">Use Current</button>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Destination Hospital/Location (Optional)</label>
                    <div className="location-input">
                      <FaMapMarkerAlt className="input-icon" />
                      <input type="text" placeholder="Enter destination hospital or address" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Ambulance Type</label>
                    <div className="ambulance-type-selector">
                      {ambulanceTypes.map((type) => (
                        <div 
                          key={type.id}
                          className={`ambulance-type ${ambulanceType === type.id ? 'active' : ''}`}
                          onClick={() => setAmbulanceType(type.id)}
                        >
                          <div className="ambulance-type-icon">
                            {type.icon}
                          </div>
                          <div className="ambulance-type-info">
                            <h4>{type.name}</h4>
                            <p>{type.description}</p>
                            <span className="ambulance-cost">{type.cost}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Contact Number</label>
                    <div className="location-input">
                      <FaPhone className="input-icon" />
                      <input type="tel" placeholder="Enter contact number" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Additional Notes (Optional)</label>
                    <textarea placeholder="Any specific requirements or medical conditions"></textarea>
                  </div>
                  
                  <button 
                    className="book-button"
                    onClick={handleBookAmbulance}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Booking...' : 'Book Ambulance Now'}
                  </button>
                </>
              ) : (
                <div className="tracking-info">
                  <div className="driver-info">
                    <div className="driver-photo">
                      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Driver" />
                    </div>
                    <div className="driver-details">
                      <h3>{driverInfo.name}</h3>
                      <p>{driverInfo.vehicle} | {driverInfo.vehicleNumber}</p>
                      <div className="driver-rating">
                        <span className="rating">★ {driverInfo.rating}</span>
                      </div>
                      <a href={`tel:${driverInfo.phone}`} className="call-driver">
                        <FaPhone /> Call Driver
                      </a>
                    </div>
                  </div>
                  
                  <div className="eta-info">
                    <div className="eta-card">
                      <FaClock className="eta-icon" />
                      <div className="eta-text">
                        <p>Estimated Time of Arrival</p>
                        <h3>{eta} minutes</h3>
                      </div>
                    </div>
                  </div>
                  
                  <button className="cancel-button" onClick={handleCancelBooking}>
                    Cancel Booking
                  </button>
                </div>
              )}
            </div>
            
            <div className="map-container">
              {currentLocation && (
                <Map
                  initialViewState={{
                    longitude: currentLocation.longitude,
                    latitude: currentLocation.latitude,
                    zoom: 13
                  }}
                  style={{ width: '100%', height: '100%' }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                  {/* Map would display with Mapbox token */}
                  <div className="map-placeholder">
                    <div className="map-overlay">
                      <p>Interactive map would display here with Mapbox API integration.</p>
                      <p>Current coordinates: {currentLocation.latitude.toFixed(4)}, {currentLocation.longitude.toFixed(4)}</p>
                      {trackingMode && (
                        <div className="ambulance-marker">
                          <FaAmbulance className="ambulance-icon" />
                          <span>Ambulance en route</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Map>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-info section">
        <div className="container">
          <div className="section-header">
            <h2>Emergency Guidelines</h2>
            <p>What to do while waiting for the ambulance</p>
          </div>
          
          <div className="emergency-guidelines">
            <div className="guideline-card">
              <h3>Keep Calm</h3>
              <p>Stay calm and reassure the patient. Panic can worsen the situation.</p>
            </div>
            
            <div className="guideline-card">
              <h3>Clear Access</h3>
              <p>Ensure a clear path for paramedics to reach the patient quickly.</p>
            </div>
            
            <div className="guideline-card">
              <h3>Gather Information</h3>
              <p>Have patient's medical history and current medications ready.</p>
            </div>
            
            <div className="guideline-card">
              <h3>Follow Instructions</h3>
              <p>Our operators may provide emergency instructions - follow them carefully.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-contact section">
        <div className="container">
          <div className="emergency-contact-card">
            <div className="contact-info">
              <h2>24/7 Emergency Helpline</h2>
              <p>For immediate assistance in critical situations</p>
              <a href="tel:1800AROGYA911" className="emergency-phone">
                <FaPhone /> 1800-AROGYA-911
              </a>
            </div>
            <div className="contact-image">
              <FaUserMd className="doctor-icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyAmbulance;