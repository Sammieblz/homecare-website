import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FaHeart, FaHandsHelping, FaShieldAlt, FaUserMd, FaHandHoldingHeart } from 'react-icons/fa';
import { useState, useEffect, RefObject, useRef } from 'react';
import { GiSelfLove } from "react-icons/gi";
import '../styles/AboutUs.css'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import { getYearsInBusiness } from '../data/businessInfo';
import { Seo } from '../components/Seo';


function useIsVisible(ref: RefObject<HTMLElement>): boolean {
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


/** Background image must fill the parallax layer; height:auto leaves gray bands on tall viewports. */
function parallaxCoverStyle(reduceMotion: boolean | null, overscanPercent = 22): React.CSSProperties {
  return {
    objectFit: 'cover',
    objectPosition: 'center center',
    width: '100%',
    minHeight: '100%',
    height: reduceMotion ? '100%' : `${100 + overscanPercent}%`,
  };
}

const AboutUs: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);
  return (
    <section className="about-us min-w-0">
      <Seo
        title="About Us | Oghosa Home Health Care & Transportation"
        description={`Family-owned home care and transportation serving Greater Cleveland for over ${getYearsInBusiness()} years. Our story, values, and commitment to person-centered care.`}
        path="/about-us"
        keywords="about Oghosa, home health care Cleveland, family owned home care, Euclid Ohio caregiver"
        ogImage="/Images/AdobeStock_572805905.jpeg"
      />
      <Header logo="/Images/ogosa-logo-nobg.png" />
      
      {/* Parallax Banner */}
      <Parallax
        bgImage="/Images/AdobeStock_572805905.jpeg"
        strength={reduceMotion ? 0 : 500}
        className="parallax-banner"
        bgImageStyle={parallaxCoverStyle(reduceMotion, 24)}
      >
        <div className="overlay">
          <h1 className="banner-title">About Us</h1>
        </div>
      </Parallax>


      {/* Story Section */}
      <div
        ref={ref1}
        className={`story-section bg-brand-900 text-white py-12 text-center transition-opacity ease-in duration-1000 sm:py-16 px-4 sm:px-6 lg:px-16 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="text-2xl font-bold fade-in sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-balance">Our Story</h2>
        <p className="text-base fade-in sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Started in our basement {getYearsInBusiness()} years ago, Oghosa Home Health Care & Transportation Services is a
          family-owned and operated organization. 
          What began as a small endeavor with a simple mission to provide reliable in-home care and transportation has grown into a trusted 
          partner in the Greater Cleveland area. Our team remains committed to delivering compassionate, personalized services to our clients 
          and their families. We empower independence, ensuring every person is treated like family.
        </p>
      </div>

      {/* Parallax Divider */}
      <Parallax
        bgImage="/Images/healthcare-team.jpg"
        strength={reduceMotion ? 0 : 300}
        className="parallax-divider"
        bgImageStyle={parallaxCoverStyle(reduceMotion, 18)}
      >
        <div className="divider-content" aria-hidden />
      </Parallax>

      {/* Values Section */}
      <div
        ref={ref2}
        className={`values-section py-12 transition-opacity ease-in duration-1000 sm:py-16 px-4 sm:px-6 lg:px-16 ${isVisible2 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="mx-auto max-w-6xl min-w-0">
          <SectionHeader
            eyebrow="How we work"
            title="Our values"
            description="Compassionate, consistent, person-centered service for individuals and families across Greater Cleveland."
            align="center"
          />
        </div>
        <ScrollReveal
          className="mx-auto mt-10 grid max-w-6xl min-w-0 grid-cols-1 gap-6 fade-in sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          staggerChildren={0.06}
        >
          {/* Value Cards */}
          <RevealItem>
          <div className="value-card text-center">
            <div className="icon-container">
              <FaHeart className="text-brand-600 text-4xl mb-4" /> {/* Family-Oriented Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Family-Oriented</h3>
            <p>
              We believe in treating each client and their families with the care, dignity, and respect we would show to our own family.
            </p>
          </div>
          </RevealItem>

          <RevealItem>
          <div className="value-card text-center">
            <div className="icon-container">
              <FaHandsHelping className="text-brand-600 text-4xl mb-4" /> {/* Compassion Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Compassion</h3>
            <p>
              Compassion is at the heart of everything we do. We strive to make a positive impact on the lives of those we serve.
            </p>
          </div>
          </RevealItem>

          <RevealItem>
          <div className="value-card text-center">
            <div className="icon-container">
              <FaShieldAlt className="text-brand-600 text-4xl mb-4" /> {/* Trust and Safety Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
            <p>
              We prioritize the safety and well-being of our clients by maintaining the highest standards in health and safety protocols.
            </p>
          </div>
          </RevealItem>

          <RevealItem>
          <div className="value-card text-center">
            <div className="icon-container">
              <FaUserMd className="text-brand-600 text-4xl mb-4" /> {/* Professionalism Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Professionalism</h3>
            <p>
              Our experienced team of professionals is dedicated to providing exceptional care and service every day.
            </p>
          </div>
          </RevealItem>

          <RevealItem>
          <div className="value-card text-center">
            <div className="icon-container">
              <FaHandHoldingHeart className="text-brand-600 text-4xl mb-4" /> {/* Commitment Icon */}
            </div>
            <h3 className="text-xl font-bold mb-2">Commitment</h3>
            <p>
              We are committed to continuously improving and adapting our services to meet the needs of our clients and their families.
            </p>
          </div>
          </RevealItem>

          <RevealItem>
          <div className="value-card text-center">
            <div className="icon-container">
              <GiSelfLove className="text-brand-600 text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-bold mb-2">Honesty</h3>
            <p>
              We prioritize honesty in every interaction, building trust and transparency with our clients and their families.
            </p>
          </div>
          </RevealItem>

        </ScrollReveal>
      </div>

      {/* Cool Button */}
      <div className="button-container fade-in px-4 py-8 text-center sm:px-6">
        <a href="/home-care-services" className="cool-button">
          Explore Our Home-Healthcare Services
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default AboutUs;
