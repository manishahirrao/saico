'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBullseye, FaShieldAlt, FaTools, FaFileContract, FaProjectDiagram, FaRuler, FaCreditCard, FaUniversity, FaFileInvoice, FaTruck, FaPlane, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'Sales & Demos',
      icon: FaBullseye,
      color: '#00B0CA',
      bullets: [
        'Onsite product demonstrations',
        'Coverage across Madhya Pradesh',
        'Education & corporate solutions',
      ],
    },
    {
      title: 'Reliable Service Support',
      icon: FaShieldAlt,
      color: '#10B981',
      bullets: [
        '30+ expert engineers',
        '24/7 issue resolution',
        'Priority support access',
        'Multi-channel support (desk, call, video, onsite)',
      ],
    },
    {
      title: 'Consumables & Maintenance',
      icon: FaTools,
      color: '#F59E0B',
      bullets: [
        'Timely replacements',
        'Printer repair & spares',
        'Buyback option',
        'Coverage across Madhya Pradesh',
      ],
    },
    {
      title: 'Flexible Contracts',
      icon: FaFileContract,
      color: '#8B5CF6',
      bullets: [
        'AMC & TG Maintenance Contracts',
        'Rental options for education & industry',
        'Preventive maintenance schedules',
      ],
    },
  ];

  return (
    <section id="services" className="relative bg-white py-20 overflow-hidden">
      {/* Faint Background Number */}
      <div className="absolute top-8 left-8 font-display font-thin text-[9rem] text-gray-100 select-none pointer-events-none">
        03
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          {/* Eyebrow */}
          <span className="inline-block font-body font-semibold text-km-teal text-[13px] tracking-[0.16em] uppercase mb-4">
            SERVICES
          </span>

          {/* Heading */}
          <h2
            className="font-display font-bold text-orange-500 mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
          >
            End-to-End Support Since 1999
          </h2>

          {/* Subheading */}
          <p className="font-body text-gray-600 text-[1rem] max-w-[700px] mx-auto">
            <strong>Saicotech Services</strong> — Comprehensive solutions for Madhya Pradesh. From sales to AMC, repairs to rentals, we provide end-to-end support with genuine parts and trained engineers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[14px] border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ borderLeft: `3px solid ${service.color}` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${service.color}15` }}
              >
                <service.icon style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-gray-900 text-[1.15rem] mb-4">
                {service.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-[0.875rem]">
                    <FaCheckCircle className="flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                    <span className="font-body">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Team Callout Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-km-teal/10 to-km-cyan/5 rounded-xl p-8 border border-km-teal/20"
        >
          <div className="text-center mb-6">
            <h3 className="font-display font-bold text-gray-900 text-[1.5rem] mb-2">
              Our Service Team
            </h3>
            <p className="font-body text-gray-600 text-[0.95rem]">
              Dedicated professionals ensuring your equipment runs smoothly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { count: '3', label: 'Sales Officers' },
              { count: '30', label: 'Service Engineers' },
              { count: '2', label: 'Customer Care' },
              { count: '1', label: 'Store In-charge' },
              { count: '1', label: 'Admin Officer' },
              { count: 'MP', label: 'Coverage Area' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center bg-white rounded-lg p-4 border border-km-teal/10"
              >
                <div className="font-display font-extrabold text-km-teal text-[2rem] leading-none mb-2">
                  {item.count}
                </div>
                <div className="font-body text-gray-700 text-[0.8rem]">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="font-body text-gray-700 text-[0.9rem] mb-4">
              <strong>Quality Policy:</strong> "We take special care of equipment by regular
              preventive maintenance and replacement of spares & consumables on time."
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-[0.85rem] text-gray-600">
              <span className="flex items-center gap-1"><FaCreditCard className="text-km-teal" /> Cash</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaCreditCard className="text-km-teal" /> Credit Card</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaUniversity className="text-km-teal" /> Bank Transfer</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaFileInvoice className="text-km-teal" /> Cheque</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaFileInvoice className="text-km-teal" /> DD</span>
              <span>•</span>
              <span className="flex items-center gap-1"><FaCreditCard className="text-km-teal" /> Online</span>
            </div>
            <div className="mt-2 text-[0.85rem] text-gray-600 flex items-center justify-center gap-2">
              <span className="flex items-center gap-1"><FaTruck className="text-km-teal" /> By Road</span>

            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-10 bg-km-teal text-white font-body font-semibold text-[16px] rounded-lg hover:bg-km-cyan transition-colors duration-200 shadow-lg shadow-km-teal/20"
          >
            Request Service Quote <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
