import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Layers, 
  Globe, 
  CheckCircle2, 
  Circle, 
  Sparkles,
  ArrowRight,
  Target,
  Cpu,
  Code2
} from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

const roadmapData = [
  {
    id: 'phase-1',
    period: 'Q2 2025',
    title: 'Concept & Foundation',
    status: 'completed',
    icon: Brain,
    description: 'Laying the neural pathways for emotional AI.',
    progress: 100,
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
    progress: 100,
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
    progress: 65,
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
    progress: 0,
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
    progress: 0,
    items: [
      'Public Release',
      'Global Marketing Campaign',
      'Strategic Partnerships',
      'Community Events & API Access'
    ]
  }
];

const RoadmapItem = ({ phase, index, isEven }) => {
  const isCompleted = phase.status === 'completed';
  const isInProgress = phase.status === 'in-progress';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Node */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center z-20 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-xl ${
            isCompleted 
              ? 'bg-slate-900 border-green-500/50 text-green-400 shadow-green-500/20' 
              : isInProgress 
                ? 'bg-slate-900 border-brand-rose text-brand-rose shadow-brand-rose/40 scale-110' 
                : 'bg-slate-950 border-slate-800 text-slate-600'
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" />
          ) : isInProgress ? (
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
          ) : (
            <Circle className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className={`group relative p-1 rounded-3xl overflow-hidden transition-all duration-500 ${
            isInProgress ? 'bg-gradient-to-br from-brand-rose/40 to-brand-indigo/40' : 'bg-slate-800/50'
          }`}
        >
          {/* Card Inner Content */}
          <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-[22px] p-6 md:p-8 h-full border border-white/5 hover:border-white/10 transition-colors">
            
            {/* Header Tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                isCompleted 
                  ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                  : isInProgress 
                    ? 'bg-brand-rose/10 border-brand-rose/20 text-brand-rose shadow-[0_0_15px_rgba(225,29,72,0.3)]' 
                    : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}>
                {phase.period}
              </span>
              
              {isInProgress && (
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-rose opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-rose"></span>
                  </span>
                  <span className="text-xs font-medium text-brand-rose">Active Phase</span>
                </div>
              )}
            </div>

            {/* Title & Icon */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 rounded-2xl ${
                isInProgress 
                  ? 'bg-gradient-to-br from-brand-rose to-brand-indigo text-white shadow-lg' 
                  : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-brand-indigo group-hover:border-brand-indigo/30 transition-all'
              }`}>
                <phase.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {phase.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>

            {/* Progress Bar (if in progress or completed) */}
            {(isCompleted || isInProgress) && (
              <div className="mb-6">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Completion</span>
                  <span className={isInProgress ? 'text-brand-rose' : 'text-green-400'}>
                    {phase.progress}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${phase.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      isCompleted ? 'bg-green-500' : 'bg-gradient-to-r from-brand-rose to-brand-indigo'
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Checklist Items */}
            <div className="space-y-3">
              {phase.items.map((item, i) => (
                <div key={i} className="flex items-start group/item">
                  <div className={`mt-1.5 mr-3 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' 
                      : isInProgress 
                        ? 'bg-brand-rose shadow-[0_0_8px_rgba(225,29,72,0.4)]' 
                        : 'bg-slate-700 group-hover/item:bg-brand-indigo'
                  }`} />
                  <span className={`text-sm transition-colors duration-300 ${
                    isCompleted 
                      ? 'text-slate-500 line-through' 
                      : 'text-slate-300 group-hover/item:text-white'
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Spacer for Desktop Grid */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

const RoadmapPage = ({ openWaitlist }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden" ref={containerRef}>
      
      {/* Immersive Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-brand-rose/10 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
            <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] animate-pulse-slow"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 backdrop-blur-md mb-8 hover:border-brand-indigo/50 transition-colors cursor-default"
            >
              <Target className="w-4 h-4 text-brand-rose" />
              <span className="font-mono text-sm tracking-wider">PROJECT TRAJECTORY</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-accent to-brand-indigo animate-gradient-x">
                Future of AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Explore our strategic roadmap as we develop, refine, and launch the next generation of emotional artificial intelligence.
            </p>

            <div className="flex justify-center gap-4">
               <motion.button
                onClick={openWaitlist}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2"
              >
                Join Beta Access
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Timeline Section */}
      <section className="relative px-4 md:px-6 py-24 overflow-hidden" id="roadmap">
        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Central Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2 h-full z-0 rounded-full">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-rose via-brand-accent to-brand-indigo origin-top rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]" 
            />
          </div>

          <div className="space-y-24">
            {roadmapData.map((phase, index) => (
              <RoadmapItem 
                key={phase.id} 
                phase={phase} 
                index={index} 
                isEven={index % 2 === 0} 
              />
            ))}
          </div>
        </div>

        {/* Decorative background elements for the timeline */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-rose/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      </section>

      {/* Feature Highlights / Tech Stack Peek */}
      <section className="py-24 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <Cpu className="w-10 h-10 text-brand-indigo mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Neural Architecture</h3>
              <p className="text-slate-400">Advanced transformer models optimized for emotional reasoning.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <Code2 className="w-10 h-10 text-brand-rose mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Real-time Processing</h3>
              <p className="text-slate-400">Sub-100ms latency for natural, fluid conversation flows.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <Globe className="w-10 h-10 text-brand-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Global Infrastructure</h3>
              <p className="text-slate-400">Edge-deployed nodes ensuring reliability worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner onJoinWaitlist={openWaitlist} />
    </div>
  );
};

export default RoadmapPage;
