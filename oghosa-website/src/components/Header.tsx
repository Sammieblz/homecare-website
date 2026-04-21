import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const toggleDesktopServices = () => {
    setIsDesktopServicesOpen((open) => !open);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen((open) => !open);
  };

  const mobileMenu =
    isMenuOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[200] flex flex-col bg-brand-900/95 text-white backdrop-blur-sm md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-brand-800/50 p-4">
          <div className="text-xl font-semibold">Menu</div>
          <button
            type="button"
            onClick={toggleMenu}
            className="rounded-md p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Close menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <ul className="flex flex-col space-y-1 px-4 pb-6 pt-6">
            <li className="w-full">
              <Link
                to="/"
                onClick={toggleMenu}
                className="font-body block w-full rounded-md p-3 transition-colors hover:bg-brand-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/about-us"
                onClick={toggleMenu}
                className="font-body block w-full rounded-md p-3 transition-colors hover:bg-brand-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                About Us
              </Link>
            </li>
            <li className="w-full">
              <button
                type="button"
                onClick={toggleMobileServices}
                className="flex w-full items-center justify-between rounded-md p-3 text-left transition-colors hover:bg-brand-700/70"
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <svg
                  className={`h-5 w-5 shrink-0 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMobileServicesOpen ? (
                <ul className="ml-3 mt-1 space-y-1 border-l-2 border-brand-300/50 pl-3">
                  <li>
                    <Link
                      to="/home-care-services"
                      onClick={toggleMenu}
                      className="block rounded-md p-2 transition-colors hover:bg-brand-700/70"
                    >
                      Home Care Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/transportation-services"
                      onClick={toggleMenu}
                      className="block rounded-md p-2 transition-colors hover:bg-brand-700/70"
                    >
                      Transportation Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/activity-day-center"
                      onClick={toggleMenu}
                      className="block rounded-md p-2 transition-colors hover:bg-brand-700/70"
                    >
                      Activity Day Center
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="w-full">
              <Link
                to="/contact-us"
                onClick={toggleMenu}
                className="font-body block w-full rounded-md p-3 transition-colors hover:bg-brand-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Contact Us
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/faq"
                onClick={toggleMenu}
                className="font-body block w-full rounded-md p-3 transition-colors hover:bg-brand-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-brand-800/50 bg-brand-900/90 p-4 backdrop-blur-sm">
          <Link
            to="/contact-us"
            onClick={toggleMenu}
            className="font-body block w-full rounded-md bg-white py-3 text-center font-semibold text-brand-900 shadow-md transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Get Started
          </Link>
        </div>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-50 min-w-0 border-b border-white/10 bg-brand-900/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-16">
        <div className="flex items-center">
          <Link
            to="/"
            className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
          >
            <img src={logo} alt="Oghosa" className="h-12 w-auto lg:h-20" />
          </Link>
        </div>

        <nav className="hidden flex-row items-center space-x-6 md:flex" aria-label="Main">
          <ul className="flex items-center space-x-6">
            <li className={`${isHomePage ? 'active' : ''}`}>
              <Link
                to="/"
                className="font-body rounded-sm text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="font-body rounded-sm text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                About Us
              </Link>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={toggleDesktopServices}
                className="flex cursor-pointer items-center rounded-sm font-body text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-expanded={isDesktopServicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`ml-1 h-5 w-5 transition-transform ${isDesktopServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDesktopServicesOpen ? (
                <ul className="absolute left-0 top-10 z-50 w-56 rounded-md border border-white/10 bg-brand-800 p-2 shadow-md">
                  <li className="rounded-md px-4 py-2 transition-colors hover:bg-brand-700">
                    <Link to="/home-care-services">Home Care Services</Link>
                  </li>
                  <li className="rounded-md px-4 py-2 transition-colors hover:bg-brand-700">
                    <Link to="/transportation-services">Transportation Services</Link>
                  </li>
                  <li className="rounded-md px-4 py-2 transition-colors hover:bg-brand-700">
                    <Link to="/activity-day-center">Activity Day Center</Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link
                to="/contact-us"
                className="font-body rounded-sm text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="font-body rounded-sm text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-md text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Open menu"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenu}
    </header>
  );
};

export default Header;
