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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-blue-900/95 text-white backdrop-blur">
      {/* Logo */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center">
          <Link
            to="/"
            className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
          >
            <img src={logo} alt="Oghosa" className="h-12 w-auto lg:h-20" />
          </Link>
        </div>

      {/* Desktop Navigation - hidden on small screens */}
      <nav className="hidden md:flex flex-row items-center space-x-6" aria-label="Main">
        <ul className="flex items-center space-x-6">
          <li className={`${isHomePage ? 'active' : ''}`}>
            <Link
              to="/"
              className="font-body text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="font-body text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
            >
              About Us
            </Link>
          </li>
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="flex items-center font-body text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm cursor-pointer"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
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
              <ul className="absolute left-0 top-10 bg-blue-800 rounded-md shadow-md w-56 p-2 z-50 border border-white/10">
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
          <li>
            <Link
              to="/contact-us"
              className="font-body text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="font-body text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-900 shadow-sm transition-colors hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile hamburger button - only visible on small screens */}
      <button 
        className="md:hidden text-white focus:outline-none min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer"
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
                  className="font-body block w-full rounded-md p-3 hover:bg-blue-700/70 transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Home
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  to="/about-us" 
                  onClick={toggleMenu} 
                  className="font-body block w-full rounded-md p-3 hover:bg-blue-700/70 transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
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
                  className="font-body block w-full rounded-md p-3 hover:bg-blue-700/70 transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Contact Us
                </Link>
              </li>
              <li className="w-full">
                <Link 
                  to="/faq" 
                  onClick={toggleMenu} 
                  className="font-body block w-full rounded-md p-3 hover:bg-blue-700/70 transition-colors focus-visible:ring-2 focus-visible:ring-white/60"
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
              className="font-body block w-full bg-white text-blue-900 py-3 rounded-md text-center font-semibold hover:bg-blue-100 transition-colors shadow-md focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
