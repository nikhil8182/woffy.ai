import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Heart, Zap } from 'lucide-react';

const ChooseCompanion = ({ themeMode, openWaitlist }) => {
  const isTitan = themeMode === 'titan';

  return (
    <section className={`py-32 transition-colors duration-700 ${isTitan ? 'bg-slate-950' : 'bg-rose-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isTitan ? 'text-white font-mono' : 'text-slate-900 font-display'}`}>
            Choose Your Companion
          </h2>
          <p className={`text-xl ${isTitan ? 'text-slate-400' : 'text-slate-600'}`}>
            The softest hug or the coolest tech. Both are waiting for a home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Cloud Edition Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className={`rounded-[3rem] p-10 relative overflow-hidden transition-all duration-500 ${
              !isTitan 
                ? 'bg-white shadow-2xl ring-4 ring-rose-100 scale-105 z-10' 
                : 'bg-slate-900/50 border border-slate-800 opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
            }`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cloud size={120} className="text-rose-500" />
            </div>
            
            <div className="relative z-10">
               <div className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-bold mb-6">
                 Cloud Edition
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Soft enough to Hug.</h3>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 Wrapped in hypoallergenic, premium plush fabric. Designed for cuddles, comfort, and gentleness.
               </p>
               
               <ul className="space-y-4 mb-10">
                 <li className="flex items-center gap-3 text-slate-700">
                   <Heart className="text-rose-400" size={20} />
                   <span>Pastel Pink / Cotton White</span>
                 </li>
                 <li className="flex items-center gap-3 text-slate-700">
                   <Heart className="text-rose-400" size={20} />
                   <span>Warm & Soothing Vibe</span>
                 </li>
                 <li className="flex items-center gap-3 text-slate-700">
                   <Heart className="text-rose-400" size={20} />
                   <span>Best for Anxiety Relief</span>
                 </li>
               </ul>

               <button 
                 onClick={openWaitlist}
                 className="w-full py-4 rounded-2xl bg-rose-500 text-white font-bold hover:bg-rose-400 transition-colors shadow-lg shadow-rose-200"
               >
                 Adopt "Cloud"
               </button>
            </div>
          </motion.div>

          {/* Titan Edition Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className={`rounded-[3rem] p-10 relative overflow-hidden transition-all duration-500 ${
              isTitan 
                ? 'bg-slate-900 shadow-2xl ring-4 ring-cyan-900 scale-105 z-10' 
                : 'bg-white/50 border border-slate-200 opacity-60 hover:opacity-100 grayscale hover:grayscale-0'
            }`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield size={120} className="text-cyan-500" />
            </div>
            
            <div className="relative z-10">
               <div className="inline-block px-4 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-sm font-bold mb-6 border border-cyan-800">
                 Titan Edition
               </div>
               <h3 className={`text-3xl font-bold mb-4 ${isTitan ? 'text-white' : 'text-slate-900'}`}>Built for Adventure.</h3>
               <p className={`mb-8 leading-relaxed ${isTitan ? 'text-slate-400' : 'text-slate-600'}`}>
                 Encased in a durable, lightweight metallic shell. Designed for action, speed, and resilience.
               </p>
               
               <ul className="space-y-4 mb-10">
                 <li className={`flex items-center gap-3 ${isTitan ? 'text-slate-300' : 'text-slate-700'}`}>
                   <Zap className="text-cyan-500" size={20} />
                   <span>Brushed Silver / Gunmetal</span>
                 </li>
                 <li className={`flex items-center gap-3 ${isTitan ? 'text-slate-300' : 'text-slate-700'}`}>
                   <Zap className="text-cyan-500" size={20} />
                   <span>Futuristic & Robust</span>
                 </li>
                 <li className={`flex items-center gap-3 ${isTitan ? 'text-slate-300' : 'text-slate-700'}`}>
                   <Zap className="text-cyan-500" size={20} />
                   <span>Best for Explorers</span>
                 </li>
               </ul>

               <button 
                 onClick={openWaitlist}
                 className="w-full py-4 rounded-2xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/20"
               >
                 Adopt "Titan"
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChooseCompanion;









