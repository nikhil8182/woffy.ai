import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Move, Eye, Battery } from 'lucide-react';

const IntelligenceInMotion = () => {
  const features = [
    {
      icon: Cpu,
      title: "Edge AI Core",
      desc: "Processes emotions locally. No lag, no cloud dependency for basic interactions.",
      color: "text-rose-500 bg-rose-500/10"
    },
    {
      icon: Move,
      title: "Quad-Motion",
      desc: "Real 4-legged articulation allows for dancing, stretching, and climbing small obstacles.",
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      icon: Eye,
      title: "OLED Expressions",
      desc: "High-res eyes that communicate 50+ unique emotional states instantly.",
      color: "text-amber-500 bg-amber-500/10"
    },
    {
      icon: Battery,
      title: "Auto-Dock",
      desc: "When energy is low, Woffy autonomously finds his charging pad.",
      color: "text-emerald-500 bg-emerald-500/10"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
          >
            Intelligence in Motion
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Advanced robotics meets emotional AI.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} transition-transform group-hover:scale-110`}>
                <feature.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceInMotion;

