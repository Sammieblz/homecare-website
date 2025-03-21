import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCalculator, FaBook, FaUsers, FaSeedling, FaLaptopCode } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ActivityDayCenter.css';

// Import the useIsVisible hook from AboutUs.tsx
const useIsVisible = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
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
};

const ActivityDayCenter: React.FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  // SEO-focused useEffect to add JSON-LD structured data
  useEffect(() => {
    // Create the JSON-LD script element for rich results
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // Structured data for LocalBusiness with adult day care service
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Oghosa Adult Day Activity Center",
      "description": "OGHOSA Adult Day Activity Center provides a range of programs that enhance the care and support for each individual with person-centered thinking.",
      "image": "https://oghosa-homecare.com/Images/activity-center1.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "26250 Euclid Ave suite 417",
        "addressLocality": "Euclid",
        "addressRegion": "OH",
        "postalCode": "44132",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.5827,
        "longitude": -81.5285
      },
      "telephone": "(216) 261-0880",
      "email": "oghosatransport@gmail.com",
      "url": "https://oghosa-homecare.com/activity-day-center",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-17:00",
      "serviceType": "Adult Day Activity Program",
      "areaServed": "Euclid and Greater Cleveland, Ohio area",
      "serviceOutput": "Person-centered adult day activities and life skills development"
    };
    
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  // Gallery images
  const galleryImages = [
    { src: '/Images/IMG_7658.png', alt: 'Activity Day Center' },
    { src: '/Images/IMG_1131.png', alt: 'Activities at Center' },
    { src: '/Images/IMG_3625.png', alt: 'Healthcare Activities' },
    { src: '/Images/IMG_3630.png', alt: 'Compassionate Care' },
    { src: '/Images/IMG_3624.png', alt: 'Empowering Activities' },
    { src: '/Images/IMG_7910.png', alt: 'Care Services' },
    { src: '/Images/IMG_5457.png', alt: 'Quality Care' },
    { src: '/Images/IMG_2050.png', alt: 'Independent Client Activities' },
  ];

  // Activities offered
  const activities = [
    { 
      icon: <FaPaintBrush className="text-blue-600 text-4xl mb-4" />, 
      title: 'Art & Creativity', 
      description: 'Expressing creativity through drawing, painting, crafts, and other artistic activities.'
    },
    { 
      icon: <FaCalculator className="text-blue-600 text-4xl mb-4" />, 
      title: 'Math & Numeracy', 
      description: 'Developing mathematical skills through practical, everyday applications and games.'
    },
    { 
      icon: <FaBook className="text-blue-600 text-4xl mb-4" />, 
      title: 'Science & Discovery', 
      description: 'Engaging in hands-on science activities that explore the world around us.'
    },
    { 
      icon: <FaUsers className="text-blue-600 text-4xl mb-4" />, 
      title: 'Social Skills', 
      description: 'Building relationships and developing appropriate social interactions through group activities.'
    },
    { 
      icon: <FaSeedling className="text-blue-600 text-4xl mb-4" />, 
      title: 'Gardening', 
      description: 'Learning about plants, growing food, and caring for the environment.'
    },
    { 
      icon: <FaLaptopCode className="text-blue-600 text-4xl mb-4" />, 
      title: 'Technology', 
      description: 'Developing computer skills and exploring digital creativity and communication.'
    }
  ];

  return (
    <div className="activity-day-center">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Oghosa Adult Day Activity Center | Euclid, OH</title>
        <meta name="description" content="OGHOSA Adult Day Activity Center in Euclid provides person-centered programs that enhance care and support for individuals with disabilities through hands-on activities." />
        <meta name="keywords" content="Activity Day Center, Adult Day Program, Euclid Ohio, Oghosa, Adult Day Care, Person-centered thinking, Disability Support, Life Skills Training, Community Integration, Special Needs Activities, Day Program Euclid, Adult Day Services" />
        <meta name="author" content="Oghosa Home Health Care & Transportation" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Oghosa Adult Day Activity Center | Euclid, OH" />
        <meta property="og:description" content="Person-centered adult day programs that enhance care and support for individuals with disabilities in Cleveland, Ohio." />
        <meta property="og:image" content="/Images/activity-center1.png" />
        <meta property="og:url" content="https://oghosahomecare.com/activity-day-center" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oghosa Adult Day Activity Center | Euclid, OH" />
        <meta name="twitter:description" content="Person-centered adult day programs that enhance care and support for individuals with disabilities." />
        <meta name="twitter:image" content="/Images/activity-center1.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://oghosahomecare.com/activity-day-center" />
      </Helmet>

      <Header logo="/Images/ogosa-logo-nobg.png" />
      
      {/* Parallax Banner */}
      <Parallax
        bgImage="/Images/activity-center2.png"
        strength={500}
        className="parallax-banner"
        bgImageStyle={{ 
          width: '100%', 
          height: 'auto',
          objectFit: 'cover',
        }}
      >
        <div className="overlay">
          <h1 className="banner-title">Activity Day Center</h1>
        </div>
      </Parallax>

      {/* Main Description Section */}
      <div ref={ref1} className={`description-section bg-blue-900 text-white py-16 px-8 text-center transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OGHOSA Adult Day Activity Program
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Adult Day Activity Center provides a range of programs that enhance the care and support for each individual. 
          We create a nurturing environment where adults with disabilities can engage in meaningful activities, develop skills, 
          and build relationships in a safe and supportive setting.
        </motion.p>
      </div>

      {/* Our Approach Section */}
      <div ref={ref2} className={`approach-section py-16 px-8 bg-gray-100 transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Our Approach</h2>
          
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img src="/Images/ADC1.jpg" alt="Person-centered Approach to Adult Day Program" className="rounded-lg shadow-xl max-w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Person-Centered Thinking</h3>
              <p className="text-lg mb-4">
                Our staff are driven by valued Person-centered thinking, a set of core skills that our Service Providers 
                use to see beyond a disability to support an individual in obtaining a life that he or she would like.
              </p>
              <p className="text-lg">
                We focus on each person's unique strengths, preferences, and needs, ensuring that every individual has 
                a voice in their daily activities and long-term goals.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <img src="/Images/IMG_0184.jpg" alt="Experiential Learning in Adult Day Program" className="rounded-lg shadow-xl max-w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Hands-On, Experiential Programming</h3>
              <p className="text-lg mb-4">
                Programming is hands-on, experiential, and intended to encourage "adulting" as well as creativity. 
                Activities address critical life skills through the inclusion in community activities and opportunities 
                to practice social skills.
              </p>
              <p className="text-lg">
                We believe in learning by doing, creating opportunities for meaningful engagement that build confidence, 
                independence, and a sense of accomplishment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div ref={ref3} className={`activities-section py-16 px-8 transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Activities</h2>
        <p className="text-lg text-center max-w-4xl mx-auto mb-12">
          Our activities appeal to member interests and are designed to build skills while having fun. We offer a variety of 
          engaging programs that promote growth, learning, and social connection.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="icon-container">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={ref4} className={`gallery-section py-16 px-8 bg-gray-100 transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="gallery-grid max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section for SEO */}
      <div className="benefits-section py-16 px-8 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Benefits of Our Adult Day Program</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="benefit-card p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Enhanced Social Interaction</h3>
            <p>Our program provides opportunities for meaningful social connections and friendships, reducing isolation.</p>
          </div>
          <div className="benefit-card p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Skill Development</h3>
            <p>Participants develop life skills, communication abilities, and increased independence through structured activities.</p>
          </div>
          <div className="benefit-card p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Caregiver Support</h3>
            <p>Provides respite for caregivers while ensuring loved ones are engaged in enriching activities in a safe environment.</p>
          </div>
          <div className="benefit-card p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Community Integration</h3>
            <p>Activities include community outings that help participants connect with the broader Cleveland community.</p>
          </div>
          <div className="benefit-card p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Structured Routine</h3>
            <p>Consistent daily schedule provides structure that promotes emotional well-being and cognitive function.</p>
          </div>
          <div className="benefit-card p-6 bg-blue-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Professional Support</h3>
            <p>Qualified staff with expertise in disability support services ensure personalized attention and care.</p>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="cta-section text-center py-16 px-8 bg-blue-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Activity Day Center?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today to learn more about enrollment, schedules, and how our Activity Day Center in Euclid, Ohio can benefit you or your loved one.
        </p>
        <a 
          href="/contact-us" 
          className="cta-button bg-white text-blue-800 px-8 py-3 rounded-full font-bold text-lg inline-block transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100"
        >
          Contact Us
        </a>
      </div>

      {/* FAQ Section for SEO */}
      <div className="faq-section py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Frequently Asked Questions</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-800">What is an Adult Day Activity Center?</h3>
            <p className="text-gray-700">
              An Adult Day Activity Center provides a structured program of activities and support services for adults with disabilities in a safe, supervised environment during daytime hours.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Who can benefit from the Oghosa Activity Day Program?</h3>
            <p className="text-gray-700">
              Our program is designed for adults with developmental disabilities, physical challenges, or other special needs who would benefit from structured activities, socialization, and skill development.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-800">What are the hours of operation?</h3>
            <p className="text-gray-700">
              Our Activity Day Center operates Monday through Friday from 9:00 AM to 5:00 PM. Please contact us for information about specific scheduling options.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Is transportation provided?</h3>
            <p className="text-gray-700">
              Yes, Oghosa provides transportation services to and from our Activity Day Center for clients in the Greater Cleveland area, including Cuyahoga County and Lake County.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-blue-800">How do I enroll someone in the program?</h3>
            <p className="text-gray-700">
              To enroll, please contact us through our website or call (216) 261-0880 to schedule an initial assessment. We'll discuss individual needs and determine the most appropriate program options.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ActivityDayCenter; 