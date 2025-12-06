import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Sparkles } from 'lucide-react';
import WoffyAvatar from './WoffyAvatar';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-32 lg:pt-48 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-50/50 backdrop-blur-sm border border-rose-200 text-rose-600 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all">
                <span className="flex h-2 w-2 rounded-full bg-rose-600 mr-2 animate-pulse"></span>
                Beta Launching Q4 2026
              </div>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">Woffy.ai</span> <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-slate-400 font-bold block mt-2">Your AI Companion</span>
              <span className="text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 block mt-4 pb-2">
                Powered by Love
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light">
              Experience the future of companionship. An AI that learns, adapts, and brings unconditional golden retriever energy to your life.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-20">
              <a 
                href="#prototype"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Try Prototype
              </a>
              <a 
                href="#about"
                className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-2xl font-semibold text-lg hover:bg-white hover:border-slate-300 transition-all hover:-translate-y-1"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                { icon: Heart, label: "Emotionally Intelligent", color: "text-rose-500" },
                { icon: Zap, label: "Always Available", color: "text-amber-500" },
                { icon: Shield, label: "Privacy First", color: "text-indigo-500" }
              ].map((item, idx) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/30 border border-white/50">
                  <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700 text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Woffy Avatar Animation */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5, type: "spring" }}
             className="relative hidden lg:block"
          >
            <WoffyAvatar />
            
            {/* Decorative Stats Cards Floating */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }}
              transition={{ 
                opacity: { delay: 1.2, duration: 0.5 },
                x: { delay: 1.2, duration: 0.5 },
                y: { duration: 5, repeat: Infinity, delay: 1 } 
              }}
              className="absolute top-10 right-10 glass-card p-4 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">Mood: Happy</span>
              </div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [10, -10, 10] }}
              transition={{ 
                opacity: { delay: 1.4, duration: 0.5 },
                x: { delay: 1.4, duration: 0.5 },
                y: { duration: 6, repeat: Infinity, delay: 0.5 } 
              }}
              className="absolute bottom-20 -left-4 glass-card p-4 rounded-2xl max-w-[180px]"
            >
              <div className="text-xs text-slate-500 mb-1">Learning...</div>
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 w-[75%]"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
