import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, MessageCircle, Sparkles } from 'lucide-react';
import WoffyDemo from './WoffyDemo';

const Prototype = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-rose/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-rose/20 text-brand-rose text-sm font-medium mb-6 border border-brand-rose/30">
              <span className="flex h-2 w-2 rounded-full bg-brand-rose mr-2 animate-pulse"></span>
              Interactive Demo
            </div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight font-display">
              Experience Woffy in Action
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Not just a chatbot—a true companion! See how Woffy understands your emotions, suggests activities, and grows with you in our interactive prototype.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-slate-300">Emotion Recognition</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-slate-300">Activity Suggestions</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-slate-300">Personality Sync</span>
              </li>
            </ul>

            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-xl shadow-brand-rose/10"
            >
              <Play className="w-5 h-5 fill-current text-brand-rose group-hover:scale-110 transition-transform" />
              Try Interactive Demo
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Placeholder for the actual demo visual/screenshot */}
            <div className="aspect-[4/3] rounded-3xl bg-slate-800/50 border border-slate-700/50 shadow-2xl overflow-hidden flex items-center justify-center relative group backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80"></div>

              {/* Mock UI Elements */}
              <div className="relative z-10 w-full h-full p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-rose to-brand-indigo flex items-center justify-center text-white font-bold shadow-lg">W</div>
                    <div>
                      <div className="text-sm font-semibold text-white">Woffy</div>
                      <div className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        Online
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="bg-slate-700/50 p-4 rounded-2xl rounded-tl-none max-w-[80%] backdrop-blur-sm border border-slate-600/30">
                    <p className="text-slate-200 text-sm">Hello! I noticed you've been working hard. Want to take a quick break?</p>
                  </div>
                  <div className="bg-brand-rose p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto shadow-lg shadow-brand-rose/20">
                    <p className="text-white text-sm">That sounds great, Woffy. What do you suggest?</p>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-2xl rounded-tl-none max-w-[80%] backdrop-blur-sm border border-slate-600/30">
                    <p className="text-slate-200 text-sm">How about a 5-minute stretch? I can guide you through it!</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="mt-4 flex gap-1 items-center text-slate-500 text-xs">
                  <span>Woffy is typing</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                  <span className="animate-bounce delay-300">.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Woffy Demo Modal */}
      <WoffyDemo isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
};

export default Prototype;
