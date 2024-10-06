import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300">
            Our NGO is dedicated to improving the lives of those in need through various initiatives and projects. We focus on education, healthcare, and sustainable development to create lasting change in communities around the world.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#home" className="hover:underline hover:text-blue-200 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:underline hover:text-blue-200 transition duration-300">About Us</a></li>
            <li><a href="#projects" className="hover:underline hover:text-blue-200 transition duration-300">Projects</a></li>
            <li><a href="/contact" className="hover:underline hover:text-blue-200 transition duration-300">Contact</a></li>
            <li><a href="#donate" className="hover:underline hover:text-blue-200 transition duration-300">Donate</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Latest News</h3>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#news1" className="hover:underline hover:text-blue-200 transition duration-300">Project A launched successfully</a></li>
            <li><a href="#news2" className="hover:underline hover:text-blue-200 transition duration-300">Our impact in 2023</a></li>
            <li><a href="#news3" className="hover:underline hover:text-blue-200 transition duration-300">Volunteer stories</a></li>
            <li><a href="#news4" className="hover:underline hover:text-blue-200 transition duration-300">Upcoming events</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li><span className="font-semibold">Address:</span>Saket Nagar lalganj Raibareli Uttarpradesh 229206 </li>
            <li><span className="font-semibold">Phone:</span> +919807649987</li>
            <li><span className="font-semibold">Email:</span>rohit.kumar@kaarigarfoundation.org</li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#facebook" className="text-gray-200 hover:text-blue-400 transition duration-300"><FaFacebookF className="text-2xl" /></a>
            <a href="#twitter" className="text-gray-200 hover:text-blue-400 transition duration-300"><FaTwitter className="text-2xl" /></a>
            <a href="#instagram" className="text-gray-200 hover:text-blue-400 transition duration-300"><FaInstagram className="text-2xl" /></a>
            <a href="#linkedin" className="text-gray-200 hover:text-blue-400 transition duration-300"><FaLinkedinIn className="text-2xl" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-500 mt-8 pt-4 text-center">
        <p className="text-gray-300">&copy; 2024 Kaarigar Foundation . All rights reserved.</p>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#privacy" className="hover:text-blue-200 transition duration-300">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-200 transition duration-300">Terms of Service</a>
          <a href="/contact" className="hover:text-blue-200 transition duration-300">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
