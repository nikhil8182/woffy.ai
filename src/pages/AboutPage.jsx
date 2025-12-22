import React from 'react';
import About from '../components/About';
import CtaBanner from '../components/CtaBanner';

const AboutPage = ({ openWaitlist }) => {
  return (
    <div className="pt-20">
      <About />
      <CtaBanner onJoinWaitlist={openWaitlist} />
    </div>
  );
};

export default AboutPage;









