import React, { useRef, useEffect } from 'react';

interface F1CarTickerProps {
    speed?: number;
    height?: number;
    transparent?: boolean; // when true, removes edge fade vignettes so bg shows through
}

const F1CarTicker: React.FC<F1CarTickerProps> = ({ speed = 2, height = 64, transparent = false }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize canvas to match container
        const resizeObserver = new ResizeObserver(() => {
            canvas.width = container.clientWidth;
            canvas.height = height;
        });
        resizeObserver.observe(container);
        canvas.width = container.clientWidth;
        canvas.height = height;

        let carX = -120;
        const carY = Math.round(height * 0.55); // vertically centred slightly low

        type Particle = {
            x: number; y: number; vx: number; vy: number;
            size: number; life: number; maxLife: number; alpha: number;
        };
        let particles: Particle[] = [];
        let animationFrameId: number;

        const emitParticle = () => {
            particles.push({
                x: carX - 58,           // exhaust behind rear wing
                y: carY + 8 + (Math.random() - 0.5) * 4,
                vx: -(Math.random() * 1.5 + 0.5),
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 5 + 2,
                life: 0,
                maxLife: Math.random() * 60 + 40,
                alpha: 1,
            });
        };

        const drawCar = (cx: number, cy: number) => {
            ctx.save();
            ctx.translate(cx, cy);

            // Ground shadow ellipse
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.beginPath();
            ctx.ellipse(0, 22, 65, 6, 0, 0, Math.PI * 2);
            ctx.fill();

            // Red chassis glow
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#ff1e00';

            // Main body — aerodynamic wedge shape
            ctx.fillStyle = '#ff1e00';
            ctx.beginPath();
            ctx.moveTo(-58, 5);    // rear wing base
            ctx.lineTo(-18, 5);    // engine cover
            ctx.lineTo(22, 9);     // cockpit
            ctx.lineTo(68, 15);    // nose cone tip
            ctx.lineTo(68, 19);    // nose floor
            ctx.lineTo(-58, 19);   // floor base
            ctx.closePath();
            ctx.fill();

            ctx.shadowBlur = 0;

            // Cockpit glass
            ctx.fillStyle = '#0a0a0c';
            ctx.beginPath();
            ctx.moveTo(-4, 8);
            ctx.lineTo(19, 8);
            ctx.lineTo(30, 13);
            ctx.lineTo(-4, 13);
            ctx.closePath();
            ctx.fill();

            // Rear wing side plate
            ctx.fillStyle = '#0a0a0c';
            ctx.fillRect(-63, -5, 12, 24);

            // Rear wing top blade
            ctx.fillStyle = '#ff1e00';
            ctx.fillRect(-63, -5, 18, 3);

            // Front wing plate
            ctx.fillStyle = '#0a0a0c';
            ctx.fillRect(58, 17, 14, 4);

            // Front wing blade
            ctx.fillStyle = '#ff1e00';
            ctx.fillRect(62, 15, 6, 2);

            // Wheels — dark with subtle white rim highlight
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 2;
            ctx.fillStyle = '#0a0a0c';

            // Rear wheel
            ctx.beginPath();
            ctx.arc(-32, 17, 13, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Front wheel
            ctx.beginPath();
            ctx.arc(44, 17, 11, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // BYTEVERSE branding on body
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.font = 'bold 7px monospace';
            ctx.fillText('BYTEVERSE', -24, 15);

            ctx.restore();
        };

        const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
        const effectiveSpeed = () => isMobile() ? speed * 0.5 : speed;

        const render = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // Move car left to right, loop when offscreen
            carX += effectiveSpeed();
            if (carX > W + 130) carX = -130;

            // Emit 1 exhaust particle per frame
            emitParticle();

            // Draw particles (drawn before car so car is on top)
            particles = particles.filter(p => p.life < p.maxLife);
            for (const p of particles) {
                const a = Math.max(0, 1 - p.life / p.maxLife) * 0.35;
                // Off-white/light grey smoke
                const grey = Math.round(200 + Math.random() * 55);
                ctx.fillStyle = `rgba(${grey}, ${grey}, ${grey}, ${a})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                p.x += p.vx;
                p.y += p.vy;
                p.size += 0.15;
                p.life++;
            }

            // Subtle ground line
            ctx.strokeStyle = 'rgba(255,255,255,0.05)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, carY + 23);
            ctx.lineTo(W, carY + 23);
            ctx.stroke();

            drawCar(carX, carY);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
        };
    }, [speed, height]);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
            {/* Left edge fade */}
            {!transparent && (
                <div
                    className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #121215, transparent)' }}
                />
            )}
            {/* Right edge fade */}
            {!transparent && (
                <div
                    className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #121215, transparent)' }}
                />
            )}
            {/* Scanlines overlay */}
            <div className="absolute inset-0 scanlines opacity-20 mix-blend-overlay pointer-events-none z-10" />
            <canvas
                ref={canvasRef}
                className="block w-full"
                style={{ height: `${height}px`, background: 'transparent' }}
            />
            {/* Red neon ground line at bottom */}
            {!transparent && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-primary opacity-30" />
            )}
        </div>
    );
};

export default F1CarTicker;
