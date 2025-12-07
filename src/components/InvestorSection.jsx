import React from 'react';

const InvestorSection = () => {
    return (
        <section id="investors" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-brand-rose/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-brand-indigo tracking-wider uppercase mb-2">For Investors</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Help Us Shape the Future of Companionship</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We are building the world's most advanced emotional AI companion.
                        Join us in our mission to solve loneliness and bring joy to millions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Market Card */}
                    <div className="glass-card p-8 rounded-3xl text-center">
                        <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                            🌍
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Global Market</h4>
                        <p className="text-slate-600">
                            Tapping into the $100B+ pet care and multi-billion dollar digital wellness markets.
                        </p>
                    </div>

                    {/* Technology Card */}
                    <div className="glass-card p-8 rounded-3xl text-center">
                        <div className="w-16 h-16 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                            🧬
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Proprietary AI</h4>
                        <p className="text-slate-600">
                            Unique emotional modeling engine that evolves with user interaction.
                        </p>
                    </div>

                    {/* Scale Card */}
                    <div className="glass-card p-8 rounded-3xl text-center">
                        <div className="w-16 h-16 mx-auto bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                            📈
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Scalable Vision</h4>
                        <p className="text-slate-600">
                            Software-first approach with high margins and rapid deployment capabilities.
                        </p>
                    </div>
                </div>

                <div className="glass p-10 rounded-3xl border border-brand-indigo/20 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/5 to-brand-rose/5"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">Download Investment Memo</h4>
                            <p className="text-slate-600">Get detailed insights into our metrics, roadmap, and vision.</p>
                        </div>
                        <button className="btn-primary flex items-center gap-3 shadow-xl shadow-brand-indigo/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Download Pitch Deck
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorSection;
