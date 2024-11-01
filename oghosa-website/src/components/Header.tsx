import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
    <>
      <header className="flex justify-between items-center h-20 bg-blue-900 text-white p-4 px-6 lg:px-16">
        <div className="flex items-center">
          <img src={logo} alt="Oghosa" className="h-12 w-auto lg:h-20" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex flex-row items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li className={`${isHomePage ? 'active' : ''} hover:scale-105 transition-transform duration-300`}>
              <Link to="/">Home</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="relative">
              <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                Services
                {isDropdownOpen ? (
                  <ArrowDropUpIcon className="ml-1" />
                ) : (
                  <ArrowDropDownIcon className="ml-1" />
                )}
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 top-10 bg-blue-800 rounded-md shadow-md w-48 p-2 z-50">
                  <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                    <Link to="/home-care-services">Home Care Services</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                    <Link to="/transportation-services">Transportation Services</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <Link to="/contact-us">Contact Us</Link>
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

        {/* Hamburger Icon for Mobile */}
        <IconButton className="md:hidden text-white" onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Right-Side Overlay Menu */}
        {isMenuOpen && (
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-blue-900 bg-opacity-90 z-50 transform transition-transform duration-300 translate-x-0">
            <IconButton 
              className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <ul className="flex flex-col items-start mt-20 space-y-6 pl-10 text-lg">
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
              </li>
              <li className="relative hover:scale-105 transition-transform duration-300">
                <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                  Services
                  {isDropdownOpen ? (
                    <ArrowDropUpIcon className="ml-1 text-white" />
                  ) : (
                    <ArrowDropDownIcon className="ml-1 text-white" />
                  )}
                </button>
                {isDropdownOpen && (
                  <ul className="bg-blue-800 rounded-md shadow-md w-full mt-2">
                    <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                      <Link to="/home-care-services" onClick={toggleMenu}>Home Care Services</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-700 transition-colors">
                      <Link to="/transportation-services" onClick={toggleMenu}>Transportation Services</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
              </li>
              <li className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-transform duration-500">
                <Link to="/get-started" onClick={toggleMenu}>Get Started</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
