import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Prototype from './components/Prototype';
import Comparison from './components/Comparison';
import Roadmap from './components/Roadmap';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10">
        <Navbar onJoinWaitlist={openWaitlist} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
          <section id="features" className="scroll-mt-20">
            <Features />
          </section>
          <section id="prototype" className="scroll-mt-20">
            <Prototype />
          </section>
          <section id="comparison" className="scroll-mt-20">
            <Comparison />
          </section>
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
