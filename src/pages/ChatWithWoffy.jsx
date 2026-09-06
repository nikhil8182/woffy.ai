import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Zap, Shield, Brain, Mic, Activity, Cpu, Minimize2, Maximize2, Wifi, Aperture, CheckCircle2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithWoffy } from '../ai';

// Simple markdown formatter
const formatMarkdown = (text) => {
  const lines = text.split('\n');
  const elements = [];
  let bulletItems = [];
  
  lines.forEach((line, i) => {
    // Handle bullet points
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      const content = line.trim().substring(2);
      bulletItems.push(<li key={`li-${i}`} className="ml-4">{formatInline(content)}</li>);
    } else {
      // If we have accumulated bullet items, add them as a ul first
      if (bulletItems.length > 0) {
        elements.push(<ul key={`ul-${i}`} className="list-disc space-y-1 my-2">{bulletItems}</ul>);
        bulletItems = [];
      }
      // Add paragraph (skip empty lines)
      if (line.trim()) {
        elements.push(<p key={`p-${i}`} className="mb-2 last:mb-0">{formatInline(line)}</p>);
      }
    }
  });
  
  // Don't forget remaining bullets
  if (bulletItems.length > 0) {
    elements.push(<ul key="ul-final" className="list-disc space-y-1 my-2">{bulletItems}</ul>);
  }
  
  return elements;
};

const formatInline = (text) => {
  // Handle bold **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

const getRelativeTime = (timestamp) => {
  if (!timestamp) return '';
  const now = new Date();
  const msgTime = new Date();
  const parts = timestamp.match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (!parts) return timestamp;
  let hours = parseInt(parts[1]);
  const mins = parseInt(parts[2]);
  if (parts[3]) {
    if (parts[3].toUpperCase() === 'PM' && hours !== 12) hours += 12;
    if (parts[3].toUpperCase() === 'AM' && hours === 12) hours = 0;
  }
  msgTime.setHours(hours, mins, 0, 0);
  const diffMs = now - msgTime;
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHrs = Math.floor(diffMins / 60);
  return `${diffHrs}h ago`;
};

// --- Enhanced Components ---

const GlitchText = ({ text, isRevealed }) => {
  const [display, setDisplay] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';

  useEffect(() => {
    if (!isRevealed) {
      setDisplay(text.replace(/[A-Z0-9]/gi, () => chars[Math.floor(Math.random() * chars.length)]));
      return;
    }
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split('').map((char, i) => {
        if (i < iteration) return char;
        if (char === ' ' || char === '.' || char === ':') return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      iteration += 2;
      if (iteration >= text.length) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isRevealed, text]);

  return <span className="font-mono">{display}</span>;
};

const BootSequence = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState([]);
  const steps = [
    "INITIALIZING NEURAL LINK",
    "CALIBRATING SENSOR ARRAY",
    "ESTABLISHING SECURE UPLINK",
    "WOFFY CORE ONLINE"
  ];

  useEffect(() => {
    if (step < steps.length) {
      const timeout = setTimeout(() => {
        setRevealed(prev => [...prev, step]);
        setStep(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 400);
    }
  }, [step]);

  const progress = (step / steps.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center font-mono text-indigo-400"
    >
      {/* Pulsing Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: [0.5, 2.5], opacity: [0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'easeOut' }}
            className="absolute w-40 h-40 border border-indigo-500/30 rounded-full"
          />
        ))}
      </div>

      <div className="w-72 space-y-6 relative z-10">
        {/* Title */}
        <div className="text-center space-y-1">
          <div className="text-[10px] text-slate-600 tracking-[0.3em]">CODENAME</div>
          <div className="text-2xl font-bold text-white tracking-widest">
            <GlitchText text="TITAN" isRevealed={step > 0} />
          </div>
          <div className="text-[10px] text-slate-600 tracking-wider">BOOT_SEQUENCE v2.4</div>
        </div>

        {/* Equalizer Bars */}
        <div className="flex items-end justify-center gap-[3px] h-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: step >= steps.length
                  ? '100%'
                  : [
                      `${Math.random() * 60 + 10}%`,
                      `${Math.random() * 80 + 20}%`,
                      `${Math.random() * 40 + 10}%`,
                    ],
              }}
              transition={{
                duration: 0.4,
                repeat: step < steps.length ? Infinity : 0,
                delay: i * 0.02,
              }}
              className={`w-[3px] rounded-full transition-colors duration-300 ${
                step >= steps.length ? 'bg-emerald-500' : 'bg-indigo-500/60'
              }`}
              style={{ minHeight: '2px' }}
            />
          ))}
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-slate-500">{progress.toFixed(0)}%</span>
            <span className="text-slate-600">{step}/{steps.length} MODULES</span>
          </div>
          <div className="h-[2px] bg-slate-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-2">
          <AnimatePresence mode='popLayout'>
            {steps.slice(0, step).map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                className="text-[10px] flex items-center gap-2"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, delay: 0.1 }}
                >
                  <CheckCircle2 size={10} className="text-emerald-500" />
                </motion.div>
                <GlitchText text={text} isRevealed={revealed.includes(i)} />
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
  const [showCursor, setShowCursor] = useState(true);
  const index = useRef(0);

  useEffect(() => {
    index.current = 0;
    setDisplayedText('');
    setShowCursor(true);

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index.current));
      index.current++;
      if (index.current === text.length) {
        clearInterval(intervalId);
        setTimeout(() => setShowCursor(false), 1000);
        if (onComplete) onComplete();
      }
    }, 12);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <span>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-indigo-400 ml-0.5 align-middle"
        />
      )}
    </span>
  );
};

