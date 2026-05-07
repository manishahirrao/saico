'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@/data/products';

export default function AnimatedShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const currentProduct = featuredProducts[currentIndex];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'colour':
        return 'bg-[rgba(0,176,202,0.12)] text-[#00B0CA] border-[#00B0CA]';
      case 'volume':
        return 'bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border-[#F59E0B]';
      case 'riso':
        return 'bg-[rgba(16,185,129,0.12)] text-[#10B981] border-[#10B981]';
      default:
        return 'bg-[rgba(100,116,139,0.12)] text-[#64748B] border-[#64748B]';
    }
  };

  return (
    <div className="relative">
      {/* Floating Availability Badge */}
      <div className="absolute -top-4 -right-4 z-10 flex items-center gap-2 bg-[rgba(16,185,129,0.15)] border border-[#10B981] rounded-full px-4 py-2">
        <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
        <span className="font-body font-medium text-[13px] text-[#10B981]">
          10+ Models Available
        </span>
      </div>

      {/* Showcase Card */}
      <div
        className="relative bg-white rounded-[14px] border border-gray-200 overflow-hidden shadow-xl"
        style={{
          animation: 'float 7s ease-in-out infinite',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            {/* Type Tag */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-body font-medium border ${getTagColor(
                  currentProduct.tag
                )}`}
              >
                {currentProduct.colourOutput}
              </span>
            </div>

            {/* Product Image */}
            <div className="w-full h-[280px] mb-4 rounded-lg relative flex items-center justify-center bg-gradient-to-br from-km-teal/5 to-white overflow-hidden">
              <Image
                src={currentProduct.image!}
                alt={currentProduct.fullName}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain p-3 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Model Number */}
            <div className="mb-2">
              <span className="font-mono text-[0.68rem] tracking-wider text-km-teal">
                {currentProduct.model.toUpperCase()}
              </span>
            </div>

            {/* Product Name */}
            <h3 className="font-display font-bold text-[1.02rem] text-gray-900 mb-4">
              {currentProduct.fullName}
            </h3>

            {/* Spec Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {currentProduct.speed && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[13px] font-body rounded-full">
                  ⚡ {currentProduct.speed}
                </span>
              )}
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[13px] font-body rounded-full">
                📄 {currentProduct.paperSize}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[13px] font-body rounded-full">
                🔄 {currentProduct.functions.length}-in-1
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href={`https://wa.me/919826444348?text=Hi, I'm interested in ${currentProduct.fullName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-km-teal text-white font-body font-semibold text-[14px] rounded-lg hover:bg-km-cyan transition-colors duration-200 shadow-md"
              >
                Get Quote →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 pb-4">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              suppressHydrationWarning
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-km-teal w-6'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
