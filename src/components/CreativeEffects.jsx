import React, { useEffect, useState, useRef } from 'react';

const CreativeEffects = () => {
    const [flowers, setFlowers] = useState([]);
    const [particles, setParticles] = useState([]);
    const requestRef = useRef();

    // 1. Efecto de "Explosión Floral" al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPoint = window.innerHeight * 0.5; // Mitad de la primera pantalla

            if (scrollY > triggerPoint && scrollY < triggerPoint + 100) {
                // Disparar flores si no se han disparado recientemente
                if (Math.random() > 0.8) {
                    spawnFlower();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const spawnFlower = () => {
        const side = Math.random() > 0.5 ? 'left' : 'right';
        const startX = window.innerWidth / 2;
        const icons = ['🌸', '🌺', '🌻', '🌷', '🌹', '✨'];

        const newFlower = {
            id: Date.now() + Math.random(),
            icon: icons[Math.floor(Math.random() * icons.length)],
            x: startX,
            y: window.innerHeight / 2, // Desde el centro
            vx: (Math.random() * 10 + 5) * (side === 'left' ? -1 : 1), // Velocidad X
            vy: (Math.random() * 10 - 5), // Velocidad Y
            opacity: 1,
            scale: 1
        };

        setFlowers(prev => [...prev.slice(-20), newFlower]); // Max 20 flores
    };

    // 2. Efecto de "Polvo de Hadas" en el cursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (Math.random() > 0.8) { // No en cada frame, para rendimiento
                const newParticle = {
                    id: Date.now() + Math.random(),
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 4 + 1,
                    opacity: 1,
                    color: `hsl(${Math.random() * 60 + 300}, 100%, 75%)` // Tonos rosas/lila
                };
                setParticles(prev => [...prev.slice(-30), newParticle]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Loop de animación para mover elementos
    useEffect(() => {
        const animate = () => {
            // Actualizar flores
            setFlowers(prevFlowers =>
                prevFlowers
                    .map(f => ({
                        ...f,
                        x: f.x + f.vx,
                        y: f.y + f.vy,
                        opacity: f.opacity - 0.02,
                        scale: f.scale + 0.05,
                        vy: f.vy + 0.2 // Gravedad
                    }))
                    .filter(f => f.opacity > 0)
            );

            // Actualizar partículas
            setParticles(prevParticles =>
                prevParticles
                    .map(p => ({
                        ...p,
                        y: p.y + 1, // Caen lento
                        opacity: p.opacity - 0.03
                    }))
                    .filter(p => p.opacity > 0)
            );

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            {/* Flores */}
            {flowers.map(f => (
                <div key={f.id} style={{
                    position: 'absolute',
                    left: f.x,
                    top: f.y,
                    fontSize: '2rem',
                    opacity: f.opacity,
                    transform: `scale(${f.scale}) rotate(${f.x * 2}deg)`,
                    filter: 'blur(1px)'
                }}>
                    {f.icon}
                </div>
            ))}

            {/* Partículas de Hadas */}
            {particles.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: p.x,
                    top: p.y,
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    borderRadius: '50%',
                    opacity: p.opacity,
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}`
                }} />
            ))}
        </div>
    );
};

export default CreativeEffects;
