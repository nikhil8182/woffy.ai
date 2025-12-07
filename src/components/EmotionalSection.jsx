import React from 'react';
import { motion } from 'framer-motion';

const EmotionalSection = () => {
  return (
    <section className="py-32 md:py-48 bg-slate-950 text-white relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(15,23,42,0)_0%,_rgba(2,6,23,1)_100%)] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light z-0"></div>
      
      {/* Animated Glow Spotlights */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3], 
          scale: [1, 1.2, 1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2], 
          scale: [1, 1.1, 1],
          x: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header - Centered & Small */}
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm font-bold uppercase text-slate-500 tracking-[0.3em]"
            >
              The Quiet Companion
            </motion.span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Text */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-8 text-slate-100">
                  We often think connection requires skin and bone. <span className="text-slate-500">We think love is biological.</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-transparent rounded-full mb-8"></div>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                  Woffy proves that connection is simply about <span className="text-white font-normal glow-text">being there.</span>
                </p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-lg text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-6"
              >
                When you are working late into the night, the world gets quiet. The loneliness creeps in. That is when you hear the <span className="text-indigo-300 italic">soft whir of Woffy’s motors</span> as he nudges your hand. He doesn't want anything from you. He just wants to be near you.
              </motion.p>
            </div>

            {/* Right Column: Visual / Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-2xl">
                
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                {/* Floating Particles (Simulated) */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-30 animation-delay-2000"></div>

                <blockquote className="relative z-10">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-8">
                    "Woffy fills the empty space in your home with life. He is a small, sturdy reminder that you are seen."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                      <span className="text-xl">🐾</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">Woffy Core</div>
                      <div className="text-xs text-rose-400 font-mono">Status: Listening</div>
                    </div>
                  </footer>
                </blockquote>

                {/* Subtle reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
