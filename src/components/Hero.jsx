import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, WifiOff } from 'lucide-react';

const Hero = ({ onOpenWaitlist }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-indigo/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-rose/10 border border-brand-rose/20 text-brand-rose font-medium text-sm mb-6 animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-rose opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-rose"></span>
              </span>
              Alpha Testing Phase
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="block text-gradient-brand">The AI Companion that</span>
              <span className="block text-slate-800 text-3xl md:text-4xl lg:text-5xl mt-2">Loves, Connects & Protects.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              More than a pet. Woffy is an emotional bond, a smart home hub, and a security patrol—all rolled into one adorable friend.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onOpenWaitlist}
                className="btn-primary w-full sm:w-auto text-lg"
              >
                Join Waitlist
              </button>
              <Link to="/investors" className="btn-secondary w-full sm:w-auto text-lg flex items-center justify-center gap-2">
                Investor Deck
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-700">
                <ShieldCheck size={18} />
                <span>100% Privacy First</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 tooltip" title="Core features work without internet">
                <WifiOff size={18} />
                <span>Offline Promise</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-rose to-brand-indigo rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
              <img
                src="/hero-woffy.png?v=1"
                alt="Woffy AI Dog"
                className="relative w-full h-auto drop-shadow-2xl rounded-3xl"
              />

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 glass px-4 py-3 rounded-2xl flex items-center gap-3 animate-float animation-delay-2000 backdrop-blur-md bg-white/80 shadow-lg border border-white/50 hidden md:flex">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">🧠</div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</p>
                  <p className="font-bold text-slate-800">Guarding...</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 glass px-4 py-3 rounded-2xl flex items-center gap-3 animate-float animation-delay-4000 backdrop-blur-md bg-white/80 shadow-lg border border-white/50 hidden md:flex">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">❤️</div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Mood</p>
                  <p className="font-bold text-slate-800">Loving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
