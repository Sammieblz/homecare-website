import React from 'react';
import { PopupModal } from 'react-calendly';
import { useState, useEffect, RefObject, useRef } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion'; 
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import BBBLogo from '/Images/blue-seal-153-100-oghosahomehealthcare-b8fbfd2.png';
import HealthCareImage from '/Images/nursing-home.png';
import TransportationImage from '/Images/van.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


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



const Home: React.FC = () => {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);
  
  
  return (
    <>
      <Helmet>
        <title>Oghosa Home Health Care & Transportation | Euclid, Ohio</title>
        <meta name="description" content="Oghosa provides compassionate in-home health care, transportation services, and adult day programs in Cleveland, Ohio. DODD-certified and family-owned." />
        <meta name="keywords" content="home health care, transportation services, adult day program, developmental disabilities, Cleveland, Euclid, Ohio, DODD certified" />
        <meta property="og:title" content="Oghosa Home Health Care & Transportation" />
        <meta property="og:description" content="Compassionate home health care, transportation services, and adult day programs for individuals with developmental disabilities in Cleveland, Ohio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oghosahomecare.com/" />
        <meta property="og:image" content="/Images/homepage.png" />
        <link rel="canonical" href="https://oghosahomecare.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Oghosa Home Health Care & Transportation",
              "description": "Home health care, transportation services, and adult day programs",
              "url": "https://oghosahomecare.com/",
              "telephone": "+1-216-800-9152",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Euclid",
                "addressLocality": "Cleveland",
                "addressRegion": "OH",
                "postalCode": "44117",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.5932,
                "longitude": -81.5267
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/OghosaHomeHealthCareLLC/",
                "https://www.google.com/search?q=oghosa+home+care+euclid"
              ]
            }
          `}
        </script>
      </Helmet>
      <Header logo="/Images/ogosa-logo-nobg.png" />
      <section className="relative h-screen">
        {/* Background Image */}
        <img
          src="/Images/homepage.png"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-center text-white px-10">
          <div className="container items-center mx-auto text-center max-w-lg">
            <motion.h1
              className="text-5xl text-center font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Oghosa Home Health Care & Transportation, LLC
            </motion.h1>

            <motion.p
              className="text-lg text-center mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Providing Compassionate In-Home Care and Safe Transportation Solutions for Your Loved Ones.<br/>
              <span className='font-semibold text-center'>"Oghosa" means God's own</span>
            </motion.p>

            <Link to="home-care-services">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Learn More
              </motion.button>
            </Link>

          </div>
        </div>
      </section>

      {/* Blue Section Divider */}
      <section className="bg-blue-900 text-white py-8">
        <div
          ref={ref1}
          className={`container mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between transition-opacity ease-in duration-1000 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <motion.p
            className="text-lg text-center md:text-left md:w-2/3 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            At Oghosa Home Health Care & Transportation, LLC, we are dedicated to enhancing the lives of our clients by delivering exceptional home health care and transportation services. Our team of experienced professionals works tirelessly to ensure your loved ones receive the personalized care and support they need to maintain their independence and thrive in the comfort of their own homes.
          </motion.p>

          <motion.button
            onClick={() => setCalendlyOpen(true)} // Trigger Calendly modal
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-md mt-4 md:mt-0 md:ml-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>


      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/oghosatransport"
        onModalClose={() => setCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root') as HTMLElement}
      />


      <section className="bg-white text-gray-900 py-12">
  <div className={`container mx-auto px-6`}>
    {/* Header Section */}
    <div ref={ref2} className={`text-center mb-12 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
      <h1 className="text-4xl font-bold">Your Trusted Home Health</h1>
      <p className="text-lg mt-4">
        Oghosa Home Health Care & Transportation, LLC provides a variety of home health care and transportation services for the elderly and physically challenged community in the Greater Cleveland, Ohio area. We are family-owned and operated and are DODD Certified to provide services for you and your family.
      </p>
      <a
        href="https://www.bbb.org/us/oh/euclid/profile/home-care/oghosa-home-health-care-llc-0312-92018725"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4"
      >
        <img src={BBBLogo} alt="BBB Logo" className="w-24 h-auto hover:scale-105 transition-transform duration-300" />
      </a>
    </div>

    {/* Our Services Section */}
    <div ref={ref3} className={`text-center mb-12 transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-3xl font-bold mb-8">Our Services Include</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <a href="/home-care-services" className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start transform hover:scale-105 transition-transform duration-300">
          <img src={HealthCareImage} alt="Home Health Care" className="w-16 h-16 mr-4 rounded-full" />
          <div>
            <h3 className="text-xl font-bold mb-2">Home Health Care</h3>
            <p className="text-lg">Our well-trained and experienced staff is committed to making the care of our clients our top priority.</p>
          </div>
        </a>

        {/* Card 2 */}
        <a href="/transportation-services" className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start transform hover:scale-105 transition-transform duration-300">
          <img src={TransportationImage} alt="Transportation Services" className="w-16 h-16 mr-4 rounded-full" />
          <div>
            <h3 className="text-xl font-bold mb-2">Transportation Services</h3>
            <p className="text-lg">Our vehicles are well maintained to ensure your complete satisfaction. We go the extra mile to satisfy the needs of our clients and their families.</p>
          </div>
        </a>

        {/* Card 3 - Activity Day Center */}
        <a href="/activity-day-center" className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start transform hover:scale-105 transition-transform duration-300">
          <img src="/Images/activity-center1.png" alt="Activity Day Center" className="w-16 h-16 mr-4 rounded-full object-cover" />
          <div>
            <h3 className="text-xl font-bold mb-2">Activity Day Center</h3>
            <p className="text-lg">Our Adult Day Program provides person-centered activities and life skills training in a supportive environment.</p>
          </div>
        </a>
      </div>
    </div>

    {/* Comprehensive In-Home Care Section */}
    <div className="bg-blue-200 py-12 px-4 sm:px-6 md:px-12 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive In-Home Care</h2>

        <div 
          ref={ref4} 
          className={`flex flex-col md:flex-row md:justify-between md:items-center transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}
        >
          {/* Quality Assurance Section */}
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Quality Assurance</h4>
            <p className="text-gray-700 mx-auto md:ml-0 md:mr-8 max-w-md">
              At our home healthcare agency, we are committed to ensuring that every client receives personalized and high-quality care.
            </p>
          </div>

          <div className="flex justify-center md:justify-end md:w-1/3">
            <img src="/Images/transportation1.jpg" alt="Quality Assurance" className="rounded-lg w-full md:w-auto" />
          </div>
        </div>

        {/* Compassionate Care Section */}
        <div 
          ref={ref5} 
          className={`mt-12 flex flex-col md:flex-row md:justify-between md:items-center bg-blue-50 p-8 rounded-lg transition-opacity ease-in duration-1000 ${isVisible5 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
            <img src="/Images/independent-client.png" alt="Compassionate Care" className="rounded-lg w-full md:w-auto" />
          </div>

          <div className="text-center md:text-left md:w-1/2 md:pl-8">
            <h4 className="text-2xl font-bold mb-4">Compassionate Care</h4>
            <p className="text-gray-700 mx-auto md:ml-0 max-w-md">
              We are dedicated to delivering care with kindness and professionalism. Our team is committed to providing compassionate care that respects the dignity and individuality of each client.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Activity Day Program Feature Section */}
    <div className="mt-16 mb-16">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Column */}
            <div className="lg:w-1/2">
              <img 
                src="/Images/IMG_0182.jpg" 
                alt="Oghosa Activity Day Center participants engaged in enriching activities" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Content Column */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Discover Our Activity Day Program
              </h2>
              <p className="text-lg mb-6">
                Our Adult Day Program provides person-centered activities, life skills training, and 
                socialization opportunities for adults with developmental disabilities in a supportive, 
                engaging environment. We focus on enhancing independence, building confidence, and 
                improving quality of life through structured activities and individualized care.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Engaging recreational and educational activities</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Skill development in a supportive social environment</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p>Transportation to and from our center available</p>
                </div>
              </div>

              <Link
                to="/activity-day-center"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Explore Our Activity Day Center
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hidden SEO-friendly content */}
        <div className="hidden">
          <h2>Oghosa Adult Day Program in Cleveland, Ohio</h2>
          <p>
            Adult day program services for individuals with developmental disabilities in Cleveland, 
            Ohio. DODD-certified day program offering socialization, recreation, and life skills training.
            Structured activities, community integration, and person-centered care in Euclid, OH.
          </p>
        </div>
      </div>
    </div>

    {/* Feedback Section */}
    <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
      <div className="text-lg text-center md:text-left">
        <h3 className="text-xl font-bold">We'd Love Your Feedback</h3>
        <p>See us on Facebook & Google Reviews</p>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-4">
        <a
          href="https://www.facebook.com/OghosaHomeHealthCareLLC/reviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-6xl text-blue-600 hover:text-blue-700 transition-colors duration-300" />
        </a>
        <a
          href="https://www.google.com/search?q=oghosa+home+care+euclid&rlz=1C1RXQR_enUS1112US1112&oq=ogh&gs_lcrp=EgZjaHJvbWUqCAgDEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYOTIGCAYQRRg8MgYIBxBFGDzSAQgyOTM2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x88310008a756c841:0x51b5b3f4e5a9add3,3,,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle className="text-6xl text-red-600 hover:text-red-700 transition-colors duration-300" />
        </a>
      </div>
    </div>
  </div>
</section>
    <Footer />
      
    </>
  );
};

export default Home;
