import Header from '../components/Header'; 
import Van from '../components/Van'; 
import { motion } from 'framer-motion'; 
import '../styles/TransportationServices.css'; 
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TransportationServices = () => { 
  const containerVariants = { 
    initial: { opacity: 0, y: 50 }, 
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.5, 
        duration: 1, 
        when: 'beforeChildren', 
        staggerChildren: 0.3, 
      }, 
    }, 
  }; 

  const textVariants = { 
    initial: { opacity: 0, x: -50 }, 
    animate: { opacity: 1, x: 0 }, 
  }; 

  return ( 
    <> 
      <Header logo="/public/Images/oghosa-logo1.png" /> 
      <section className="transportation-section"> 
        <Van className="van-animation" /> 
        <motion.div className="content" variants={containerVariants} initial="initial" animate="animate"> 
          <motion.h1 className="title" variants={textVariants}> 
            Reliable and Safe Transportation Services 
          </motion.h1> 
          <motion.p className="description" variants={textVariants}> 
            OGHOSA owns and operates a fleet of vehicles offering door-to-door transportation to community activities. 
            Drivers are carefully vetted and consistent, ensuring individual needs are met. Our services cover the Greater Cleveland Area, Cuyahoga County, and Lake County. 
          </motion.p> 
          <motion.p className="description" variants={textVariants}> 
            Our staff is dedicated to making client care our top priority. Our vehicles are well-maintained to ensure safety and satisfaction. We go the extra mile to meet the needs of our clients and their families. 
          </motion.p> 
          <motion.p className="description" variants={textVariants}> 
            Whether it's a scheduled medical appointment or a spontaneous outing, OGHOSA provides reliable and accessible transportation to help our clients stay connected with their communities. 
          </motion.p> 
          <motion.p className="description" variants={textVariants}> 
            We are committed to comfort and safety on every ride, ensuring you reach your destination on time, every time. 
          </motion.p> 
          <Link to="/contact-us" className="contact-button">
            <span>Contact Us</span>
          </Link>
        </motion.div> 
      </section> 
      <Footer />
    </> 
  ); 
}; 

export default TransportationServices;
