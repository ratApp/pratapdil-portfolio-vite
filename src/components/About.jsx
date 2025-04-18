import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-200 text-md md:text-lg leading-relaxed">
          I'm a passionate full-stack developer focused on building end-to-end web applications. I bring together the power of frontend interactivity and backend logic to create seamless user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;