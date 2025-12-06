import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smile, Gamepad2, Lock, Brain, Zap, Heart } from 'lucide-react';

const features = [
  {
    title: 'Adaptive Learning',
    description: 'Personalized interactions that evolve based on your habits and preferences.',
    icon: Settings,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Emotional Support',
    description: 'Sentiment analysis to provide comfort and companionship when you need it most.',
    icon: Smile,
    color: 'text-rose-600',
    bg: 'bg-rose-100',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Interactive Play',
    description: 'Engaging activities and games designed to entertain both you and your AI companion.',
    icon: Gamepad2,
    color: 'text-green-600',
    bg: 'bg-green-100',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Privacy Focused',
    description: 'Built with privacy at its core, ensuring your data stays secure and protected.',
    icon: Lock,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    colSpan: 'md:col-span-2',
  },
];

const Features = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-600 font-semibold tracking-wider uppercase text-sm"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-2 text-4xl md:text-5xl font-bold text-slate-900"
          >
            More Than Just Code. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-orange-500">A Digital Soul.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden group ${feature.colSpan}`}
            >
              <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br from-transparent to-${feature.bg.replace('bg-', '')}/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>

              {feature.title === 'Adaptive Learning' && (
                <div className="mt-6 flex gap-2">
                   <div className="h-2 w-16 bg-blue-200 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '100%' }}
                       transition={{ duration: 1.5, repeat: Infinity }}
                       className="h-full bg-blue-500"
                     />
                   </div>
                   <div className="h-2 w-8 bg-blue-200 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
