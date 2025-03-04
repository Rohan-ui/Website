import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons
import logo from "../../assets/logo.png"; // Replace with your actual logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-red-600/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand Name (Bigger now) */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
          <img src={logo} alt="Vinay Engineering Logo" className="w-14 h-14 object-contain" />
          <span className="text-red-600 font-bold text-2xl md:text-3xl">
            Vinay Engineering
          </span>
        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-600 focus:outline-none">
            {isOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
          </button>
        </div>

        {/* Desktop Navigation (Bold Black Text & Increased Spacing) */}
        <div className="hidden md:flex space-x-10">
          {["home", "about", "services", "products", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="relative font-bold text-black hover:text-red-600 cursor-pointer group text-lg"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Dropdown - Bigger & Bold) */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-red-600/20"
        >
          <div className="flex flex-col items-center space-y-6 py-5">
            {["home", "about", "services", "products", "contact"].map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="text-black font-bold text-lg hover:text-red-600 cursor-pointer"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
