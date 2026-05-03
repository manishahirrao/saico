import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const productCategories = [
    'Konica Minolta Photocopy Machine',
    'Digital Duplicator',
    'Photocopy Machine',
    'Xerox Machines',
    'Canon Photocopying Machine',
    'Photocopier Machine',
    'Riso Digital Duplicator Machine',
    'Color Photocopy Machine',
  ];

  const companyLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
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
            <div className="inline-flex items-center px-3 py-1.5 bg-km-teal/10 border border-km-teal/30 rounded-full">
              <span className="font-mono text-km-teal text-[11px]">
                GST: 23BAZPS4838N1ZM
              </span>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h3 className="font-display font-bold text-white text-[1rem] mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {productCategories.slice(0, 5).map((category) => (
                <li key={category}>
                  <Link
                    href="#products"
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Products */}
          <div>
            <h3 className="font-display font-bold text-white text-[1rem] mb-4">
              More Products
            </h3>
            <ul className="space-y-2">
              {productCategories.slice(5).map((category) => (
                <li key={category}>
                  <Link
                    href="#products"
                    className="font-body text-gray-400 text-[0.85rem] hover:text-km-teal transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
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
              <div className="space-y-1">
                <a
                  href="tel:07949314044"
                  className="block hover:text-km-teal transition-colors"
                >
                  📞 07949314044
                </a>
                <a
                  href="tel:+919826444348"
                  className="block hover:text-km-teal transition-colors"
                >
                  📞 +91 98264 44348
                </a>
                <a
                  href="https://wa.me/919826444348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-km-teal transition-colors"
                >
                  💬 WhatsApp
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
