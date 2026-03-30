import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const organizers = [
  {
    name: "HackSlash",
    description:
      "Hackslash Developer’s Club NIT Patna is a vibrant community of developers, designers, and innovators dedicated to fostering a culture of collaboration and technological excellence. The club encourages students to explore emerging technologies, build impactful projects, and contribute to real-world problem solving through hackathons, workshops, and open innovation initiatives.",
    image: "/Hackslash.png",
    instagram: "https://www.instagram.com/hackslash.nitp",
    linkedin: "https://www.linkedin.com/company/hackslash/",
  },
  {
    name: "GDGOC",
    description:
      "Google Developer Groups On Campus (GDGOC) NIT Patna is a student-driven developer community that empowers students to learn, build, and innovate using modern technologies. Through technical sessions, collaborative projects, and mentorship programs, GDGOC helps students strengthen their skills while creating impactful solutions with Google technologies.",
    image: "/GDGoc_logo.png",
    instagram: "https://www.instagram.com/gdgocnitp",
    linkedin: "https://www.linkedin.com/company/gdgocnitp/",
  },
];

export default function Organizers() {
  return (
    <section className="relative z-20 py-24 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-primary tracking-widest mb-2">POWER UNIT // COMMUNITIES</div>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase">Organizing Communities</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Meet the communities that power ByteVerse and bring innovation,
            collaboration, and technology leadership to NIT Patna.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 pt-10">

        {organizers.map((org, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative w-full h-[450px]"
          >
            {/* Aerodynamic Flaps / Winglets (External Add-ons) */}
            <div className="absolute -top-4 right-12 w-32 h-8 bg-primary/10 skew-x-[45deg] border-t-2 border-r-2 border-primary/50 group-hover:bg-primary/40 group-hover:shadow-[0_0_20px_rgba(255,30,0,0.5)] transition-all duration-300 z-0"></div>
            <div className="absolute -bottom-4 left-12 w-32 h-8 bg-primary/10 skew-x-[45deg] border-b-2 border-l-2 border-primary/50 group-hover:bg-primary/40 group-hover:shadow-[0_0_20px_rgba(255,30,0,0.5)] transition-all duration-300 z-0"></div>

            {/* Glowing Backdrop for full shape */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 blur-2xl transition-all duration-500 rounded-3xl pointer-events-none z-0"></div>

            {/* The Outer Clipped Border (Creates the 1px glowing edge path) */}
            <div className="absolute inset-0 bg-white/20 group-hover:bg-primary transition-colors duration-500 [clip-path:polygon(40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%,0_40px)] z-10 shadow-2xl"></div>

            {/* The Inner Content Container (1px gap for border) */}
            <div className="absolute inset-[1px] bg-carbon [clip-path:polygon(40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%,0_40px)] z-20 flex flex-col pt-10 pb-8 px-8 md:px-10 overflow-hidden">

              {/* Visual Texture overlays */}
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/80 pointer-events-none"></div>

              {/* Internal Carbon Weave / Vents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header Area: Logo + Name */}
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-black/60 rounded-xl p-2 border border-white/10 backdrop-blur-md group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(255,30,0,0.3)] transition-all duration-500 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={org.image}
                        alt={org.name}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Sector // {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black italic uppercase group-hover:text-white transition-colors tracking-tighter text-gray-200">
                      {org.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-[15px] font-light flex-grow mt-2 relative">
                  {org.description}
                </p>

                {/* Footer / Social Icons */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/5 relative">
                  <div className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase flex-grow">
                    Telemetry Link
                  </div>
                  <a
                    href={org.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-primary text-gray-400 hover:text-white transition-all border border-white/10 hover:border-primary [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] relative z-30"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href={org.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-primary text-gray-400 hover:text-white transition-all border border-white/10 hover:border-primary [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] relative z-30"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}