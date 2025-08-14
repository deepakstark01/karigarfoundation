import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white py-12 mt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">{t('footer_about')}</h3>
          <p className="text-gray-300">{t('footer_about_desc')}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">{t('footer_links')}</h3>
          <ul className="text-gray-300 space-y-2">
            <li><Link to="/" className="hover:underline hover:text-gray-100">{t('home')}</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-gray-100">{t('about')}</Link></li>
            <li><Link to="/projects" className="hover:underline hover:text-gray-100">{t('projects')}</Link></li>
            <li><Link to="/contact" className="hover:underline hover:text-gray-100">{t('contact')}</Link></li>
            <li><Link to="/donate" className="hover:underline hover:text-gray-100">{t('donate')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">{t('footer_news')}</h3>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#" className="hover:underline hover:text-gray-100">{t('footer_news1')}</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">{t('footer_news2')}</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">{t('footer_news3')}</a></li>
            <li><a href="#" className="hover:underline hover:text-gray-100">{t('footer_news4')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">{t('footer_contact')}</h3>
          <ul className="text-gray-300 space-y-2">
            <li><span className="font-semibold">{t('footer_address')}:</span> Saket Nagar, Lalganj, Raebareli, UP 229206</li>
            <li><span className="font-semibold">{t('footer_phone')}:</span> +91 9807649987</li>
            <li><span className="font-semibold">{t('footer_email')}:</span> rohit.kumar@kaarigarfoundation.org</li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF className="text-2xl" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter className="text-2xl" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram className="text-2xl" /></a>
            <a href="https://linkedin.com/company/kaarigarfoundation" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="text-2xl" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-300">&copy; 2024 Karigar Foundation. {t('footer_rights')}</p>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-100">{t('footer_privacy')}</a>
          <a href="#" className="hover:text-gray-100">{t('footer_terms')}</a>
          <Link to="/contact" className="hover:text-gray-100">{t('contact')}</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
