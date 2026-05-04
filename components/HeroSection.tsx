'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import HeroBackground from './hero/HeroBackground';
import AnimatedShowcase from './hero/AnimatedShowcase';

export default function HeroSection() {
  const trustBadges = [
    'Since 1999',
    '30 Engineers',
    '83% Response',
    'GST Verified',
    'MP-Wide',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] bg-gradient-to-br from-gray-50 to-white flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-gray-900 leading-[1.07]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)' }}
            >
              Bhopal's Authorised
              <br />
              <span className="text-km-teal">Konica Minolta & Riso</span>
              <br />
              Partner
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-gray-600 text-[1.05rem] leading-[1.7] max-w-[580px]"
            >
              A3/A4 multifunction printers, digital duplicators, wide format copiers,
              and projectors — with 30 trained service engineers covering all of
              Madhya Pradesh since 1999.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 h-[48px] px-8 bg-km-teal text-white font-body font-semibold text-[15px] rounded-[10px] hover:bg-km-cyan transition-colors duration-200 shadow-lg shadow-km-teal/20"
              >
                View Products <FaArrowRight />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center h-[48px] px-8 bg-white border-2 border-km-teal text-km-teal font-body font-semibold text-[15px] rounded-[10px] hover:bg-km-teal/5 transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 text-[12px] font-body"
                >
                  <FaCheckCircle className="text-km-teal" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:block"
          >
            <AnimatedShowcase />
          </motion.div>
        </div>

        {/* Mobile Showcase (below text on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="lg:hidden mt-12"
        >
          <AnimatedShowcase />
        </motion.div>
      </div>
    </section>
  );
}
