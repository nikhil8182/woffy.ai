import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Eye, BatteryCharging, Brain, Sparkles, Zap } from 'lucide-react';

const IntelligenceInMotion = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-rose-500" />
            Core Technology
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight"
          >
            Intelligence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Motion</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Powered by next-gen robotics and emotive AI, Woffy bridges the gap between machine precision and organic connection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Item 1: Large - Edge AI */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-rose-100 transition-all duration-500 group relative overflow-hidden"
            >
                <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity rotate-12">
                    <Cpu size={200} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Brain size={28} />
                        </div>
                        <div className="bg-rose-100/50 text-rose-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Neural Engine
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Neural Edge Core</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Woffy processes emotions locally using a dedicated neural engine. This means <span className="font-semibold text-slate-800">zero latency</span> interactions and <span className="font-semibold text-slate-800">100% privacy</span>. Your companion thinks and feels in real-time, independent of the cloud.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Item 2: Vertical - Quad Motion */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="md:row-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-xl text-white group relative overflow-hidden flex flex-col"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-sm group-hover:bg-indigo-500 transition-colors duration-300">
                        <Activity size={28} />
                    </div>
                    
                    <div className="mt-auto">
                        <h3 className="text-2xl font-bold mb-3">Biomimetic Quad-Motion</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            Advanced 12-DOF articulation system mimics organic quadruped movement. Capable of complex behaviors like dancing, stretching, and navigating indoor obstacles with feline agility.
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono uppercase">
                                    <span>Agility</span>
                                    <span className="text-indigo-400">98%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 w-[98%] rounded-full" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono uppercase">
                                    <span>Stability</span>
                                    <span className="text-indigo-400">95%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 w-[95%] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Item 3: Small - OLED Eyes */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                    <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">OLED Gaze</h3>
                <p className="text-slate-600 text-sm leading-relaxed">High-resolution emotive eyes that communicate over 50 unique emotional states instantly.</p>
            </motion.div>

            {/* Item 4: Small - Auto Dock */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                    <BatteryCharging size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Autonomy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Self-managing energy levels. Woffy knows when to play and when to return to his pad.</p>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntelligenceInMotion;