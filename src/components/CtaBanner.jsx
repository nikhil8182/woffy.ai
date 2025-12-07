import React from 'react';

const CtaBanner = ({ onJoinWaitlist }) => {
  return (
    <section className="py-24 bg-brand-rose relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 bg-brand-indigo/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
        <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm font-medium mb-6 border border-white/20 backdrop-blur-sm">
          Limited Beta Access
        </div>
        <h2 className="text-4xl font-extrabold mb-6 font-display">
          Ready to Meet Your AI Companion?
        </h2>
        <p className="text-xl text-rose-50 mb-10 leading-relaxed max-w-2xl mx-auto">
          Be among the first to experience the future of companionship. Join our community of early adopters and help shape Woffy's personality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onJoinWaitlist}
            className="px-8 py-4 bg-white text-brand-rose rounded-full font-bold text-lg hover:bg-rose-50 transition-colors shadow-xl shadow-rose-900/20"
          >
            Join the Waitlist
          </button>
          <a
            href="#roadmap"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-block backdrop-blur-sm"
          >
            View Roadmap
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-8 text-white/90">
          <div>
            <div className="text-3xl font-bold text-white">Alpha</div>
            <div className="text-sm opacity-80">Current Phase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">Q4 2026</div>
            <div className="text-sm opacity-80">Public Launch</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">Secure</div>
            <div className="text-sm opacity-80">Data Privacy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
