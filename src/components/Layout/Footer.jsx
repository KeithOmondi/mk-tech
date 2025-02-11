import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">MK Technologies</h2>
          <p className="text-gray-400 mt-2">
            Transforming computer labs with cutting-edge technology solutions to enhance learning and productivity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center"><Mail className="mr-2" size={18} /> info@mktechnologies.com</p>
            <p className="flex items-center"><Phone className="mr-2" size={18} /> +254 700 123 456</p>
            <p className="flex items-center"><MapPin className="mr-2" size={18} /> Nairobi, Kenya</p>
          </div>
          
          {/* Social Media */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MK Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
