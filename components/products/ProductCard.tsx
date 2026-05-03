'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getBorderColor = (tag: string) => {
    switch (tag) {
      case 'entry':
        return '#3D7A85';
      case 'mono':
        return '#6BA8B3';
      case 'colour':
        return '#00B5CC';
      case 'volume':
        return '#F59E0B';
      case 'riso':
        return '#22C55E';
      case 'other':
        return '#8B5CF6';
      default:
        return '#6BA8B3';
    }
  };

  const getTagColor = (tag: string) => {
    const borderColor = getBorderColor(tag);
    return {
      bg: `${borderColor}1F`, // 12% opacity
      text: borderColor,
      border: borderColor,
    };
  };

  const tagColors = getTagColor(product.tag);
  const borderColor = getBorderColor(product.tag);

  const getTagLabel = (tag: string) => {
    switch (tag) {
      case 'entry':
        return 'Entry Level';
      case 'mono':
        return 'Mono B&W';
      case 'colour':
        return 'Colour MFP';
      case 'volume':
        return 'High Volume';
      case 'riso':
        return 'Duplicator';
      case 'other':
        return 'Other Brand';
      default:
        return tag;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-white rounded-[14px] border border-gray-200 overflow-hidden hover:border-km-teal/50 hover:shadow-xl transition-all duration-200"
      style={{
        borderLeft: `3px solid ${borderColor}`,
      }}
    >
      {/* Image Placeholder */}
      <div className="w-full h-[200px] flex items-center justify-center text-center bg-gray-50 border-b border-gray-200">
        <span className="font-body italic text-[13px] text-gray-400 px-4">
          [Product Image — {product.model} — Add Later]
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Type Tag */}
        <div>
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-body font-medium border"
            style={{
              backgroundColor: tagColors.bg,
              color: tagColors.text,
              borderColor: tagColors.border,
            }}
          >
            ● {getTagLabel(product.tag)}
          </span>
        </div>

        {/* Model Number */}
        <div>
          <span className="font-mono text-[0.68rem] tracking-wider text-km-teal">
            {product.model.toUpperCase()}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-display font-bold text-[1.02rem] text-gray-900 leading-tight">
          {product.fullName}
        </h3>

        {/* Spec Chips */}
        <div className="flex flex-wrap gap-2">
          {product.speed && (
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[12px] font-body rounded-md">
              ⚡ {product.speed}
            </span>
          )}
          <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[12px] font-body rounded-md">
            📄 {product.paperSize}
          </span>
          <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-[12px] font-body rounded-md">
            🔄 {product.functions.length}-in-1
          </span>
        </div>

        {/* Best For */}
        {product.bestFor && (
          <p className="font-body italic text-[13px] text-gray-600">
            Best for: {product.bestFor}
          </p>
        )}

        {/* Divider */}
        <div className="border-t border-gray-200 pt-3" />

        {/* Footer: Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-[1.15rem] text-gray-900">
            {product.price}
          </span>
          <Link
            href={`https://wa.me/919826444348?text=Hi, I'm interested in ${product.fullName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border-2 border-km-teal text-km-teal text-[13px] font-body font-semibold rounded-lg hover:bg-km-teal hover:text-white transition-colors duration-200"
          >
            Get Quote →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
