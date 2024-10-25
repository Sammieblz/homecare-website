import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface HeaderProps {
  logo: string; // Path to the logo image
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle menu toggle for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle dropdown for Services link
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center h-16 bg-blue-900 text-white p-4 px-16 py-10">
        <div className="flex items-center">
          <img src={logo} alt="Oghosa" className="h-8 mr-4" />
          <span className="text-white font-bold text-lg">Oghosa</span>
        </div>
        <nav className="hidden md:flex flex-row mr-5">
          <ul className="flex flex-row items-center">
            <li className={`${isHomePage ? 'active' : ''} mr-6 hover:scale-105 transition-transform duration-300`}>
              <Link to="/">Home</Link>
            </li>
            <li className="mr-6 hover:scale-105 transition-transform duration-300">
              <Link to="/about-us">About</Link>
            </li>
            <li className="relative mr-6 flex items-center">
              <button onClick={toggleDropdown} className="focus:outline-none flex items-center">
                Services 
                {isDropdownOpen ? <ArrowDropUpIcon className="ml-1" /> : <ArrowDropDownIcon className="ml-1" />}
              </button>
              {/* Dropdown links */}
              {isDropdownOpen && (
                <ul className="absolute left-0 top-8 bg-blue-800 rounded-md shadow-md w-48 p-2 z-50">
                  <li className="px-4 py-2 font-bold hover:bg-blue-700 hover:font-bold transition-colors">
                    <Link to="/home-care-services">Home Care Services</Link>
                  </li>
                  <li className="px-4 py-2 font-bold hover:bg-blue-700 hover:font-bold transition-colors">
                    <Link to="/transportation-services">Transportation Services</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mr-6 hover:scale-105 transition-transform duration-300">
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/get-started" className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white hover:scale-105 transition-transform duration-500">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu for mobile */}
        <IconButton className="block md:hidden text-white" onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* Overlay Menu for Mobile (Right-side) */}
        {isMenuOpen && (
          <div className="fixed inset-y-0 right-0 bg-blue-900 bg-opacity-90 z-50 w-64 flex flex-col items-center justify-start pt-10">
            <IconButton className="absolute top-5 right-5 text-white" onClick={toggleMenu}>
              <CloseIcon fontSize="large" />
            </IconButton>
            <ul className="flex flex-col items-start mt-20 space-y-6 w-full pl-10">
              <li className="text-lg hover:scale-105 transition-transform duration-300">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="text-lg hover:scale-105 transition-transform duration-300">
                <Link to="/about-us" onClick={toggleMenu}>About</Link>
              </li>
              <li className="relative text-lg hover:scale-105 transition-transform duration-300 w-full">
                <button onClick={toggleDropdown} className="focus:outline-none flex items-center w-full">
                  Services 
                  {isDropdownOpen ? <ArrowDropUpIcon className="ml-1" /> : <ArrowDropDownIcon className="ml-1" />}
                </button>
                {/* Mobile Dropdown links */}
                {isDropdownOpen && (
                  <ul className="bg-blue-800 rounded-md shadow-md w-full pl-4">
                    <li className="py-2 font-bold hover:underline hover:font-bold transition-colors">
                      <Link to="/home-care-services" onClick={toggleMenu}>Home Care Services</Link>
                    </li>
                    <li className="py-2 font-bold hover:underline hover:font-bold transition-colors">
                      <Link to="/transportation-services" onClick={toggleMenu}>Transportation Services</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="text-lg hover:scale-105 transition-transform duration-300">
                <Link to="/contact-us" onClick={toggleMenu}>Contact</Link>
              </li>
              <li className="text-lg bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white hover:scale-105 transition-transform duration-500">
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
