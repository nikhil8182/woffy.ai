import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Eye, Lock, Bell, Video, UserCheck, AlertTriangle, Scan, Radio } from 'lucide-react';

const GuardMode = () => {
  const [isGuarding, setIsGuarding] = useState(false);

  // Scanning beam animation
  const scanVariants = {
    scanning: {
      rotate: 360,
      transition: { duration: 3, repeat: Infinity, ease: "linear" }
    },
    idle: {
      rotate: 0
    }
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans">
      {/* Background Ambience - Cyberpunk Grid */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isGuarding ? 'opacity-100' : 'opacity-20'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        {isGuarding && (
           <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Visual / Interactive Element */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-md group cursor-pointer" onClick={() => setIsGuarding(!isGuarding)}>
              
              {/* Outer HUD Ring */}
              <motion.div 
                className="absolute -inset-8 rounded-full border border-dashed border-slate-700/50"
                animate={{ rotate: isGuarding ? -360 : 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
               <motion.div 
                className="absolute -inset-8 rounded-full border-t-2 border-slate-500/30"
                animate={{ rotate: isGuarding ? 360 : 0 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* The "Eye" */}
              <motion.div 
                className="aspect-square rounded-full border-4 bg-slate-900 relative flex items-center justify-center overflow-hidden shadow-2xl z-10"
                animate={{ 
                  borderColor: isGuarding ? 'rgba(239,68,68,0.6)' : 'rgba(56,189,248,0.3)',
                  boxShadow: isGuarding 
                    ? '0 0 80px rgba(220, 38, 38, 0.4), inset 0 0 30px rgba(220, 38, 38, 0.2)' 
                    : '0 0 0 rgba(0,0,0,0), inset 0 0 20px rgba(56,189,248,0.1)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.8)_100%)] z-20 pointer-events-none"></div>
                
                {/* Tech Lens UI Layers */}
                <div className="absolute inset-4 border border-slate-700/50 rounded-full"></div>
                <div className="absolute inset-12 border border-slate-800/80 rounded-full"></div>
                
                {/* Scanning Beam (When Guarding) */}
                <AnimatePresence>
                  {isGuarding && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10"
                    >
                      <motion.div 
                        className="w-full h-1/2 bg-gradient-to-b from-transparent to-red-500/20 border-b border-red-500/50 origin-bottom absolute top-0 left-0 right-0"
                        variants={scanVariants}
                        animate="scanning"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Core Lens */}
                <motion.div 
                  className={`relative z-0 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    isGuarding ? 'bg-red-950' : 'bg-slate-900'
                  }`}
                  animate={{ 
                    width: isGuarding ? '140px' : '100px',
                    height: isGuarding ? '140px' : '100px',
                  }}
                >
                  <motion.div 
                    className={`absolute inset-0 rounded-full blur-md ${isGuarding ? 'bg-red-600' : 'bg-cyan-500'}`}
                    animate={{ opacity: isGuarding ? [0.6, 1, 0.6] : 0.4 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className={`w-full h-full rounded-full relative z-10 ${isGuarding ? 'bg-gradient-to-br from-red-500 to-red-700' : 'bg-gradient-to-br from-cyan-400 to-blue-600'}`}></div>
                  
                  {/* Glint */}
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full blur-[1px] opacity-80 z-20"></div>
                </motion.div>

                {/* HUD Data Overlay */}
                <div className="absolute inset-0 z-30 pointer-events-none p-8 flex flex-col justify-between">
                   <div className="flex justify-between items-start text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      <span className={isGuarding ? 'text-red-400/70' : ''}>REC: {isGuarding ? 'ON' : 'OFF'}</span>
                      <span className={isGuarding ? 'text-red-400/70' : ''}>BAT: 98%</span>
                   </div>
                   <div className="flex justify-between items-end text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      <span className={isGuarding ? 'text-red-400/70' : ''}>ISO: AUTO</span>
                      <span className={isGuarding ? 'text-red-400/70' : ''}>LIDAR: {isGuarding ? 'ACT' : 'STBY'}</span>
                   </div>
                   
                   {/* Center Crosshair */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-30">
                      <div className="w-[80%] h-[1px] bg-slate-500"></div>
                      <div className="h-[80%] w-[1px] bg-slate-500 absolute"></div>
                      <div className="w-40 h-40 border border-slate-500 rounded-full absolute"></div>
                   </div>
                </div>

                {/* Bottom Status Text */}
                <div className="absolute bottom-16 left-0 right-0 text-center z-40">
                  <motion.div 
                    key={isGuarding ? 'armed' : 'idle'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border-x-2 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-[0.2em] shadow-lg ${
                      isGuarding 
                        ? 'bg-red-950/80 border-red-500 text-red-500 shadow-red-900/50' 
                        : 'bg-slate-900/80 border-cyan-500/50 text-cyan-400'
                    }`}
                  >
                    {isGuarding ? (
                      <>
                        <Radio size={12} className="animate-ping" />
                        GUARD MODE ACTIVE
                      </>
                    ) : (
                      <>
                        <Eye size={14} />
                        SYSTEM IDLE
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating "Click to Toggle" Hint */}
              <motion.div 
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-slate-500 text-xs uppercase tracking-widest font-bold"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click Interface to {isGuarding ? 'Disarm' : 'Arm'}
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 border-l-2 border-red-500 pl-3">
                Titan Security Protocol
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase font-display">
                Peace of Mind.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x">
                  Patrolling 24/7.
                </span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light border-l border-slate-800 pl-6">
                When you're away, Woffy transforms. He patrols your home, checks for anomalies, and sends <span className="text-white font-medium">encrypted alerts</span> instantly.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    icon: UserCheck, 
                    title: "Smart Friend-or-Foe Detection", 
                    desc: "Distinguishes between pets, family, and strangers using on-device edge AI." 
                  },
                  { 
                    icon: AlertTriangle, 
                    title: "Active Deterrence System", 
                    desc: "Can trigger lights, sirens, or voice warnings if an intrusion is detected." 
                  },
                  { 
                    icon: Lock, 
                    title: "Physical Privacy Shutters", 
                    desc: "Hardware-level camera disconnect. No cloud uploads without explicit opt-in." 
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex gap-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300 flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuardMode;
