"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BrochureSection from "@/components/BrochureSection";
import BrochureContent from "@/components/BrochureContent";
import ContactSection from "@/components/ContactSection";
import TawkChat from "@/components/TawkChat";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll during initial preloader screen
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {/* Immersive Preloader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BrochureSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Hidden brochure template for PDF generation */}
      <BrochureContent />

      {/* Tawk.to section-aware tracking */}
      <TawkChat />
    </>
  );
}
