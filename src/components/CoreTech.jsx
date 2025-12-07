import React from 'react';
import { Eye, Footprints, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreTech = ({ themeMode }) => {
  const isTitan = themeMode === 'titan';

  const features = [
    {
      icon: Eye,
      title: "Expressive Eyes",
      desc: "High-res OLED screens communicate joy, curiosity, and sleepiness instantly.",
      color: isTitan ? "text-cyan-400" : "text-rose-500"
    },
    {
      icon: Footprints,
      title: "Real Walking",
      desc: "Four-legged articulation allowing natural movement. No wheels, just paws.",
      color: isTitan ? "text-blue-400" : "text-purple-500"
    },
    {
      icon: Brain,
      title: "Learning AI",
      desc: "Adapts to your voice and schedule. Wakes up when you do, rests when you sleep.",
      color: isTitan ? "text-emerald-400" : "text-amber-500"
    }
  ];

  return (
    <section className={`py-16 md:py-32 relative transition-colors duration-700 ${isTitan ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isTitan ? 'font-mono' : 'font-display'}`}>
            More Than Metal. <br/>
            <span className={isTitan ? 'text-slate-500' : 'text-slate-400'}>More Than Plush.</span>
          </h2>
          <p className={`text-xl ${isTitan ? 'text-slate-400' : 'text-slate-600'}`}>
            Underneath the exterior lies the same advanced neural network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`text-center p-8 rounded-3xl transition-colors duration-500 ${
                isTitan 
                  ? 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700' 
                  : 'bg-rose-50/50 hover:bg-rose-50 border border-rose-100'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${feature.color} ${
                isTitan ? 'bg-slate-950' : 'bg-white shadow-lg'
              }`}>
                <feature.icon size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isTitan ? 'font-mono' : 'font-display'}`}>
                {feature.title}
              </h3>
              <p className={isTitan ? 'text-slate-400 text-sm' : 'text-slate-600'}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTech;

