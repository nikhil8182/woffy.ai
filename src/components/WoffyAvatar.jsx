import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WoffyAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to window center
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
      {/* Floating Animation Container */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-rose-500/20 blur-3xl rounded-full scale-90"></div>

        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head Group - Follows Mouse Slightly */}
          <motion.g
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Ears - Back */}
            <motion.path
              d="M40 60C40 60 20 90 25 120C30 150 60 140 60 140"
              fill="#E2E8F0"
              stroke="#CBD5E1"
              strokeWidth="3"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              originX="60"
              originY="80"
            />
            <motion.path
              d="M160 60C160 60 180 90 175 120C170 150 140 140 140 140"
              fill="#E2E8F0"
              stroke="#CBD5E1"
              strokeWidth="3"
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              originX="140"
              originY="80"
            />

            {/* Face Shape */}
            <circle cx="100" cy="100" r="65" fill="white" stroke="#E2E8F0" strokeWidth="3" />
            
            {/* Cheeks */}
            <circle cx="65" cy="110" r="8" fill="#FECDD3" opacity="0.6" />
            <circle cx="135" cy="110" r="8" fill="#FECDD3" opacity="0.6" />

            {/* Eyes Group */}
            <g>
              {/* Left Eye */}
              <motion.g
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <ellipse cx="70" cy="90" rx="8" ry="10" fill="#1E293B" />
                <circle cx="73" cy="86" r="3" fill="white" />
              </motion.g>
              
              {/* Right Eye */}
              <motion.g
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <ellipse cx="130" cy="90" rx="8" ry="10" fill="#1E293B" />
                <circle cx="133" cy="86" r="3" fill="white" />
              </motion.g>
            </g>

            {/* Nose */}
            <motion.path
              d="M92 110C92 110 100 118 108 110C108 110 100 105 92 110Z"
              fill="#1E293B"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Mouth */}
            <path d="M92 120Q100 128 108 120" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            
            {/* Tongue */}
            <motion.path
              d="M96 124Q100 135 104 124"
              fill="#FB7185"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              originY="124"
            />

            {/* Sparkles/Emotions */}
            <motion.g
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M150 60L153 50L160 55L150 60Z" fill="#F43F5E" />
              <circle cx="40" cy="50" r="3" fill="#3B82F6" />
            </motion.g>

          </motion.g>
        </svg>

        {/* Chat Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [10, 0, 0, -10] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
          className="absolute top-10 -right-4 bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow-lg border border-slate-100"
        >
          <span className="text-sm font-medium text-slate-700">Hi friend! 👋</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WoffyAvatar;

