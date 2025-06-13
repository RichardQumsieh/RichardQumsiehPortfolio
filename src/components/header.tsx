'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CodeIcon, LaptopIcon, RocketIcon } from "@radix-ui/react-icons"; // Using Phosphor icons as discussed

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
  return (
    <header className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary/5 overflow-hidden backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative animated dots */}
        <motion.div
          className="absolute left-20 top-18 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary/20"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-25 bottom-20 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violet-300/30"
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.8 }}
        />
      </div>
      
      {/* Curcuit Background */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern 
          id="circuit" 
          width="40" 
          height="40" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M0 20h40M20 0v40" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="1,2"
          />
          <circle cx="20" cy="20" r="1" fill="currentColor" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="30" cy="30" r="1" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Animated Name */}
        <motion.div className="mb-10 md:mb-16 w-full flex justify-center">
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
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider inline-block"
                whileHover={{ 
                  y: -10, 
                  scale: 1.1
                }}
                transition={{ type: 'spring' }}
                style={{ minWidth: letter === ' ' ? '1rem' : undefined }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Subtitle with icon */}
        <motion.div
          className="flex items-center gap-3 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="w-8 h-1 bg-primary rounded-full" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Software Engineer & Problem Solver
          </h1>
          <div className="w-8 h-1 bg-primary rounded-full" />
        </motion.div>

        {/* Description with animated border */}
        <motion.div
          className="relative max-w-2xl mx-auto mb-8 md:mb-12 px-6 py-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.div
            className="absolute inset-0 border-2 border-primary/20 rounded-xl pointer-events-none"
            animate={{
              borderColor: ['rgba(79, 70, 229, 0.2)', 'rgba(79, 70, 229, 0.4)', 'rgba(79, 70, 229, 0.2)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center">
            Welcome to my career page. I build robust, scalable, and beautiful web applications using modern technologies. Let's create something amazing together!
          </p>
        </motion.div>

        {/* CTA Button with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="text-base sm:text-lg px-8 py-6 rounded-full shadow-lg bg-gradient-to-r from-primary to-violet-600 hover:shadow-xl transition-all group"
          >
            <span className="mr-2">View My Work</span>
            <RocketIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </header>
  );
};