import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onJoinWaitlist, themeMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isRoadmap = location.pathname === '/roadmap';
  const isSpecs = location.pathname === '/specs';
  const isInvestors = location.pathname === '/investors';

  // Determine if we should use dark mode styles
  // Titan mode OR if we are on the Specs page (which is always dark)
  const isDark = themeMode === 'titan' || isSpecs;

  const linkClass = (isActive, isMobile = false) => `
    text-sm font-medium transition-colors 
    ${isActive 
      ? (isDark ? 'text-white font-bold' : 'text-brand-indigo') 
      : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-brand-indigo')
    }
    ${isMobile ? 'block py-3 text-lg' : ''}
  `;

  const brandTextClass = 'text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-pink-500 to-indigo-600 drop-shadow-[0_10px_32px_rgba(99,102,241,0.35)]';

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled || isMobileMenuOpen
        ? (isDark ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-white/20 py-4') 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className={brandTextClass}>
              Woffy.ai
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass(isHome)}>Home</Link>
            <Link to="/specs" className={linkClass(isSpecs)}>Specs</Link>
            <Link to="/about" className={linkClass(isAbout)}>About</Link>
            <Link to="/roadmap" className={linkClass(isRoadmap)}>Roadmap</Link>
            <Link to="/investors" className={linkClass(isInvestors)}>Investors</Link>
            <Link to="/chat" className={linkClass(location.pathname === '/chat')}>Chat</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute w-full left-0 top-full ${isDark ? 'bg-slate-950/95 border-b border-white/10' : 'bg-white/95 border-b border-gray-100'} backdrop-blur-xl transition-all duration-300 ease-in-out`}>
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
            <Link to="/" className={linkClass(isHome, true)}>Home</Link>
            <Link to="/specs" className={linkClass(isSpecs, true)}>Specs</Link>
            <Link to="/about" className={linkClass(isAbout, true)}>About</Link>
            <Link to="/roadmap" className={linkClass(isRoadmap, true)}>Roadmap</Link>
            <Link to="/investors" className={linkClass(isInvestors, true)}>Investors</Link>
            <Link to="/chat" className={linkClass(location.pathname === '/chat', true)}>Chat</Link>
            <div className="pt-4">
              <button 
                onClick={() => {
                  onJoinWaitlist();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full py-3 rounded-full text-base font-bold transition-all shadow-lg ${
                  isDark 
                    ? 'bg-white text-slate-900' 
                    : 'bg-slate-900 text-white'
                }`}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
