'use client';

import { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.2 + 0.1
    }));

    const updateParticles = (mouseX: number, mouseY: number) => {
      container.innerHTML = '';
      
      particles.forEach(particle => {
        const element = document.createElement('div');
        element.className = `absolute rounded-full bg-primary/10`;
        
        // Move away from mouse
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 20) {
          particle.x += dx / distance * 5;
          particle.y += dy / distance * 5;
        }
        
        element.style.left = `${particle.x}%`;
        element.style.top = `${particle.y}%`;
        element.style.width = `${particle.size}px`;
        element.style.height = `${particle.size}px`;
        
        container.appendChild(element);
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const mouseX = (clientX / window.innerWidth) * 100;
      const mouseY = (clientY / window.innerHeight) * 100;
      updateParticles(mouseX, mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
    />
  );
};