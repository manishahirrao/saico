'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 68);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-[14px] border-b border-gray-200 shadow-sm'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Left: Logo + Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-[88px] h-[44px] transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(0,176,202,0.3)]">
              <Image
                src="/logo.png"
                alt="Konica Minolta — Saicotech Services Authorised Dealer Bhopal"
                fill
                sizes="88px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-gray-900 text-[1rem]">
                SAICOTECH
              </span>
              <span className="font-body font-medium text-km-teal text-[0.6rem] tracking-wider">
                SERVICES
              </span>
            </div>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body font-medium text-[15px] text-gray-600 hover:text-km-teal transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-km-teal transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right: CTA Button (Desktop) */}
          <Link
            href="#contact"
            className="hidden md:flex items-center justify-center h-[44px] px-6 bg-km-teal text-white font-body font-medium text-[15px] rounded-lg hover:bg-km-cyan transition-colors duration-200"
          >
            Get a Quote
          </Link>

          {/* Mobile: Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Open menu"
          >
            <span
              className={`w-6 h-0.5 bg-km-teal transition-all duration-200 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-km-teal transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-km-teal transition-all duration-200 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Logo in Mobile Menu */}
              <div className="relative w-[120px] h-[60px] mb-8">
                <Image
                  src="/logo.png"
                  alt="Konica Minolta"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-display font-bold text-[2.2rem] text-gray-900 hover:text-km-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center h-[56px] px-8 bg-km-teal text-white font-body font-semibold text-[18px] rounded-lg hover:bg-km-cyan transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
