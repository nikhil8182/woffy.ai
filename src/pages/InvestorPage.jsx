import React from 'react';
import { motion } from 'framer-motion';
import { WAITLIST_COUNT } from '../utils/constants';

const InvestorPage = ({ openWaitlist }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-bold mb-6">
              CONFIDENTIAL - FOR INVESTOR REVIEW
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Invest in the Future of
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent"> AI Companionship</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              A moving AI companion combining emotional bonding, smart home control, and security patrol in one premium product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity - Strategic Overview */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Market Opportunity</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Positioned at the intersection of the <span className="text-slate-900 font-bold">Smart Home</span>, <span className="text-slate-900 font-bold">Pet Care</span>, and <span className="text-slate-900 font-bold">AI Companion</span> markets.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main Market Stat */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full blur-[80px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Projected Growth
                </div>
                
                <h3 className="text-7xl font-bold mb-2 tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">$34B+</span>
                </h3>
                <p className="text-2xl font-light text-slate-300 mb-8">Global Market by 2028</p>
                
                <div className="h-px w-full bg-white/10 mb-8"></div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-1">25.4%</div>
                    <div className="text-slate-400 text-sm">CAGR (2023-2028)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">Zero</div>
                    <div className="text-slate-400 text-sm">Dominant Competitors</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Supporting Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
               {/* Waitlist Card */}
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group"
               >
                 <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                   👥
                 </div>
                 <div className="text-4xl font-bold text-slate-900 mb-2">{WAITLIST_COUNT}</div>
                 <div className="text-slate-600 font-medium">Active Waitlist</div>
                 <div className="text-rose-500 text-xs font-bold mt-2 uppercase tracking-wide">Pre-Launch Demand</div>
               </motion.div>

               {/* Retention Target */}
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group"
               >
                 <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                   📈
                 </div>
                 <div className="text-4xl font-bold text-slate-900 mb-2">70%</div>
                 <div className="text-slate-600 font-medium">Target Retention</div>
                 <div className="text-indigo-500 text-xs font-bold mt-2 uppercase tracking-wide">7-Day Engagement</div>
               </motion.div>

               {/* Avg Usage */}
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group"
               >
                 <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                   ⏱️
                 </div>
                 <div className="text-4xl font-bold text-slate-900 mb-2">45m+</div>
                 <div className="text-slate-600 font-medium">Daily Usage</div>
                 <div className="text-amber-500 text-xs font-bold mt-2 uppercase tracking-wide">Projected Time</div>
               </motion.div>

               {/* Emotional Bond */}
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group"
               >
                 <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                   ❤️
                 </div>
                 <div className="text-4xl font-bold text-slate-900 mb-2">60%+</div>
                 <div className="text-slate-600 font-medium">"Sad if Removed"</div>
                 <div className="text-purple-500 text-xs font-bold mt-2 uppercase tracking-wide">Product Stickiness</div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators - Tech & UI Overhaul */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-rose/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-900/5 text-slate-600 font-mono text-xs tracking-wider uppercase mb-4 border border-slate-900/10">
              Core Technology Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Impossible</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Woffy isn't just a product; it's a convergence of advanced robotics, affective computing, and secure IoT architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Feature 1: Real AI - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                <div className="text-9xl">🧠</div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center text-2xl mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">True Cognitive AI</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Unlike scripted toys, Woffy utilizes a proprietary affective computing engine. It doesn't just respond; it <strong>understands context</strong>, maintains long-term memory, and evolves its personality based on user interaction patterns.
                  </p>
                </div>
                
                <div className="flex gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium">Context Retention</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium">50+ Emotions</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium">Adaptive Learning</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Smart Home - Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 lg:col-span-1 row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-6 border border-indigo-500/30">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Deep IoT Integration</h3>
                <p className="text-slate-400 mb-8 flex-grow">
                  Powered by <strong>INIYAL</strong>, Woffy acts as a roaming smart home hub. Control lights, security, and climate through natural conversation, anywhere in your home.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">Local Processing</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Matter Protocol Ready</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Room-Aware Controls</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Security - Standard Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-xl">
                  🛡️
                </div>
                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md uppercase tracking-wider">Guard Mode</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Autonomous Patrol</h3>
              <p className="text-sm text-slate-600">
                Mobile surveillance with anomaly detection. Keeps your home safe when you're away.
              </p>
            </motion.div>

            {/* Feature 4: OLED - Standard Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
                  👁️
                </div>
                <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded-md uppercase tracking-wider">Visuals</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">OLED Gaze System</h3>
              <p className="text-sm text-slate-600">
                High-fidelity OLED eyes capable of expressing micro-emotions for genuine connection.
              </p>
            </motion.div>

             {/* Feature 5: Offline First - Wide Card */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center text-xl shadow-sm">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-slate-900">Offline-First Architecture</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Your privacy and safety shouldn't depend on WiFi. Woffy's core navigation, safety protocols, and basic interactions run entirely on-device with zero latency.
              </p>
            </motion.div>

            {/* Feature 6: Dual Product - Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center text-xl shadow-sm">
                  🎯
                </div>
                <h3 className="text-lg font-bold text-slate-900">Dual Product Strategy</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Targeting two distinct psychological needs: <strong>Cloud Edition</strong> for comfort/anxiety (Phase 1) and <strong>Titan Edition</strong> for rugged utility/exploration (Phase 2).
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Product Editions - Flagship UI Design */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        
        {/* Dual Background Gradient */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-gradient-to-br from-rose-500/20 to-purple-500/10"></div>
          <div className="w-1/2 h-full bg-gradient-to-bl from-cyan-500/20 to-blue-500/10"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-display">
              Dual <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-white to-cyan-400">Identity</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Strategic market segmentation targeting two distinct emotional needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* Cloud Edition Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-600 rounded-[2.5rem] opacity-70 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-slate-950/90 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/10 overflow-hidden flex flex-col">
                
                {/* Floating Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-500/30 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold tracking-widest uppercase mb-3 border border-rose-500/30">
                        Phase 1 - Immediate Launch
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Cloud</h3>
                      <p className="text-rose-200 text-lg font-medium">The Emotional Anchor</p>
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center text-4xl shadow-lg shadow-rose-500/30 transform group-hover:rotate-12 transition-transform duration-500">
                      ☁️
                    </div>
                  </div>

                  <div className="space-y-6 mb-12">
                     {[
                        { icon: "🧸", text: "Soft Plush Exterior", sub: "Designed for tactile comfort" },
                        { icon: "🏠", text: "Indoor Companion", sub: "Optimized for home environments" },
                        { icon: "❤️", text: "Anxiety Relief", sub: "Calming behavioral patterns" },
                        { icon: "👶", text: "Family Focused", sub: "Safe for kids & elderly" }
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
                           <div className="text-2xl">{item.icon}</div>
                           <div>
                              <div className="text-white font-bold">{item.text}</div>
                              <div className="text-slate-400 text-sm">{item.sub}</div>
                           </div>
                        </div>
                     ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                   <div className="flex justify-between items-center">
                      <div className="text-slate-400 text-sm">Target Audience</div>
                      <div className="flex -space-x-2">
                         <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-xs border-2 border-slate-900 font-bold text-rose-800">K</div>
                         <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-xs border-2 border-slate-900 font-bold text-purple-800">E</div>
                         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs border-2 border-slate-900 font-bold text-slate-800">+</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Titan Edition Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] opacity-70 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-slate-950/90 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/10 overflow-hidden flex flex-col">
                
                {/* Floating Elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px]"></div>

                <div className="relative z-10 flex-grow">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-3 border border-cyan-500/30">
                        Phase 2 - Expansion
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">Titan</h3>
                      <p className="text-cyan-200 text-lg font-medium">The Explorer</p>
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/30 transform group-hover:-rotate-12 transition-transform duration-500">
                      ⚡
                    </div>
                  </div>

                  <div className="space-y-6 mb-12">
                     {[
                        { icon: "🛡️", text: "Rugged Polymer Shell", sub: "Impact resistant design" },
                        { icon: "🌍", text: "All-Terrain Capable", sub: "Indoor & Outdoor readiness" },
                        { icon: "🚀", text: "Advanced Exploration", sub: "Mapping & patrol features" },
                        { icon: "💻", text: "Tech Enthusiasts", sub: "Programmable interfaces" }
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
                           <div className="text-2xl">{item.icon}</div>
                           <div>
                              <div className="text-white font-bold">{item.text}</div>
                              <div className="text-slate-400 text-sm">{item.sub}</div>
                           </div>
                        </div>
                     ))}
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                   <div className="flex justify-between items-center">
                      <div className="text-slate-400 text-sm">Target Audience</div>
                      <div className="flex -space-x-2">
                         <div className="w-8 h-8 rounded-full bg-cyan-200 flex items-center justify-center text-xs border-2 border-slate-900 font-bold text-cyan-800">T</div>
                         <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs border-2 border-slate-900 font-bold text-blue-800">G</div>
                         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs border-2 border-slate-900 font-bold text-slate-800">+</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Unit Economics - High Performance Dashboard */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-mono text-xs tracking-wider uppercase mb-4 border border-blue-200">
              Profitability Engine
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Unit Economics</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A scalable hardware model where margins expand significantly with volume production.
            </p>
          </motion.div>

          {/* Scale Engine Visualization */}
          <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-8 md:p-12 mb-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  vol: "500 Units", 
                  label: "Pilot Batch", 
                  cost: "₹19,400", 
                  mrp: "₹38,100", 
                  margin: "40%", 
                  color: "bg-blue-500",
                  textColor: "text-blue-600",
                  borderColor: "border-blue-100"
                },
                { 
                  vol: "2,000 Units", 
                  label: "Market Entry", 
                  cost: "₹16,500", 
                  mrp: "₹35,400", 
                  margin: "45%", 
                  color: "bg-indigo-500",
                  textColor: "text-indigo-600",
                  borderColor: "border-indigo-100"
                },
                { 
                  vol: "5,000 Units", 
                  label: "Scale Up", 
                  cost: "₹14,550", 
                  mrp: "₹34,200", 
                  margin: "50%", 
                  color: "bg-violet-500",
                  textColor: "text-violet-600",
                  borderColor: "border-violet-100"
                },
              ].map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative rounded-[2rem] p-8 border-2 ${tier.borderColor} bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={`inline-block py-1 px-3 rounded-lg ${tier.textColor} bg-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm`}>
                        {tier.label}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900">{tier.vol}</h3>
                    </div>
                    <div className={`w-12 h-12 rounded-full ${tier.color} text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {idx + 1}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Visual Bar */}
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: tier.margin }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${tier.color}`}
                      ></motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-2xl border border-slate-100">
                        <div className="text-slate-500 text-xs font-medium uppercase mb-1">Unit Cost</div>
                        <div className="text-xl font-bold text-slate-900">{tier.cost}</div>
                      </div>
                      <div className="p-4 bg-white rounded-2xl border border-slate-100">
                        <div className="text-slate-500 text-xs font-medium uppercase mb-1">Target Margin</div>
                        <div className={`text-xl font-bold ${tier.textColor}`}>{tier.margin}</div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Projected MRP</span>
                      <span className="text-2xl font-bold text-slate-900">{tier.mrp}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Revenue & Competitive Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Revenue Streams */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                <span className="p-2 bg-white/10 rounded-lg">💰</span> Revenue Streams
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                {[
                  { title: "Hardware Sales", desc: "Primary revenue driver", icon: "📦" },
                  { title: "AI Subscription", desc: "Premium features & queries", icon: "🧠" },
                  { title: "Cloud Storage", desc: "Surveillance archives", icon: "☁️" },
                  { title: "Accessories", desc: "Shells, Docks, Cases", icon: "🎒" },
                  { title: "AMC Services", desc: "Warranty & Support", icon: "🔧" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Competitive Landscape - Ultra Premium Design */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 relative overflow-hidden"
            >
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl text-white text-xl shadow-lg">
                    📊
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Strategic Positioning</h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Market Gap Analysis</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Low-End Segment */}
                  <div className="relative group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl border-2 border-slate-200 shadow-sm">
                        📉
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="text-slate-700 font-bold text-lg mb-1">Mass Market Toys</div>
                            <div className="text-xs text-slate-500 font-medium">Entry-Level Segment</div>
                          </div>
                          <div className="text-right">
                            <div className="text-slate-400 font-mono text-sm font-bold">₹2K - ₹8K</div>
                            <div className="text-xs text-slate-400 mt-0.5">Low Price Point</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-50 rounded-xl h-12 flex items-center px-4 border border-slate-100 relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-[18%] bg-slate-200/60 rounded-l-xl"></div>
                          <span className="text-xs text-slate-500 font-semibold relative z-10">Limited Intelligence • Pre-Scripted Responses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Woffy - The Champion */}
                  <div className="relative group">
                    {/* Highlight Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 rounded-2xl p-6 border-2 border-indigo-200 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl shadow-xl border-4 border-white transform group-hover:scale-110 transition-transform duration-300">
                          🚀
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Woffy.ai</span>
                                <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">SWEET SPOT</span>
                              </div>
                              <div className="text-xs text-indigo-600 font-semibold">Premium Mass Market • True AI Intelligence</div>
                            </div>
                            <div className="text-right">
                              <div className="text-slate-900 font-mono text-xl font-bold">₹34K - ₹38K</div>
                              <div className="text-xs text-slate-600 mt-0.5 font-medium">Optimal Value</div>
                            </div>
                          </div>
                          
                          <div className="w-full bg-white rounded-xl h-16 flex items-center px-1 relative overflow-hidden shadow-inner border border-indigo-100">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-violet-500/20"
                            ></motion.div>
                            <div className="w-full flex justify-between px-4 relative z-10">
                              <div className="text-center">
                                <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">High Capability</div>
                                <div className="text-xs text-slate-600">Real AI Learning</div>
                              </div>
                              <div className="w-px bg-indigo-200"></div>
                              <div className="text-center">
                                <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">Accessible</div>
                                <div className="text-xs text-slate-600">Mass Market Price</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* High-End Segment */}
                  <div className="relative group opacity-70 hover:opacity-100 transition-opacity">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl border-2 border-slate-200 shadow-sm">
                        💰
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="text-slate-700 font-bold text-lg mb-1">Luxury Robotics</div>
                            <div className="text-xs text-slate-500 font-medium">Sony Aibo & Premium Tier</div>
                          </div>
                          <div className="text-right">
                            <div className="text-slate-400 font-mono text-sm font-bold">₹2.4L+</div>
                            <div className="text-xs text-slate-400 mt-0.5">Premium Pricing</div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-50 rounded-xl h-12 flex items-center px-4 border border-slate-100 relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-[95%] bg-slate-200/40 rounded-l-xl"></div>
                          <span className="text-xs text-slate-500 font-semibold relative z-10">Prohibitive Cost • Limited Accessibility</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Insight Footer */}
                <div className="mt-8 pt-6 border-t border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-1">Market Opportunity</div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        Woffy occupies the <span className="font-bold text-indigo-700">uncontested middle ground</span> — delivering premium AI capabilities at a mass-market price point, creating a new category between toys and luxury robotics.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Credentials */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Team</h2>
            <a 
              href="https://onwords.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-slate-600 hover:text-brand-indigo transition-colors duration-200 inline-block"
            >
              Built by <span className="font-semibold underline decoration-2 underline-offset-4 hover:decoration-brand-indigo">Onwords Smart Solutions</span>
            </a>
          </motion.div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-400 mb-2">400+</div>
                <div className="text-slate-300">Smart Home Installations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">6000+</div>
                <div className="text-slate-300">Gate Automations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">INIYAL</div>
                <div className="text-slate-300">Voice Assistant Platform</div>
              </div>
            </div>
            <p className="text-center text-slate-300 text-lg">
              Track record in IoT, home automation, and AI integration
            </p>
          </div>
        </div>
      </section>

      {/* Use of Funds - Dashboard Style Redesign */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-mono text-xs tracking-wider uppercase mb-4 border border-emerald-200">
              Financial Roadmap
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Capital Allocation Strategy</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Strategic deployment of funds across critical milestones to ensure rapid market entry and scalability.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Allocation Chart */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/></svg>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">₹</span>
                  Use of Funds Breakdown
                </h3>

                <div className="space-y-6 relative z-10">
                  {[
                    { label: 'Product Development', percent: 40, color: 'bg-rose-500', icon: '🛠️', desc: 'Engineering, AI training, & Prototyping' },
                    { label: 'Tooling & Production', percent: 25, color: 'bg-indigo-500', icon: '🏭', desc: 'Molds, Assembly Setup, & Supply Chain' },
                    { label: 'Certifications', percent: 20, color: 'bg-amber-500', icon: '📜', desc: 'BIS, CE, FCC, & Safety Compliance' },
                    { label: 'Marketing & Launch', percent: 15, color: 'bg-emerald-500', icon: '🚀', desc: 'GTM Strategy, PR, & Brand Awareness' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-end mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</span>
                          <div>
                            <span className="text-slate-900 font-bold block text-lg leading-tight">{item.label}</span>
                            <span className="text-slate-500 text-xs font-medium">{item.desc}</span>
                          </div>
                        </div>
                        <span className="text-slate-900 font-mono font-bold text-xl">{item.percent}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className={`h-full ${item.color} relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] transform -skew-x-12"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Investment Requirements */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl flex-grow"
              >
                 {/* Abstract Grid Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-40"></div>
                
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                  <span className="text-amber-400">⚡</span> One-Time Investment
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {[
                    { label: 'Injection Mold Tooling', range: '₹8-15L' },
                    { label: 'Custom PCB Design', range: '₹2-4L' },
                    { label: 'Certifications (BIS/CE)', range: '₹5-8L' },
                    { label: 'Software & IP', range: '₹5-10L' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                      <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                      <span className="text-white font-mono font-bold tracking-tight">{item.range}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                  <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Est. Requirement</span>
                  <div className="text-right">
                    <span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                      ₹45 Lakhs
                    </span>
                  </div>
                </div>
              </motion.div>
              
              {/* ROI Note Card */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-[2rem] p-6 border border-emerald-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-md flex-shrink-0 text-emerald-600">
                  📈
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-sm mb-1">High-Efficiency Capital</h4>
                   <p className="text-xs text-slate-600 leading-relaxed">
                     Hardware costs amortize rapidly with volume, unlocking <span className="font-bold text-emerald-700">50%+ margins</span> at scale.
                   </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Premium Redesign */}
      <section className="py-24 px-6 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950/20 to-slate-900"></div>

        {/* Animated Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse-slow animation-delay-2000"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card - The Magnet */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 backdrop-blur-3xl rounded-[3rem] p-12 md:p-24 border border-indigo-500/20 shadow-[0_0_100px_-20px_rgba(79,70,229,0.2)] relative overflow-hidden group">
              
              {/* Dynamic Border Gradient */}
              <div className="absolute inset-0 rounded-[3rem] p-[1px] bg-gradient-to-br from-indigo-400/30 via-transparent to-rose-400/30 -z-10"></div>
              
              {/* Animated Spotlight Effect */}
              <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_80deg,rgba(99,102,241,0.1)_100deg,transparent_120deg)] animate-[spin_8s_linear_infinite] opacity-50 pointer-events-none"></div>

              {/* Inner Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-10 shadow-lg backdrop-blur-md"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                  Strategic Partnership Open
                </motion.div>
                
                <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter font-display leading-none drop-shadow-2xl">
                  Shape the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-rose-300">Next Era</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
                  We are selecting key partners for our next growth phase. 
                  <span className="block mt-2 text-white font-medium">Secure your position in the future of companion AI.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                  <motion.a
                    href="mailto:hello@onwords.in?subject=Investment Inquiry - Woffy.ai"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 rounded-2xl font-bold shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.6)] transition-all flex items-center justify-center gap-4 text-xl relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Request Access</span>
                    <svg className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/50 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:hello@onwords.in?subject=Schedule Meeting - Woffy.ai Investment"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 hover:border-white/30 transition-all backdrop-blur-md text-xl flex items-center justify-center gap-3"
                  >
                    <span>Schedule Briefing</span>
                    <span className="text-2xl leading-none">📅</span>
                  </motion.a>
                </div>

                {/* Trust Indicators */}
                <div className="pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Direct Line</span>
                    <a href="mailto:hello@onwords.in" className="text-2xl font-bold text-white hover:text-indigo-300 transition-colors tracking-tight">hello@onwords.in</a>
                  </div>
                  <div className="flex flex-col items-center">
                     <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Parent Company</span>
                     <a href="https://onwords.in" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-slate-200 hover:text-white transition-colors">Onwords Smart Solutions</a>
                  </div>
                  <div className="flex flex-col items-center md:items-end">
                     <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Innovation Hubs</span>
                     <span className="text-slate-200 font-medium text-lg">Coimbatore • Bangalore • Chennai</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InvestorPage;

