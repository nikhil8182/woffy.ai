import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-red-600 mr-2"></span>
            Beta Launching Q4 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight"
          >
            Woffy.ai <br />
            <span className="text-gray-500">Your AI Companion</span> <br />
            <span className="text-red-600">Powered by Love</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Experience the future of companionship. An AI that learns, adapts, and brings unconditional joy to your life—without the limitations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
              Try Prototype
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-semibold text-lg hover:border-gray-300 transition-colors">
              Learn More
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Emotionally Intelligent</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>Always Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span>Privacy First</span>
            </div>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
               <div className="text-3xl font-bold text-gray-900">10,000+</div>
               <div className="text-sm text-gray-500">People Waiting</div>
             </div>
             <div>
               <div className="text-3xl font-bold text-gray-900">98%</div>
               <div className="text-sm text-gray-500">Satisfaction</div>
             </div>
             <div>
               <div className="text-3xl font-bold text-gray-900">24/7</div>
               <div className="text-sm text-gray-500">AI Learning</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

