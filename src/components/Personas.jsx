import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Baby, 
  Briefcase, 
  HeartHandshake, 
  Moon, 
  Gamepad2, 
  Clock, 
  Pill, 
  ShieldCheck,
  ChevronRight,
  Battery,
  Wifi,
  Signal,
  Sparkles,
  Play,
  CheckCircle2
} from 'lucide-react';

const Personas = () => {
  const [activeTab, setActiveTab] = useState('kids');

  const personas = {
    kids: {
      id: 'kids',
      label: "Kids Mode",
      tagline: "Safe. Playful. Educational.",
      icon: Baby,
      description: "Woffy transforms into a gentle playmate that tells bedtime stories, plays hide-and-seek, and encourages learning—all within safe boundaries.",
      features: [
        { icon: Moon, title: "Dreamscapes", desc: "Immersive bedtime stories with sound effects." },
        { icon: Gamepad2, title: "Active Play", desc: "Chase, fetch, and dance modes." },
        { icon: ShieldCheck, title: "Guardian AI", desc: "Filters explicit content & blocks surveillance." }
      ],
      color: "from-blue-400 to-indigo-500",
      accent: "bg-blue-500",
      text: "text-blue-500",
      ui: {
        time: "19:30",
        status: "Storytime Mode",
        battery: "85%"
      }
    },
    adults: {
      id: 'adults',
      label: "Companion Mode",
      tagline: "Your Wellness Architect.",
      icon: Briefcase,
      description: "A silent partner for your busy life. Woffy manages your smart home, reminds you to breathe, and provides a non-judgmental presence after work.",
      features: [
        { icon: HeartHandshake, title: "Decompression", desc: "Guided breathing & ambient calming sounds." },
        { icon: Clock, title: "Flow State", desc: "Pomodoro timer & focus music integration." },
        { icon: ShieldCheck, title: "Home Sentry", desc: "Auto-locks doors when you focus or sleep." }
      ],
      color: "from-emerald-400 to-teal-600",
      accent: "bg-emerald-500",
      text: "text-emerald-500",
      ui: {
        time: "14:00",
        status: "Focus Assist",
        battery: "62%"
      }
    },
    seniors: {
      id: 'seniors',
      label: "Care Mode",
      tagline: "Always There. Always Caring.",
      icon: HeartHandshake,
      description: "Independence with a safety net. Woffy provides medication reminders, detects falls (beta), and offers stimulating daily conversation.",
      features: [
        { icon: Pill, title: "Health Nudges", desc: "Gentle reminders for meds and hydration." },
        { icon: Sparkles, title: "Memory Lane", desc: "Engaging trivia and family photo display." },
        { icon: ShieldCheck, title: "Pathfinder", desc: "Lights up the floor during night walks." }
      ],
      color: "from-rose-400 to-orange-500",
      accent: "bg-rose-500",
      text: "text-rose-500",
      ui: {
        time: "08:15",
        status: "Morning Check-in",
        battery: "94%"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-colors duration-1000 ease-in-out bg-slate-50">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${personas[activeTab].color}`}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-500 mb-6"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span>Adaptive Personality Engine</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            One Robot. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700">
              Three Distinct Lives.
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Woffy's neural core reconfigures instantly to match the user. It's not just a setting change—it's a whole new personality.
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left: Navigation Menu */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {Object.entries(personas).map(([key, data]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative p-6 rounded-3xl border text-left transition-all duration-300 overflow-hidden ${
                  activeTab === key 
                    ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/50' 
                    : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeTab === key && (
                  <motion.div 
                    layoutId="activeBar"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${data.color}`} 
                  />
                )}
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      activeTab === key ? `${data.accent} text-white` : 'bg-slate-100 text-slate-400'
                    }`}>
                      <data.icon size={22} />
                    </div>
                    <div>
                      <div className={`font-bold text-lg ${activeTab === key ? 'text-slate-900' : 'text-slate-500'}`}>
                        {data.label}
                      </div>
                      <div className="text-xs font-medium text-slate-400">
                        {key === 'kids' ? 'Ages 5-15' : key === 'adults' ? 'Productivity Focus' : 'Senior Support'}
                      </div>
                    </div>
                  </div>
                  {activeTab === key && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className="text-slate-300"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Holographic Card Display */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -20, rotateY: 10 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Background Decor */}
                <div className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[100px] opacity-20 bg-gradient-to-br ${personas[activeTab].color}`}></div>
                <div className={`absolute -left-20 -bottom-20 w-80 h-80 rounded-full blur-[100px] opacity-20 bg-gradient-to-tr ${personas[activeTab].color}`}></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-12">
                    
                    {/* Phone/Device UI Preview */}
                    <div className="md:w-5/12 relative">
                      <div className="bg-slate-900 rounded-[2rem] p-3 shadow-2xl transform rotate-1 border-4 border-slate-800">
                        {/* Status Bar */}
                        <div className="bg-slate-950 rounded-t-[1.5rem] px-5 py-3 flex justify-between items-center text-white/70 text-xs">
                           <span>{personas[activeTab].ui.time}</span>
                           <div className="flex gap-1.5">
                             <Signal size={12} />
                             <Wifi size={12} />
                             <Battery size={12} />
                           </div>
                        </div>
                        
                        {/* Screen Content */}
                        <div className={`bg-gradient-to-br ${personas[activeTab].color} h-64 rounded-b-[1.5rem] p-6 relative overflow-hidden flex flex-col justify-between text-white`}>
                          <div>
                            <div className="bg-white/20 backdrop-blur-md self-start inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 border border-white/10">
                              {personas[activeTab].ui.status}
                            </div>
                            <h4 className="text-2xl font-bold leading-tight">
                              Hello, <br/> {activeTab === 'kids' ? 'Buddy!' : activeTab === 'adults' ? 'Alex.' : 'Grandma.'}
                            </h4>
                          </div>

                          {/* Music/Activity Widget */}
                          <div className="bg-black/20 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/10">
                             <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                               {activeTab === 'kids' ? <Play size={16} fill="currentColor" /> : <Sparkles size={16} />}
                             </div>
                             <div className="flex-1 min-w-0">
                               <div className="text-xs font-medium truncate opacity-90">Now Active</div>
                               <div className="text-xs font-bold truncate">
                                 {activeTab === 'kids' ? 'Story Mode: The Moon' : activeTab === 'adults' ? 'Focus: Deep Work' : 'Reminder: Water'}
                               </div>
                             </div>
                             <div className="w-1 h-8 bg-white/20 rounded-full">
                               <motion.div 
                                 animate={{ height: ['30%', '80%', '40%'] }} 
                                 transition={{ repeat: Infinity, duration: 1.5 }}
                                 className="w-full bg-white rounded-full bottom-0 absolute" 
                               />
                             </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Badge */}
                      <motion.div 
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                      >
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center ${personas[activeTab].accent} text-white`}>
                           <CheckCircle2 size={20} />
                         </div>
                         <div>
                           <div className="text-xs text-slate-400 font-bold uppercase">Battery Life</div>
                           <div className="text-lg font-bold text-slate-800">{personas[activeTab].ui.battery}</div>
                         </div>
                      </motion.div>
                    </div>

                    {/* Features List */}
                    <div className="md:w-7/12 pt-4">
                      <motion.h3 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl font-bold text-slate-900 mb-2"
                      >
                        {personas[activeTab].tagline}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 mb-8 leading-relaxed"
                      >
                        {personas[activeTab].description}
                      </motion.p>

                      <div className="space-y-6">
                        {personas[activeTab].features.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="flex gap-4 group"
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-slate-100 ${
                              activeTab === 'kids' ? 'bg-blue-50 text-blue-500' :
                              activeTab === 'adults' ? 'bg-emerald-50 text-emerald-500' :
                              'bg-rose-50 text-rose-500'
                            }`}>
                              <feature.icon size={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-slate-500 leading-relaxed">
                                {feature.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
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

export default Personas;
