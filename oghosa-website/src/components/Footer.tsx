import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src="/Images/ogosa-logo-nobg.png" alt="Oghosa Logo" className="h-12 w-auto lg:h-20" />
          <p className="font-body text-sm text-center md:text-left text-white/80 leading-relaxed">
            © {new Date().getFullYear()} Oghosa Home Health Care & Transportation, LLC<br />
            All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-display text-base font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="font-body space-y-2 text-sm text-white/80">
            <li><a href="/" className="hover:text-white hover:underline underline-offset-4">Home</a></li>
            <li><a href="/home-care-services" className="hover:text-white hover:underline underline-offset-4">Home Care Services</a></li>
            <li><a href="/transportation-services" className="hover:text-white hover:underline underline-offset-4">Transportation Services</a></li>
            <li><a href="/activity-day-center" className="hover:text-white hover:underline underline-offset-4">Activity Day Center</a></li>
            <li><a href="/about-us" className="hover:text-white hover:underline underline-offset-4">About Us</a></li>
            <li><a href="/contact-us" className="hover:text-white hover:underline underline-offset-4">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white hover:underline underline-offset-4">FAQ</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center md:text-left">
          <h4 className="font-display text-base font-semibold mb-4 text-white">Our Services</h4>
          <ul className="font-body space-y-2 text-sm text-white/80">
            <li><a href="/home-care-services" className="hover:text-white hover:underline underline-offset-4">Home Health Care</a></li>
            <li><a href="/transportation-services" className="hover:text-white hover:underline underline-offset-4">Transportation Services</a></li>
            <li><a href="/activity-day-center" className="hover:text-white hover:underline underline-offset-4">Activity Day Center</a></li>
            <li><a href="/transportation-services#development-disability" className="hover:text-white hover:underline underline-offset-4">Transportation for Development Disability</a></li>
            <li><a href="/transportation-services#cleveland-school" className="hover:text-white hover:underline underline-offset-4">Transportation for Cleveland School District</a></li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="text-center md:text-left">
          <h4 className="font-display text-base font-semibold mb-4 text-white">Connect with Us</h4>
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
