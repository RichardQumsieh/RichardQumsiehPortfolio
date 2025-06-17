'use client';

import { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const circles = svg.querySelectorAll('circle');
      
      circles.forEach((circle, index) => {
        const delay = index * 0.1;
        const x = clientX * (0.35 + index * 0.2);
        const y = clientY * (0.35 + index * 0.2);
        
        circle.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        circle.style.transition = `transform ${0.3 + delay}s ease-out`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <svg 
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Floating dots */}
      <circle cx="10%" cy="20%" r="3" fill="currentColor" className="text-primary" />
      <circle cx="30%" cy="50%" r="4" fill="currentColor" className="text-violet-500" />
      <circle cx="70%" cy="30%" r="2" fill="currentColor" className="text-primary" />
      <circle cx="85%" cy="70%" r="3" fill="currentColor" className="text-violet-500" />
      <circle cx="50%" cy="80%" r="4" fill="currentColor" className="text-primary" />
    </svg>
  );
};