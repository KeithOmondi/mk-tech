import React, { useState } from "react";
import { motion } from "framer-motion";

const FormModal = ({ onClose }) => {
  const [formType, setFormType] = useState("contact"); // Default to Contact Form

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <h3 className="text-xl font-semibold text-center mb-3">
          {formType === "contact" ? "Contact Us" : "Request a Quote"}
        </h3>

        {/* Form Type Selector */}
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`py-2 px-4 rounded-md ${
              formType === "contact" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFormType("contact")}
          >
            Contact Us
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              formType === "quote" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFormType("quote")}
          >
            Request a Quote
          </button>
        </div>

        {/* Contact Form */}
        {formType === "contact" && (
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-[#000] justify-start">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-[#000]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000]">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md text-[#000]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000]">Message</label>
              <textarea
                className="w-full p-2 border rounded-md text-[#000]"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        )}

        {/* Request Quote Form */}
        {formType === "quote" && (
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-[#000]">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-[#000]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000]">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md border-[#000]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-medium text-[#000]">
                Project Details
              </label>
              <textarea
                className="w-full p-2 border rounded-md text-[#000]"
                rows="3"
                placeholder="Describe your project"
              ></textarea>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700">
              Get Quote
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default FormModal;
