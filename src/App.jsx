import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import IntelligenceInMotion from './components/IntelligenceInMotion';
import EmotionalSection from './components/EmotionalSection';
import TwoPersonalities from './components/TwoPersonalities';
import Prototype from './components/Prototype';
import Comparison from './components/Comparison';
import Roadmap from './components/Roadmap';
import InvestorSection from './components/InvestorSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [themeMode, setThemeMode] = useState('cloud'); // 'cloud' or 'titan'

  const openWaitlist = () => setIsWaitlistOpen(true);
  const toggleTheme = (mode) => setThemeMode(mode);

  return (
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

      <div className="relative z-10">
        <Navbar onJoinWaitlist={openWaitlist} themeMode={themeMode} />
        <main>
          <section id="home">
            <Hero themeMode={themeMode} />
          </section>

          <section id="about" className="scroll-mt-20">
            <About />
          </section>

          <IntelligenceInMotion />

          <EmotionalSection />

          <TwoPersonalities onToggleTheme={toggleTheme} currentTheme={themeMode} />

          {/* 
          <section id="prototype" className="scroll-mt-20">
            <Prototype />
          </section>
          */}
          
          {/*
          <section id="comparison" className="scroll-mt-20">
            <Comparison />
          </section>
          */}

          <section id="roadmap" className="scroll-mt-20">
            <Roadmap />
          </section>
          <CtaBanner onJoinWaitlist={openWaitlist} />
        </main>
        <Footer />
      </div>


      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}

export default App;