const NeuralOrb = ({ state }) => {
  const colorMap = {
    idle: { from: 'from-indigo-600/30', to: 'to-purple-600/30', glow: 'rgba(79,70,229,0.3)', ring: 'border-indigo-500/20' },
    listening: { from: 'from-cyan-600/30', to: 'to-indigo-600/30', glow: 'rgba(6,182,212,0.3)', ring: 'border-cyan-500/20' },
    thinking: { from: 'from-purple-600/30', to: 'to-cyan-600/30', glow: 'rgba(139,92,246,0.4)', ring: 'border-purple-500/30' },
    speaking: { from: 'from-violet-600/30', to: 'to-pink-600/30', glow: 'rgba(139,92,246,0.3)', ring: 'border-violet-500/20' },
  };

  const colors = colorMap[state] || colorMap.idle;
  const isThinking = state === 'thinking';

  return (
    <div className="relative w-36 h-36 flex items-center justify-center mx-auto mb-6">
      {/* Ambient Glow Field */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-30%] rounded-full bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl"
      />

      {/* Ripple on state change */}
      <AnimatePresence>
        <motion.div
          key={state}
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute w-20 h-20 rounded-full border border-indigo-400/40"
        />
      </AnimatePresence>

      {/* Orbital Ring System */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: isThinking ? 3 : 10, repeat: Infinity, ease: 'linear' }}
        className={`absolute inset-0 rounded-full border ${colors.ring}`}
        style={{ borderTopColor: 'transparent', borderRightColor: 'transparent', transform: 'rotateX(65deg)' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: isThinking ? 4 : 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full border border-purple-500/15"
        style={{ borderBottomColor: 'transparent', borderLeftColor: 'transparent', transform: 'rotateY(65deg)' }}
      />
      <div className="absolute inset-4 rounded-full border border-cyan-500/10 animate-pulse" />

      {/* Particle Halo — 8 orbiting dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: isThinking ? 2 : 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-5px]"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <motion.div
            key={deg}
            className="absolute w-1 h-1 bg-indigo-400/60 rounded-full"
            style={{
              top: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
              left: `${50 + 48 * Math.cos((deg * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </motion.div>

      {/* Core Orb */}
      <motion.div
        animate={{
          scale: isThinking ? [1, 1.05, 0.97, 1.03, 1] : [1, 1.02, 1],
          boxShadow: `0 0 60px ${colors.glow}, inset 0 0 30px rgba(0,0,0,0.3)`,
        }}
        transition={{
          scale: { duration: isThinking ? 2 : 4, repeat: Infinity, ease: 'easeInOut' },
          boxShadow: { duration: 1 },
        }}
        className="relative z-10 w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center overflow-hidden cursor-default"
      >
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMiIvPjwvc3ZnPg==)' }} />

        {/* Top-light refraction */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/15 blur-xl rounded-full" />

        {/* Gradient overlay — shifts with state */}
        <motion.div
          animate={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
          className={`absolute inset-0 bg-gradient-to-tr ${colors.from} ${colors.to} transition-all duration-1000`}
        />

        {/* Rotating reflection spot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        >
          <div className="absolute top-2 right-3 w-3 h-3 bg-white/10 blur-md rounded-full" />
        </motion.div>

        {/* Icon */}
        <Bot size={30} className="text-white relative z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />

        {/* Scan Line */}
        <motion.div
          animate={{ top: ['0%', '100%'], opacity: [0, 0.7, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent z-30"
        />
      </motion.div>

      {/* Status Label */}
      <motion.div
        key={state}
        initial={{ y: 5, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="absolute -bottom-5 px-3 py-0.5 bg-slate-900/90 border border-indigo-500/20 rounded-full text-[9px] font-mono text-indigo-300 backdrop-blur-md shadow-lg tracking-[0.15em]"
      >
        {state.toUpperCase()}
      </motion.div>
    </div>
  );
};

const ModuleBadge = ({ name, active, icon: Icon }) => (
  <motion.div
    whileHover={{ x: 2 }}
    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border text-xs font-medium transition-all duration-300 group/badge relative overflow-hidden ${
      active
        ? 'bg-indigo-500/[0.06] border-indigo-500/15 text-indigo-300'
        : 'bg-slate-800/20 border-white/[0.04] text-slate-500 hover:border-white/[0.08]'
    }`}
  >
    {active && <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity" />}
    <div className="relative">
      <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.8)]' : 'bg-slate-600'}`} />
      {active && (
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-indigo-400"
        />
      )}
    </div>
    <span className="flex-1 relative z-10">{name}</span>
    {active && <Icon size={10} className="text-indigo-400/40 group-hover/badge:text-indigo-400 transition-colors relative z-10" />}
  </motion.div>
);

const NeuralBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const createParticle = (layer) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (0.15 + layer * 0.15),
      vy: (Math.random() - 0.5) * (0.15 + layer * 0.15),
      size: layer === 0 ? Math.random() * 0.8 + 0.3 : layer === 1 ? Math.random() * 1.2 + 0.5 : Math.random() * 1.8 + 0.8,
      opacity: layer === 0 ? 0.2 : layer === 1 ? 0.35 : 0.5,
      layer,
    });

    const initParticles = () => {
      particles = [];
      const baseCount = Math.min(window.innerWidth * 0.04, 40);
      for (let layer = 0; layer < 3; layer++) {
        for (let i = 0; i < baseCount; i++) {
          particles.push(createParticle(layer));
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let layer = 0; layer < 3; layer++) {
        const layerParticles = particles.filter(p => p.layer === layer);

        layerParticles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          for (let j = i + 1; j < layerParticles.length; j++) {
            const p2 = layerParticles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 100 + layer * 20;

            if (distance < maxDist) {
              ctx.strokeStyle = `rgba(99, 102, 241, ${(p.opacity * 0.3) * (1 - distance / maxDist)})`;
              ctx.lineWidth = layer === 2 ? 0.6 : 0.3;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

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
  const [sessionStart] = useState(Date.now());
  const [sessionTime, setSessionTime] = useState('<1m');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, woffyState]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - sessionStart) / 60000);
      setSessionTime(elapsed < 1 ? '<1m' : `${elapsed}m`);
    }, 30000);
    return () => clearInterval(interval);
  }, [sessionStart]);

  const handleClearChat = () => {
    setMessages([
      { 
        id: Date.now(), 
        text: "System initialized. Neural core online. Hello! I am Woffy. Ready to assist.", 
        sender: 'woffy',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

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
          <NeuralBackground />
          {/* Ambient floating orbs */}
          <motion.div
            animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/[0.04] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 30, 0], y: [0, 20, -30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/[0.03] rounded-full blur-3xl"
          />
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMiIvPjwvc3ZnPg==)' }} />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </div>

        <div className="relative z-10 flex-1 flex overflow-hidden">
          
          {/* HUD Sidebar (Left) */}
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 300, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="hidden lg:flex flex-col border-r border-white/[0.05] bg-slate-900/70 backdrop-blur-3xl relative shadow-2xl z-20 h-full"
              >
                {/* Header / Orb Section */}
                <div className="p-6 pb-4 relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

                  <NeuralOrb state={woffyState} />

                  <div className="text-center relative z-10">
                    <h2 className="text-lg font-bold text-white tracking-tight flex items-center justify-center gap-2">
                      Woffy Core
                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/15 font-mono">v2.4</span>
                    </h2>
                    <div className="text-[10px] text-slate-500 font-mono mt-1.5 flex justify-center items-center gap-2 uppercase tracking-[0.15em]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      </span>
                      Online
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Sidebar Content */}
                <div className="px-6 py-4 space-y-6 flex-1 overflow-y-auto custom-scrollbar-dark">
                  {/* Modules Section */}
                  <div className="space-y-3">
                    <h3 className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2">
                      <Aperture size={10} /> Subsystems
                    </h3>
                    <div className="grid grid-cols-1 gap-1.5">
                      <ModuleBadge name="Vision Processing" active={true} icon={Aperture} />
                      <ModuleBadge name="Voice Synthesis" active={woffyState === 'speaking'} icon={Mic} />
                      <ModuleBadge name="LIDAR Mapping" active={true} icon={Wifi} />
                      <ModuleBadge name="Sentiment Analysis" active={true} icon={Brain} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                  {/* System Log */}
                  <div className="bg-black/30 rounded-xl p-3.5 border border-white/[0.04] font-mono text-[9px] text-slate-500 space-y-2 shadow-inner">
                    <div className="text-slate-400 border-b border-white/[0.05] pb-1.5 mb-1.5 tracking-[0.15em] flex items-center gap-1.5">
                      <Activity size={8} className="text-indigo-400" /> EVENT LOG
                    </div>
                    {[
                      { time: '14:20:01', text: 'Core initialized', color: 'text-emerald-500/70' },
                      { time: '14:20:02', text: 'Neural link active', color: 'text-indigo-400/70' },
                      { time: '14:20:05', text: 'System ready', color: 'text-slate-400' },
                    ].map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex justify-between items-center"
                      >
                        <span className="opacity-40">[{log.time}]</span>
                        <span className={log.color}>{log.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer with live stats */}
                <div className="p-4 border-t border-white/[0.04] bg-slate-950/50 flex-shrink-0">
                  <div className="flex justify-between items-center text-[9px] text-slate-600 font-mono uppercase tracking-[0.12em]">
                    <span>Messages: {messages.length}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-slate-700" />
                    <span>Session: {sessionTime}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-slate-700" />
                    <span>Secure</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Sidebar Button */}
          <motion.button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:flex absolute top-1/2 z-50 -translate-y-1/2 bg-slate-800/90 border border-white/[0.08] hover:border-white/15 p-1.5 rounded-r-xl text-slate-400 hover:text-white transition-all shadow-xl backdrop-blur-md"
            style={{ left: sidebarOpen ? 300 : 0 }}
          >
            {sidebarOpen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </motion.button>

          {/* Main Chat Interface */}
          <div className="flex-1 flex flex-col relative bg-slate-950/30 h-full">
            {/* Top Bar */}
            <div className="h-14 border-b border-white/[0.05] flex items-center justify-between px-6 bg-slate-900/40 backdrop-blur-xl flex-shrink-0 relative">
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
              <div className="flex items-center gap-3">
                <div className="lg:hidden">
                  <Bot size={20} className="text-indigo-500" />
                </div>
                <div className="flex items-center gap-2">
                  <Shield size={13} className="text-indigo-400/80" />
                  <span className="font-semibold text-white tracking-wide text-sm">Secure Uplink</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <motion.button
                  onClick={handleClearChat}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-red-500/10 border border-white/[0.06] hover:border-red-500/20 text-slate-500 hover:text-red-400 transition-all duration-300 text-xs font-medium"
                >
                  <Trash2 size={13} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Clear</span>
                </motion.button>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/15 text-[10px] text-emerald-400 font-mono tracking-wider">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  LIVE
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-5 scroll-smooth custom-scrollbar-dark">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12, scale: 0.97, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} group/msg`}
                  >
                    <div className={`flex gap-3 max-w-[85%] lg:max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                      {/* Avatar with ring */}
                      <div className="flex-shrink-0 mt-1">
                        <div className={`relative w-8 h-8 rounded-lg flex items-center justify-center border shadow-lg transition-all duration-300 ${
                          msg.sender === 'user'
                            ? 'bg-slate-800 border-white/10 text-slate-300 hover:border-white/20'
                            : 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400 shadow-indigo-500/10'
                        }`}>
                          {msg.sender !== 'user' && (
                            <div className="absolute inset-0 rounded-lg border border-indigo-400/20 animate-pulse" />
                          )}
                          {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex flex-col gap-1.5 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <motion.div
                          whileHover={{ y: -1 }}
                          transition={{ duration: 0.2 }}
                          className={`p-4 rounded-xl relative shadow-xl backdrop-blur-sm transition-all duration-300 ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 text-white rounded-tr-sm border border-indigo-400/30 shadow-indigo-500/10 hover:shadow-indigo-500/20'
                            : 'bg-slate-900/70 text-slate-200 border border-white/[0.07] rounded-tl-sm hover:border-white/15'
                        }`}>
                          {/* Top gradient border for AI messages */}
                          {msg.sender === 'woffy' && (
                            <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
                          )}
                          {/* Inner glow for AI messages */}
                          {msg.sender === 'woffy' && (
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-indigo-500/[0.03] to-transparent pointer-events-none" />
                          )}
                          <div className="text-[15px] leading-relaxed tracking-wide relative z-10">
                            {msg.sender === 'woffy' && msg.id === messages[messages.length - 1].id && woffyState !== 'speaking' ? (
                              <Typewriter text={msg.text} />
                            ) : msg.sender === 'woffy' ? (
                              <div className="space-y-1">
                                {formatMarkdown(msg.text)}
                              </div>
                            ) : (
                              msg.text
                            )}
                          </div>
                        </motion.div>
                        <span className="text-[10px] text-slate-600 font-mono opacity-0 group-hover/msg:opacity-60 transition-opacity duration-300 px-1">
                          {getRelativeTime(msg.timestamp)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Premium Thinking Indicator */}
                {woffyState === 'thinking' && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                    <div className="flex gap-3 max-w-[70%]">
                      <div className="relative w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mt-1">
                        <div className="absolute inset-0 rounded-lg border border-indigo-400/20 animate-pulse" />
                        <Bot size={14} />
                      </div>
                      <div className="bg-slate-900/70 p-4 rounded-xl rounded-tl-sm border border-white/[0.07] flex items-center gap-2 backdrop-blur-sm">
                        {/* Neural waveform */}
                        <div className="flex items-center gap-[2px] h-4">
                          {[0, 1, 2, 3, 4].map(i => (
                            <motion.div
                              key={i}
                              animate={{ height: ['30%', '100%', '30%'] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                              className="w-[2px] bg-indigo-400/60 rounded-full"
                              style={{ minHeight: '3px' }}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono ml-1">Processing...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Premium Input Area */}
            <div className="p-4 lg:p-6 flex-shrink-0 z-30 relative">
              {/* Fade gradient above input */}
              <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

              <div className="max-w-4xl mx-auto relative">

                {/* Suggestion Chips */}
                <AnimatePresence>
                  {messages.length < 3 && !inputText && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex gap-2.5 mb-4 overflow-x-auto pb-2 custom-scrollbar-dark"
                    >
                      {[
                        { label: "Capabilities", icon: Zap, prompt: "Tell me about your Capabilities" },
                        { label: "Guard Mode", icon: Shield, prompt: "Tell me about your Guard Mode" },
                        { label: "Personality", icon: Sparkles, prompt: "Tell me about your Personality" },
                        { label: "Technical Specs", icon: Cpu, prompt: "Tell me about your Technical Specs" },
                      ].map((item, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSendMessage(null, item.prompt)}
                          className="group/chip flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/80 hover:bg-slate-800/80 border border-white/[0.07] hover:border-indigo-500/30 rounded-xl text-xs font-medium text-slate-400 hover:text-indigo-300 transition-all whitespace-nowrap shadow-lg backdrop-blur-md relative overflow-hidden"
                        >
                          {/* Gradient border reveal on hover */}
                          <div className="absolute inset-0 opacity-0 group-hover/chip:opacity-100 transition-opacity duration-500 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), transparent, rgba(139,92,246,0.1))' }} />
                          <motion.div whileHover={{ rotate: 15, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <item.icon size={14} className="text-indigo-500 relative z-10" />
                          </motion.div>
                          <span className="relative z-10">{item.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSendMessage} className="relative group/input">
                  {/* Animated gradient border glow */}
                  <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500 animated-gradient-border" style={{ padding: '1px' }}>
                    <div className="absolute inset-[1px] bg-slate-900 rounded-2xl" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-focus-within/input:opacity-60 transition-opacity duration-500 blur-xl" />

                  <div className="relative flex items-end bg-slate-900/90 rounded-2xl border border-white/[0.08] group-focus-within/input:border-white/15 p-2 shadow-2xl backdrop-blur-xl transition-all duration-300">
                    {/* Mic Button */}
                    <button
                      type="button"
                      className="p-2.5 text-slate-500 hover:text-indigo-400 transition-all duration-200 hover:bg-white/5 rounded-xl active:scale-90 flex-shrink-0 mb-0.5"
                    >
                      <Mic size={20} />
                    </button>

                    {/* Auto-resize Textarea */}
                    <textarea
                      value={inputText}
                      onChange={(e) => {
                        setInputText(e.target.value);
                        e.target.style.height = 'auto';
                        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(e);
                        }
                      }}
                      placeholder="Command Woffy..."
                      rows={1}
                      className="flex-1 bg-transparent border-none text-white placeholder:text-slate-600 focus:ring-0 focus:outline-none text-[15px] py-2.5 px-3 font-medium tracking-wide resize-none max-h-[120px] leading-relaxed"
                    />

                    {/* Send Button */}
                    <motion.button
                      type="submit"
                      disabled={!inputText.trim() || woffyState === 'thinking'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 disabled:opacity-30 disabled:hover:bg-indigo-600 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/20 flex-shrink-0 mb-0.5"
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                </form>

                <div className="text-center mt-3 text-[10px] text-slate-700 font-mono tracking-[0.15em] flex items-center justify-center gap-2">
                  <span className="opacity-50">Secure Neural Uplink</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="opacity-50">v2.4.0</span>
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
