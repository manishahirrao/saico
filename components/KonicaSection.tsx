'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ProductCard from './products/ProductCard';
import { konicaProducts, type Tag } from '@/data/products';

export default function KonicaSection() {
  const [activeFilter, setActiveFilter] = useState<Tag | 'all'>('all');

  const filters = [
    { id: 'all' as const, label: 'All' },
    { id: 'entry' as const, label: 'Entry Level' },
    { id: 'mono' as const, label: 'Mono B&W' },
    { id: 'colour' as const, label: 'Colour MFP' },
    { id: 'volume' as const, label: 'High Volume' },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? konicaProducts
      : konicaProducts.filter((p) => p.tag === activeFilter);

  return (
    <section id="products" className="relative bg-white py-20 overflow-hidden">
      {/* Faint Background Number */}
      <div className="absolute top-8 left-8 font-display font-thin text-[9rem] text-gray-100 select-none pointer-events-none">
        01
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          {/* Eyebrow with Logo */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-[28px] h-[28px]">
              <Image
                src="/logo.jpg"
                alt="Konica Minolta"
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
            <span className="font-body font-semibold text-km-teal text-[13px] tracking-[0.16em] uppercase">
              KONICA MINOLTA
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-display font-bold text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
          >
            Multifunction Printers for Every Scale
          </h2>

          {/* Subheading */}
          <p className="font-body text-gray-600 text-[1rem] max-w-[700px]">
            Authorised channel partner for Konica Minolta, Japan. Genuine parts, expert
            service, and comprehensive AMC coverage across all of Madhya Pradesh.
          </p>

          {/* Badge */}
          <div className="mt-4">
            <span className="inline-flex items-center px-4 py-2 bg-km-teal/10 border border-km-teal/30 rounded-full text-km-teal text-[12px] font-body font-medium">
              Authorised Channel Partner — Konica Minolta, Japan
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-lg font-body font-medium text-[14px] transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-km-teal text-white shadow-lg shadow-km-teal/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-gray-600 text-[1rem]">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
