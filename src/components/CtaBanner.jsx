import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Rocket } from 'lucide-react';

const CtaBanner = ({ onJoinWaitlist }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-rose/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-rose/10 border border-brand-rose/20 text-brand-rose text-sm font-medium mb-6">
                <Sparkles size={14} />
                <span>Limited Beta Access</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
                Ready to Meet Your <br />
                <span className="bg-gradient-to-r from-brand-rose to-brand-indigo bg-clip-text text-transparent">
                  AI Companion?
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join a select group of early adopters shaping the personality and intelligence of Woffy. Your feedback builds the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={onJoinWaitlist}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-brand-rose to-brand-indigo text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-brand-rose/25 transition-all flex items-center justify-center gap-2 group"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.a
                  href="#roadmap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all text-center"
                >
                  View Roadmap
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Stats/Features Card */}
          <motion.div 
            className="w-full lg:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl max-w-sm mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-rose/10 flex items-center justify-center text-brand-rose">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Alpha</div>
                    <div className="text-slate-400 text-sm">Current Phase</div>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-700"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Secure</div>
                    <div className="text-slate-400 text-sm">End-to-End Privacy</div>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-700"></div>

                <div className="pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Launch Progress</span>
                    <span className="text-brand-rose text-sm font-bold">35%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-rose to-brand-indigo w-[35%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
