import React, { useEffect, useRef } from 'react';

const StarField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const isMobile = window.innerWidth < 768;
        const numStars = isMobile ? 50 : 120;
        const numGlowingStars = 15;

        // Static stars
        const stars = Array.from({ length: numStars }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 0.5 + Math.random() * 1.5,
            opacity: 0.1 + Math.random() * 0.5,
        }));

        // Twinkling glowing stars
        const glowingStars = Array.from({ length: numGlowingStars }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 2 + Math.random() * 2,
            baseOpacity: 0.3,
            currentOpacity: 0.3,
            targetOpacity: 0.3 + Math.random() * 0.7,
            speed: 0.005 + Math.random() * 0.01,
            direction: 1
        }));

        // Shooting stars
        const shootingStars = [];
        let lastShootingStarTime = 0;

        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid manually instead of CSS for better performance if needed, 
            // but we handle grid with CSS below the canvas to keep it simple.

            // Draw static stars
            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw glowing stars
            glowingStars.forEach(star => {
                star.currentOpacity += star.speed * star.direction;
                if (star.currentOpacity >= star.targetOpacity) {
                    star.direction = -1;
                } else if (star.currentOpacity <= star.baseOpacity) {
                    star.direction = 1;
                    star.targetOpacity = 0.3 + Math.random() * 0.7; // new target
                    star.speed = 0.005 + Math.random() * 0.01; // new speed
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${star.currentOpacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(123, 47, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0; // reset
            });

            // Spawn shooting stars
            if (time - lastShootingStarTime > (7000 + Math.random() * 5000)) {
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * (canvas.height / 2), // top half
                    length: 150,
                    speed: 15 + Math.random() * 10,
                    opacity: 0,
                    state: 'fadingIn', // fadingIn, visible, fadingOut
                });
                lastShootingStarTime = time;
            }

            // Draw & update shooting stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const ss = shootingStars[i];

                if (ss.state === 'fadingIn') {
                    ss.opacity += 0.1;
                    if (ss.opacity >= 1) ss.state = 'visible';
                } else if (ss.state === 'visible') {
                    ss.opacity -= 0.02; // slow fade out
                    if (ss.opacity <= 0) {
                        shootingStars.splice(i, 1);
                        continue;
                    }
                }

                const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.length, ss.y - ss.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
                gradient.addColorStop(1, 'rgba(123, 47, 255, 0)');

                ctx.beginPath();
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(ss.x - ss.length, ss.y - ss.length);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ss.x += ss.speed;
                ss.y += ss.speed;
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0,
                    pointerEvents: 'none',
                    backgroundImage: `
            linear-gradient(rgba(123,47,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123,47,255,0.04) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* CSS Orbs */}
            <div
                style={{
                    position: 'fixed',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(123,47,255,0.12) 0%, transparent 65%)',
                    top: '-300px',
                    left: '-300px',
                    zIndex: 0,
                    pointerEvents: 'none',
                    animation: 'orbFloat1 15s ease-in-out infinite alternate',
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at center, rgba(0,194,255,0.09) 0%, transparent 65%)',
                    bottom: '-200px',
                    right: '-200px',
                    zIndex: 0,
                    pointerEvents: 'none',
                    animation: 'orbFloat2 18s ease-in-out infinite alternate',
                }}
            />

            <style>{`
        @keyframes orbFloat1 {
          from { transform: translate(0, 0) }
          to { transform: translate(60px, 40px) }
        }
        @keyframes orbFloat2 {
          from { transform: translate(0, 0) }
          to { transform: translate(-50px, -30px) }
        }
      `}</style>

            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />
        </>
    );
};

export default StarField;
