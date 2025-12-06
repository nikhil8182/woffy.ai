import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-50/50 backdrop-blur-sm border border-rose-200 text-rose-600 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all"
          >
            <span className="flex h-2 w-2 rounded-full bg-rose-600 mr-2 animate-pulse"></span>
            Beta Launching Q4 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">Woffy.ai</span> <br />
            <span className="text-4xl md:text-6xl text-slate-400 font-bold block mt-2">Your AI Companion</span>
            <span className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-red-500 to-orange-500 block mt-4 pb-2">
              Powered by Love
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Experience the future of companionship. An AI that learns, adapts, and brings unconditional joy to your life—without the limitations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Heart, label: "Emotionally Intelligent", color: "text-rose-500", delay: 0 },
              { icon: Zap, label: "Always Available", color: "text-amber-500", delay: 0.1 },
              { icon: Shield, label: "Privacy First", color: "text-indigo-500", delay: 0.2 }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl flex items-center justify-center gap-4"
              >
                <div className={`p-3 rounded-xl bg-white shadow-sm ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-slate-700">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-10 border-t border-slate-200/60 grid grid-cols-3 gap-8 text-center"
          >
             <div>
               <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">10k+</div>
               <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">People Waiting</div>
             </div>
             <div>
               <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">98%</div>
               <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">Satisfaction</div>
             </div>
             <div>
               <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">24/7</div>
               <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">AI Learning</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
