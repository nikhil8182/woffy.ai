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
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Woffy.ai</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-2 border border-white/30 flex space-x-6 mr-4 shadow-sm">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <button 
              onClick={onJoinWaitlist}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 rounded-lg hover:bg-white/50">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl p-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onJoinWaitlist();
              }}
              className="bg-rose-600 text-white px-6 py-3 rounded-xl font-medium w-full shadow-lg shadow-rose-200"
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
