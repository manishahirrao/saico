'use client';

import { motion } from 'framer-motion';
import RisoCard from './riso/RisoCard';
import { risoProducts, otherBrands } from '@/data/products';
import Link from 'next/link';

export default function RisoSection() {
  const mainRisoProducts = risoProducts.filter(
    (p) => p.id === 'cv3230' || p.id === 'sf5330'
  );
  const additionalRiso = risoProducts.filter(
    (p) => p.id === 'wedding-card' || p.id === 'ft1430'
  );

  return (
    <section id="riso" className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      {/* Faint Background Number */}
      <div className="absolute top-8 left-8 font-display font-thin text-[9rem] text-gray-100 select-none pointer-events-none">
        02
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          {/* Eyebrow */}
          <span className="inline-block font-body font-semibold text-[#22C55E] text-[13px] tracking-[0.16em] uppercase mb-4">
            RISO DIGITAL DUPLICATORS — MADE IN JAPAN
          </span>

          {/* Heading */}
          <h2
            className="font-display font-bold text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
          >
            High-Speed Printing at Fraction of Laser Cost
          </h2>

          {/* Subheading */}
          <p className="font-body text-gray-600 text-[1rem] max-w-[700px]">
            Authorised channel partner for Riso, Japan. Digital duplicators deliver 90% lower
            cost per page and 5× faster bulk printing for schools, print shops, and high-volume
            operations.
          </p>
        </div>

        {/* Main Riso Cards (CV3230 & SF5330) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {mainRisoProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <RisoCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Additional Riso Products Strip */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-gray-900 text-[1.5rem] mb-6">
            Specialized Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalRiso.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ borderLeft: '3px solid #22C55E' }}
              >
                <div className="font-mono text-[#22C55E] text-[0.8125rem] tracking-wide mb-2">
                  {product.model}
                </div>
                <h4 className="font-display font-bold text-gray-900 text-[1.1rem] mb-3">
                  {product.fullName}
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 text-[0.875rem]">
                    <span className="text-[#22C55E]">→</span>
                    <span className="font-body">{product.speed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-[0.875rem]">
                    <span className="text-[#22C55E]">→</span>
                    <span className="font-body">{product.paperSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-[0.875rem]">
                    <span className="text-[#22C55E]">→</span>
                    <span className="font-body">{product.bestFor}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="font-display font-bold text-gray-900 text-[1.25rem]">
                    {product.price}
                  </div>
                  <Link
                    href="#contact"
                    className="text-[#22C55E] font-body font-semibold text-[0.875rem] hover:underline"
                  >
                    Get Quote →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Digital Duplicator Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#22C55E]/10 to-[#22C55E]/5 rounded-xl p-8 border border-[#22C55E]/20"
        >
          <h3 className="font-display font-bold text-gray-900 text-[1.3rem] mb-6 text-center">
            Why Choose Digital Duplicators?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '💸', label: '90% lower cost per page' },
              { icon: '⚡', label: '5× faster bulk print' },
              { icon: '♻️', label: 'Low energy consumption' },
              { icon: '🇯🇵', label: 'Made in Japan' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-body font-semibold text-gray-900 text-[0.95rem]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Brands Section */}
        <div className="mt-16">
          <h3 className="font-display font-bold text-gray-900 text-[1.8rem] mb-6">
            Other Brands We Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherBrands.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 hover:border-[#8B5CF6]"
                style={{ borderLeft: '3px solid #8B5CF6' }}
              >
                <h4 className="font-display font-bold text-gray-900 text-[1.1rem] mb-2">
                  {product.model}
                </h4>
                <div className="space-y-1.5 mb-4">
                  <div className="text-gray-600 text-[0.8rem] font-body">
                    {product.speed}
                  </div>
                  <div className="text-gray-600 text-[0.8rem] font-body">
                    {product.colourOutput}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="font-display font-bold text-gray-900 text-[1rem]">
                    {product.price}
                  </div>
                  <Link
                    href="#contact"
                    className="text-[#8B5CF6] font-body font-semibold text-[0.8rem] hover:underline"
                  >
                    Quote →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
