import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Zap, Shield, Brain, Command, Mic, Activity, Globe, Cpu, ChevronDown, Minimize2, Maximize2, Wifi, Battery, Server, Aperture, CheckCircle2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithWoffy } from '../ai';

// --- Enhanced Components ---

const BootSequence = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const steps = [
    "INITIALIZING NEURAL LINK...",
    "CALIBRATING SENSORS...",
    "ESTABLISHING SECURE CONNECTION...",
    "WOFFY CORE ONLINE"
  ];

  useEffect(() => {
    if (step < steps.length) {
      const timeout = setTimeout(() => setStep(prev => prev + 1), 800);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 500);
    }
  }, [step]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center font-mono text-indigo-500"
    >
      <div className="w-64 space-y-4">
        <div className="flex justify-between items-center text-xs mb-2">
           <span>BOOT_SEQUENCE_V2.4</span>
           <span>{Math.min((step / steps.length) * 100, 100).toFixed(0)}%</span>
        </div>
        <div className="h-1 bg-slate-900 rounded-full overflow-hidden border border-white/10">
          <motion.div 
            className="h-full bg-indigo-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / steps.length) * 100}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        <div className="h-20 space-y-2 overflow-hidden">
          <AnimatePresence mode='popLayout'>
            {steps.slice(0, step).map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] text-emerald-500 flex items-center gap-2"
              >
                <CheckCircle2 size={10} /> {text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Typewriter = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    index.current = 0;
    setDisplayedText('');
    
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index.current));
      index.current++;
      if (index.current === text.length) {
        clearInterval(intervalId);
        if (onComplete) onComplete();
      }
    }, 15); // Slightly faster typing

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

