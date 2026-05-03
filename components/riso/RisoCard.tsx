'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Product } from '@/data/products';

interface RisoCardProps {
  product: Product;
}

export default function RisoCard({ product }: RisoCardProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-[14px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#22C55E]"
      style={{ borderLeft: '3px solid #22C55E' }}
    >
      {/* Header with PPM */}
      <div className="bg-gradient-to-r from-[#22C55E]/10 to-[#22C55E]/5 px-6 py-4 border-b border-gray-100">
        <div className="flex items-baseline gap-2">
          <span className="font-display font-extrabold text-[3.5rem] text-[#22C55E] leading-none">
            {product.speed?.includes('PPM') ? product.speed.split(' ')[0] : product.speed}
          </span>
          {product.speed?.includes('PPM') && (
            <span className="font-mono text-[#22C55E] text-[0.875rem] font-medium">
              PPM
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {/* Image Placeholder */}
        <div
          className="w-full h-[200px] rounded-lg flex items-center justify-center text-center"
          style={{
            background: 'rgba(34, 197, 94, 0.07)',
            border: '1.5px dashed rgba(34, 197, 94, 0.2)',
          }}
        >
          <span className="font-body text-[#22C55E]/60 text-[0.875rem] italic px-4">
            [Product Image — {product.model} — Add Later]
          </span>
        </div>

        {/* Model & Name */}
        <div>
          <div className="font-mono text-[#22C55E] text-[0.8125rem] tracking-wide mb-1">
            {product.model}
          </div>
          <h3 className="font-display font-bold text-gray-900 text-[1.15rem]">
            {product.fullName}
          </h3>
        </div>

        {/* Best For Badge */}
        {product.bestFor && (
          <div className="inline-flex items-center px-3 py-1.5 bg-[#22C55E]/10 rounded-full">
            <span className="text-[#22C55E] text-[0.75rem] font-body font-medium">
              Best for: {product.bestFor}
            </span>
          </div>
        )}

        {/* Specs */}
        <div className="space-y-2">
          {product.functions.map((func) => (
            <div key={func} className="flex items-center gap-2 text-gray-700 text-[0.875rem]">
              <span className="text-[#22C55E]">→</span>
              <span className="font-body">{func}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-gray-700 text-[0.875rem]">
            <span className="text-[#22C55E]">→</span>
            <span className="font-body">Paper: {product.paperSize}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-[0.875rem]">
            <span className="text-[#22C55E]">→</span>
            <span className="font-body">{product.colourOutput}</span>
          </div>
        </div>

        {/* Footer - Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="font-display font-bold text-gray-900 text-[1.25rem]">
            {product.price}
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-[#22C55E] text-[#22C55E] font-body font-semibold text-[0.875rem] rounded-lg hover:bg-[#22C55E] hover:text-white transition-all duration-200"
          >
            Get Quote →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
