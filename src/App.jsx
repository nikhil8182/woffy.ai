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
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
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
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  );
}

export default App;
