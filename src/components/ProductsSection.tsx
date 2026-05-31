"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Zap, Weight, IndianRupee } from "lucide-react";
import Image from "next/image";
import { products, categories, type Product } from "@/data/products";
import ProductModal from "./ProductModal";

/* ── Product Card ── */
function ProductCard({
  product,
  index,
  onSelect,
}: {
  product: Product;
  index: number;
  onSelect: (p: Product) => void;
}) {
  const capacitySpec = product.specifications.find((s) => s.label === "Capacity");
  const powerSpec = product.specifications.find((s) => s.label === "Power Required");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onSelect(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-dark-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-primary/90 text-white rounded-full">
            {product.categoryLabel}
          </span>
        </div>

        {/* Quick view icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Eye size={16} />
        </motion.div>

        {/* Bottom info strip */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-3">
            {capacitySpec && (
              <div className="flex items-center gap-1.5 text-xs text-gray-200">
                <Zap size={12} className="text-accent" />
                {capacitySpec.value}
              </div>
            )}
            {powerSpec && (
              <div className="flex items-center gap-1.5 text-xs text-gray-200">
                <Weight size={12} className="text-primary-400" />
                {powerSpec.value}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-accent font-semibold text-sm">
            <IndianRupee size={14} />
            {product.priceRange.replace("₹", "")}
          </div>
          <span className="text-xs font-medium text-primary-400 group-hover:text-primary-300 uppercase tracking-wider">
            View Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full border border-accent/20">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Machinery <span className="gradient-text">Catalogue</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore our complete range of agricultural processing equipment,
            engineered for maximum efficiency and durability.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onSelect={setSelectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
