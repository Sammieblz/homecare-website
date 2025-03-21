import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home';
import HomeCareServices from './pages/HomeCareServices';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import TransportationServices from './pages/TransportationServices';
import ActivityDayCenter from './pages/ActivityDayCenter';
import FAQ from './pages/FAQ';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-care-services" element={<HomeCareServices />} />
            <Route path="/transportation-services" element={<TransportationServices />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/activity-day-center" element={<ActivityDayCenter />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Analytics />
      </div>
    </Router>
  );
};

export default App;
