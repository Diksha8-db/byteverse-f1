import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
    { id: 1, src: "/img1.jpg" },
    { id: 2, src: "/img2.jpg" },
    { id: 3, src: "/img3.jpg" },
    { id: 4, src: "/img4.jpg" },
    { id: 5, src: "/img5.jpg" },
    { id: 6, src: "/img6.jpg" },
    { id: 7, src: "/img7.jpg" },
    { id: 8, src: "/img8.jpg" },
    { id: 9, src: "/img9.jpg" },
    { id: 10, src: "/img10.jpg" },
    { id: 11, src: "/img11.jpg" },
    { id: 12, src: "/img12.jpg" },
];

export const Gallery = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Display all images (no categories)
    const filteredImages = galleryImages;

    // For desktop layout we'll make exactly 3 rows (for 12 images)
    // and make the first image of each row span two columns.
    // This will be achieved via index-based responsive classes below.

    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const setSpan = (id: number) => {
        const container = containerRef.current;
        const item = itemRefs.current[id];
        if (!container || !item) return;
        const img = item.querySelector('img') as HTMLImageElement | null;
        if (!img) return;

        const computed = window.getComputedStyle(container);
        const rowHeight = parseFloat(computed.getPropertyValue('grid-auto-rows')) || 8;
        const rowGap = parseFloat(computed.getPropertyValue('gap')) || 24;
        const height = img.getBoundingClientRect().height;
        const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${span}`;
    };

    useEffect(() => {
        const handleResize = () => {
            Object.keys(itemRefs.current).forEach(k => setSpan(Number(k)));
        };
        window.addEventListener('resize', handleResize);
        // initial pass in case images already loaded
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="min-h-screen bg-asphalt text-white py-24 font-display overflow-hidden relative">

            {/* Background Texture */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <main className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 pb-8 border-b border-white/10 text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="material-icons text-f1-red text-sm animate-pulse">videocam</span>
                            <span className="font-mono text-xs text-f1-red uppercase tracking-widest">Media Centre</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
                            2k24 <span className="text-stroke-white text-transparent">Highlights</span>
                        </h1>
                    </div>

                    {/* No categories — displaying all images */}
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px]" ref={containerRef}>
                    <AnimatePresence>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                ref={el => { itemRefs.current[image.id] = el; }}
                                layoutId={image.id.toString()}
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedId(image.id as any)}
                                className={`group relative cursor-pointer p-[1px] transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,30,0,0.4)] bg-white/10 hover:bg-primary [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] ${index % 3 === 0 ? 'md:col-span-2' : ''} ${index % 4 === 0 ? 'lg:col-span-2' : ''}`}
                            >
                                <div className="w-full h-full bg-carbon [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)] relative overflow-hidden flex flex-col">

                                    {/* Image with optimizations */}
                                    <img
                                        src={image.src}
                                        onLoad={() => setSpan(image.id)}
                                        alt={`Gallery ${image.id}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
                                    />

                                    {/* Telemetry Overlays */}
                                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

                                    {/* Vignette / Scrim */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none z-0"></div>
                                    <div className="absolute inset-0 scanlines opacity-20 pointer-events-none mix-blend-overlay z-10"></div>

                                    {/* Lower Left Text */}
                                    <div className="absolute bottom-4 left-5 flex flex-col z-20">
                                        <span className="font-mono text-[10px] tracking-[0.4em] text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            FRAME // {image.id.toString().padStart(3, '0')}
                                        </span>
                                    </div>

                                    {/* Centered Reticle Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 border border-primary/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] z-20">
                                        <span className="material-icons text-primary">fit_screen</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Lightbox Modal (Portaled to escape stacking context) */}
                {createPortal(
                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-12 cursor-pointer overflow-hidden"
                            >
                                <motion.div
                                    layoutId={selectedId.toString()}
                                    className="relative max-w-6xl w-full h-[90vh] bg-primary/20 p-[1px] [clip-path:polygon(40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%,0_40px)] shadow-[0_0_80px_rgba(255,30,0,0.5)] flex flex-col overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="relative w-full h-full bg-carbon [clip-path:polygon(40px_0,100%_0,100%_calc(100%-40px),calc(100%-40px)_100%,0_100%,0_40px)] flex flex-col overflow-hidden">
                                        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none z-20"></div>

                                        {/* Telemetry Header */}
                                        <div className="flex justify-between items-center px-6 md:px-8 py-4 bg-black/60 border-b border-primary/30 z-30 backdrop-blur-md shrink-0">
                                            <div className="font-mono text-primary text-xs tracking-[0.4em] uppercase flex items-center gap-3">
                                                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-ping"></span>
                                                LIVE FEED // FRAME {selectedId.toString().padStart(3, '0')}
                                            </div>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="w-10 h-10 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-gray-400 hover:text-white transition-all [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] flex items-center justify-center group"
                                            >
                                                <span className="material-icons text-sm group-hover:scale-125 transition-transform">close</span>
                                            </button>
                                        </div>

                                        {/* Image Display */}
                                        <div className="relative w-full h-0 flex-grow flex items-center justify-center bg-black p-4 md:p-8 z-10 overflow-hidden">
                                            {(() => {
                                                const img = galleryImages.find(i => i.id === selectedId);
                                                if (!img) return null;
                                                return (
                                                    <img
                                                        src={img.src}
                                                        alt={`Gallery Focus ${img.id}`}
                                                        loading="eager"
                                                        decoding="sync"
                                                        className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                                    />
                                                );
                                            })()}
                                        </div>

                                        {/* Telemetry Footer */}
                                        <div className="flex justify-between items-center px-6 md:px-8 py-3 bg-black/60 border-t border-primary/30 z-30 backdrop-blur-md shrink-0">
                                            <div className="font-mono text-gray-500 text-[10px] tracking-widest uppercase">
                                                ENCRYPTION: AES-256
                                            </div>
                                            <div className="font-mono text-gray-500 text-[10px] tracking-widest uppercase group flex gap-4">
                                                <span>LAT: 45.3992</span>
                                                <span>LON: -1.2185</span>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </main>
        </section>
    );
};
