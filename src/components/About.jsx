import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-rose-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Redefining The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Human-AI Bond</span>
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Woffy isn't just an algorithm. It's a companion designed to understand the nuances of human emotion. By combining cutting-edge LLMs with affective computing, we're creating a digital entity that truly "feels."
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-500 flex items-center">
                Trusted by early beta testers
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Adaptive Intelligence</h4>
                  <p className="text-slate-600">
                    Woffy learns your routine, mood patterns, and preferences to offer support before you even ask for it.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl"
            >
               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Emotional Resonance</h4>
                  <p className="text-slate-600">
                    Simulating empathy through advanced sentiment analysis to provide genuine comfort and companionship.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">For Those Who Can't Take the Risk</h3>
            <p className="text-lg text-slate-600">
              We deeply respect the bond between humans and real pets. Woffy exists for those who can't bring another life into their world—due to allergies, housing, or lifestyle. Everyone deserves companionship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
