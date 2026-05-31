"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Loader2 } from "lucide-react";

export default function BrochureSection() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const generatePDF = useCallback(async () => {
    setIsGenerating(true);
    try {
      // Dynamically import html2pdf.js to avoid SSR issues
      const html2pdf = (await import("html2pdf.js")).default;

      const brochureEl = document.getElementById("brochure-content");
      if (!brochureEl) {
        console.error("Brochure content element not found");
        return;
      }

      // Make visible for rendering
      brochureEl.style.display = "block";
      brochureEl.style.position = "absolute";
      brochureEl.style.left = "-9999px";
      brochureEl.style.top = "0";

      // Wait for browser repaint/reflow and image loading
      await new Promise((resolve) => setTimeout(resolve, 350));

      const opt = {
        margin: 0,
        filename: "Prabhat_Iron_Works_Brochure.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          letterRendering: true,
          logging: false,
          backgroundColor: "#FFFFFF" 
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
        pagebreak: { mode: ["css", "legacy"] as string[] },
      };

      await html2pdf().set(opt).from(brochureEl).save();

      brochureEl.style.display = "none";
      brochureEl.style.position = "";
      brochureEl.style.left = "";
      brochureEl.style.top = "";

      setGenerated(true);
      setTimeout(() => setGenerated(false), 3000);
    } catch (error) {
      console.error("PDF generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return (
    <section id="brochure" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 3D Floating Brochure Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              {/* Main brochure card */}
              <motion.div
                whileHover={{ rotateY: -5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Brochure face */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-50 via-dark-200 to-dark-400 border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                  {/* Top accent */}
                  <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-6" />

                  <div>
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <FileText size={32} className="text-primary-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      Product Catalogue
                    </h3>
                    <p className="text-sm text-gray-400">
                      Prabhat Iron Works
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 bg-white/10 rounded-full w-full" />
                    <div className="h-2 bg-white/10 rounded-full w-3/4" />
                    <div className="h-2 bg-white/10 rounded-full w-1/2" />
                  </div>

                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                    2024 Edition • Complete Specs
                  </div>
                </div>

                {/* Gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
              </motion.div>

              {/* Shadow card behind */}
              <div className="absolute -bottom-3 left-3 right-3 h-full rounded-2xl bg-dark-300/50 -z-10 blur-sm" />
              <div className="absolute -bottom-6 left-6 right-6 h-full rounded-2xl bg-dark-400/30 -z-20 blur-md" />
            </motion.div>
          </motion.div>

          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full border border-accent/20">
              Free Download
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Get Our Complete{" "}
              <span className="gradient-text">Product Brochure</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Download our comprehensive product catalogue featuring detailed
              specifications, pricing, and technical data for all our agricultural
              machinery. Perfect for comparing models and making informed decisions.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Complete specifications for all 6 product lines",
                "Pricing guide with current market rates",
                "Technical drawings and dimensions",
                "Company profile and quality certifications",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary-400 flex items-center justify-center mt-0.5 text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={generatePDF}
              disabled={isGenerating}
              className={`btn-primary flex items-center gap-3 text-base ${
                isGenerating ? "opacity-70 cursor-wait" : ""
              } ${generated ? "!bg-green-600" : ""}`}
            >
              {isGenerating ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Generating PDF...
                </>
              ) : generated ? (
                <>
                  <Download size={20} />
                  Downloaded!
                </>
              ) : (
                <>
                  <Download size={20} />
                  Download Brochure (PDF)
                </>
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
