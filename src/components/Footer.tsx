"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brochure", href: "#brochure" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Groundnut Decorticator",
  "Almond Decorticator",
  "Groundnut Thresher",
  "Paddy Thresher",
  "Multi-Crop Thresher",
  "Garlic Separator",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-400 border-t border-white/[0.04]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Prabhat Iron Works"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-base font-display font-bold text-white">
                  Prabhat Iron Works
                </h3>
                <p className="text-[10px] text-primary-400 uppercase tracking-widest">
                  Agri-Industrial Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Manufacturing premium agricultural machinery for Indian farmers since 2012.
              Quality, reliability, and innovation in every machine.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 text-primary-400" />
              <span>
                14, Geeta Nagar, Atkot Road,
                <br />
                Jasdan, Rajkot-360050, Gujarat
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((name) => (
                <li key={name}>
                  <button
                    onClick={() => scrollTo("#products")}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Business Hours
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="text-gray-300 font-medium">Monday – Saturday</p>
                <p>9:00 AM – 7:00 PM</p>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Serving Across
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Gujarat", "Rajasthan", "MP", "Maharashtra", "UP"].map((state) => (
                  <span
                    key={state}
                    className="px-2.5 py-1 text-[10px] bg-white/5 text-gray-400 rounded-md border border-white/[0.06]"
                  >
                    {state}
                  </span>
                ))}
                <span className="px-2.5 py-1 text-[10px] bg-primary/10 text-primary-400 rounded-md border border-primary/20">
                  +10 more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Prabhat Iron Works. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">Made in Jasdan 🇮🇳</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary-400 hover:bg-white/10 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
