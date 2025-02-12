import React from "react";
import { Laptop, Server, ShieldCheck, Users } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const services = [
  {
    id: 1,
    title: "Computer Lab Setup",
    description: "Designing and equipping modern computer labs for seamless learning experiences.",
    icon: <Laptop size={40} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "IT Infrastructure",
    description: "Providing robust IT solutions, including networking and cloud integration.",
    icon: <Server size={40} className="text-blue-600" />,
  },
  {
    id: 3,
    title: "Cybersecurity Solutions",
    description: "Protecting institutions with advanced security protocols and risk management.",
    icon: <ShieldCheck size={40} className="text-blue-600" />,
  },
  {
    id: 4,
    title: "Tech Training & Support",
    description: "Empowering teachers and students with IT skills through training programs.",
    icon: <Users size={40} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <>
    <div>
        <Navbar />
    </div>

    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div>
      <Footer />
    </div>
    </>
  );
};

export default Services;
