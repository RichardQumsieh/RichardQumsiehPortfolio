'use client'; // Required for animations

import React, { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { x: 20, y: -20, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

const letters = "React Development".split("");

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 overflow-hidden relative"
    >
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row items-center justify-center">
            {/* Text Content */}
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6"
                variants={item}
              >
                Professional <motion.span 
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                    <motion.div variants={container}>
                    {letters.map((letter, i) => (
                        <motion.span 
                        key={i} 
                        variants={item}
                        className="inline-block"
                        whileHover={{ y: -10, scale: 1.2 }}
                        >
                        {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                    </motion.div>
                </motion.span> Services
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                variants={item}
              >
                I build pixel-perfect, high-performance web applications with React and TypeScript.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={item}
              >
                <Button className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  View Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="relative w-full max-w-md">
                <motion.div 
                  className="absolute -top-6 -left-6 w-full h-full border-4 border-primary rounded-xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.img 
                  src="/assets/My_Services.jpeg" 
                  alt="Developer working" 
                  className="relative rounded-xl shadow-2xl w-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-4 h-4 rounded-full bg-primary"
        animate={{
          x: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};