import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const productCategories = [
    { label: 'Konica Minolta Photocopy Machine', href: '#products' },
    { label: 'Digital Duplicator', href: '#riso' },
    { label: 'Photocopy Machine', href: '#products' },
    { label: 'Xerox Machines', href: '#riso' },
    { label: 'Canon Photocopying Machine', href: '#riso' },
    { label: 'Photocopier Machine', href: '#products' },
    { label: 'Riso Digital Duplicator Machine', href: '#riso' },
    { label: 'Color Photocopy Machine', href: '#products' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'AMC - Annual Maintenance', href: '#services' },
    { label: 'Repair & Spare Parts', href: '#services' },
    { label: 'Rental / Lease', href: '#services' },
    { label: 'Wide Format Solutions', href: '#services' },
    { label: 'Multimedia Projectors', href: '#services' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube', color: '#FF0000' },
  ];

  return (
    <footer className="bg-[#030D0F] border-t border-km-teal/10">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Info */}
          <div>
            <div className="relative w-[88px] h-[44px] mb-4 opacity-80">
              <Image
                src="/logo.png"
                alt="Konica Minolta — Saicotech Services"
                fill
                sizes="88px"
                className="object-contain"
              />
            </div>
            <p className="font-body text-gray-400 text-[0.9rem] mb-4 leading-relaxed">
              Saicotech Services Authorised Channel Partner for Konica Minolta & Riso, Japan since 1999.
            </p>
            <div className="inline-flex items-center px-3 py-1.5 bg-km-teal/10 border border-km-teal/30 rounded-full mb-4">
              <span className="font-mono text-km-teal text-[11px]">
                GST: 23BAZPS4838N1ZM
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="font-display font-bold text-white text-[0.95rem] mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-km-teal transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-400 text-[1rem] group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
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
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors flex items-center gap-2"
                  >
                    <span className="text-km-teal">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-display font-bold text-white text-[1rem] mb-4 mt-6">
              Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 3).map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors flex items-center gap-2"
                  >
                    <span className="text-km-teal">→</span>
                    {service.label}
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
              {productCategories.slice(0, 8).map((category) => (
                <li key={category.label}>
                  <Link
                    href={category.href}
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors flex items-center gap-2"
                  >
                    <span className="text-km-teal">→</span>
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-[1rem] mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 font-body text-gray-400 text-[0.85rem]">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-km-teal text-[1rem] mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  Ground Floor, Plot No. 03
                  <br />
                  Saidisha Complex, MP Nagar Zone 1
                  <br />
                  Bhopal – 462011, MP
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:+919826053123"
                  className="flex items-center gap-2 hover:text-km-teal transition-colors"
                >
                  <FaPhone className="text-km-teal" />
                  +91 98260 53123 (Sandeep)
                </a>
                <a
                  href="tel:+919826444348"
                  className="flex items-center gap-2 hover:text-km-teal transition-colors"
                >
                  <FaPhone className="text-km-teal" />
                  +91 98264 44348 (Aradhana)
                </a>
                <a
                  href="https://wa.me/919826444348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-km-teal transition-colors"
                >
                  <FaWhatsapp className="text-[#25D366]" />
                  WhatsApp — Aradhana
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="pt-6 pb-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-6">
                <Link
                  href={link.href}
                  className="font-body text-gray-400 text-[0.8rem] hover:text-km-teal transition-colors"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-700">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-gray-400 text-[0.85rem] text-center md:text-left">
              © 2025 Saicotech Services. All rights reserved.
            </p>
            <p className="font-body text-gray-400 text-[0.85rem] text-center md:text-right">
              Serving Bhopal & all MP since 1999 · HDFC Bank verified · Trustseal Verified
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="font-body text-gray-500 text-[0.8rem]">
              Designed & Developed by{' '}
              <a 
                href="https://adwikindia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-km-teal hover:text-km-cyan transition-colors font-semibold"
              >
                Adwikindia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
