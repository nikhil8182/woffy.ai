import React from 'react';
import { motion } from 'framer-motion';
import { WAITLIST_COUNT } from '../utils/constants';

const InvestorSection = () => {
    const stats = [
        { label: 'Market Opportunity', value: '$100B+', icon: '🌍', color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Growth Potential', value: '300%', icon: '📈', color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { label: 'Waitlist', value: WAITLIST_COUNT, icon: '👥', color: 'text-brand-rose', bg: 'bg-rose-100' },
    ];

    return (
        <section id="investors" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-brand-rose/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-indigo/10 text-brand-indigo font-bold text-xs tracking-wider uppercase mb-4">
                        Investment Opportunity
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                        Shape the Future of <br />
                        <span className="bg-gradient-to-r from-brand-rose to-brand-indigo bg-clip-text text-transparent">Companionship</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        We are building the world's most advanced emotional AI companion. 
                        Join us in our mission to solve loneliness and bring joy to millions.
                    </p>
                </motion.div>

                {/* Main Value Props */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: "Global Market",
                            desc: "Tapping into the $100B+ pet care and multi-billion dollar digital wellness markets.",
                            icon: "🌍",
                            gradient: "from-blue-500 to-cyan-500",
                            shadow: "shadow-blue-500/20"
                        },
                        {
                            title: "Proprietary AI",
                            desc: "Unique emotional modeling engine that evolves with user interaction.",
                            icon: "🧬",
                            gradient: "from-purple-500 to-pink-500",
                            shadow: "shadow-purple-500/20"
                        },
                        {
                            title: "Scalable Vision",
                            desc: "Software-first approach with high margins and rapid deployment capabilities.",
                            icon: "🚀",
                            gradient: "from-rose-500 to-orange-500",
                            shadow: "shadow-rose-500/20"
                        }
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-1 rounded-3xl bg-gradient-to-br from-white to-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                            
                            <div className="relative h-full bg-white/80 backdrop-blur-sm p-8 rounded-[22px] border border-white/20">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg ${card.shadow} transform group-hover:scale-110 transition-transform duration-300`}>
                                    {card.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { label: 'TAM', value: '$100B+', icon: '💰' },
                        { label: 'CAGR', value: '25%', icon: '📈' },
                        { label: 'Waitlist', value: WAITLIST_COUNT, icon: '👥' },
                        { label: 'Patents', value: '3', icon: '🔒' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all border border-slate-100"
                        >
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white shadow-2xl shadow-slate-900/20 max-w-5xl mx-auto"
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-rose/20 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-indigo/20 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left max-w-xl">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Invest?</h3>
                            <p className="text-slate-300 text-lg mb-8">
                                Get exclusive access to our investment memo, financial projections, and product roadmap.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                                >
                                    <span>Download Pitch Deck</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-transparent border-2 border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                                >
                                    Schedule Meeting
                                </motion.button>
                            </div>
                        </div>
                        
                        {/* 3D-like Decorative Element */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border border-white/10 rounded-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-8xl">🦄</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InvestorSection;
