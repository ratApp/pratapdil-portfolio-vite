import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center transition-colors duration-300">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">Pratap</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">Contact</a></li>
        <li>
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-xs"
          >
            {isDark ? 'Light' : 'Dark'} Mode
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;