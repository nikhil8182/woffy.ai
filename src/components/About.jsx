import React, { useState } from 'react';
import { Heart, Sparkles, Zap, Lock, Code, Users, TrendingUp, Home as HomeIcon, Smartphone, Bot, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('emotional'); // 'emotional' | 'tech'

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50" id="about">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-rose/5 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm inline-flex relative">
            <motion.div 
              className="absolute h-[calc(100%-12px)] top-1.5 bottom-1.5 bg-slate-900 rounded-full shadow-md z-0"
              initial={false}
              animate={{
                left: activeTab === 'emotional' ? '6px' : '50%',
                width: activeTab === 'emotional' ? 'calc(50% - 9px)' : 'calc(50% - 9px)',
                x: activeTab === 'emotional' ? 0 : 3
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button
              onClick={() => setActiveTab('emotional')}
              className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-2 ${
                activeTab === 'emotional' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Our Story</span>
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-2 ${
                activeTab === 'tech' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>The Ecosystem</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'emotional' ? (
            <motion.div
              key="emotional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div>
                  <h2 className="text-sm font-bold text-brand-rose tracking-wider uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> About Woffy
                  </h2>
                  <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight font-display">
                    Inspired by the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-purple-500 to-brand-indigo animate-gradient">Warmth of a Dog</span>
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Woffy is a new kind of emotional companion designed for modern life. We are built for people who love the idea of a dog but can't commit to full-time pet ownership due to time, travel, space, or lifestyle constraints.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Woffy is not here to replace real pets. We are here to make companionship more accessible, safe, and everyday.
                  </p>

                  <div className="flex items-center gap-4 mt-8 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/50 w-fit">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      O
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">An <span className="text-red-600">On</span>words Company</p>
                      <p className="text-xs text-slate-500">Built on Trust & Reliability</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Inspired by Roddy Card */}
                  <div className="glass-card p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-indigo/5 hover:shadow-brand-indigo/10 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100/50 rounded-full blur-2xl -ml-8 -mt-8 transition-all duration-500"></div>

                    <h4 className="text-2xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
                        <span className="text-2xl">🐾</span> Inspired by Roddy
                    </h4>
                    
                    <div className="space-y-4 text-slate-600 leading-relaxed relative z-10">
                        <p>Every big idea has a small, personal beginning. <br/> For Woffy, that spark was <span className="font-bold text-slate-800">Roddy</span>.</p>
                        
                        <p>A cute Golden Retriever whose simple daily moments reminded us what real companionship feels like.</p>
                        
                        <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100/50 my-4">
                            <p className="mb-2 font-medium text-slate-800">Watching Roddy taught us the true magic of a dog:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">✦</span> The way he notices you.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">✦</span> The way he brings warmth without effort.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">✦</span> The way his presence alone can change the mood of a room.
                                </li>
                            </ul>
                        </div>

                        <p>Woffy is inspired by that feeling.</p>
                        
                        <p>We are not trying to copy a dog. We are trying to recreate the comfort a dog brings, in a form that more people can access.</p>
                        
                        <p className="font-medium text-slate-800 pt-2 border-t border-slate-100">
                            Roddy is our reminder of the standard.<br/>
                            <span className="italic text-slate-600 font-normal">Companionship should feel pure, safe, and real.</span>
                        </p>
                    </div>
                  </div>

                   {/* Living Homes to Living Love Card */}
                  <div className="glass-card p-8 rounded-3xl border border-white/40 shadow-xl shadow-brand-indigo/5 hover:shadow-brand-indigo/10 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-rose/10 rounded-full blur-2xl -mr-8 -mt-8 transition-all duration-500 group-hover:bg-brand-rose/20"></div>
                    
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display">From Living Homes to Living Love</h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Onwords pioneered the "Living Homes" concept—where automation isn't just devices, but a lifestyle upgrade. With Woffy, we take the next step.
                    </p>
                    <blockquote className="border-l-4 border-brand-rose pl-4 italic text-slate-700 bg-rose-50/50 py-2 pr-2 rounded-r-lg">
                      "A home can be smart. But a home feels complete when it also feels warm."
                    </blockquote>
                    <p className="text-slate-600 text-sm mt-6">
                        Woffy brings companionship into the Living Homes vision, turning smart living into emotionally connected living.
                    </p>
                  </div>
                </div>
              </div>

               {/* Mission Highlight */}
              <div className="relative rounded-[2.5rem] overflow-hidden text-center shadow-2xl group">
                <div className="absolute inset-0 bg-slate-900">
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/20 via-brand-rose/20 to-brand-indigo/20 animate-gradient bg-[length:200%_auto]"></div>
                </div>
                
                <div className="relative z-10 p-8 md:p-20 backdrop-blur-sm">
                  <h3 className="text-white text-xl md:text-2xl font-light mb-6">Our Parent Company</h3>
                  <motion.p 
                    className="text-3xl md:text-5xl font-bold text-white font-display leading-tight mb-8"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-red-600">On</span>words
                  </motion.p>
                  <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                      A smart home and gate automation company building intelligent systems for real homes in India. The same DNA that powers Onwords drives Woffy: Human-first design, hardware reliability, and real-world usability.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                <div>
                   <h2 className="text-sm font-bold text-brand-indigo tracking-wider uppercase mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> The Vision
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-display">
                    An Intelligent <br />
                    <span className="text-slate-400">Ecosystem</span>
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    We are building a comprehensive ecosystem where AI and robotics become natural parts of everyday homes. Woffy is a step towards a future where technology feels personal.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-brand-indigo" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Physical Robotic Companion</h4>
                            <p className="text-slate-600 text-sm">Hardware reliability backed by Onwords' experience in automation.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                            <HomeIcon className="w-5 h-5 text-brand-indigo" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Full Smart Home Integration</h4>
                            <p className="text-slate-600 text-sm">Deep integration with home automation systems for a seamless living experience.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                            <Smartphone className="w-5 h-5 text-brand-indigo" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Connected App & Digital Avatar</h4>
                            <p className="text-slate-600 text-sm">An AI personality that lives across devices, always there when you need it.</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-indigo/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    
                    <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" /> Powered by <span className="text-red-600">On</span>words
                    </h4>

                    <div className="space-y-6 relative z-10">
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            Woffy is developed and owned by Onwords, a smart home and gate automation company building intelligent systems for real homes in India.
                        </p>

                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Our DNA</div>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                    Human-first design
                                </li>
                                <li className="flex items-center gap-2 text-white text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                    Hardware reliability
                                </li>
                                <li className="flex items-center gap-2 text-white text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                    Real-world usability
                                </li>
                                <li className="flex items-center gap-2 text-white text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                    Trust & long-term thinking
                                </li>
                            </ul>
                        </div>

                         <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mt-4">
                            <div className="flex justify-between items-end mb-2">
                                <div className="text-slate-400 text-xs uppercase tracking-wider">Onwords Ecosystem</div>
                                <div className="text-brand-indigo text-xs font-bold">Expansion</div>
                            </div>
                            <div className="h-24 w-full flex items-end gap-2">
                                <div className="w-1/3 bg-slate-700 rounded-t-sm h-[40%] relative group">
                                    <span className="absolute bottom-2 left-2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">Gates</span>
                                </div>
                                <div className="w-1/3 bg-slate-600 rounded-t-sm h-[70%] relative group">
                                    <span className="absolute bottom-2 left-2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">Homes</span>
                                </div>
                                <div className="w-1/3 bg-brand-indigo rounded-t-sm h-[100%] relative group">
                                     <span className="absolute bottom-2 left-2 text-[10px] text-white font-bold opacity-100">Woffy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

               {/* Tech Highlight */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                       { title: 'AI Personality', desc: 'A distinct, evolving character.' },
                       { title: 'Digital Avatar', desc: 'Visual presence across screens.' },
                       { title: 'Robotic Companion', desc: 'Physical interaction in your space.' }
                   ].map((item, idx) => (
                       <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-900 font-bold text-sm">
                               0{idx + 1}
                           </div>
                           <h5 className="font-bold text-slate-900 mb-2">{item.title}</h5>
                           <p className="text-slate-500 text-sm">{item.desc}</p>
                       </div>
                   ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
