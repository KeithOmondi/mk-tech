import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">About MK Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            At MK Technologies, we are committed to transforming school computer labs 
            into modern, efficient, and engaging learning environments. Our expert 
            team ensures that students and educators have access to the latest 
            technology for an improved digital learning experience.
          </p>
          <p className="text-gray-700 mt-3">
            From hardware upgrades to network optimization and software installations, 
            we provide complete solutions to enhance computer labs in schools across the country.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
