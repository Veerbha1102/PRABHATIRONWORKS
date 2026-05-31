"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Cog, Users, MapPin, Leaf, Shield, Lightbulb } from "lucide-react";

/* ── Animated Counter Hook ── */
function useCounter(target: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration, startCounting]);

  return count;
}

/* ── Stat Card ── */
function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
  inView,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  inView: boolean;
}) {
  const count = useCounter(value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 md:p-8 text-center group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary-400 mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon size={28} />
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-1">
        {count}
        <span className="text-primary-400">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

/* ── Company Value Card ── */
function ValueCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon size={24} />
        </div>
        <div>
          <h4 className="text-lg font-display font-semibold text-white mb-2">{title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, value: 12, suffix: "+", label: "Years Experience" },
    { icon: Cog, value: 6, suffix: "", label: "Product Lines" },
    { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
    { icon: MapPin, value: 15, suffix: "+", label: "States Covered" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Unmatched Quality",
      description:
        "Every machine undergoes rigorous quality checks and load testing before dispatch. We use premium-grade MS and SS materials for maximum durability.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description:
        "We constantly refine our designs based on farmer feedback, integrating modern engineering techniques with practical field requirements.",
    },
    {
      icon: Leaf,
      title: "Farmer-First Approach",
      description:
        "Born from the agricultural heartland of Gujarat, we understand the real needs of Indian farmers and design machines that deliver results season after season.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full border border-accent/20">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Built on <span className="gradient-text">Trust & Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Established in Jasdan, Gujarat, Prabhat Iron Works has been manufacturing
            world-class agricultural machinery for over 12 years. We combine traditional
            craftsmanship with modern engineering to deliver equipment that Indian farmers trust.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} inView={statsInView} />
          ))}
        </div>

        {/* Company Story + Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                What started as a small workshop in Geeta Nagar has grown into one of Saurashtra&apos;s
                most trusted names in agricultural machinery. Founded with a vision to empower
                Indian farmers with reliable, efficient equipment, Prabhat Iron Works has served
                over 500 clients across 15+ states.
              </p>
              <p>
                Our product range — from Groundnut Decorticators to Multi-Crop Threshers — is
                designed with deep understanding of Indian farming conditions. Every machine is
                built for the demanding realities of Indian agriculture: intense heat, continuous
                operation, and diverse crop varieties.
              </p>
              <p>
                Located at the heart of India&apos;s groundnut belt, we have first-hand knowledge of
                what our farmers need. This proximity to our customers drives our commitment to
                quality and innovation.
              </p>
            </div>

            {/* Location badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl glass-card">
              <MapPin size={20} className="text-accent" />
              <div>
                <p className="text-sm font-medium text-white">Jasdan, Rajkot</p>
                <p className="text-xs text-gray-400">Gujarat, India</p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <div className="space-y-4">
            {values.map((value, i) => (
              <ValueCard key={value.title} {...value} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
