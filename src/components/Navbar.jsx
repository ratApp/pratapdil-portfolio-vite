import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between">
      <h1 className="text-xl font-bold tracking-wide text-indigo-600 dark:text-indigo-400">
        Pratap D Rai
      </h1>
        <ul className="flex flex-wrap justify-end gap-4 text-sm font-medium mt-2 sm:mt-0">
          <li><a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">Contact</a></li>
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-2 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-xs"
            >
              {isDark ? 'Light' : 'Dark'} Mode
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
