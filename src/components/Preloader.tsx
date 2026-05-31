"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation
    const duration = 2200; // 2.2 seconds loading
    const intervalTime = 25;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setIsDone(true);
        // Delay a tiny bit for user to see 100% before starting the slide up exit
        setTimeout(() => {
          onComplete();
        }, 500);
      }
      setProgress(Math.floor(currentProgress));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Staggered letters variant
  const titleText = "PRABHAT IRON WORKS";
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative backing grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Top and Bottom Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Main Container */}
      <div className="flex flex-col items-center relative z-10 text-center px-6">
        
        {/* Glowing animated logo gear */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          {/* Outer glow aura */}
          <div className="absolute -inset-6 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          <Logo size={100} animate={true} />
        </motion.div>

        {/* Brand Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center mb-2"
        >
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-wider ${
                char === " " ? "mr-4" : "text-white"
              }`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xs sm:text-sm text-primary-400 font-medium uppercase tracking-[0.25em] mb-12"
        >
          Agri-Industrial Excellence
        </motion.p>

        {/* Loading Progress Section */}
        <div className="w-56 sm:w-64 relative">
          
          {/* Progress bar outer container */}
          <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden relative">
            
            {/* Glowing progress line filled in */}
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>

          {/* Percentage display */}
          <div className="flex justify-between items-center mt-3 text-[10px] sm:text-xs font-semibold tracking-widest text-gray-400">
            <span className="uppercase text-white/40">Powering Machinery</span>
            <span className="font-mono text-primary-400">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Floating details in corner */}
      <div className="absolute bottom-8 left-8 text-[9px] text-white/20 font-bold uppercase tracking-widest pointer-events-none hidden sm:block">
        PRABHAT IRON WORKS • EST. 2012
      </div>
      <div className="absolute bottom-8 right-8 text-[9px] text-white/20 font-bold uppercase tracking-widest pointer-events-none hidden sm:block">
        JASDAN • RAJKOT • GUJARAT
      </div>
    </motion.div>
  );
}
