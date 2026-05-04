'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
      className="group bg-white rounded-[14px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#22C55E]"
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
        {/* Product Image */}
        <div className="w-full h-[240px] rounded-lg relative flex items-center justify-center bg-gradient-to-br from-[#22C55E]/5 to-white overflow-hidden group-hover:from-[#22C55E]/10 transition-all duration-300">
          <Image
            src={product.image!}
            alt={product.fullName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          />
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

        {/* Footer - CTA Button */}
        <div className="flex justify-center pt-4 border-t border-gray-100">
          <Link
            href={`https://wa.me/919826444348?text=Hi, I'm interested in ${product.fullName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-[#22C55E] text-white font-body font-semibold text-[0.875rem] rounded-lg hover:bg-[#16A34A] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Quote →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
