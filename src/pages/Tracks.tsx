const tracks = [
    {
        id: "01",
        code: "AI",
        title: "NEURAL PRIX",
        subtitle: "Artificial Intelligence",
        desc: "Build AI-powered solutions: NLP, computer vision, LLMs, or predictive analytics. Create impactful, intelligent systems that solve real-world problems.",
        specs: [
            { label: "DIFFICULTY", value: "HARD", color: "text-red-500" },
            { label: "CPU LOAD", value: "98%", color: "text-orange-500" }
        ],
        path: "M20,100 Q50,20 80,100 T140,100 M80,100 L80,150 M50,60 L110,60",
        color: "border-primary shadow-[0_0_10px_#ff1e00]",
        accent: "bg-primary"
    },
    {
        id: "02",
        code: "WEB3",
        title: "BLOCKCHAIN CITY",
        subtitle: "Web3 - Blockchain",
        desc: "Design trustless applications using smart contracts, DeFi protocols, DAOs, or NFT infrastructure. Build the open, decentralized future of the internet.",
        specs: [
            { label: "SECURITY", value: "MAX", color: "text-green-500" },
            { label: "GAS FEE", value: "LOW", color: "text-blue-500" }
        ],
        path: "M30,120 L30,50 L90,30 L150,50 L150,120 L90,140 Z M90,85 L150,50 M90,85 L30,50 M90,85 L90,140",
        color: "border-yellow-500 shadow-[0_0_10px_#eab308]",
        accent: "bg-yellow-500"
    },
    {
        id: "03",
        code: "WEB",
        title: "WEB HYPERLOOP",
        subtitle: "Web Development",
        desc: "Develop full-stack web applications — responsive frontends, robust backends, and deployed pipelines. Use any stack (MERN, Next.js, Django, etc.).",
        specs: [
            { label: "STACK", value: "ANY", color: "text-blue-400" },
            { label: "RESP", value: "A+", color: "text-green-400" }
        ],
        path: "M20,100 C40,40 160,40 180,100 S140,160 100,140",
        color: "border-sky-500 shadow-[0_0_10px_#0ea5e9]",
        accent: "bg-sky-500"
    },
    {
        id: "04",
        code: "APP",
        title: "MOBILE MONACO",
        subtitle: "App development",
        desc: "Craft high-performance mobile experiences for iOS, Android, or cross-platform. Focus on UI/UX, seamless navigation, and powerful features.",
        specs: [
            { label: "OS", value: "IOS/AND", color: "text-purple-400" },
            { label: "LATENCY", value: "MIN", color: "text-green-400" }
        ],
        path: "M50,20 L150,20 L150,140 L50,140 Z M100,130 A10,10 0 1,1 100.1,130 M70,40 L130,40",
        color: "border-purple-500 shadow-[0_0_10px_#a855f7]",
        accent: "bg-purple-500"
    },
    {
        id: "05",
        code: "AR_VR",
        title: "VIRTUAL VELOCITY",
        subtitle: "Augmented Reality and Virtual Reality (AR/ VR)",
        desc: "Immersive innovations using ARCore, ARKit, Unity, or WebXR. Bridge the gap between digital and physical worlds with cutting-edge spatial tech.",
        specs: [
            { label: "DIMENSION", value: "3D", color: "text-pink-400" },
            { label: "FOV", value: "110°", color: "text-cyan-400" }
        ],
        path: "M30,100 C30,60 80,60 81,100 C81,140 119,140 119,100 C120,60 170,60 170,100 L170,120 L30,120 Z",
        color: "border-pink-500 shadow-[0_0_10px_#ec4899]",
        accent: "bg-pink-500"
    },
    {
        id: "06",
        code: "GAME",
        title: "PIXEL PADDOCK",
        subtitle: "Game Development",
        desc: "Build a playable game — any genre, any engine. Focus on mechanics, graphics, and interactive storytelling. Unity, Unreal, Godot, or custom engines welcome.",
        specs: [
            { label: "FPS", value: "60+", color: "text-yellow-400" },
            { label: "ENGINE", value: "ANY", color: "text-orange-400" }
        ],
        path: "M30,100 C50,40 150,40 170,100 M60,120 L140,120",
        color: "border-orange-400 shadow-[0_0_10px_#fb923c]",
        accent: "bg-orange-400"
    },
    {
        id: "07",
        code: "CRYPTO",
        title: "SECURE SECTOR",
        subtitle: "Cryptography and Network Security",
        desc: "Build tools for threat detection, penetration testing, cryptography, secure communications, or privacy-preserving systems. Defend the digital world.",
        specs: [
            { label: "RISK", value: "LOW", color: "text-emerald-400" },
            { label: "THREAT", value: "MONITORED", color: "text-red-400" }
        ],
        path: "M20,120 L60,60 L100,120 L140,60 L180,120",
        color: "border-emerald-500 shadow-[0_0_10px_#10b981]",
        accent: "bg-emerald-500"
    }
];

const themes = [
    "Quality Education",
    "Food Quality and Hunger",
    "Cybersecurity",
    "Healthcare and Medical",
    "Finance",
    "Sustainable Technology",
    "Law and Justice",
    "Community Building",
    "Disaster Management",
    "Space and Astrophysics Technology",
    "Open Innovation"
];



