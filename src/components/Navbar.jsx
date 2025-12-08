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
  const isSpecs = location.pathname === '/specs';

  // Determine if we should use dark mode styles
  // Titan mode OR if we are on the Specs page (which is always dark)
  const isDark = themeMode === 'titan' || isSpecs;

  const linkClass = (isActive) => `
    text-sm font-medium transition-colors 
    ${isActive 
      ? (isDark ? 'text-white font-bold' : 'text-brand-indigo') 
      : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-brand-indigo')
    }
  `;

  const brandTextClass = 'text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-pink-500 to-indigo-600 drop-shadow-[0_10px_32px_rgba(99,102,241,0.35)]';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      scrolled 
        ? (isDark ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 py-4') 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className={brandTextClass}>
              Woffy.ai
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass(isHome)}>Home</Link>
            <Link to="/specs" className={linkClass(isSpecs)}>Specs</Link>
            <Link to="/about" className={linkClass(isAbout)}>About</Link>
            <Link to="/roadmap" className={linkClass(isRoadmap)}>Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
             <button 
                onClick={onJoinWaitlist}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isDark 
                    ? 'bg-white text-slate-900 hover:bg-slate-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
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
