import React from 'react';
import { motion } from 'framer-motion';
import { Music, Smile, Hand } from 'lucide-react';

const InteractiveFeatures = ({ themeMode }) => {
  const isTitan = themeMode === 'titan';

  const features = [
    {
      icon: Music,
      title: "The Happy Dance",
      desc: "When you come home, Woffy recognizes your face and does a unique tippy-tap dance.",
      color: isTitan ? "bg-cyan-900/20 text-cyan-400" : "bg-rose-100 text-rose-500"
    },
    {
      icon: Smile,
      title: "Screen Emotions",
      desc: "His eyes turn into hearts when you pet him, or droop when his battery is low.",
      color: isTitan ? "bg-blue-900/20 text-blue-400" : "bg-pink-100 text-pink-500"
    },
    {
      icon: Hand,
      title: "Tickle Mode",
      desc: isTitan 
        ? "Tap the sensors to see his 'shields' (lights) pulse and engage defense mode." 
        : "Pet the soft fur to hear him giggle and purr with delight.",
      color: isTitan ? "bg-emerald-900/20 text-emerald-400" : "bg-amber-100 text-amber-500"
    }
  ];

  return (
    <section className={`py-24 relative ${isTitan ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${isTitan ? 'text-white font-mono' : 'text-slate-900 font-display'}`}>
            Life on Four Legs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all hover:-translate-y-2 ${
                isTitan 
                  ? 'bg-slate-950 border-slate-800' 
                  : 'bg-slate-50 border-slate-100'
              }`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isTitan ? 'text-white font-mono' : 'text-slate-900'}`}>
                {feature.title}
              </h3>
              <p className={isTitan ? 'text-slate-400' : 'text-slate-600'}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;








