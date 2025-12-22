import React from 'react';
import Hero from '../components/Hero';
import IntelligenceInMotion from '../components/IntelligenceInMotion';
import EmotionalSection from '../components/EmotionalSection';
import SmartHome from '../components/SmartHome';
import GuardMode from '../components/GuardMode';
import Personas from '../components/Personas';
import TwoPersonalities from '../components/TwoPersonalities';
import CtaBanner from '../components/CtaBanner';

const Home = ({ themeMode, toggleTheme, openWaitlist }) => {
  return (
    <>
      <section id="home">
        <Hero themeMode={themeMode} onOpenWaitlist={openWaitlist} />
      </section>
      
      <Personas />

      <IntelligenceInMotion />

      <EmotionalSection />

      <SmartHome />

      <GuardMode />

      <TwoPersonalities onToggleTheme={toggleTheme} currentTheme={themeMode} />
      
      <CtaBanner onJoinWaitlist={openWaitlist} />
    </>
  );
};

export default Home;
