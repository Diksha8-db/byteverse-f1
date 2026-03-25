export const FOSSHack2026 = () => {
    return (
        <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display selection:bg-neon-cyan selection:text-black">

            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-carbon-fiber opacity-60"></div>
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg]"></div>
                <div className="absolute inset-0 scanlines opacity-30"></div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Pit-board header */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 border-b border-white/10 pb-6 text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-2 pl-1 flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                            EVENT: FOSS UNITED
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            FOSS Hack <span className="text-stroke-white text-transparent">2026</span>
                        </h1>
                    </div>
                    <div className="hidden md:flex flex-col items-end">
                        <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse">REGISTRATIONS OPEN</div>
                    </div>
                </div>

                {/* Intro */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed mb-10 border-l-4 border-primary pl-6">
                    India&apos;s largest FOSS hackathon is back. Build, contribute, and ship open source — all of March 2026.
                </p>

                {/* Info cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="rounded-xl clip-hud bg-[#121215] border border-white/20 p-6 relative group hover:border-white/40 transition-colors">
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-neon-cyan transition-colors"></div>
                        <div className="font-mono text-neon-cyan text-xs tracking-[0.3em] mb-3">FORMAT</div>
                        <h3 className="text-2xl font-black italic uppercase mb-2">Hybrid · Month-long</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Virtual + in-person at 8 host venues across India. In-person is optional. Teams of 1–4. Registration open now.
                        </p>
                    </div>

                    <div className="rounded-xl clip-hud bg-[#121215] border border-white/20 p-6 relative group hover:border-white/40 transition-colors">
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-neon-cyan transition-colors"></div>
                        <div className="font-mono text-neon-cyan text-xs tracking-[0.3em] mb-3">PRIZE POOL</div>
                        <h3 className="text-2xl font-black italic uppercase mb-2">₹5,00,000</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Compete for a share of India&apos;s premier FOSS hackathon prize pool. Evaluation on novelty, completeness, and relevance.
                        </p>
                    </div>
                </div>

                {/* What you can do */}
                <div className="mb-12">
                    <div className="text-neon-cyan font-mono text-xs tracking-[0.4em] mb-3">TRACKS</div>
                    <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight mb-6">
                        Build · Contribute · <span className="text-stroke-white text-transparent">Ship</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { label: "NEW FOSS PROJECTS", desc: "Start a new open source project from scratch." },
                            { label: "EXISTING PROJECTS", desc: "Contribute to existing FOSS codebases." },
                            { label: "PARTNER PROJECTS", desc: "Work on curated projects (e.g. CircuitVerse, MapLibre, OSM)." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 font-mono">
                                <div className="text-primary text-xs tracking-widest mb-2">{item.label}</div>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-500 text-sm">
                        Contributions count beyond code: documentation, design, data, and testing all qualify.
                    </p>
                </div>

                {/* Timeline / CTA */}
                <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-xl">
                    <h3 className="text-2xl font-black italic uppercase mb-4">Timeline</h3>
                    <ul className="space-y-2 font-mono text-sm text-gray-300">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full"></span> Registration — open</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary/60 rounded-full"></span> Development — March 1–31, 2026</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-primary/60 rounded-full"></span> Submissions — March 31, 2026</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 bg-neon-cyan rounded-full"></span> Results — May 4, 2026</li>
                    </ul>
                    <a
                        href="https://fossunited.org/fosshack/2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white font-bold uppercase text-sm rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        Official site & registration
                        <span className="material-icons text-lg">open_in_new</span>
                    </a>
                </div>

                <p className="mt-8 text-gray-500 text-xs font-mono">
                    FOSS Hack 2026 is run by FOSS United. Open to Indian nationals; projects must use valid FOSS licenses.
                </p>
            </main>
        </section>
    );
};
