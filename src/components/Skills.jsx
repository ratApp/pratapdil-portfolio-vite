import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaPhp
} from 'react-icons/fa';
import {
  SiDjango, SiPython, SiBootstrap, SiAdobephotoshop, SiAdobeillustrator,
  SiAdobepremierepro, SiSketchup
} from 'react-icons/si';

const languagesTools = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Python', icon: <SiPython className="text-blue-700" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-700" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
];

const frameworksLibraries = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Django', icon: <SiDjango className="text-green-800" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
];

const creativeTools = [
  { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-blue-500" /> },
  { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-orange-500" /> },
  { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro className="text-purple-500" /> },
  { name: 'SketchUp Pro', icon: <SiSketchup className="text-red-500" /> }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* Languages & Tools */}
        <motion.h3
          className="text-xl font-semibold text-indigo-700 dark:text-indigo-200 mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Languages & Tools
        </motion.h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
          {languagesTools.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center space-y-2 transform transition-transform hover:scale-110"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Frameworks & Libraries */}
        <motion.h3
          className="text-xl font-semibold text-indigo-700 dark:text-indigo-200 mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Frameworks & Libraries
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {frameworksLibraries.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center space-y-2 transform transition-transform hover:scale-110"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Creative Tools */}
        <motion.h3
          className="text-xl font-semibold text-indigo-700 dark:text-indigo-200 mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          Creative Tools
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {creativeTools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl shadow bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{tool.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{tool.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
