'use client';

import { motion } from 'framer-motion';
import CounterStat from './CounterStat';
import { FaCheckCircle, FaUserTie } from 'react-icons/fa';

export default function AboutSection() {
  const stats = [
    { value: 25, suffix: '+', label: 'Years Established' },
    { value: 37, suffix: '', label: 'Team Members' },
    { value: 30, suffix: '', label: 'Service Engineers' },
    { value: 5, suffix: 'Cr', label: 'Annual Turnover' },
    { value: 83, suffix: '%', label: 'Response Rate' },
    { value: 24, suffix: 'hr', label: 'Issue Resolution' },
  ];

  const whyUs = [
    'Constantly receptive to customer needs',
    'Prompt and complete support',
    'Adherence to established specifications',
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      {/* Faint Background Number */}
      <div className="absolute top-8 left-8 font-display font-thin text-[9rem] text-gray-100 select-none pointer-events-none">
        04
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-block font-body font-semibold text-km-teal text-[13px] tracking-[0.16em] uppercase mb-4">
            ABOUT US
          </span>
          <h2
            className="font-display font-bold text-gray-900 mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
          >
            Guided by Expertise. Trusted for 25 Years.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-km-teal/10 border border-km-teal/30 rounded-full">
                <div className="font-display font-bold text-gray-900 text-[1rem]">
                  Authorised Channel Partner
                </div>
                <div className="font-body text-km-teal text-[0.85rem] ml-2">· Since 1999</div>
              </div>
            </div>

            {/* Paragraph 1 */}
            <p className="font-body text-gray-700 text-[1rem] leading-[1.7]">
              Established in 1999 as <strong>authorised channel partner of Konica Minolta and
              Riso, Japan</strong> — offering A3 & A4 colour/B&W laser heavy-duty MFPs, copiers
              at very low running cost, multimedia projectors, fax machines, A0-size wide-format
              copiers/printers/scanners, and high-speed digital duplicators.
            </p>

            {/* Paragraph 2 */}
            <p className="font-body text-gray-700 text-[1rem] leading-[1.7]">
              Guided by <strong>Mr. Sandeep Shrivastava (Proprietor)</strong>. We maintain
              30-year customer relationships across Madhya Pradesh with trained & skilled
              Service Engineers at all MP levels.
            </p>

            {/* Quality Policy Blockquote */}
            <blockquote
              className="border-l-3 pl-6 py-4 italic text-gray-700 text-[0.95rem] leading-[1.7]"
              style={{ borderLeft: '3px solid #00B0CA' }}
            >
              "Regular preventive maintenance and replacement of spares & consumables on time.
              Service contracts to keep equipment in proper working order for long."
              <footer className="mt-2 not-italic font-semibold text-km-teal text-[0.85rem]">
                — Quality Policy, Saicotech Services
              </footer>
            </blockquote>

            {/* Why Us Bullets */}
            <div>
              <h3 className="font-display font-bold text-gray-900 text-[1.2rem] mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {whyUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700 text-[0.95rem]"
                  >
                    <FaCheckCircle className="text-km-teal text-[1.1rem] mt-0.5 flex-shrink-0" />
                    <span className="font-body">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats & Business Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-lg p-5 border border-km-teal/10 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="font-display font-extrabold text-km-teal text-[2.5rem] leading-none mb-2">
                    <CounterStat target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-body text-gray-700 text-[0.85rem]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Business Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <h3 className="font-display font-bold text-gray-900 text-[1.2rem] mb-4">
                Business Details
              </h3>
              <div className="space-y-3 text-[0.9rem]">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-body text-gray-600">GST Number</span>
                  <span className="font-mono text-gray-900 font-semibold">23BAZPS4838N1ZM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-body text-gray-600">GST Registration</span>
                  <span className="font-body text-gray-900">01-07-2017</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-body text-gray-600">Legal Status</span>
                  <span className="font-body text-gray-900">Proprietorship</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-body text-gray-600">Trustseal</span>
                  <span className="font-body text-km-teal font-semibold flex items-center gap-1">
                    <FaCheckCircle /> Verified
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="font-body text-gray-600">Bank Partner</span>
                  <span className="font-body text-gray-900">HDFC Bank</span>
                </div>
                <div className="pt-2">
                  <div className="font-body text-gray-600 mb-2">Payment Modes</div>
                  <div className="flex flex-wrap gap-2">
                    {['Cash', 'Card', 'Transfer', 'Cheque', 'DD', 'Online'].map((mode) => (
                      <span
                        key={mode}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-[0.75rem] font-body"
                      >
                        {mode}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Proprietor Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-km-teal/5 to-km-cyan/5 rounded-xl p-6 border border-km-teal/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-km-teal/20 flex items-center justify-center text-km-teal text-3xl">
                  <FaUserTie />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-[1.1rem]">
                    Mr. Sandeep Shrivastava
                  </h4>
                  <p className="font-body text-gray-600 text-[0.85rem]">
                    Proprietor & CEO — Saicotech Services
                  </p>
                </div>
              </div>
              <p className="mt-4 font-body text-gray-700 text-[0.9rem] italic">
                "Visionary ideas and zeal to strive for a remarkable position."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
