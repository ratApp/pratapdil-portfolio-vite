import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 dark:text-indigo-300 mb-4">Hi, I'm Pratap</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6">A Creative Full-Stack Developer</p>
        <a href="#projects" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;