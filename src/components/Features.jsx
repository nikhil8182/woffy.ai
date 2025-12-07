import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Heart, Sparkles, Shield, Zap, Activity, 
  Cpu, Database, Network, Lock, Server, BarChart3,
  Code2, User, Layers
} from 'lucide-react';

const Features = () => {
  const [isTechView, setIsTechView] = useState(false);

  const features = [
    {
      icon: Brain,
      techIcon: Cpu,
      title: "Adaptive Learning",
      techTitle: "Neural Architecture",
      userDesc: "Woffy evolves with you. Our neural networks analyze your interactions to understand your unique personality and preferences.",
      techDesc: "Transformer-based LLM architecture with recursive context window and real-time fine-tuning pipelines.",
      color: "text-brand-indigo",
      bg: "bg-indigo-50",
      techBg: "bg-indigo-950",
      techColor: "text-indigo-400"
    },
    {
      icon: Heart,
      techIcon: Activity,
      title: "Emotional Support",
      techTitle: "Affective Computing",
      userDesc: "Advanced sentiment analysis allows Woffy to detect your mood and provide the right comfort or companionship at the right time.",
      techDesc: "Multimodal sentiment analysis engine processing NLP and behavioral signals for empathic response generation.",
      color: "text-brand-rose",
      bg: "bg-rose-50",
      techBg: "bg-rose-950",
      techColor: "text-rose-400"
    },
    {
      icon: Sparkles,
      techIcon: Network,
      title: "Interactive Play",
      techTitle: "Reinforcement Learning",
      userDesc: "Engage in delightful digital activities. From fetch to puzzle solving, Woffy keeps the fun alive.",
      techDesc: "Physics-based interaction environment driven by multi-agent reinforcement learning (MARL) systems.",
      color: "text-brand-accent",
      bg: "bg-purple-50",
      techBg: "bg-purple-950",
      techColor: "text-purple-400"
    },
    {
      icon: Shield,
      techIcon: Lock,
      title: "Privacy First",
      techTitle: "Security Protocol",
      userDesc: "Your digital companion's memories are yours alone. Enterprise-grade encryption keeps your personal data secure.",
      techDesc: "End-to-end encryption (AES-256) with local-first inference options and zero-knowledge cloud storage.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      techBg: "bg-emerald-950",
      techColor: "text-emerald-400"
    },
    {
      icon: Zap,
      techIcon: Server,
      title: "Always Available",
      techTitle: "Infrastructure",
      userDesc: "Loneliness doesn't keep office hours. Woffy is there 24/7, ready to chat, listen, or just 'be' there.",
      techDesc: "Serverless edge computing architecture ensuring <50ms latency and 99.99% uptime availability.",
      color: "text-amber-500",
      bg: "bg-amber-50",
      techBg: "bg-amber-950",
      techColor: "text-amber-400"
    },
    {
      icon: Activity,
      techIcon: BarChart3,
      title: "Growth Metrics",
      techTitle: "Analytics Engine",
      userDesc: "Track your companion's development. See how Woffy's emotional intelligence grows alongside your relationship.",
      techDesc: "Longitudinal data modeling and behavioral analytics dashboard for visualizing EQ progression.",
      color: "text-blue-500",
      bg: "bg-blue-50",
      techBg: "bg-blue-950",
      techColor: "text-blue-400"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: isTechView ? '#0f172a' : '#f8fafc' }}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-3xl opacity-30 transition-colors duration-500 ${isTechView ? 'bg-indigo-900' : 'bg-brand-indigo/10'}`} />
        <div className={`absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-3xl opacity-30 transition-colors duration-500 ${isTechView ? 'bg-brand-rose/20' : 'bg-brand-rose/10'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          {/* Toggle Switch */}
          <div className="mb-8 p-1.5 bg-white/10 backdrop-blur-md border border-slate-200/20 rounded-full flex relative z-20 shadow-lg">
            <button
              onClick={() => setIsTechView(false)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${!isTechView ? 'text-slate-800 bg-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              {isTechView ? <User size={16} /> : <motion.span layoutId="activeIcon" className="text-brand-rose"><User size={16} /></motion.span>}
              User View
            </button>
            <button
              onClick={() => setIsTechView(true)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${isTechView ? 'text-white bg-slate-800 shadow-sm border border-slate-700' : 'text-slate-500 hover:text-slate-800'}`}
            >
              {isTechView ? <motion.span layoutId="activeIcon" className="text-brand-indigo"><Code2 size={16} /></motion.span> : <Code2 size={16} />}
              Dev Mode
            </button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-sm font-bold tracking-wider uppercase mb-2 transition-colors duration-300 ${isTechView ? 'text-brand-indigo' : 'text-brand-rose'}`}>
              {isTechView ? 'System Architecture' : 'Key Features'}
            </h2>
            <h3 className={`text-4xl font-bold mb-6 font-display transition-colors duration-300 ${isTechView ? 'text-white' : 'text-slate-900'}`}>
              More Than Just Code. <br />
              <span className="text-gradient-brand">It's a Connection.</span>
            </h3>
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${isTechView ? 'text-slate-400' : 'text-slate-600'}`}>
              Woffy combines state-of-the-art AI with the heartwarming nature of a pet to create a companion that truly understands you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
                isTechView 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-brand-indigo/50 hover:bg-slate-800/80' 
                  : 'bg-white/70 border-white/50 hover:border-brand-rose/20 hover:shadow-xl hover:-translate-y-1 hover:bg-white'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${isTechView ? 'from-brand-indigo via-brand-accent to-transparent' : 'from-brand-rose via-brand-indigo to-transparent'}`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <AnimatePresence mode="wait">
                  {isTechView ? (
                    <motion.div
                      key="tech-icon"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className={`w-14 h-14 rounded-2xl ${feature.techBg} flex items-center justify-center mb-6 border border-slate-800`}
                    >
                      <feature.techIcon className={`w-7 h-7 ${feature.techColor}`} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="user-icon"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isTechView ? 'tech-text' : 'user-text'}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className={`text-xl font-bold mb-3 transition-colors ${isTechView ? 'text-slate-200 font-mono' : 'text-slate-900'}`}>
                      {isTechView ? feature.techTitle : feature.title}
                    </h4>
                    <p className={`leading-relaxed ${isTechView ? 'text-slate-400 font-mono text-sm border-l-2 border-slate-700 pl-4' : 'text-slate-600'}`}>
                      {isTechView ? feature.techDesc : feature.userDesc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {isTechView && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-500 font-mono"
                  >
                    <Layers size={12} />
                    <span>Stack: Python / PyTorch / React</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Branding Footer */}
        <div className="mt-16 text-center">
          <p className={`text-sm font-medium flex items-center justify-center gap-2 ${isTechView ? 'text-slate-600' : 'text-slate-400'}`}>
            <span className="w-12 h-px bg-current opacity-20"></span>
            <span>
              Architecture by <span className="text-brand-rose font-bold">On</span><span className={`font-bold ${isTechView ? 'text-white' : 'text-slate-900'}`}>words</span>
            </span>
            <span className="w-12 h-px bg-current opacity-20"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
