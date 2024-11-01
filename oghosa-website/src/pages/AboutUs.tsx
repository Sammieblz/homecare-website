import React from 'react';
import { Parallax } from 'react-parallax';
import { FaHeart, FaHandsHelping, FaShieldAlt, FaUserMd, FaHandHoldingHeart } from 'react-icons/fa';
import { useState, useEffect, RefObject, useRef } from 'react';
import { GiSelfLove } from "react-icons/gi";
import '../styles/AboutUs.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';


export function useIsVisible(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}


const AboutUs: React.FC = () => {

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);
  return (
    <section className="about-us">
      <Header logo="/public/Images/oghosa-logo1.png" />
      
      {/* Parallax Banner */}
      <Parallax
        bgImage="/public/Images/diverse-team1.png"
        strength={500}
        className="parallax-banner"
        bgImageStyle={{ 
          width: '100%', 
          height: 'auto',
          objectFit: 'cover',
        }}
      >
        <div className="overlay">
          <h1 className="banner-title">About Us</h1>
        </div>
      </Parallax>


      {/* Story Section */}
      <div ref={ref1} className={`story-section bg-blue-900 text-white py-16 px-8 text-center transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}> {/* Center-aligned text */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in">Our Story</h2>
        <p className="text-lg md:text-xl fade-in">
          Started in our basement 11 years ago, Oghosa Home Health Care & Transportation Services is a family-owned and operated organization. 
          What began as a small endeavor with a simple mission to provide reliable in-home care and transportation has grown into a trusted 
          partner in the Greater Cleveland area. Our team remains committed to delivering compassionate, personalized services to our clients 
          and their families. We empower independence, ensuring every person is treated like family.
        </p>
      </div>

      {/* Parallax Divider */}
      <Parallax
        bgImage="/public/Images/healthcare-team.jpg"
        strength={300}
        className="parallax-divider"
        bgImageStyle={{ width: '100%', height: 'auto' }}
      >
        <div className="divider-content"></div>
      </Parallax>

      {/* Values Section */}
      <div ref={ref2} className={`values-section py-16 px-8 transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 fade-in">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 fade-in">
          {/* Value Cards */}
          <div className="value-card text-center">
            <div className="icon-container">
              <FaHeart className="text-blue-600 text-4xl mb-4" /> {/* Family-Oriented Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Family-Oriented</h3>
            <p>
              We believe in treating each client and their families with the care, dignity, and respect we would show to our own family.
            </p>
          </div>

          <div className="value-card text-center">
            <div className="icon-container">
              <FaHandsHelping className="text-blue-600 text-4xl mb-4" /> {/* Compassion Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Compassion</h3>
            <p>
              Compassion is at the heart of everything we do. We strive to make a positive impact on the lives of those we serve.
            </p>
          </div>

          <div className="value-card text-center">
            <div className="icon-container">
              <FaShieldAlt className="text-blue-600 text-4xl mb-4" /> {/* Trust and Safety Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
            <p>
              We prioritize the safety and well-being of our clients by maintaining the highest standards in health and safety protocols.
            </p>
          </div>

          <div className="value-card text-center">
            <div className="icon-container">
              <FaUserMd className="text-blue-600 text-4xl mb-4" /> {/* Professionalism Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Professionalism</h3>
            <p>
              Our experienced team of professionals is dedicated to providing exceptional care and service every day.
            </p>
          </div>

          <div className="value-card text-center">
            <div className="icon-container">
              <FaHandHoldingHeart className="text-blue-600 text-4xl mb-4" /> {/* Commitment Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Commitment</h3>
            <p>
              We are committed to continuously improving and adapting our services to meet the needs of our clients and their families.
            </p>
          </div>

          <div className="value-card text-center">
            <div className="icon-container">
              <GiSelfLove className="text-blue-600 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Honesty</h3>
            <p>
              We prioritize honesty in every interaction, building trust and transparency with our clients and their families.
            </p>
          </div>

        </div>
      </div>

      {/* Cool Button */}
      <div className="button-container text-center py-8 fade-in">
        <a href="/home-care-services" className="cool-button">
          Explore Our Home-Healthcare Services
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