const NeuralOrb = ({ state }) => {
  // state: 'idle', 'listening', 'thinking', 'speaking'
  const variants = {
    idle: { scale: 1, opacity: 0.8, filter: 'hue-rotate(0deg)' },
    listening: { scale: 1.1, opacity: 1, filter: 'hue-rotate(45deg)' },
    thinking: { scale: [1, 1.1, 0.95, 1.05, 1], rotate: 360, transition: { duration: 3, repeat: Infinity, ease: "linear" } },
    speaking: { scale: [1, 1.05, 1], filter: 'hue-rotate(-20deg)', transition: { duration: 0.3, repeat: Infinity } }
  };

  return (
    <div className="relative w-32 h-32 flex items-center justify-center mx-auto mb-6 perspective-1000">
      {/* Dynamic Background Field */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20%] rounded-full bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl opacity-50"
      />
      
      {/* 3D Rings System */}
      <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" 
           style={{ borderTopColor: 'transparent', borderRightColor: 'transparent', transform: 'rotateX(60deg)' }} />
      <div className="absolute inset-2 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" 
           style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent', transform: 'rotateY(60deg)' }} />
      <div className="absolute inset-4 border border-cyan-500/20 rounded-full animate-pulse" />

      {/* Core Orb with Interactive Glare */}
      <motion.div
        variants={variants}
        animate={state}
        className="relative z-10 w-20 h-20 rounded-full bg-slate-900 border border-white/10 shadow-[0_0_60px_rgba(79,70,229,0.25)] flex items-center justify-center overflow-hidden group transition-all duration-500 hover:shadow-[0_0_80px_rgba(79,70,229,0.4)]"
      >
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent"></div>
         
         {/* Volumetric Light */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/20 blur-xl rounded-full"></div>

         <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 animate-pulse"></div>
         
         <Bot size={32} className="text-white relative z-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
         
         {/* Holographic Scan Line */}
         <motion.div 
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-0.5 bg-cyan-400/50 blur-[1px] z-30"
         />
      </motion.div>
      
      {/* Floating Status Label */}
      <motion.div 
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute -bottom-4 px-3 py-0.5 bg-slate-900/90 border border-indigo-500/30 rounded-full text-[9px] font-mono text-indigo-300 backdrop-blur-md shadow-lg tracking-widest"
      >
        {state.toUpperCase()}
      </motion.div>
    </div>
  );
};

const ModuleBadge = ({ name, active, icon: Icon }) => (
  <div className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-xs font-medium transition-all group ${
    active 
      ? 'bg-indigo-500/5 border-indigo-500/20 text-indigo-300 shadow-[0_0_15px_rgba(79,70,229,0.05)]' 
      : 'bg-slate-800/30 border-white/5 text-slate-500 hover:border-white/10'
  }`}>
    <div className={`w-1.5 h-1.5 rounded-full shadow-sm ${active ? 'bg-indigo-400 animate-pulse shadow-indigo-500/50' : 'bg-slate-600'}`} />
    <span className="flex-1">{name}</span>
    {active && <Icon size={10} className="text-indigo-400/50 group-hover:text-indigo-400 transition-colors" />}
  </div>
);

const ChatWithWoffy = () => {
  const [bootComplete, setBootComplete] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "System initialized. Neural core online. Hello! I am Woffy. Ready to assist.", 
      sender: 'woffy',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [woffyState, setWoffyState] = useState('idle');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, woffyState]);

  const handleSendMessage = async (e, text = inputText) => {
    if (e) e.preventDefault();
    if (!text.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setWoffyState('thinking');

    try {
      const responseText = await chatWithWoffy(text, messages);
      
      setWoffyState('speaking');
      
      const woffyResponse = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'woffy',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, woffyResponse]);
      setWoffyState('idle');
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "My neural link encountered an interruption. Please try again.",
        sender: 'woffy',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorResponse]);
      setWoffyState('idle');
    }
  };

  return (
    <>
      <AnimatePresence>
        {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}
      </AnimatePresence>

      <div className={`h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 overflow-hidden flex flex-col fixed inset-0 z-50 transition-opacity duration-1000 ${bootComplete ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Cinematic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" />
           {/* Animated Grid */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
           <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        <div className="relative z-10 flex-1 flex overflow-hidden">
          
          {/* HUD Sidebar (Left) */}
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 300, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="hidden lg:flex flex-col border-r border-white/5 bg-slate-900/60 backdrop-blur-3xl relative shadow-2xl z-20 h-full"
              >
                {/* Header / Orb Section */}
                <div className="p-6 pb-4 relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
                  
                  <NeuralOrb state={woffyState} />
                  
                  <div className="text-center relative z-10">
                    <h2 className="text-lg font-bold text-white tracking-tight flex items-center justify-center gap-2">
                      Woffy Core
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 align-top mt-0.5 font-mono">v2.4</span>
                    </h2>
                    <div className="text-[10px] text-slate-500 font-mono mt-1 flex justify-center items-center gap-2 uppercase tracking-wider">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                      Online
                    </div>
                  </div>
                </div>

                {/* Sidebar Content */}
                <div className="px-6 py-2 space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                  {/* Modules Section */}
                  <div className="space-y-3 pt-2">
                     <h3 className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Aperture size={10} /> Subsystems
                     </h3>
                     <div className="grid grid-cols-1 gap-2">
                        <ModuleBadge name="Vision Processing" active={true} icon={Aperture} />
                        <ModuleBadge name="Voice Synthesis" active={woffyState === 'speaking'} icon={Mic} />
                        <ModuleBadge name="LIDAR Mapping" active={true} icon={Wifi} />
                        <ModuleBadge name="Sentiment Analysis" active={true} icon={Brain} />
                     </div>
                  </div>

                  {/* System Log */}
                  <div className="mt-4 bg-black/40 rounded-lg p-3 border border-white/5 font-mono text-[9px] text-slate-500 space-y-1.5 shadow-inner">
                    <div className="text-slate-400 border-b border-white/5 pb-1 mb-1 tracking-wider">EVENT LOG</div>
                    <div className="flex justify-between">
                      <span className="opacity-50">[14:20:01]</span> 
                      <span className="text-emerald-500/80">Core initialized</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-50">[14:20:02]</span> 
                      <span className="text-indigo-500/80">Neural link active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-50">[14:20:05]</span> 
                      <span>System ready</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/5 bg-slate-950/50 flex-shrink-0">
                   <div className="flex justify-between items-center text-[9px] text-slate-600 font-mono uppercase tracking-wider">
                      <span>ID: WOFFY-X1</span>
                      <span>SECURE</span>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Sidebar Button */}
          <button 
             onClick={() => setSidebarOpen(!sidebarOpen)}
             className="hidden lg:flex absolute top-1/2 left-0 z-50 -translate-y-1/2 bg-slate-800 border border-white/10 p-1 rounded-r-lg text-slate-400 hover:text-white transition-colors shadow-xl"
             style={{ left: sidebarOpen ? 300 : 0 }}
          >
            {sidebarOpen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>

          {/* Main Chat Interface */}
          <div className="flex-1 flex flex-col relative bg-slate-950/30 h-full">
            {/* Top Bar */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-slate-900/30 backdrop-blur-sm flex-shrink-0">
               <div className="flex items-center gap-3">
                 <div className="lg:hidden">
                   <Bot size={20} className="text-indigo-500" />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-bold text-white tracking-wide text-sm flex items-center gap-2">
                     <Shield size={12} className="text-indigo-400"/>
                     Secure Uplink
                   </span>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono">
                   <Activity size={10} />
                   LIVE
                 </div>
               </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-10 space-y-6 scroll-smooth custom-scrollbar">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] lg:max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      
                      {/* Avatar */}
                      <div className="flex-shrink-0 mt-1">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shadow-lg ${
                          msg.sender === 'user' 
                            ? 'bg-slate-800 border-white/10 text-indigo-400' 
                            : 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400 shadow-indigo-500/20'
                        }`}>
                          {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex flex-col gap-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`p-4 rounded-xl relative shadow-xl backdrop-blur-sm ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-tr-sm border border-indigo-500/50'
                            : 'bg-slate-900/60 text-slate-200 border border-white/10 rounded-tl-sm hover:border-white/20 transition-colors'
                        }`}>
                          <div className="text-sm leading-relaxed tracking-wide">
                            {msg.sender === 'woffy' && msg.id === messages[messages.length - 1].id && woffyState !== 'speaking' ? (
                               <Typewriter text={msg.text} />
                            ) : (
                               msg.text
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono opacity-60 px-1">{msg.timestamp}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {woffyState === 'thinking' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                     <div className="flex gap-3 max-w-[70%]">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mt-1">
                          <Bot size={16} />
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-xl rounded-tl-sm border border-white/5 flex items-center gap-1.5 backdrop-blur-sm">
                          <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></motion.span>
                          <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></motion.span>
                          <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></motion.span>
                        </div>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 lg:p-6 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent flex-shrink-0 z-30">
               <div className="max-w-4xl mx-auto">
                 
                 {/* Suggestions */}
                 <AnimatePresence>
                   {messages.length < 3 && !inputText && (
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 10 }}
                       className="flex gap-3 mb-4 overflow-x-auto pb-2 custom-scrollbar"
                     >
                       {[
                         { label: "Capabilities", icon: Zap },
                         { label: "Guard Mode", icon: Shield },
                         { label: "Personality", icon: Sparkles },
                         { label: "Technical Specs", icon: Cpu },
                       ].map((item, i) => (
                         <button
                           key={i}
                           onClick={() => handleSendMessage(null, `Tell me about your ${item.label}`)}
                           className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/50 rounded-lg text-xs font-medium text-slate-400 hover:text-indigo-300 transition-all whitespace-nowrap shadow-lg backdrop-blur-sm"
                         >
                           <item.icon size={12} className="text-indigo-500" />
                           {item.label}
                         </button>
                       ))}
                     </motion.div>
                   )}
                 </AnimatePresence>

                 <form onSubmit={handleSendMessage} className="relative group">
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-md"></div>
                   <div className="relative flex items-center bg-slate-900 rounded-xl border border-white/10 p-1.5 shadow-2xl transition-colors group-hover:border-white/20">
                      <button type="button" className="p-3 text-slate-400 hover:text-indigo-400 transition-colors">
                        <Mic size={20} />
                      </button>
                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Command Woffy..."
                        className="flex-1 bg-transparent border-none text-white placeholder:text-slate-600 focus:ring-0 text-sm py-3 px-2 font-medium tracking-wide"
                      />
                      <button
                        type="submit"
                        disabled={!inputText.trim() || woffyState === 'thinking'}
                        className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                      >
                        <Send size={18} />
                      </button>
                   </div>
                 </form>
                 <div className="text-center mt-3 text-[10px] text-slate-700 font-mono uppercase tracking-widest opacity-70">
                    Secure Neural Uplink • v2.4.0
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWithWoffy;
