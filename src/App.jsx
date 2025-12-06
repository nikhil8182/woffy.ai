import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Prototype from './components/Prototype';
import Comparison from './components/Comparison';
import Roadmap from './components/Roadmap';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Prototype />
        <Comparison />
        <Roadmap />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;

