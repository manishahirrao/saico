'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';

export default function BusinessListingsSection() {
  const listings = [
    {
      name: 'IndiaMart',
      url: 'https://www.indiamart.com/saicotechservices/?srsltid=AfmBOor6gBUjsajTkWblSX63sdb5ABsSdZuHh42eH9U8hnbaGzj05v51',
      description: 'India\'s largest online B2B marketplace',
      badge: '83% Response Rate',
      color: '#00A699',
    },
    {
      name: 'TradeIndia',
      url: 'https://www.tradeindia.com/saico-tech-services-3213863/',
      description: 'Leading B2B portal connecting buyers & sellers',
      badge: 'Verified Supplier',
      color: '#FF6B35',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-body font-semibold text-km-teal text-[13px] tracking-[0.16em] uppercase mb-4"
          >
            FIND US ON LEADING B2B PLATFORMS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
          >
            Connect With Us Online
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-gray-600 text-[1rem] max-w-[600px] mx-auto"
          >
            Visit our verified profiles on India's top B2B marketplaces for product catalogs, reviews, and instant quotes.
          </motion.p>
        </div>

        {/* Listing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link
                href={listing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-km-teal hover:shadow-2xl transition-all duration-300"
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-body font-semibold text-white"
                    style={{ backgroundColor: listing.color }}
                  >
                    <FaStar className="text-[10px]" />
                    {listing.badge}
                  </span>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-km-teal transition-colors" />
                </div>

                {/* Platform Name */}
                <h3 className="font-display font-bold text-gray-900 text-[1.8rem] mb-3 group-hover:text-km-teal transition-colors">
                  {listing.name}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-600 text-[0.95rem] mb-6 leading-relaxed">
                  {listing.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-km-teal font-body font-semibold text-[0.95rem] group-hover:gap-3 transition-all">
                  Visit Our Profile
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-body text-gray-500 text-[0.9rem]">
            Trusted by businesses across India · Verified profiles · Instant quotes available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
