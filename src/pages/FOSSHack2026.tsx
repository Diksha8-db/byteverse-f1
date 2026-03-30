import { motion } from 'framer-motion';

export const FOSSHack2026 = () => {
    return (
        <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display selection:bg-primary selection:text-white">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-carbon-fiber opacity-60"></div>
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent skew-x-[-12deg]"></div>
                <div className="absolute inset-0 scanlines opacity-30"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Pit-board header */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b border-white/10 pb-8 text-center md:text-left relative z-30 pt-10">
                    <div className="mb-4 md:mb-0">
                        <div className="text-primary font-mono text-xs tracking-[0.4em] mb-3 pl-1 flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            FOSS UNITED
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase relative">
                            FOSS Hack <span className="text-stroke-white text-transparent">2026</span>
                        </h1>
                    </div>
                    <div className="hidden md:flex flex-col items-end">
                        <div className="text-gray-400 font-mono text-[10px] tracking-[0.2em] mb-1">SYSTEM STATUS</div>
                        <div className="bg-primary/20 border border-primary text-primary px-4 py-1 rounded-full font-bold text-sm animate-pulse tracking-widest uppercase shadow-[0_0_15px_rgba(255,30,0,0.4)]">
                            REGISTRATIONS OPEN
                        </div>
                    </div>
                </div>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed mb-16 border-l-4 border-primary pl-6 bg-gradient-to-r from-primary/5 to-transparent py-4 shadow-[inset_0_0_20px_rgba(255,30,0,0.05)]"
                >
                    India&apos;s largest FOSS hackathon is back. Build, contribute, and ship open source — all of March 2026.
                </motion.p>

                {/* Info cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-20 relative z-20">
                    
                    {/* Format Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group relative w-full min-h-[220px]"
                    >
                        <div className="absolute -top-3 right-8 w-24 h-6 bg-primary/20 skew-x-[45deg] border-t border-r border-primary/50 group-hover:bg-primary/40 group-hover:shadow-[0_0_15px_rgba(255,30,0,0.5)] transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-primary transition-colors duration-500 [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)] shadow-xl z-10"></div>
                        <div className="absolute inset-[1px] bg-carbon [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)] z-20 flex flex-col p-8 overflow-hidden">
                            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="font-mono text-primary text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80">Telemetry // Format</div>
                                <h3 className="text-3xl font-black italic uppercase mb-3 text-white group-hover:text-primary transition-colors">Hybrid <span className="text-white/50">Month</span></h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                                    Virtual + in-person at 8 host venues across India. In-person is optional. Teams of 1–4. Registration open now.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Prize Pool Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group relative w-full min-h-[220px]"
                    >
                        <div className="absolute -bottom-3 left-8 w-24 h-6 bg-primary/20 skew-x-[45deg] border-b border-l border-primary/50 group-hover:bg-primary/40 group-hover:shadow-[0_0_15px_rgba(255,30,0,0.5)] transition-all duration-300"></div>
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-primary transition-colors duration-500 [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)] shadow-xl z-10"></div>
                        <div className="absolute inset-[1px] bg-carbon [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)] z-20 flex flex-col p-8 overflow-hidden">
                            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
                            <div className="relative z-10 w-full">
                                <div className="font-mono text-primary text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80 flex justify-between">
                                    <span>Fund // Prize Pool</span>
                                    <span className="animate-pulse">AVAILABLE</span>
                                </div>
                                <h3 className="text-4xl font-black italic uppercase mb-3 text-white group-hover:text-primary transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(255,30,0,0.6)]">₹5,00,000</h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                                    Compete for a share of India&apos;s premier FOSS hackathon prize pool. Evaluated on novelty, completeness, and relevance.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* What you can do (Tracks) */}
                <div className="mb-20 relative z-20">
                    <div className="text-primary font-mono text-[10px] tracking-[0.4em] mb-4">AERODYNAMIC PROFILES // TRACKS</div>
                    <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight mb-8">
                        Build · Contribute · <span className="text-stroke-white text-transparent">Ship</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "NEW FOSS PROJECTS", desc: "Start a new open source project from scratch. Launch your vision." },
                            { label: "EXISTING PROJECTS", desc: "Contribute to existing FOSS codebases. Upgrade the chassis." },
                            { label: "PARTNER PROJECTS", desc: "Work on curated projects (CircuitVerse, MapLibre, OSM)." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white/5 border border-white/10 p-6 font-mono hover:bg-black/40 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-primary text-xs tracking-[0.2em] mb-3 relative z-10 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:animate-ping"></span>
                                    {item.label}
                                </div>
                                <p className="text-gray-400 text-sm relative z-10 leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-6 flex items-start gap-3 bg-primary/10 border border-primary/20 p-4 rounded-lg">
                        <span className="material-icons text-primary text-xl">info</span>
                        <p className="text-gray-300 text-sm font-mono leading-relaxed">
                            Contributions count beyond code: documentation, design, data, and testing all qualify for the podium.
                        </p>
                    </div>
                </div>

                {/* Timeline / CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 bg-carbon border border-white/10 rounded-2xl relative overflow-hidden z-20 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                >
                    <div className="absolute inset-0 scanlines opacity-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-primary/10 to-transparent skew-x-[-20deg] pointer-events-none -translate-x-10"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div className="flex-grow">
                            <h3 className="text-3xl md:text-4xl font-black italic uppercase mb-6 flex items-center gap-3">
                                <span className="material-icons text-primary text-3xl">flag</span>
                                Race Timeline
                            </h3>
                            <ul className="space-y-4 font-mono text-sm md:text-base text-gray-300 relative border-l-2 border-white/10 pl-6 ml-2">
                                <li className="relative">
                                    <span className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary shadow-[0_0_10px_rgba(255,30,0,0.8)] rounded-full border-2 border-black"></span>
                                    <span className="text-white font-bold ml-2">Registration</span> — Open Now
                                </li>
                                <li className="relative">
                                    <span className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/60 rounded-full border-2 border-black"></span>
                                    <span className="text-white font-bold ml-2">Development</span> — March 1–31, 2026
                                </li>
                                <li className="relative">
                                    <span className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/60 rounded-full border-2 border-black"></span>
                                    <span className="text-white font-bold ml-2">Submissions Limit</span> — March 31, 2026
                                </li>
                                <li className="relative text-primary">
                                    <span className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 bg-transparent border-2 border-primary rounded-full animate-ping"></span>
                                    <span className="absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-black"></span>
                                    <span className="text-white font-bold ml-2">Final Results</span> — May 4, 2026
                                </li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-col gap-4 min-w-[280px]">
                            {/* CTA */}
                            <a
                                href="https://fossunited.org/fosshack/2026"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full h-16 rounded-xl bg-gradient-to-r from-primary to-primary-dark border-2 border-primary shadow-[0_0_20px_rgba(255,30,0,0.4)] flex items-center justify-center transform transition-all duration-200 active:scale-95 hover:shadow-[0_0_40px_rgba(255,30,0,0.8)] overflow-hidden"
                            >
                                <div className="absolute inset-0 scanlines opacity-30 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative z-10 text-white font-black italic uppercase tracking-wider flex items-center gap-2">
                                    Enter The Grid 
                                    <span className="material-icons group-hover:translate-x-1 transition-transform">sports_score</span>
                                </span>
                            </a>
                            <p className="text-gray-500 text-[10px] font-mono leading-relaxed text-center">
                                Operated by FOSS United. Open to Indian nationals; projects must use valid Open Source licenses.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </main>
        </section>
    );
};
