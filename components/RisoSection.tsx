'use client';

import { motion } from 'framer-motion';
import RisoCard from './riso/RisoCard';
import { risoProducts } from '@/data/products';
import { FaDollarSign, FaBolt, FaRecycle, FaFlag } from 'react-icons/fa';

export default function RisoSection() {
  const mainRisoProducts = risoProducts;

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
            Saicotech Services authorised channel partner for Riso, Japan. Digital duplicators deliver 90% lower
            cost per page and 5× faster bulk printing for schools, print shops, and high-volume
            operations.
          </p>
        </div>

        {/* Main Riso Cards (CV3230 & SF5330) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
              { icon: FaDollarSign, label: '90% lower cost per page' },
              { icon: FaBolt, label: '5× faster bulk print' },
              { icon: FaRecycle, label: 'Low energy consumption' },
              { icon: FaFlag, label: 'Made in Japan' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3 text-[#22C55E] flex justify-center">
                  <item.icon />
                </div>
                <div className="font-body font-semibold text-gray-900 text-[0.95rem]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
