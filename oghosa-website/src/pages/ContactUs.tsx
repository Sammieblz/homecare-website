import Header from '../components/Header';
import Form from '../components/Form';
import { FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, FaGoogle } from 'react-icons/fa';
import MapEmbed from '../components/MapEmbed';
import ScrollingCards from '../components/ScrollingCards';
import Footer from '../components/Footer';

export default function ContactUs() {
  return (
    <>
      <Header logo="/Images/ogosa-logo-nobg.png" />
      <section className="bg-gray-100 p-8 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16 animate-fade-in">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h2>
          <Form />
        </div>

        {/* Information Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Help Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 transform hover:scale-105 transition duration-500 ease-in-out">
            <FaPhone className="text-blue-500 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">We are here to help.</h4>
              <p>Our team is available to answer any questions you may have.</p>
              <p>
                Phone: <a href="tel:2162610880" className="text-blue-500 hover:underline">216-261-0880</a> or{' '}
                <a href="tel:2162358774" className="text-blue-500 hover:underline">216-235-8774</a>
              </p>
              <p>
                Email: <a href="mailto:oghosatransport@gmail.com" className="text-blue-500 hover:underline">oghosatransport@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Hours Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4 transform hover:scale-105 transition duration-500 ease-in-out">
            <FaClock className="text-blue-500 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Hours of Operation</h4>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: Closed</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4 transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p>25000 Euclid Ave #108, Euclid, OH 44117</p>
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
      </section>
      {/* Career Opportunities Section */}
      <section className="bg-gray-50 py-12 px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Career Opportunities</h2>
          <p className="text-lg text-gray-600">
            Contact Oghosa Home Health Care & Transportation, LLC Today
          </p>
          <p className="text-md text-gray-600 leading-relaxed">
            Oghosa Home Health Care & Transportation is currently looking for Home Health Care professionals. We offer a great work environment, flexible hours, and a rewarding career path. If you are a home care professional looking for a new career opportunity, please <strong>fill out the form above</strong> today!
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-100 py-12 px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Reviews</h2>
          <p className="text-md text-gray-600">
            Our patients and their families have shared their experiences with us. Here are some of these testimonials.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <ScrollingCards />
        </div>
        <div className="flex flex-col md:flex-col items-center mt-12">
          <div className="text-lg text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 text-center">We'd Love Your Feedback</h3>
            <p>See us on Facebook & Google Reviews</p>
          </div>
          <div className="flex space-x-4 p-4">
            <a href="https://www.facebook.com/OghosaHomeHealthCareLLC/reviews" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-5xl text-blue-600 hover:text-blue-300 transition-colors duration-300" />
            </a>
            <a href="https://www.google.com/search?q=oghosa+home+care+euclid&rlz=1C1RXQR_enUS1112US1112&oq=ogh&gs_lcrp=EgZjaHJvbWUqCAgDEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYOTIGCAYQRRg8MgYIBxBFGDzSAQgyOTM2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x88310008a756c841:0x51b5b3f4e5a9add3,3,,,," target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-5xl text-red-600 hover:text-red-200 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
