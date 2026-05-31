"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

/* ── Floating decorative gear shapes ── */
function FloatingShapes() {
  const shapes = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 40, x: "85%", y: "15%", delay: 2, duration: 10 },
    { size: 80, x: "75%", y: "70%", delay: 1, duration: 7 },
    { size: 30, x: "20%", y: "75%", delay: 3, duration: 9 },
    { size: 50, x: "50%", y: "85%", delay: 1.5, duration: 11 },
    { size: 25, x: "90%", y: "45%", delay: 0.5, duration: 8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10"
          style={{ width: s.size, height: s.size, left: s.x, top: s.y }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner gear tooth pattern */}
          <div className="absolute inset-1 rounded-full border border-primary/15" />
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
}

/* ── Stagger container & child variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/images/hero-bg.png"
          alt="Industrial machinery workshop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/40" />
      </motion.div>

      <FloatingShapes />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 section-container w-full pt-24 pb-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={childVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/15 text-primary-400 border border-primary/20">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              12+ Years of Excellence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            <span className="text-white">Powering </span>
            <span className="gradient-text">Agriculture</span>
            <br />
            <span className="text-white">with </span>
            <span className="text-accent">Precision</span>
            <span className="text-white"> Machinery</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed"
          >
            Trusted manufacturer of high-performance Decorticators, Threshers, and Separators —
            engineered for Indian farms and built to last.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#products")}
              className="btn-primary flex items-center gap-2 text-base"
            >
              Explore Machinery
              <ArrowDown size={18} className="animate-bounce" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#brochure")}
              className="btn-accent flex items-center gap-2 text-base"
            >
              <Download size={18} />
              Download Brochure
            </motion.button>
          </motion.div>

          {/* Stats preview strip */}
          <motion.div
            variants={childVariants}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            {[
              { value: "12+", label: "Years Experience" },
              { value: "6", label: "Product Lines" },
              { value: "500+", label: "Happy Clients" },
              { value: "15+", label: "States Covered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
