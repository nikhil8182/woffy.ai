import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Layers, 
  Globe, 
  CheckCircle2, 
  Circle, 
  Sparkles
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

const roadmapData = [
  {
    id: 'phase-1',
    period: 'Q2 2025',
    title: 'Concept & Foundation',
    status: 'completed',
    icon: Brain,
    description: 'Laying the groundwork for emotional AI.',
    items: [
      'Behavioral Research & Analysis',
      'Core AI Algorithm Architecture',
      'Personality Framework Design',
      'Initial Design System'
    ]
  },
  {
    id: 'phase-2',
    period: 'Q3 2025',
    title: 'Alpha Development',
    status: 'completed',
    icon: Zap,
    description: 'Building the prototype and core engine.',
    items: [
      'Prototype Engine Development',
      'Emotional Response System V1',
      'Internal Testing & Validation',
      'Learning Model Foundation'
    ]
  },
  {
    id: 'phase-3',
    period: 'Q1 2026',
    title: 'Beta Testing',
    status: 'in-progress',
    icon: Rocket,
    description: 'Refining the experience with early adopters.',
    items: [
      'Closed Beta Launch',
      'User Feedback Integration',
      'Algorithm Optimization',
      'Response Latency Improvements'
    ]
  },
  {
    id: 'phase-4',
    period: 'Q3 2026',
    title: 'Platform Integration',
    status: 'upcoming',
    icon: Layers,
    description: 'Expanding to mobile and web platforms.',
    items: [
      'Mobile App Development (iOS/Android)',
      'Cross-Platform Sync',
      'Web Dashboard',
      'Advanced Interactive Features'
    ]
  },
  {
    id: 'phase-5',
    period: 'Q4 2026',
    title: 'Global Launch',
    status: 'upcoming',
    icon: Globe,
    description: 'Bringing Woffy to the world.',
    items: [
      'Public Release',
      'Global Marketing Campaign',
      'Strategic Partnerships',
      'Community Events & API Access'
    ]
  }
];

const RoadmapPage = ({ openWaitlist }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-slate-50">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-rose/10 to-transparent rounded-full blur-[100px] opacity-60 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-indigo/10 to-transparent rounded-full blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold text-sm mb-8 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-rose" />
              <span className="bg-gradient-to-r from-brand-rose to-brand-indigo bg-clip-text text-transparent">
                Development Timeline
              </span>
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-display tracking-tight leading-[1.1]">
              The Journey to <br className="hidden md:block" />
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-brand-rose via-pink-500 to-brand-indigo bg-clip-text text-transparent">
                  Artificial Life
                </span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-rose/20 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From initial concept to global launch. Follow our progress as we build the most emotionally intelligent AI companion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section with Lovely Gradient Background */}
      <section className="relative px-4 md:px-6 py-32 overflow-hidden bg-slate-50" id="roadmap">
        {/* Interactive Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-rose-50/30 to-slate-50/50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-brand-rose/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-violet-100/30 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Vertical Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-indigo/20 via-brand-rose/30 to-slate-200 transform md:-translate-x-1/2 h-full z-0"></div>

          <div className="space-y-12 md:space-y-24">
            {roadmapData.map((phase, index) => {
              const isEven = index % 2 === 0;
              const isCompleted = phase.status === 'completed';
              const isInProgress = phase.status === 'in-progress';
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Node (Mobile: Left, Desktop: Center) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 flex items-center justify-center z-20 transition-all duration-300 shadow-xl ${
                        isCompleted ? 'bg-white border-green-400 text-green-500 shadow-green-200' :
                        isInProgress ? 'bg-gradient-to-br from-brand-rose to-pink-600 border-white text-white shadow-brand-rose/30 scale-110' :
                        'bg-white border-slate-200 text-slate-300'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : 
                       isInProgress ? <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" /> :
                       <Circle className="w-4 h-4 md:w-5 md:h-5" />}
                    </motion.div>
                  </div>

                  {/* Content Card with Glassmorphism and Hover Effects */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.01 }}
                      className={`group p-6 md:p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 relative overflow-hidden ${
                        isInProgress 
                          ? 'bg-white/80 border-brand-rose/20 shadow-2xl shadow-brand-rose/10 ring-4 ring-brand-rose/5' 
                          : 'bg-white/60 border-white/50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-100'
                      }`}
                    >
                      {/* Card Background Gradient on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                        isInProgress ? 'from-brand-rose/5 to-transparent' : 'from-indigo-50/50 to-transparent'
                      }`}></div>
                      
                      {/* Header */}
                      <div className="relative z-10 flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                          isCompleted ? 'bg-green-100 text-green-700' :
                          isInProgress ? 'bg-gradient-to-r from-brand-rose to-pink-500 text-white' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {phase.period}
                        </span>
                        {isInProgress && (
                          <span className="flex items-center text-xs font-medium text-brand-rose animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-brand-rose mr-2"></span>
                            Active
                          </span>
                        )}
                      </div>

                      <div className="relative z-10 flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-2xl transition-colors duration-300 ${
                          isInProgress 
                            ? 'bg-brand-rose text-white shadow-lg shadow-brand-rose/20' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-brand-indigo'
                        }`}>
                          <phase.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-brand-indigo transition-colors">
                          {phase.title}
                        </h3>
                      </div>

                      <p className="relative z-10 text-slate-600 mb-6 leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Checklist */}
                      <ul className="relative z-10 space-y-3">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600 group/item">
                            <div className={`mt-1.5 mr-3 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                              isCompleted ? 'bg-green-500' :
                              isInProgress ? 'bg-brand-rose' :
                              'bg-slate-300 group-hover:bg-brand-indigo/50'
                            }`} />
                            <span className={`transition-all duration-300 ${
                              isCompleted ? 'line-through opacity-60' : 'group-hover/item:text-slate-900'
                            }`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                    </motion.div>
                  </div>
                  
                  {/* Empty Spacer for desktop grid balance */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner onJoinWaitlist={openWaitlist} />
    </div>
  );
};

export default RoadmapPage;
