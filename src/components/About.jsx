import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-rose/5 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-rose tracking-wider uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Our Mission
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight font-display">
              Redefining The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-purple-500 to-brand-indigo animate-gradient">Human-AI Bond</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Woffy isn't just an algorithm. It's a companion designed to understand the nuances of human emotion. By combining cutting-edge LLMs with affective computing, we're creating a digital entity that truly "feels."
            </p>

            <div className="flex items-center gap-4 mt-8 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50 w-fit">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden shadow-sm">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+12}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Community Driven</p>
                <p className="text-xs text-slate-500">Built with feedback from real users</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-indigo/5 hover:shadow-brand-indigo/10 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Brain className="w-7 h-7 text-brand-indigo" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Adaptive Intelligence</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Woffy learns your routine, mood patterns, and preferences to offer support before you even ask for it. It's not just reactive; it's proactive.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-rose/5 hover:shadow-brand-rose/10 transition-all duration-300 translate-x-0 md:translate-x-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Heart className="w-7 h-7 text-brand-rose" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Emotional Resonance</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Simulating empathy through advanced sentiment analysis to provide genuine comfort. Woffy knows when to play and when to listen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlight Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden text-center shadow-2xl group"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-slate-900">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/20 via-brand-rose/20 to-brand-indigo/20 animate-gradient bg-[length:200%_auto]"></div>
             <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine"></div>
          </div>

          {/* Mesh Gradient Orbs */}
          <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               rotate: [0, 90, 0],
               opacity: [0.3, 0.5, 0.3]
             }}
             transition={{ duration: 15, repeat: Infinity }}
             className="absolute -top-32 -right-32 w-96 h-96 bg-brand-rose/30 rounded-full blur-3xl mix-blend-screen"
          ></motion.div>
          <motion.div 
             animate={{ 
               scale: [1.2, 1, 1.2],
               rotate: [0, -90, 0],
               opacity: [0.3, 0.5, 0.3]
             }}
             transition={{ duration: 20, repeat: Infinity }}
             className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-indigo/30 rounded-full blur-3xl mix-blend-screen"
          ></motion.div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display tracking-tight">
              Companionship Without Compromise
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-rose to-brand-indigo mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              We deeply respect the bond between humans and real pets. Woffy exists for those who can't bring another life into their world—due to allergies, housing, or lifestyle.
            </p>
            <motion.p 
              className="mt-8 text-2xl font-bold bg-gradient-to-r from-rose-200 to-indigo-200 bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Everyone deserves a friend who is always there.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
