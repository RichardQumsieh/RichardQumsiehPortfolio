'use client';

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const letters = "Richard Qumsieh".split("");

const title = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
};

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-primary/10 to-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative">

        {/* Animated Name */}
        <motion.div className="text-primary mb-10 md:mb-16 w-full flex justify-center z-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                variants={title}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-widest inline-block"
                whileHover={{ y: -10, scale: 1.2 }}
                style={{ minWidth: letter === ' ' ? '1rem' : undefined }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        {/* Subtitle */}
        <motion.h1
          className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 md:mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Software Engineer & Problem Solver
        </motion.h1>
        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 md:mb-10 text-center md:text-left border-l-0 md:border-l-4 border-indigo-500 md:pl-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Welcome to my career page. I build robust, scalable, and beautiful web applications using modern technologies.<br className="hidden md:inline" /> Let’s create something amazing together!
        </motion.p>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Button
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 shadow-md rounded-full"
          >
            View My Work
          </Button>
        </motion.div>
        {/* Decorative animated dots */}
        <motion.div
          className="absolute left-4 top-8 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary/20"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-8 bottom-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violet-300/30"
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.8 }}
        />
      </div>
    </header>
  );
};