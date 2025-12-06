import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onJoinWaitlist }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#home" className="text-2xl font-bold text-gray-900">Woffy.ai</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onJoinWaitlist}
              className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors shadow-md shadow-red-200"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onJoinWaitlist();
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-full font-medium w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
