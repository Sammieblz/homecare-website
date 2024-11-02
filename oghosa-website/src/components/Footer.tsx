
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src="/Images/ogosa-logo-nobg.png" alt="Oghosa Logo" className="h-12 w-auto lg:h-20" />
          <p className="text-sm text-center md:text-left">
            © 2024 Oghosa Home Health Care & Transportation, LLC<br />
            All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/home-care-services" className="hover:underline">Home Care Services</a></li>
            <li><a href="/transportation-services" className="hover:underline">Transportation Services</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li><a href="/home-care-services" className="hover:underline">Home Health Care</a></li>
            <li><a href="/transportation-services" className="hover:underline">Transportation Services</a></li>
            <li><a href="/transportation-services#development-disability" className="hover:underline">Transportation for Development Disability</a></li>
            <li><a href="/transportation-services#cleveland-school" className="hover:underline">Transportation for Cleveland School District</a></li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/OghosaHomeHealthCareLLC/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/company/oghosa-homecare-and-transportation-servies-llc/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/oghosahomehealthcare/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
