import React, { useState } from "react";
import FormModal from "./FormModal";

const CTA = () => {
const [isFormOpen, setIsFormOpen] = useState(false)


  return (
    <section className="relative bg-blue-600 text-white text-center py-16 px-6 rounded-lg shadow-lg my-12 mx-4 max-w-6xl mx-auto">
      {/* Background Overlay (Optional) */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your IT Infrastructure Today!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Elevate your business with cutting-edge solutions. Get expert
          consultation and innovative technology tailored to your needs.
        </p>
        {/* Get Started Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="mt-5 bg-white text-blue-600 px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
      >
        Get Started
      </button>

      {/* Show Form Modal when the button is clicked */}
      {isFormOpen && <FormModal onClose={() => setIsFormOpen(false)} />}
      </div>
    </section>
  );
};

export default CTA;
