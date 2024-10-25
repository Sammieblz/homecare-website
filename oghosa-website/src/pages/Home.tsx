import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion'; 
import { FaCar, FaFacebook, FaHeartbeat } from 'react-icons/fa';


const Home: React.FC = () => {
  return (
    <>
      <Header logo="path/to/your/logo.png" />
      <section className="relative h-screen">
        {/* Background Image */}
        <img
          src="src/assets/images/homepage.png"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-center text-white px-10">
          <div className="container mx-auto text-left max-w-lg">
            <motion.h1
              className="text-5xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Your Trusted Home Health
            </motion.h1>

            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Providing Compassionate In-Home Care and Safe Transportation Solutions for Your Loved Ones
            </motion.p>

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>

      {/* Blue Section Divider */}
      <section className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
          <motion.p
            className="text-lg md:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            At Home Health Care & Transportation, LLC, we are dedicated to enhancing the lives of our clients by delivering exceptional home health care and transportation services. Our team of experienced professionals works tirelessly to ensure your loved ones receive the personalized care and support they need to maintain their independence and thrive in the comfort of their own homes.
          </motion.p>

          <motion.button
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Intro Section */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Oghosa Home Health Care & Transportation, LLC
          </motion.h2>
          <motion.p
            className="text-lg mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We provide home care and transportation services for the elderly community in Cleveland OH area.
          </motion.p>
        </div>

        {/* BBB Profile Section */}
        <div className="text-center mb-8">
          <motion.a
            href="https://www.bbb.org/us/oh/euclid/profile/home-care/oghosa-home-health-care-llc-0312-92018725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            See Our Better Business Profile A+
          </motion.a>
        </div>

        {/* Services Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start">
            <FaHeartbeat className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Home Health Care</h3>
              <p className="text-lg">
                Our well-trained and experienced staff is committed to making the care of our clients our top priority.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaCar className="text-red-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">Transportation Services</h3>
              <p className="text-lg">
                Our vehicles are well maintained to ensure your complete satisfaction. We go the extra mile to satisfy the needs of our clients and their families.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg">
            <h3 className="text-xl font-bold">We'd Love Your Feedback</h3>
            <p>See us on Facebook</p>
          </div>
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaFacebook className="text-6xl text-blue-600 hover:text-blue-700" />
          </motion.a>
        </div>
      </div>
    </section>

      
    </>
  );
};

export default Home;
