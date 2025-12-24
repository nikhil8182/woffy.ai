import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Wind, 
  Lock, 
  Zap, 
  Mic, 
  Wifi, 
  Power, 
  Home, 
  Smartphone,
  CheckCircle2
} from 'lucide-react';

const SmartHome = () => {
  const [activeRoutine, setActiveRoutine] = useState('morning');

  const routines = {
    morning: {
      label: "Good Morning",
      command: '"Woffy, good morning"',
      actions: [
        { icon: Wind, text: "Open curtains", state: "opening" },
        { icon: Lightbulb, text: "Lights to 80%", state: "on" },
        { icon: Wind, text: "AC to 24°C", state: "adjusting" },
        { icon: Zap, text: "Coffee maker on", state: "active" }
      ],
      color: "from-amber-400 to-orange-500",
      bg: "bg-amber-50"
    },
    movie: {
      label: "Movie Time",
      command: '"Woffy, movie mode"',
      actions: [
        { icon: Lightbulb, text: "Dim lights to 10%", state: "dimming" },
        { icon: Wind, text: "Close curtains", state: "closing" },
        { icon: Lock, text: "Lock front door", state: "locking" },
        { icon: Mic, text: "Enable DND", state: "active" }
      ],
      color: "from-indigo-500 to-purple-600",
      bg: "bg-indigo-950"
    },
    away: {
      label: "Away Mode",
      command: '"Woffy, I\'m leaving"',
      actions: [
        { icon: Lock, text: "Lock all doors", state: "secured" },
        { icon: Power, text: "Turn off appliances", state: "off" },
        { icon: Home, text: "Arm security", state: "armed" },
        { icon: Smartphone, text: "Notify owner", state: "linked" }
      ],
      color: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50"
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden transition-colors duration-700">
      {/* Background based on active routine */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${
        activeRoutine === 'movie' ? 'bg-slate-900' : 'bg-slate-50'
      }`}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-6 ${
              activeRoutine === 'movie' 
                ? 'bg-white/10 border-white/20 text-indigo-300' 
                : 'bg-white border-slate-200 text-slate-600'
            }`}
          >
            <Wifi size={14} />
            Powered by INIYAL Ecosystem
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
            activeRoutine === 'movie' ? 'text-white' : 'text-slate-900'
          }`}>
            Your Mobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose to-brand-indigo">
              Smart Home Hub
            </span>
          </h2>
          
          <p className={`text-xl leading-relaxed transition-colors duration-500 ${
            activeRoutine === 'movie' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Woffy isn't just a pet. He's a roaming voice assistant that controls your entire home. 
            <span className="font-semibold block mt-2">Works locally. Works offline. Zero latency.</span>
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Controls */}
          <div className="space-y-6">
            <h3 className={`text-lg font-bold uppercase tracking-wider mb-4 ${
              activeRoutine === 'movie' ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Select a Routine
            </h3>
            
            {Object.entries(routines).map(([key, data]) => (
              <motion.button
                key={key}
                onClick={() => setActiveRoutine(key)}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-6 rounded-3xl border transition-all duration-300 text-left relative overflow-hidden group ${
                  activeRoutine === key
                    ? activeRoutine === 'movie' 
                      ? 'bg-indigo-900/50 border-indigo-500/50 shadow-lg shadow-indigo-500/20'
                      : 'bg-white border-brand-rose shadow-xl shadow-brand-rose/10'
                    : activeRoutine === 'movie'
                      ? 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-400'
                      : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${data.color} shadow-lg`}>
                      {key === 'morning' && <Wind size={20} />}
                      {key === 'movie' && <Zap size={20} />}
                      {key === 'away' && <Lock size={20} />}
                    </div>
                    <div>
                      <div className={`font-bold text-lg ${
                        activeRoutine === key 
                          ? activeRoutine === 'movie' ? 'text-white' : 'text-slate-900'
                          : ''
                      }`}>
                        {data.label}
                      </div>
                      <div className={`text-sm font-mono mt-1 ${
                        activeRoutine === key 
                          ? activeRoutine === 'movie' ? 'text-indigo-300' : 'text-brand-rose'
                          : 'opacity-50'
                      }`}>
                        {data.command}
                      </div>
                    </div>
                  </div>
                  
                  {activeRoutine === key && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-emerald-500"
                    >
                      <CheckCircle2 size={24} />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
            
            <div className={`mt-8 p-6 rounded-2xl border ${
               activeRoutine === 'movie' ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  activeRoutine === 'movie' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                }`}>
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${
                    activeRoutine === 'movie' ? 'text-white' : 'text-slate-900'
                  }`}>Offline Promise</h4>
                  <p className={`text-xs mt-1 ${
                    activeRoutine === 'movie' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Unlike smart speakers, Woffy processes critical home commands locally. 
                    Internet down? Your lights and locks still work instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visualizer */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoutine}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`aspect-square rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border ${
                   activeRoutine === 'movie' ? 'bg-slate-950 border-white/10' : 'bg-white border-white'
                }`}
              >
                {/* Background Decor */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-50 bg-gradient-to-br ${routines[activeRoutine].color}`}></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`text-sm font-bold uppercase tracking-widest mb-8 ${
                    activeRoutine === 'movie' ? 'text-indigo-300' : 'text-slate-400'
                  }`}>
                    System Status
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {routines[activeRoutine].actions.map((action, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className={`p-5 rounded-2xl border flex flex-col gap-3 ${
                          activeRoutine === 'movie' 
                            ? 'bg-white/5 border-white/10 text-white' 
                            : 'bg-slate-50 border-slate-100 text-slate-800'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activeRoutine === 'movie' ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-200 text-slate-600'
                        }`}>
                          <action.icon size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-sm">{action.text}</div>
                          <div className={`text-xs flex items-center gap-1.5 mt-1 ${
                             activeRoutine === 'movie' ? 'text-emerald-400' : 'text-emerald-600'
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                            {action.state}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-center">
                    <div className={`text-center ${
                      activeRoutine === 'movie' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      <div className="text-xs uppercase font-bold tracking-widest mb-2">Latency</div>
                      <div className="text-3xl font-mono font-bold flex items-end justify-center gap-1">
                        45<span className="text-sm mb-1">ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartHome;



