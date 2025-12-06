import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">About Woffy</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            More than just a digital pet.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Combining cutting-edge AI technology with the lovable nature of dogs, Woffy is designed to be a companion that truly understands you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Intelligence</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Woffy uses advanced machine learning algorithms to adapt to your personality, preferences, and routines. The more you interact, the more personalized the experience becomes.
            </p>
            <p className="text-sm text-gray-500">
              From understanding your emotional state to remembering your daily schedule, Woffy is always there to support you.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Connection</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              While Woffy's intelligence is powered by algorithms, its personality is crafted to evoke the joy, loyalty, and unconditional love that makes dogs humanity's best friend.
            </p>
            <p className="text-sm text-gray-500">
              Whether you need a playful distraction or a friendly presence, Woffy adapts to be the perfect companion for any moment.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">For Those Who Can't Take the Risk</h3>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                We deeply respect and celebrate the bond between humans and real pets. Woffy isn't designed to replace the irreplaceable love of a living companion.
              </p>
              <p>
                Instead, Woffy exists for those who can't bring another life into their world—whether due to allergies, housing restrictions, demanding schedules, financial constraints, or simply not being ready. Everyone deserves companionship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

