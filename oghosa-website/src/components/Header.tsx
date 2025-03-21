import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center h-20 bg-blue-900 text-white p-4 px-6 lg:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Oghosa" className="h-12 w-auto lg:h-20" />
        </Link>
      </div>

      {/* Desktop Navigation - hidden on small screens */}
      <nav className="hidden md:flex flex-row items-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li className={`${isHomePage ? 'active' : ''} hover:scale-105 transition-transform duration-300`}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="flex items-center focus:outline-none"
            >
              Services
              <svg 
                className={`ml-1 w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 top-10 bg-blue-800 rounded-md shadow-md w-48 p-2 z-50">
                <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                  <Link to="/home-care-services">Home Care Services</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                  <Link to="/transportation-services">Transportation Services</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                  <Link to="/activity-day-center">Activity Day Center</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile hamburger button - only visible on small screens */}
      <button 
        className="md:hidden text-white focus:outline-none" 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col backdrop-blur-sm bg-blue-900/90">
          {/* Mobile header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-blue-800/50">
            <div className="text-xl font-semibold">Menu</div>
            <button 
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu links */}
          <div className="flex-grow overflow-y-auto">
            <ul className="flex flex-col px-4 space-y-4 pt-6 pb-6">
              <li className="w-full">
                <Link 
                  to="/" 
                  onClick={toggleMenu} 
                  className="block w-full p-2 hover:bg-blue-700/70 rounded transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  to="/about-us" 
                  onClick={toggleMenu} 
                  className="block w-full p-2 hover:bg-blue-700/70 rounded transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="w-full">
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center justify-between w-full p-2 hover:bg-blue-700/70 rounded transition-colors"
                >
                  <span>Services</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="mt-1 ml-3 space-y-2 border-l-2 border-blue-300/50 pl-3">
                    <li>
                      <Link 
                        to="/home-care-services" 
                        onClick={toggleMenu} 
                        className="block p-2 hover:bg-blue-700/70 rounded transition-colors"
                      >
                        Home Care Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/transportation-services" 
                        onClick={toggleMenu} 
                        className="block p-2 hover:bg-blue-700/70 rounded transition-colors"
                      >
                        Transportation Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/activity-day-center" 
                        onClick={toggleMenu} 
                        className="block p-2 hover:bg-blue-700/70 rounded transition-colors"
                      >
                        Activity Day Center
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="w-full">
                <Link 
                  to="/contact-us" 
                  onClick={toggleMenu} 
                  className="block w-full p-2 hover:bg-blue-700/70 rounded transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  to="/faq" 
                  onClick={toggleMenu} 
                  className="block w-full p-2 hover:bg-blue-700/70 rounded transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started button fixed at the bottom */}
          <div className="border-t border-blue-800/50 p-4 bg-blue-900/90 backdrop-blur-sm">
            <Link
              to="/contact-us"
              onClick={toggleMenu}
              className="block w-full bg-white text-blue-900 py-3 rounded-md text-center font-semibold hover:bg-gray-100 transition-colors shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
