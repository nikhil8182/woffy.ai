import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    period: 'Q2 2025',
    status: 'Completed',
    title: 'Concept Development',
    items: ['Behavioral Research', 'Core AI Algorithms', 'Personality Framework', 'Design System'],
  },
  {
    period: 'Q3 2025',
    status: 'Completed',
    title: 'Alpha Development',
    items: ['Prototype Engine', 'Emotional Response System', 'Learning Foundation', 'Internal Testing'],
  },
  {
    period: 'Q1 2026',
    status: 'Upcoming',
    title: 'Beta Testing',
    items: ['Closed Beta Launch', 'Feedback Loop', 'Algorithm Refinement', 'Response Optimization'],
    current: true,
  },
  {
    period: 'Q3 2026',
    status: 'Upcoming',
    title: 'Platform Integration',
    items: ['Mobile App', 'Web Platform', 'Cross-sync', 'Interactive Features'],
  },
  {
    period: 'Q4 2026',
    status: 'Upcoming',
    title: 'Public Release',
    items: ['Official Launch', 'Marketing Campaign', 'Partnerships', 'Community Events'],
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-rose tracking-wider uppercase mb-2">Development Timeline</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">
            The Journey Ahead
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transforming our vision into reality, step by step. We are building with precision and care.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-rose/50 to-transparent"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.period}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 ml-16 md:ml-0">
                    <div className={`glass-card p-8 rounded-3xl relative transition-all duration-300 ${item.current ? 'border-brand-rose/40 shadow-xl shadow-brand-rose/10' : ''}`}>
                      {item.current && (
                        <span className="absolute -top-3 right-6 bg-gradient-to-r from-brand-rose to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          NEXT PHASE
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>{item.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {item.items.map((subItem, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <div className={`w-1.5 h-1.5 rounded-full mr-3 ${item.status === 'Completed' ? 'bg-green-500' : 'bg-brand-rose'}`}></div>
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8">
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${item.status === 'Completed' ? 'bg-green-500 border-green-200' :
                        item.current ? 'bg-brand-rose border-rose-200 animate-pulse scale-110' :
                          'bg-slate-200 border-slate-100'
                      }`}></div>
                  </div>

                  {/* Empty Side for Layout Balance */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
