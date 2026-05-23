import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
