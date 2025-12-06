import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

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
    status: 'In Progress',
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
    <section className="py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Journey Ahead
          </h2>
          <p className="text-xl text-slate-500">
            Transforming vision into reality, step by step.
          </p>
        </div>

        <div className="relative">
          {/* Glowing Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-500 to-transparent opacity-50"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 ml-16 md:ml-0">
                    <div className={`glass-card p-6 rounded-2xl relative ${item.current ? 'border-rose-500/50 ring-1 ring-rose-500/20' : ''}`}>
                      {item.current && (
                        <span className="absolute -top-3 right-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-rose-500/30">
                          CURRENT PHASE
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <span className="text-sm font-mono text-slate-500">{item.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {item.items.map((subItem, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-2"></div>
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8">
                     <div className={`w-4 h-4 rounded-full border-2 ${
                        item.status === 'Completed' ? 'bg-green-500 border-green-200' :
                        item.current ? 'bg-rose-600 border-rose-200 animate-pulse' :
                        'bg-slate-200 border-slate-100'
                     }`}></div>
                  </div>

                  {/* Empty Side for Layout Balance */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
