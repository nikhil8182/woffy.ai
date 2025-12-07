import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onJoinWaitlist, themeMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isRoadmap = location.pathname === '/roadmap';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">Woffy.ai</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium hover:text-brand-indigo transition-colors ${isHome ? 'text-brand-indigo' : 'text-slate-600'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium hover:text-brand-indigo transition-colors ${isAbout ? 'text-brand-indigo' : 'text-slate-600'}`}>About</Link>
            <Link to="/roadmap" className={`text-sm font-medium hover:text-brand-indigo transition-colors ${isRoadmap ? 'text-brand-indigo' : 'text-slate-600'}`}>Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
             <button 
                onClick={onJoinWaitlist}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
             >
                Join Waitlist
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
