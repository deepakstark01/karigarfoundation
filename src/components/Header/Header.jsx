import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import { FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);
  const [language, setLanguage] = useState('en'); 
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay before closing the submenu
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Logic to handle language change in the app can go here, like using i18next
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const MenuItem = ({ to, children, submenu }) => {
    const itemRef = useRef(null);

    return (
      <li
        ref={itemRef}
        className="relative group"
        onMouseEnter={() => handleMouseEnter(to)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={to} className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out">
          {children}
          {submenu && (
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>
        {submenu && activeMenu === to && (
          <ul 
            className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out opacity-100"
            onMouseEnter={() => handleMouseEnter(to)}
            onMouseLeave={handleMouseLeave}
          >
            {submenu.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out">
                  <FaArrowRight className="mr-2" /> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-102">
      <div className="container mx-auto flex items-center justify-between p-4">
      <Link to="/">
  <img 
    src="/Logo.jpeg" 
    alt="NGO Logo" 
    className="h-20 w-20 rounded-full border-4 border-gray-300 transition-transform duration-300 ease-in-out transform hover:scale-105" 
  />
</Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-8">
            <MenuItem to="/">
              <HomeIcon className="h-5 w-5 mr-1 transition-transform duration-300 ease-in-out transform hover:scale-125" />
              Home
            </MenuItem>
            <MenuItem to="/about" submenu={[
              { to: "/mission", label: "Our Mission" },
              { to: "/values", label: "Our Values" },
              { to: "/history", label: "Our History" },
              { to: "/team", label: "Our Team" }
            ]}>
              About Us
            </MenuItem>
            <MenuItem to="/impact" submenu={[
              { to: "/social-impact", label: "Community Outreach" },
              { to: "/success-stories", label: "Success Stories" },
              { to: "/global-impact", label: "Global Impact" },
              { to: "/get-involved", label: "Get Involved" }
            ]}>
              Impact
            </MenuItem>
            <MenuItem to="/get-involved" submenu={[
              { to: "/volunteer", label: "Volunteer With Us" },
              { to: "/donate", label: "Donate" },
              { to: "/partnerships", label: "Corporate Partnerships" },
              { to: "/stay-connected", label: "Stay Connected" }
            ]}>
              Get Involved
            </MenuItem>
            <MenuItem to="/projects" submenu={[
              { to: "/ongoing-projects", label: "Ongoing Projects" },
              { to: "/past-projects", label: "Past Projects" },
              { to: "/featured-projects", label: "Featured Projects" }
            ]}>
              Projects
            </MenuItem>
            <MenuItem to="/contact">Contact</MenuItem>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
        <select
            value={language}
            onChange={handleLanguageChange}
            className="text-blue-600 bg-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
          <button className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FaSearch />
          </button>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <FaInstagram />
          </a>
          <Link to="/donate" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-300 transition-colors duration-300 ease-in-out">
            Contribute
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;