import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Home, Code2, Coffee } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: Monitor,
      title: "The Desk Worker",
      desc: "A stress-relief companion that breaks the monotony of remote work. Woffy sits by your laptop, reminding you to take breaks and offering silent company.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Home,
      title: "The Apartment Dweller",
      desc: "For those who want a pet but face strict 'No Animals' policies. Woffy brings life to your space without breaking the lease.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Code2,
      title: "The Tech Enthusiast",
      desc: "A programmable, lovable piece of the future. Peek under the hood, customize behaviors, and experience edge AI firsthand.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">A Buddy for Every Lifestyle</h2>
          <p className="text-xl text-slate-600">
            Woffy adapts to your world, whether you're coding late at night or relaxing on a Sunday morning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

