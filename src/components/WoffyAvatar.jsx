import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WoffyAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative"
      >
        {/* Soft Warm Glow - subtle */}
        <div className="absolute inset-0 bg-orange-100/50 blur-3xl rounded-full scale-90"></div>

        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Golden Retriever Floppy Ears - Softer Gold */}
            {/* Left Ear */}
            <motion.path
              d="M45 70 C 10 70, 0 110, 15 130 C 25 145, 50 130, 50 110"
              fill="#FCD34D" // Amber-300 (Softer Gold)
              stroke="#D97706" // Amber-600 (Outline)
              strokeWidth="3"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              originX="50"
              originY="70"
            />
            {/* Right Ear */}
            <motion.path
              d="M155 70 C 190 70, 200 110, 185 130 C 175 145, 150 130, 150 110"
              fill="#FCD34D" // Amber-300
              stroke="#D97706" // Amber-600
              strokeWidth="3"
              animate={{ rotate: [2, -2, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              originX="150"
              originY="70"
            />

            {/* Head Shape - Creamy/Light Gold */}
            <circle cx="100" cy="100" r="65" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" /> {/* Amber-100 fill */}
            
            {/* Fur Tuft on Top */}
            <path d="M90 38 Q 100 30, 110 38" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />

            {/* Cheeks - Warm flush */}
            <circle cx="65" cy="110" r="8" fill="#FDA4AF" opacity="0.4" />
            <circle cx="135" cy="110" r="8" fill="#FDA4AF" opacity="0.4" />

            {/* Eyes */}
            <g>
              <motion.g
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <ellipse cx="70" cy="90" rx="9" ry="11" fill="#292524" />
                <circle cx="74" cy="86" r="3" fill="white" />
              </motion.g>
              
              <motion.g
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <ellipse cx="130" cy="90" rx="9" ry="11" fill="#292524" />
                <circle cx="134" cy="86" r="3" fill="white" />
              </motion.g>
            </g>

            {/* Snout Area - White/Cream */}
            <ellipse cx="100" cy="115" rx="25" ry="20" fill="#FFFBEB" />

            {/* Nose - Dark Brown */}
            <motion.path
              d="M90 108 C 90 108, 100 116, 110 108 C 110 108, 100 102, 90 108 Z"
              fill="#292524"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Mouth */}
            <path d="M92 122 Q 100 128, 108 122" stroke="#292524" strokeWidth="3" strokeLinecap="round" />
            
            {/* Tongue - Playful Pink */}
            <motion.path
              d="M96 125 Q 100 138, 104 125"
              fill="#FB7185"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              originY="125"
            />

          </motion.g>
        </svg>

        {/* Chat Bubble - Onwords Branding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [10, 0, 0, -10] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
          className="absolute top-10 -right-4 bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow-lg border border-red-100"
        >
          <span className="text-sm font-bold text-gray-900"><span className="text-red-600">Woof</span>! 🐾</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WoffyAvatar;
