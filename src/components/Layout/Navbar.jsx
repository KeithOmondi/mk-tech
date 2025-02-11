import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // If using React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MK Technologies</h1>
        

        {/* Hamburger Menu */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } h-screen w-64 bg-blue-700 text-white p-6 shadow-lg transition-all duration-300 md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 mt-10 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
