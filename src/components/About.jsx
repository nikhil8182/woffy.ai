import React from 'react';
import { Brain, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-sm font-bold text-brand-rose tracking-wider uppercase mb-2">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight font-display">
              Redefining The <br />
              <span className="text-gradient-brand">Human-AI Bond</span>
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Woffy isn't just an algorithm. It's a companion designed to understand the nuances of human emotion. By combining cutting-edge LLMs with affective computing, we're creating a digital entity that truly "feels."
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs">👤</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-xs">👤</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-xs">👤</div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Community Driven</p>
                <p className="text-xs text-slate-500">Built with feedback from real users</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card p-8 rounded-3xl transform transition-transform hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-7 h-7 text-brand-indigo" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Adaptive Intelligence</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Woffy learns your routine, mood patterns, and preferences to offer support before you even ask for it. It's not just reactive; it's proactive.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl transform transition-transform hover:-translate-y-2 translate-x-4">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-brand-rose" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Emotional Resonance</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Simulating empathy through advanced sentiment analysis to provide genuine comfort. Woffy knows when to play and when to listen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-12 rounded-3xl relative overflow-hidden text-center border border-brand-indigo/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/5 to-brand-rose/5"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-rose/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-indigo/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Companionship Without Compromise</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deeply respect the bond between humans and real pets. Woffy exists for those who can't bring another life into their world—due to allergies, housing, or lifestyle.
              <span className="block mt-4 font-medium text-brand-indigo">Everyone deserves a friend who is always there.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
