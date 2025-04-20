import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-6 text-center">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-8 text-gray-700 dark:text-gray-300 text-justify">
            I’m a <span className="font-medium text-indigo-700 dark:text-indigo-400">Full-Stack Developer</span> who enjoys building clean, interactive web experiences from front to back.
            With a strong foundation in <strong>HTML, CSS, JavaScript, React, Node.js, PHP</strong>, and <strong>Django</strong>, I develop responsive and scalable applications.
            <br /><br />
            I also bring a creative edge to my projects through tools like <strong>Adobe Photoshop, Illustrator, Premiere Pro</strong>, and <strong>SketchUp</strong> — combining code and design to craft intuitive user interfaces and visuals that stand out.
            <br /><br />
            I focus on writing clean, maintainable code and designing seamless user experiences. Whether it's a personal project or a professional collaboration, I aim to deliver high-quality, impactful work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
