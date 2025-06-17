'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const MouseFollower = () => {
  // Increased stiffness for more responsive movement
  const cursorX = useSpring(0, { damping: 25, stiffness: 400 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 400 });

  const scale = useMotionValue(1);
  const opacity = useSpring(0);
  const color = useMotionValue('hsl(150, 100%, 75%)');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set exact cursor position without any offset
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      opacity.set(1);
    };

    const handleHover = () => {
      const hovered = document.querySelector('button:hover, a:hover, input:hover, .interactive:hover');
      if (hovered) {
        scale.set(1.8);
        color.set('hsl(20, 100%, 75%)');
      } else {
        scale.set(1);
        color.set('hsl(70, 100%, 75%)');
      }
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, scale, opacity, color]);

  return (
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          scale,
          opacity,
          backgroundColor: color,
          width: '23px',
          height: '23px',
          borderRadius: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />
  );
};