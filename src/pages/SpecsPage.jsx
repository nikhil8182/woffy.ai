import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Wind, Shield, Zap, Heart, Brain, Wifi, Battery, 
  Cpu, Eye, Music, Mic, Bluetooth, Layers, Check, X,
  ArrowRight, Sparkles, Activity, Thermometer, MapPin, 
  Smartphone, Lock, Share2, Globe, Command
} from 'lucide-react';

const SpecsPage = ({ openWaitlist }) => {
  const [activeModel, setActiveModel] = useState('cloud');
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const models = {
    cloud: {
      name: "Cloud Edition",
      tagline: "The Gentle Companion",
      icon: <Wind className="w-8 h-8" />,
      color: "rose",
      gradient: "from-rose-400 to-pink-500",
      accent: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
      shadow: "shadow-rose-500/20",
      description: "Designed for comfort, emotional support, and anxiety relief. The perfect indoor companion with a soft-touch exterior.",
      stats: {
        weight: "2.4 kg",
        battery: "14 hrs",
        material: "Soft Fur",
        environment: "Indoor"
      },
      features: [
        { label: "Exterior", value: "Hypoallergenic Soft-Touch Fur", icon: <Layers size={18} /> },
        { label: "Frame", value: "Bio-Plastic Composite", icon: <Shield size={18} /> },
        { label: "Haptics", value: "Pulse & Purr Engine", icon: <Heart size={18} /> },
        { label: "Personality", value: "Nurturing & Calm", icon: <Brain size={18} /> }
      ]
    },
    titan: {
      name: "Titan Edition",
      tagline: "The Robust Explorer",
      icon: <Shield className="w-8 h-8" />,
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500",
      accent: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      shadow: "shadow-cyan-500/20",
      description: "Built for adventure and active lifestyles. Ruggedized casing and advanced sensors for the world outside.",
      stats: {
        weight: "3.1 kg",
        battery: "24+ hrs",
        material: "Titanium",
        environment: "Outdoor"
      },
      features: [
        { label: "Exterior", value: "Aerospace Titanium Alloy", icon: <Layers size={18} /> },
        { label: "Frame", value: "Reinforced Carbon Fiber", icon: <Shield size={18} /> },
        { label: "Haptics", value: "Force Feedback Alert", icon: <Zap size={18} /> },
        { label: "Personality", value: "Bold & Protective", icon: <Brain size={18} /> }
      ]
    }
  };

  const techSpecs = [
    {
      title: "Neural Core",
      icon: <Brain className="w-6 h-6 text-indigo-400" />,
      specs: [
        { name: "Processor", value: "Woffy Neural Engine v2 (4nm)" },
        { name: "Memory", value: "16GB Unified Memory" },
        { name: "Storage", value: "2TB Encrypted SSD" },
        { name: "Learning", value: "On-Device Real-time Training" }
      ]
    },
    {
      title: "Sensory Array",
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      specs: [
        { name: "Vision", value: "Dual 4K HDR + LiDAR" },
        { name: "Audio", value: "16-Mic Spatial Array" },
        { name: "Touch", value: "1024-Point Pressure Grid" },
        { name: "Environment", value: "Temp, Air Quality, GPS" }
      ]
    },
    {
      title: "Connectivity",
      icon: <Wifi className="w-6 h-6 text-amber-400" />,
      specs: [
        { name: "Wireless", value: "Wi-Fi 7 + 5G Ready" },
        { name: "Local", value: "Bluetooth 5.4 Ultra-Low Latency" },
        { name: "IoT", value: "Matter Protocol Support" },
        { name: "Updates", value: "Over-the-Air Security Patches" }
      ]
    }
  ];

  const comparisonData = [
    { feature: "Emotional Intelligence", real: true, woffy: true, noPet: false },
    { feature: "Allergy Friendly", real: false, woffy: true, noPet: true },
    { feature: "24/7 Availability", real: false, woffy: true, noPet: false },
    { feature: "Zero Maintenance", real: false, woffy: true, noPet: true },
    { feature: "Learning Capability", real: "Limited", woffy: "Advanced", noPet: false },
    { feature: "Travel Ready", real: false, woffy: true, noPet: true },
    { feature: "Cost Efficiency", real: "Low", woffy: "High", noPet: "High" },
    { feature: "Interactive Play", real: true, woffy: true, noPet: false },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      </div>

      {/* Hero Header */}
      <section className="relative z-10 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            style={{ y: heroY, opacity }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-sm"
            >
              <Command className="w-4 h-4" />
              <span>System Specifications</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Perfection.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Two distinct personalities. One advanced neural core. <br />
              <span className="text-slate-200">Select your companion configuration.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Model Switcher */}
      <section className="relative z-10 py-10">
        <div className="container mx-auto px-6">
          {/* Toggle Control */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-900/80 backdrop-blur-xl p-2 rounded-full border border-white/10 flex gap-2 shadow-2xl">
              {['cloud', 'titan'].map((model) => (
                <button
                  key={model}
                  onClick={() => setActiveModel(model)}
                  className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                    activeModel === model ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {activeModel === model && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                        model === 'cloud' ? 'from-rose-500 to-pink-500' : 'from-cyan-500 to-blue-500'
                      }`}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {model === 'cloud' ? <Wind size={18} /> : <Shield size={18} />}
                    {model.charAt(0).toUpperCase() + model.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Model Display */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Visual Side */}
                <div className={`aspect-square rounded-[3rem] relative overflow-hidden group border border-white/10 ${
                  activeModel === 'cloud' ? 'shadow-[0_0_100px_-20px_rgba(244,63,94,0.3)]' : 'shadow-[0_0_100px_-20px_rgba(6,182,212,0.3)]'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-20 ${
                    activeModel === 'cloud' ? 'from-rose-500 to-transparent' : 'from-cyan-500 to-transparent'
                  }`}></div>
                  
                  {/* Abstract Representation of Model */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {activeModel === 'cloud' ? (
                      <div className="relative">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-64 h-64 border-2 border-rose-500/30 rounded-full border-dashed"
                        />
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute inset-0 m-auto w-32 h-32 bg-rose-500/20 blur-2xl rounded-full"
                        />
                        <Wind className="absolute inset-0 m-auto text-rose-300 w-24 h-24" />
                      </div>
                    ) : (
                      <div className="relative">
                         <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-64 h-64 border-2 border-cyan-500/30 rounded-full border-dashed"
                        />
                         <div className="absolute inset-0 m-auto w-48 h-48 border border-cyan-400/20 rotate-45" />
                         <Shield className="absolute inset-0 m-auto text-cyan-300 w-24 h-24" />
                      </div>
                    )}
                  </div>
                  
                  {/* Floating Specs */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(models[activeModel].stats).map(([key, value]) => (
                        <div key={key} className="bg-slate-900/60 backdrop-blur p-4 rounded-2xl border border-white/5">
                          <div className="text-xs text-slate-400 uppercase font-bold mb-1">{key}</div>
                          <div className="text-lg font-semibold text-white">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specs Side */}
                <div>
                   <h2 className={`text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r bg-clip-text text-transparent ${models[activeModel].gradient}`}>
                     {models[activeModel].name}
                   </h2>
                   <p className="text-2xl text-slate-300 font-light mb-8">{models[activeModel].tagline}</p>
                   <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                     {models[activeModel].description}
                   </p>

                   <div className="grid gap-4">
                     {models[activeModel].features.map((feature, idx) => (
                       <motion.div 
                         key={idx}
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: idx * 0.1 }}
                         className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                       >
                         <div className={`p-3 rounded-xl ${models[activeModel].bg} ${models[activeModel].accent}`}>
                           {feature.icon}
                         </div>
                         <div>
                           <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{feature.label}</div>
                           <div className="text-lg font-medium text-slate-200">{feature.value}</div>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Blueprint Tech Specs */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Architecture</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {techSpecs.map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <ul className="space-y-6">
                  {category.specs.map((spec, i) => (
                    <li key={i} className="group/item">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-slate-400 text-sm">{spec.name}</span>
                        <span className="text-slate-200 font-medium text-right">{spec.value}</span>
                      </div>
                      <div className="h-px bg-white/5 w-full group-hover/item:bg-indigo-500/30 transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-950 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
               <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold mb-4">Market Comparison</h2>
                 <p className="text-slate-400">Why Woffy is the ultimate companion.</p>
               </div>

               <div className="overflow-x-auto">
                 <table className="w-full">
                   <thead>
                     <tr className="border-b border-white/10">
                       <th className="py-6 px-4 text-left text-slate-400 font-bold uppercase text-sm tracking-wider">Feature</th>
                       <th className="py-6 px-4 text-center text-slate-500 font-bold uppercase text-sm tracking-wider w-1/5">Real Pet</th>
                       <th className="py-6 px-4 text-center text-indigo-400 font-bold uppercase text-sm tracking-wider w-1/5 bg-indigo-500/5 rounded-t-xl">Woffy AI</th>
                       <th className="py-6 px-4 text-center text-slate-500 font-bold uppercase text-sm tracking-wider w-1/5">No Pet</th>
                     </tr>
                   </thead>
                   <tbody>
                     {comparisonData.map((row, idx) => (
                       <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                         <td className="py-4 px-4 font-medium text-slate-200">{row.feature}</td>
                         
                         <td className="py-4 px-4 text-center">
                           {row.real === true ? <Check className="inline text-emerald-500 w-5 h-5"/> : 
                            row.real === false ? <X className="inline text-rose-500 w-5 h-5"/> : 
                            <span className="text-sm text-slate-400">{row.real}</span>}
                         </td>

                         <td className="py-4 px-4 text-center bg-indigo-500/5">
                           {row.woffy === true ? (
                             <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400">
                               <Check className="w-5 h-5"/>
                             </div>
                           ) : row.woffy === false ? (
                             <X className="inline text-slate-500 w-5 h-5"/>
                           ) : (
                             <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-bold">{row.woffy}</span>
                           )}
                         </td>

                         <td className="py-4 px-4 text-center">
                            {row.noPet === true ? <Check className="inline text-slate-500 w-5 h-5"/> : 
                             row.noPet === false ? <X className="inline text-slate-600 w-5 h-5"/> : 
                             <span className="text-sm text-slate-500">{row.noPet}</span>}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-8"
          >
            The Future of Friendship <br/>
            <span className="text-indigo-500">Starts Here.</span>
          </motion.h2>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={openWaitlist}
              className="px-10 py-5 bg-white text-indigo-950 rounded-full font-bold text-xl hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] transition-all flex items-center gap-3 mx-auto"
            >
              <Sparkles className="w-5 h-5 text-indigo-500" />
              Secure Your Spot
            </button>
          </motion.div>
          
          <p className="mt-6 text-slate-500 text-sm uppercase tracking-widest font-bold">
            Limited Beta Slots Available
          </p>
        </div>
      </section>

    </div>
  );
};

export default SpecsPage;
