import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="min-w-0 bg-brand-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-10 lg:px-16">
        {/* Logo & Copyright */}
        <div className="flex min-w-0 flex-col items-center space-y-4 md:items-start">
          <img src="/Images/ogosa-logo-nobg.png" alt="Oghosa Logo" className="h-12 w-auto lg:h-20" />
          <p className="font-body text-sm text-center md:text-left text-white/80 leading-relaxed">
            © {new Date().getFullYear()} Oghosa Home Health Care & Transportation, LLC<br />
            All rights reserved.
          </p>
        </div>

        {/* Site pages */}
        <div className="min-w-0 text-center md:text-left">
          <h4 className="font-display text-base font-semibold mb-4 text-white">Site</h4>
          <ul className="font-body space-y-2 text-sm text-white/80">
            <li><Link to="/" className="break-words hover:text-white hover:underline underline-offset-4">Home</Link></li>
            <li><Link to="/about-us" className="break-words hover:text-white hover:underline underline-offset-4">About Us</Link></li>
            <li><Link to="/contact-us" className="break-words hover:text-white hover:underline underline-offset-4">Contact Us</Link></li>
            <li><Link to="/faq" className="break-words hover:text-white hover:underline underline-offset-4">FAQ</Link></li>
          </ul>
        </div>

        {/* Services (single list; no duplicate routes) */}
        <div className="min-w-0 text-center md:text-left">
          <h4 className="font-display text-base font-semibold mb-4 text-white">Services</h4>
          <ul className="font-body space-y-2 text-sm text-white/80 hyphens-auto">
            <li><Link to="/home-care-services" className="break-words hover:text-white hover:underline underline-offset-4">Home health care</Link></li>
            <li><Link to="/transportation-services" className="break-words hover:text-white hover:underline underline-offset-4">Transportation</Link></li>
            <li><Link to="/activity-day-center" className="break-words hover:text-white hover:underline underline-offset-4">Activity day center</Link></li>
            <li>
              <Link
                to="/transportation-services#development-disability"
                className="break-words hover:text-white hover:underline underline-offset-4"
              >
                Transportation: developmental disability
              </Link>
            </li>
            <li>
              <Link
                to="/transportation-services#cleveland-school"
                className="break-words hover:text-white hover:underline underline-offset-4"
              >
                Transportation: Cleveland schools
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div className="min-w-0 text-center md:col-span-2 md:text-left lg:col-span-1">
          <h4 className="font-display text-base font-semibold mb-4 text-white">Connect with Us</h4>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="https://www.facebook.com/OghosaHomeHealthCareLLC/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-white transition-colors duration-300 hover:text-brand-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-white transition-colors duration-300 hover:text-brand-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/company/oghosa-homecare-and-transportation-servies-llc/about/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-white transition-colors duration-300 hover:text-brand-600">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/oghosahomehealthcare/?hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-white transition-colors duration-300 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
