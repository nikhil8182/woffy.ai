import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    period: 'Q2 2025',
    status: 'Completed',
    title: 'Concept Development',
    items: ['Research phase with canine behavior specialists', 'Core AI algorithms development', 'Initial personality framework design', 'UX/UI concept approval'],
  },
  {
    period: 'Q3 2025',
    status: 'Completed',
    title: 'Alpha Development',
    items: ['First prototype of Woffy AI engine', 'Emotional response system implementation', 'Learning capabilities foundation', 'Internal testing and refinement'],
  },
  {
    period: 'Q1 2026',
    status: 'In Progress',
    title: 'Beta Testing',
    items: ['Closed beta program launch', 'User feedback collection and analysis', 'Personalization algorithm refinement', 'AI response optimization'],
    current: true,
  },
  {
    period: 'Q3 2026',
    status: 'Upcoming',
    title: 'Platform Integration',
    items: ['Mobile application development', 'Web platform finalization', 'Cross-platform synchronization', 'Advanced interactive features implementation'],
  },
  {
    period: 'Q4 2026',
    status: 'Upcoming',
    title: 'Public Release',
    items: ['Official launch of Woffy.ai', 'Marketing campaign rollout', 'Partnership announcements', 'Community building initiatives'],
  },
  {
    period: '2027+',
    status: 'Future',
    title: 'Future Development',
    items: ['AR/VR integration for immersive experiences', 'Advanced emotional intelligence capabilities', 'Global language support expansion', 'Woffy ecosystem development'],
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Woffy.ai Roadmap
          </h2>
          <p className="text-xl text-gray-500">
            Our journey to bring Woffy to life.
          </p>
        </div>

        <div className="relative border-l-2 border-gray-200 ml-6 md:ml-12 space-y-12">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <span
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                  item.current
                    ? 'bg-red-600 border-red-200 ring-4 ring-red-100'
                    : item.status === 'Completed'
                    ? 'bg-green-500 border-green-200'
                    : 'bg-white border-gray-300'
                }`}
              ></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className={`text-lg font-bold ${item.current ? 'text-red-600' : 'text-gray-900'}`}>
                  {item.period} - {item.title}
                </h3>
                <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full w-fit mt-1 sm:mt-0 ${
                   item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                   item.status === 'In Progress' ? 'bg-red-100 text-red-800' :
                   'bg-gray-100 text-gray-800'
                }`}>
                  {item.status}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2 text-gray-600">
                {item.items.map((subItem, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                    {subItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

