import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Shield, ArrowRight, Sparkles, Zap } from 'lucide-react';

const TwoPersonalities = ({ onToggleTheme, currentTheme }) => {
  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Split Background Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-rose-900/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/10 blur-[100px] pointer-events-none"></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-cyan-500"></span>
            Select Your Companion
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
          >
            Two <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-white to-cyan-400">Personalities.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            One brings comfort. The other brings adventure. <br className="hidden md:block"/>
            <span className="text-white">Which Woffy matches your vibe?</span>
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Cloud Edition Card */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onToggleTheme('cloud')}
            className={`cursor-pointer rounded-[3rem] p-10 md:p-14 relative overflow-hidden transition-all duration-500 group border-2 ${
              currentTheme === 'cloud' 
                ? 'border-rose-400/50 shadow-[0_0_50px_-10px_rgba(251,113,133,0.3)]' 
                : 'border-white/5 hover:border-rose-500/30 opacity-80 hover:opacity-100'
            }`}
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 opacity-90 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full min-h-[320px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white">
                  <Wind size={32} />
                </div>
                {currentTheme === 'cloud' && (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="bg-white text-rose-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  >
                    Active
                  </motion.div>
                )}
              </div>

              <div>
                <h3 className="text-4xl font-bold mb-3 text-white">Cloud Edition</h3>
                <p className="text-rose-100 text-lg font-medium mb-6">Soft, Plush, Warm</p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/90 backdrop-blur-sm">Pastel Fur</span>
                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/90 backdrop-blur-sm">Cuddly</span>
                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/90 backdrop-blur-sm">Anxiety Relief</span>
                </div>
              </div>
            </div>

            {/* Decorative Icon */}
            <Sparkles className="absolute -bottom-8 -right-8 text-white/10 w-64 h-64 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </motion.div>

          {/* Titan Edition Card */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onToggleTheme('titan')}
            className={`cursor-pointer rounded-[3rem] p-10 md:p-14 relative overflow-hidden transition-all duration-500 group border-2 ${
              currentTheme === 'titan' 
                ? 'border-cyan-400/50 shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)]' 
                : 'border-white/5 hover:border-cyan-500/30 opacity-80 hover:opacity-100'
            }`}
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-700 opacity-90 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full min-h-[320px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white">
                  <Shield size={32} />
                </div>
                {currentTheme === 'titan' && (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="bg-white text-cyan-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  >
                    Active
                  </motion.div>
                )}
              </div>

              <div>
                <h3 className="text-4xl font-bold mb-3 text-white">Titan Edition</h3>
                <p className="text-cyan-100 text-lg font-medium mb-6">Metal, Rugged, Cool</p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/90 backdrop-blur-sm">Brushed Metal</span>
                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/90 backdrop-blur-sm">Durable</span>
                   <span className="px-3 py-1 bg-white/10 rounded-lg text-sm text-white/90 backdrop-blur-sm">Exploration</span>
                </div>
              </div>
            </div>

            {/* Decorative Icon */}
            <Zap className="absolute -bottom-8 -right-8 text-white/10 w-64 h-64 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </motion.div>
        </div>

        <div className="text-center">
          <button className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <span className="font-bold text-lg tracking-wide border-b border-transparent group-hover:border-white transition-all pb-0.5">Compare Full Specifications</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TwoPersonalities;
