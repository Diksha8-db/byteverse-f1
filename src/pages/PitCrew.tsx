import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import crewData from '../data/pit-crew';
import F1CarTicker from '../components/F1CarTicker';

export const PitCrew = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Website", "Speaker and Judges", "Design", "Content", "Sponsorship", "DevFolio"];

    const filteredCrew = activeCategory === "All"
        ? crewData
        : crewData.filter(m => m.team.includes(activeCategory));

    return (
        <section className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg]"></div>
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="relative mb-16 flex flex-col md:flex-row justify-between items-center md:items-end pb-10 text-center md:text-left gap-6">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase">Organizing Team</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            The <span className="text-stroke-white text-transparent">Crew</span>
                        </h1>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-end relative z-10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all duration-300 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] ${activeCategory === cat
                                    ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(255,30,0,0.4)]'
                                    : 'bg-transparent text-gray-500 border-white/10 hover:border-primary/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Animated ticker bottom divider */}
                    <div className="absolute bottom-0 left-0 w-full h-[56px] flex items-center opacity-80 hover:opacity-100 transition-opacity">
                        <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2"></div>
                        <div className="w-full absolute inset-0">
                            <F1CarTicker speed={2} height={56} transparent />
                        </div>
                    </div>
                </div>

                {/* Crew Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredCrew.map((member, i) => (
                            <CrewCard key={member.id} member={member} index={i} />
                        ))}
                    </AnimatePresence>
                </div>

            </main>
        </section>
    );
};

const CrewCard = ({ member, index }: { member: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group relative p-[1px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,30,0,0.35)] bg-white/10 hover:bg-primary [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]"
        >
            <div className="relative w-full bg-gradient-to-b from-[#141418] via-[#0e0e12] to-[#0a0a0c] [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] overflow-hidden h-[320px] flex flex-col">

                {/* Photo */}
                <div className="relative flex-grow overflow-hidden flex items-end justify-center">
                    {/* Radial gradient backdrop behind person */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_#ff1e0018_0%,_#0a0a0c_70%)] pointer-events-none"></div>
                    <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="relative z-10 w-full h-full object-contain object-bottom transform group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                    />
                    {/* Bottom blend into info panel */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0c] to-transparent z-20"></div>
                    <div className="absolute inset-0 scanlines opacity-20 pointer-events-none mix-blend-overlay z-30"></div>

                    {/* TOP LEFT: Team pill */}
                    <div className="absolute top-3 left-3 z-40">
                        <div className="px-2 py-0.5 bg-black/60 backdrop-blur border border-primary/30 font-mono text-[9px] tracking-[0.3em] text-primary uppercase">
                            {member.team.filter((t: string) => t !== "All")[0] ?? 'Crew'}
                        </div>
                    </div>

                    {/* Telemetry corners */}
                    <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>
                    <div className="absolute bottom-[68px] left-3 w-5 h-5 border-b-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>
                </div>

                {/* Info Panel */}
                <div className="shrink-0 px-4 py-3 border-t border-primary/20 bg-gradient-to-r from-[#0e0e12] via-[#121218] to-[#0e0e12]">
                    <p className="font-black italic uppercase text-white text-base leading-tight">{member.name}</p>

                    <div className="mt-2 flex items-center gap-3">
                        {/* LinkedIn */}
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.788-1.75-1.76 0-.972.784-1.759 1.75-1.759s1.75.787 1.75 1.759c0 .972-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.75c0-1.133-.02-2.59-1.58-2.59-1.58 0-1.82 1.233-1.82 2.51v4.83h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z" />
                                </svg>
                            </a>
                        )}
                        {/* GitHub */}
                        {member.github && (
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        {/* Separator */}
                        <div className="ml-auto font-mono text-[9px] text-gray-600 tracking-widest">
                            ID:{member.id?.toString().padStart(3, '0') ?? '000'}
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};