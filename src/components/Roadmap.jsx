import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    period: 'Q2 2025',
    status: 'Completed',
    title: 'Concept Development',
    icon: '🧠',
    progress: 100,
    items: ['Behavioral Research', 'Core AI Algorithms', 'Personality Framework', 'Design System'],
  },
  {
    period: 'Q3 2025',
    status: 'Completed',
    title: 'Alpha Development',
    icon: '⚡',
    progress: 100,
    items: ['Prototype Engine', 'Emotional Response System', 'Learning Foundation', 'Internal Testing'],
  },
  {
    period: 'Q1 2026',
    status: 'In Progress',
    title: 'Beta Testing',
    icon: '🚀',
    progress: 65,
    items: ['Closed Beta Launch', 'Feedback Loop', 'Algorithm Refinement', 'Response Optimization'],
    current: true,
  },
  {
    period: 'Q3 2026',
    status: 'Upcoming',
    title: 'Platform Integration',
    icon: '🔗',
    progress: 0,
    items: ['Mobile App', 'Web Platform', 'Cross-sync', 'Interactive Features'],
  },
  {
    period: 'Q4 2026',
    status: 'Upcoming',
    title: 'Public Release',
    icon: '🎉',
    progress: 0,
    items: ['Official Launch', 'Marketing Campaign', 'Partnerships', 'Community Events'],
  },
];

const CircularProgress = ({ progress, size = 56 }) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        className="text-slate-200"
      />
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Roadmap = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-sm font-bold text-brand-rose tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Development Timeline
          </motion.h2>
          <h3 className="text-5xl font-bold text-slate-900 mb-6 font-display">
            The Journey <span className="bg-gradient-to-r from-brand-rose to-pink-500 bg-clip-text text-transparent">Ahead</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transforming our vision into reality, step by step. We are building with <span className="font-semibold text-brand-rose">precision and care</span>.
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced Glowing Line with Gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-brand-rose to-slate-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]"></div>
          
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-8 md:left-1/2 w-1 h-1 rounded-full bg-brand-rose/40"
              style={{ top: `${i * 20}%` }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}

          <div className="space-y-16">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.period}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 ml-20 md:ml-0">
                    <motion.div 
                      className={`glass-card p-8 rounded-3xl relative group hover:shadow-2xl transition-all duration-500 ${
                        item.current 
                          ? 'border-2 border-brand-rose/40 shadow-xl shadow-brand-rose/10' 
                          : 'border border-slate-200/50'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Floating Badge */}
                      {item.current && (
                        <motion.span 
                          className="absolute -top-4 right-6 bg-gradient-to-r from-brand-rose via-pink-500 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          ✨ ACTIVE NOW
                        </motion.span>
                      )}

                      {/* Icon with Gradient Background */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${
                              item.status === 'Completed' 
                                ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                                : item.current
                                ? 'bg-gradient-to-br from-brand-rose to-pink-500'
                                : 'bg-gradient-to-br from-slate-300 to-slate-400'
                            } shadow-lg`}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-rose transition-colors">
                              {item.title}
                            </h3>
                            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mt-1 ${
                              item.status === 'Completed' 
                                ? 'bg-green-100 text-green-700' 
                                : item.current
                                ? 'bg-rose-100 text-brand-rose'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {item.status} • {item.period}
                            </span>
                          </div>
                        </div>

                        {/* Progress Ring */}
                        <div className="relative flex-shrink-0">
                          <CircularProgress progress={item.progress} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-slate-700">{item.progress}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full ${
                            item.status === 'Completed' 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                              : 'bg-gradient-to-r from-brand-rose to-pink-500'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        />
                      </div>

                      {/* Items List with Animation */}
                      <ul className="space-y-3">
                        {item.items.map((subItem, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center text-slate-600 group/item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 group-hover/item:scale-150 ${
                              item.status === 'Completed' 
                                ? 'bg-green-500' 
                                : item.current
                                ? 'bg-brand-rose'
                                : 'bg-slate-400'
                            }`}></div>
                            <span className="text-sm group-hover/item:text-slate-900 transition-colors">
                              {subItem}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Enhanced Center Marker with Glow */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Outer glow ring */}
                      <div className={`absolute inset-0 rounded-full ${
                        item.status === 'Completed' 
                          ? 'bg-green-500/20 animate-ping' 
                          : item.current 
                          ? 'bg-brand-rose/20 animate-ping'
                          : ''
                      }`} style={{ width: '32px', height: '32px', margin: '-8px' }}></div>
                      
                      {/* Main marker */}
                      <div className={`w-6 h-6 rounded-full border-4 transition-all duration-500 shadow-lg ${
                        item.status === 'Completed' 
                          ? 'bg-green-500 border-green-200 shadow-green-500/50' 
                          : item.current 
                          ? 'bg-brand-rose border-rose-200 shadow-brand-rose/50 scale-125' 
                          : 'bg-white border-slate-300'
                      }`}>
                        {item.status === 'Completed' && (
                          <svg className="w-full h-full text-white p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Side for Layout Balance */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
