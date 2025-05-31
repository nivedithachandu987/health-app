import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import EmergencyAmbulance from './pages/services/EmergencyAmbulance'; // ✅ This is correct
import Telemedicine from './pages/services/Telemedicine';
import ElectronicHealthRecords from './pages/services/ElectronicHealthRecords';
import HomeCare from './pages/services/HomeCare';
import AiHealthAssistant from './pages/services/AiHealthAssistant';
import BloodDonation from './pages/services/BloodDonation';
import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/emergency-ambulance" element={<EmergencyAmbulance />} />
          <Route path="/services/telemedicine" element={<Telemedicine />} />
          <Route path="/services/electronic-health-records" element={<ElectronicHealthRecords />} />
          <Route path="/services/home-care" element={<HomeCare />} />
          <Route path="/services/ai-health-assistant" element={<AiHealthAssistant />} />
          <Route path="/services/blood-donation" element={<BloodDonation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;