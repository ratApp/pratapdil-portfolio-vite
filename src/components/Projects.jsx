import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A sleek personal website built with React, Vite, and Tailwind CSS.',
    link: '#'
  },
  {
    title: 'E-Commerce App',
    description: 'Responsive UI for an online store with animated components.',
    link: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard using APIs and animations.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-200">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-indigo-600 dark:text-indigo-400 flex items-center gap-2 hover:text-indigo-800 dark:hover:text-indigo-200">
                View Project <FaExternalLinkAlt size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;