import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and set up
import companyLogo from '../../assets/logo.png'; // Update the path to your logo

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 font-roboto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Section */}
        <div className="space-y-4">
          <img src={companyLogo} alt="Company Logo" className="w-32" />
          <p className="text-gray-300">
            Boilers Engineering excels in top-quality boiler manufacturing and services. Our innovative designs and reliable performance ensure smooth operations for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-200">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-200">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-200">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-200">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-200">Contact</a>
            </li>
          </ul>
        </div>
        {/* Google Map Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="w-full h-64 rounded overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
              src="https://maps.google.com/maps?q=20.3432677,72.9549228&z=15&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Boilers Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
