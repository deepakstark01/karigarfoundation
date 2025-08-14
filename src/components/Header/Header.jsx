// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';

// function Header() {
//   const { t, i18n } = useTranslation();
//   const [activeMenu, setActiveMenu] = useState(null);
//   const timeoutRef = useRef(null);

//   const handleMouseEnter = (menu) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveMenu(menu);
//   };
//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setActiveMenu(null), 300);
//   };
//   useEffect(() => () => timeoutRef.current && clearTimeout(timeoutRef.current), []);

//   const MenuItem = ({ to, children, submenu }) => (
//     <li
//       className="relative group"
//       onMouseEnter={() => handleMouseEnter(to)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Link
//         to={to}
//         className="hover:text-blue-300 flex items-center transition-colors duration-300 ease-in-out"
//       >
//         {children}
//         {submenu && (
//           <svg
//             className="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-180"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         )}
//       </Link>

//       {submenu && activeMenu === to && (
//         <ul
//           className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg rounded-md overflow-hidden"
//           onMouseEnter={() => handleMouseEnter(to)}
//           onMouseLeave={handleMouseLeave}
//         >
//           {submenu.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.to}
//                 className="block px-4 py-2 flex items-center hover:bg-blue-100 transition-colors duration-300 ease-in-out"
//               >
//                 <FaArrowRight className="mr-2" /> {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );

//   return (
//     <header className="bg-white shadow w-full fixed top-0 left-0 z-[80]">
//       {/* 🔧 Make nav relative so the absolute menu anchors under it */}
//       <nav className="container mx-auto relative flex flex-wrap justify-between items-center py-4 px-4 md:px-6">
//         <div className="flex items-center space-x-3">
//           <img src="./Logo.jpeg" alt="Karigar Foundation Logo" className="h-10 w-10 rounded-full object-cover" />
//           <span className="font-bold text-xl text-black">Karigar Foundation</span>
//         </div>

//         {/* Mobile menu toggle (checkbox + label) */}
//         <input type="checkbox" id="menu-toggle" className="hidden peer" />
//         <label
//           htmlFor="menu-toggle"
//           aria-label="Toggle menu"
//           className="md:hidden block cursor-pointer text-black p-2 rounded border border-gray-300"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </label>

//         {/* 🔧 Hidden by default on mobile; shown when peer is checked */}
//         <ul
//           className="
//             hidden md:flex md:flex-row md:items-center md:space-x-4
//             absolute md:static left-0 right-0 top-[100%]
//             bg-white md:bg-transparent border md:border-0 shadow md:shadow-none
//             z-[90] peer-checked:flex flex-col space-y-2 md:space-y-0
//           "
//         >
//           <li><Link to="/" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('home')}</Link></li>
//           <li><Link to="/about" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('about')}</Link></li>
//           <li><Link to="/projects" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('projects')}</Link></li>
//           <li><Link to="/impact" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('impact')}</Link></li>
//           <li><Link to="/get-involved" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('getInvolved')}</Link></li>
//           <li><Link to="/contact" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('contact')}</Link></li>
//           <li><Link to="/donate" className="text-white hover:text-gray-300 transition px-4 py-2 block">{t('donate')}</Link></li>
//         </ul>

//         {/* Language buttons — unchanged */}
//         <div className="flex space-x-2 items-center mt-2 md:mt-0">
//           <button className="px-2 py-1 bg-black text-white rounded" onClick={() => i18n.changeLanguage('en')}>EN</button>
//           <button className="px-2 py-1 bg-black text-white rounded" onClick={() => i18n.changeLanguage('hi')}>हिन्दी</button>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

// Mock useTranslation for demo
// const useTranslation = () => ({
//   t: (key) => {
//     const translations = {
//       home: 'Home',
//       about: 'About Us',
//       projects: 'Our Work',
//       impact: 'Impact',
//       getInvolved: 'Get Involved',
//       contact: 'Contact Us',
//       donate: 'Donate'
//     };
//     return translations[key] || key;
//   },
//   i18n: {
//     language: 'en',
//     resolvedLanguage: 'en',
//     changeLanguage: (lang) => console.log('Language changed to:', lang)
//   }
// });

// Language Switcher Component

import { Link } from 'react-router-dom';
function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock Link component for demo


  return (
    <header className="bg-black  shadow w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          {/* Logo section - left side */}
          <div className="flex items-center space-x-3">
            <img 
              src="./Logo.jpeg" 
              alt="Karigar Foundation Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-gray-600" 
            />
            <div>
              <h1 className="font-bold text-xl text-white">Karigar Foundation</h1>
              <p className="text-sm text-gray-300">मजदूरों की सेवा में</p>
            </div>
          </div>

          {/* Desktop Menu - center */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-gray-300 transition px-4 py-2 block"
              >
                {t('home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-gray-300 transition px-4 py-2 block"
              >
                {t('about')}
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="text-white hover:text-gray-300 transition px-4 py-2 block"
              >
                {t('projects')}
              </Link>
            </li>
            <li>
              <Link 
                to="/impact" 
                className="text-white hover:text-gray-300 transition px-4 py-2 block"
              >
                {t('impact')}
              </Link>
            </li>
           
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-gray-300 transition px-4 py-2 block"
              >
                {t('getInvolved')}
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                className="text-white hover:text-gray-300 transition px-4 py-2 block"
              >
                {t('donate')}
              </Link>
            </li>
          </ul>

          {/* Right side - Language switcher and mobile button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher - always visible */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-gray-800 p-2 rounded border border-gray-600 text-white hover:bg-gray-700"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - simple dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-700 py-4">
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-white hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-white hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/projects" 
                className="block px-4 py-3 text-white hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('projects')}
              </Link>
              <Link 
                to="/impact" 
                className="block px-4 py-3 text-white hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('impact')}
              </Link>
           
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-white hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('getInvolved')}
              </Link>
              <Link 
                to="/donate" 
                className="block mx-4 mt-3 mb-4 bg-white text-black px-4 py-3 rounded text-center hover:bg-gray-200 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('donate')}
              </Link>
            </div>

            {/* Language buttons for mobile */}
            <div className="px-4 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-2">Language / भाषा:</p>
              <div className="flex space-x-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;