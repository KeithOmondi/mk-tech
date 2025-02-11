import React from "react";
import { CheckCircle } from "lucide-react"; // Ensure you have lucide-react installed

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Solutions",
      description: "We provide tailored technology solutions that enhance learning experiences.",
    },
    {
      title: "Latest Technology",
      description: "We integrate the most up-to-date hardware and software for modern labs.",
    },
    {
      title: "Affordable Services",
      description: "Our pricing is competitive to ensure quality solutions fit within school budgets.",
    },
    {
      title: "Dedicated Support",
      description: "We offer ongoing technical support and maintenance for seamless operation.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Us?</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
            <CheckCircle className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
