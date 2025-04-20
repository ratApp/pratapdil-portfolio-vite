import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-black dark:to-gray-900 pt-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Hi, I'm Pratap
        </h1>
        <p className="text-lg md:text-xl text-sky-400 mb-6 font-mono">
          <Typewriter
            words={[
              'Full-Stack Developer',
              'Creative Technologist',
              'UI/UX Enthusiast'
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
