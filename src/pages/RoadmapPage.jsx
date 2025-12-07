import React from 'react';
import Roadmap from '../components/Roadmap';
import CtaBanner from '../components/CtaBanner';

const RoadmapPage = ({ openWaitlist }) => {
  return (
    <div className="pt-20">
      <Roadmap />
      <CtaBanner onJoinWaitlist={openWaitlist} />
    </div>
  );
};

export default RoadmapPage;

