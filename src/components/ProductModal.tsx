"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Check, MessageSquare, IndianRupee, Clock, Package } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[70] flex items-start justify-end"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Side Sheet */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-full max-w-2xl bg-dark-200 border-l border-white/[0.06] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Product Image */}
        <div className="relative aspect-[16/10] bg-dark-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-primary/90 text-white rounded-full">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title & Price */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
              {product.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-lg font-semibold text-accent">
                <IndianRupee size={18} />
                {product.priceRange.replace("₹", "")}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Package size={14} />
                MOQ: {product.minOrderQty}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Clock size={14} />
                {product.deliveryTime}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Description
            </h3>
            <p className="text-gray-400 leading-relaxed">{product.description}</p>
          </div>

          {/* Specifications Table */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <div className="rounded-xl overflow-hidden border border-white/[0.06]">
              {product.specifications.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center px-5 py-3 text-sm ${
                    i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  }`}
                >
                  <span className="text-gray-400">{spec.label}</span>
                  <span className="text-white font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Key Features
            </h3>
            <div className="grid gap-2.5">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary-400 flex items-center justify-center mt-0.5">
                    <Check size={12} />
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/[0.06]">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare size={16} />
              Request Quote for {product.name}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
