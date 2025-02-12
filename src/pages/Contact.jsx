import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Feel free to reach out to us via email, phone, or social media.
        </p>

        {/* Contact Details */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <FaPhone className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+254 743 231 219</p>
            {/*<p className="text-gray-700">+254 789 654 321</p>*/}
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">mktechnologies154@gmail.com</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700">Remote</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="https://www.facebook.com/share/1ExffoiBZj/" className="text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/mktec_hnologies?utm_source=qr&igsh=ZGZzMzFlMWlscTgx" className="text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
