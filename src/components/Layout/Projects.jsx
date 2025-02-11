import React from "react";

const projects = [
  {
    title: "Smart Learning Hub",
    description: "We upgraded a school's IT infrastructure with modern computers, network solutions, and interactive learning software.",
    image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
  {
    title: "Enterprise IT Solution",
    description: "Implemented a secure, scalable cloud computing solution for a mid-sized company, improving efficiency and data security.",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
  {
    title: "High-Speed Internet Setup",
    description: "Deployed a high-speed internet solution for a university, connecting over 5,000 students and staff members.",
    image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
];

const RecentProjects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Recent Projects & Case Studies</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">
                View More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
