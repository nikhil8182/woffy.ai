import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import RoadmapPage from './pages/RoadmapPage';
import SpecsPage from './pages/SpecsPage';
import GestureDemo from './pages/GestureDemo';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [themeMode, setThemeMode] = useState('cloud'); // 'cloud' or 'titan'

  const openWaitlist = () => setIsWaitlistOpen(true);
  const toggleTheme = (mode) => setThemeMode(mode);

  return (
    <Router>
      <div className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${
        themeMode === 'titan' ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'
      }`}>
        {/* Global Background */}
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
          {themeMode === 'cloud' ? (
            <>
              <div className="absolute top-0 -left-4 w-96 h-96 bg-rose-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            </>
          ) : (
            <div className="absolute inset-0 bg-slate-950"></div>
          )}
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar onJoinWaitlist={openWaitlist} themeMode={themeMode} />
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    themeMode={themeMode} 
                    toggleTheme={toggleTheme} 
                    openWaitlist={openWaitlist} 
                  />
                } 
              />
              <Route 
                path="/about" 
                element={<AboutPage openWaitlist={openWaitlist} />} 
              />
              <Route 
                path="/roadmap" 
                element={<RoadmapPage openWaitlist={openWaitlist} />} 
              />
              <Route 
                path="/specs" 
                element={<SpecsPage openWaitlist={openWaitlist} />} 
              />
              <Route 
                path="/gesture-demo" 
                element={<GestureDemo />} 
              />
            </Routes>
          </main>
          <Footer />
        </div>

        <WaitlistModal
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
