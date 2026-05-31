"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  animate?: boolean;
}

export default function Logo({ size = 44, animate = true }: LogoProps) {
  // Primary colors used in the layout
  const primaryColor = "#6B8F3C"; // Green
  const accentColor = "#D4A843";  // Gold

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="group cursor-pointer select-none"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Glow Filter */}
        <defs>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer/Primary Gear (Agricultural Green) */}
        <motion.g
          animate={
            animate
              ? { rotate: 360 }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "50px 50px" }}
          whileHover={animate ? { scale: 1.05 } : {}}
        >
          {/* Outer ring */}
          <circle cx="50" cy="50" r="32" stroke={primaryColor} strokeWidth="6" />
          <circle cx="50" cy="50" r="24" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Gear teeth */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <rect
                key={i}
                x="44"
                y="10"
                width="12"
                height="12"
                rx="3"
                fill={primaryColor}
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </motion.g>

        {/* Secondary/Accent Gear Interlocking (Industrial Gold) */}
        <motion.g
          animate={
            animate
              ? { rotate: -360 }
              : {}
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "78px 78px" }}
        >
          {/* Interlocking gear ring */}
          <circle cx="78" cy="78" r="16" stroke={accentColor} strokeWidth="4" />
          
          {/* Mini gear teeth */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 360) / 6;
            return (
              <rect
                key={i}
                x="74"
                y="57"
                width="8"
                height="8"
                rx="2"
                fill={accentColor}
                transform={`rotate(${angle} 78 78)`}
              />
            );
          })}
        </motion.g>

        {/* Center hub with bold 'P' (Prabhat) */}
        <circle cx="50" cy="50" r="16" fill="#0E1422" stroke={primaryColor} strokeWidth="2.5" />
        <text
          x="50"
          y="57"
          fill="#FFFFFF"
          fontSize="20"
          fontWeight="bold"
          fontFamily="'Outfit', sans-serif"
          textAnchor="middle"
          className="group-hover:fill-primary-400 transition-colors duration-300"
        >
          P
        </text>
      </svg>
    </motion.div>
  );
}