export const Tracks = () => {
    return (
        <section className="relative min-h-screen bg-asphalt text-white py-24 overflow-hidden font-display">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-[-12deg] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header - Pit Board Style */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 border-b border-white/10 pb-6 text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <div className="text-primary font-mono text-xs tracking-[0.4em] mb-2 pl-1 flex items-center justify-center md:justify-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            SECTOR: CLASSIFIED
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            Track <span className="text-stroke-white text-transparent">Selection</span>
                        </h1>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-gray-500 font-mono text-xs">SYSTEM STATUS</div>
                        <div className="text-primary font-bold text-xl animate-pulse">LIVE FEED ACTIVE</div>
                    </div>
                </div>

                {/* Rulebook + Registration CTAs */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
                    <a
                        href="https://drive.google.com/file/d/1dgOf2QOxlISb9TkfMV_Gps0bq2GxM5Xd/view"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-mono text-xs uppercase tracking-widest font-bold transition-all hover:shadow-[0_0_20px_rgba(255,30,0,0.5)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
                    >
                        <span className="material-icons text-sm">description</span>
                        Rulebook PDF
                    </a>
                    <a
                        href="https://unstop.com/hackathons/byteverse-80-hackathon-national-institute-of-technology-nit-patna-1658744"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/20 hover:border-primary text-white font-mono text-xs uppercase tracking-widest font-bold transition-all [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
                    >
                        <span className="material-icons text-sm">how_to_reg</span>
                        Register on Unstop
                    </a>
                    <a
                        href="https://discord.com/invite/2ZfsdkTKh"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/20 hover:border-[#5865F2] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
                    >
                        <span className="material-icons text-sm">forum</span>
                        Discord
                    </a>
                </div>

                {/* Problem Themes Section */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-neon-cyan"></div>
                        <h2 className="text-xl font-bold tracking-[0.2em] uppercase italic text-neon-cyan/80">
                            Theme <span className="text-white">Sectors</span>
                        </h2> 
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-cyan/30 to-transparent"></div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {themes.map((theme, index) => (
                            <div
                                key={index}
                                className="group relative px-6 py-3 bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-[10px] text-neon-cyan opacity-40">{(index + 1).toString().padStart(2, '0')}</span>
                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{theme}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Track Selection Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-primary"></div>
                    <h2 className="text-xl font-bold tracking-[0.2em] uppercase italic text-primary/80">
                        <span className="text-white">Selection</span>
                    </h2>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tracks.map((track) => (
                        <TrackCard key={track.id} track={track} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TrackCard = ({ track }: { track: any }) => {
    return (
        <div
            className="group rounded-xl relative h-[420px] w-full transition-transform duration-300 hover:-translate-y-2"
        >

            {/* 1. The HUD Shape Container */}
            <div className="rounded-xl absolute inset-0 bg-[#121215] border border-white/10 group-hover:border-white/30 transition-colors"></div>

            {/* 2. The Glowing Border (Only appears on hover) */}
            <div className={`absolute rounded-xl inset-0 border-2 transition-opacity duration-300 ${track.color} opacity-0 group-hover:opacity-100`}></div>

            {/* 3. Content Layout */}
            <div className="relative h-full p-8 flex flex-col justify-between z-10">

                {/* Top Row: ID & Animated Icon */}
                <div className="flex justify-between items-start">
                    <div>
                        <div className={`font-mono text-4xl font-bold transition-colors text-white/30 md:text-white/10 md:group-hover:text-white/50`}>
                            {track.id}
                        </div>
                        <div className={`h-1 w-12 mt-2 ${track.accent}`}></div>
                    </div>

                    {/* Animated SVG Circuit (Always visible on mobile) */}
                    <div className={`relative w-24 h-24 transition-opacity opacity-100 md:opacity-50 md:group-hover:opacity-100`}>
                        <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                            {/* Static Path */}
                            <path d={track.path} fill="none" stroke="#333" strokeWidth="4" />
                            {/* Animated Path */}
                            <path
                                d={track.path}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`${track.color.split(' ')[0].replace('border-', 'text-')} stroke-dasharray-1000 stroke-dashoffset-1000 animate-track-draw`}
                            />
                        </svg>
                    </div>
                </div>

                {/* Middle: Text Info */}
                <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tight mb-1 group-hover:text-white transition-colors text-gray-200">
                        {track.title}
                    </h3>
                    <div className="text-xs font-mono text-neon-cyan mb-3 tracking-widest">{track.subtitle}</div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm group-hover:text-gray-400">
                        {track.desc}
                    </p>
                </div>

                {/* Bottom: Telemetry Data */}
                <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 font-mono text-xs">
                    {track.specs.map((spec: any, i: number) => (
                        <div key={i} className="flex justify-between items-center bg-black/30 px-2 py-1 rounded-md">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className={`font-bold ${spec.color}`}>{spec.value}</span>
                        </div>
                    ))}
                </div>

            </div>

            {/* 4. Decorative Corner Elements (The "Bolts") */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 transition-colors rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/10 transition-colors rounded-bl-xl"></div>
        </div>
    );
};