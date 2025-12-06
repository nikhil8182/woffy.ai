import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smile, Gamepad2, Lock } from 'lucide-react';

const features = [
  {
    title: 'Adaptive Learning',
    description: 'Personalized interactions that evolve based on your habits and preferences.',
    icon: Settings,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Emotional Support',
    description: 'Sentiment analysis to provide comfort and companionship when you need it most.',
    icon: Smile,
    color: 'text-yellow-600',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Interactive Play',
    description: 'Engaging activities and games designed to entertain both you and your AI companion.',
    icon: Gamepad2,
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    title: 'Privacy Focused',
    description: 'Built with privacy at its core, ensuring your data stays secure and protected.',
    icon: Lock,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need in a digital companion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

