import React from 'react';
import { Brain, Heart, Sparkles, Shield, Zap, Activity } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Woffy evolves with you. Our neural networks analyze your interactions to understand your unique personality and preferences.",
      color: "text-brand-indigo",
      bg: "bg-indigo-50"
    },
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Advanced sentiment analysis allows Woffy to detect your mood and provide the right comfort or companionship at the right time.",
      color: "text-brand-rose",
      bg: "bg-rose-50"
    },
    {
      icon: Sparkles,
      title: "Interactive Play",
      description: "Engage in delightful digital activities. From fetch to puzzle solving, Woffy keeps the fun alive.",
      color: "text-brand-accent",
      bg: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your digital companion's memories are yours alone. Enterprise-grade encryption keeps your personal data secure.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Zap,
      title: "Always Available",
      description: "Loneliness doesn't keep office hours. Woffy is there 24/7, ready to chat, listen, or just 'be' there.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Activity,
      title: "Growth Metrics",
      description: "Track your companion's development. See how Woffy's emotional intelligence grows alongside your relationship.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-rose tracking-wider uppercase mb-2">Key Features</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">
            More Than Just Code. <br />
            <span className="text-gradient-brand">It's a Connection.</span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Woffy combines state-of-the-art AI with the heartwarming nature of a pet to create a companion that truly understands you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl group cursor-pointer">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-indigo transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
