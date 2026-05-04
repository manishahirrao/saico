import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const productCategories = [
    'Konica Minolta Photocopy Machine',
    'Digital Duplicator',
    'Photocopy Machine',
    'Xerox Machines',
    'Canon Photocopying Machine',
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
  ];

  const socialLinks = [
    { Icon: FaFacebook, href: '#', label: 'Facebook' },
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { Icon: FaInstagram, href: '#', label: 'Instagram' },
    { Icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Info */}
          <div>
            <div className="relative w-[88px] h-[44px] mb-4 opacity-80">
              <Image
                src="/logo.jpg"
                alt="Konica Minolta — Saicotech Services"
                fill
                sizes="88px"
                className="object-contain"
              />
            </div>
            <p className="font-body text-gray-400 text-[0.9rem] mb-4 leading-relaxed">
              Authorised Channel Partner for Konica Minolta & Riso, Japan since 1999.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 bg-km-teal/10 border border-km-teal/30 rounded-full mb-4">
              <span className="font-mono text-km-teal text-[11px]">
                GST: 23BAZPS4838N1ZM
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-km-teal hover:text-white transition-all duration-200"
                >
                  <Icon className="text-[1.1rem]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-[1rem] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-display font-bold text-white text-[1rem] mb-4 mt-6">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="font-display font-bold text-white text-[1rem] mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="#products"
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#products"
                  className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                >
                  Riso Digital Duplicator Machine
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                >
                  Color Photocopy Machine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-[1rem] mb-4">
              Contact
            </h3>
            <div className="space-y-3 font-body text-gray-400 text-[0.85rem]">
              <p className="leading-relaxed">
                Ground Floor, Plot No. 03
                <br />
                Saidisha Complex, MP Nagar Zone 1
                <br />
                Bhopal – 462011, MP
              </p>
              <div className="space-y-2">
                <a
                  href="tel:07949314044"
                  className="flex items-center gap-2 hover:text-km-teal transition-colors"
                >
                  <FaPhone className="text-km-teal" /> 07949314044
                </a>
                <a
                  href="tel:+919826444348"
                  className="flex items-center gap-2 hover:text-km-teal transition-colors"
                >
                  <FaPhone className="text-km-teal" /> +91 98264 44348
                </a>
                <a
                  href="https://wa.me/919826444348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <FaWhatsapp className="text-[#25D366]" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-gray-400 text-[0.85rem] text-center md:text-left">
              © 2025 Saicotech Services. All rights reserved.
            </p>
            <p className="font-body text-gray-400 text-[0.85rem] text-center md:text-right">
              Serving Bhopal & all MP since 1999 · HDFC Bank verified · Trustseal
              Verified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
