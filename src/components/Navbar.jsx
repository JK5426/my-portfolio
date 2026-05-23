import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="hero" smooth={true} duration={500} className="text-xl font-bold cursor-pointer bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          JK.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="cursor-pointer hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 absolute top-full left-0 w-full shadow-xl border-t border-slate-200 dark:border-slate-800 py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-primary transition-colors py-2 text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
