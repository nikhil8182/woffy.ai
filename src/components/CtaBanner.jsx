import React from 'react';

const CtaBanner = ({ onJoinWaitlist }) => {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 bg-orange-600/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
        <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6 border border-white/30 backdrop-blur-sm">
          Limited Beta Spots Available
        </div>
        <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-sm">
          Ready to Meet Your AI Companion?
        </h2>
        <p className="text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
          Join thousands of people waiting to experience the future of companionship. Early supporters get exclusive lifetime discounts!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={onJoinWaitlist}
            className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl shadow-orange-900/10"
          >
            Join the Waitlist
          </button>
          <a 
            href="#roadmap"
            className="px-8 py-4 bg-transparent border-2 border-white/80 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-block"
          >
            View Our Progress
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-8 text-amber-50">
          <div>
            <div className="text-3xl font-bold text-white">10,000+</div>
            <div className="text-sm">On Waitlist</div>
          </div>
          <div>
             <div className="text-3xl font-bold text-white">Q4 2026</div>
             <div className="text-sm">Launch Date</div>
          </div>
          <div>
             <div className="text-3xl font-bold text-white">50+</div>
             <div className="text-sm">Beta Testers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
