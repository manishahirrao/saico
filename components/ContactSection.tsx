'use client';

import Link from 'next/link';
import EnquiryForm from './contact/EnquiryForm';

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Faint Background Number */}
      <div className="absolute top-8 left-8 font-display font-thin text-[9rem] text-gray-100 select-none pointer-events-none">
        05
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body font-semibold text-km-teal text-[13px] tracking-[0.16em] uppercase">
            CONTACT US
          </span>
          <h2
            className="font-display font-bold text-gray-900 mt-3"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)' }}
          >
            Get in Touch with Saicotech
          </h2>
          <p className="font-body text-gray-600 text-[1rem] mt-3 max-w-[600px] mx-auto">
            Ready to upgrade your office equipment? Contact us for a free quote and
            on-site demo.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[55%_45%] gap-8">
          {/* Left: Info Panel */}
          <div className="bg-white border border-gray-200 rounded-[14px] p-8 space-y-6 shadow-sm">
            {/* Address */}
            <div>
              <div className="flex items-start gap-3">
                <span className="text-[1.5rem]">📍</span>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-[1.1rem] mb-2">
                    Visit Our Office
                  </h3>
                  <p className="font-body text-gray-600 text-[0.95rem] leading-relaxed">
                    Ground Floor, Plot No. 03, Saidisha Complex
                    <br />
                    M.P. Nagar Zone 1, Bhopal – 462011
                    <br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-start gap-3">
                <span className="text-[1.5rem]">📞</span>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-[1.1rem] mb-2">
                    Call Us
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:07949314044"
                      className="block font-body text-km-teal text-[1rem] hover:text-km-cyan transition-colors"
                    >
                      07949314044
                    </a>
                    <a
                      href="tel:+919826444348"
                      className="block font-body text-km-teal text-[1rem] hover:text-km-cyan transition-colors"
                    >
                      +91 98264 44348
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <div className="flex items-start gap-3">
                <span className="text-[1.5rem]">💬</span>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-[1.1rem] mb-2">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/919826444348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-body font-medium text-[14px] rounded-lg hover:bg-[#20BA5A] transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div>
              <div className="flex items-start gap-3">
                <span className="text-[1.5rem]">🧑</span>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-[1.1rem] mb-1">
                    Mr. Sandeep Shrivastava
                  </h3>
                  <p className="font-body text-gray-600 text-[0.9rem]">
                    Proprietor, Saicotech Services
                  </p>
                </div>
              </div>
            </div>

            {/* GST */}
            <div>
              <div className="flex items-start gap-3">
                <span className="text-[1.5rem]">🏛️</span>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-[1.1rem] mb-1">
                    GST Number
                  </h3>
                  <p className="font-mono text-gray-600 text-[0.9rem]">
                    23BAZPS4838N1ZM
                  </p>
                </div>
              </div>
            </div>

            {/* Response Rate Badge */}
            <div className="pt-4 border-t border-gray-200">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-km-teal/10 border border-km-teal/30 rounded-full text-km-teal text-[13px] font-body font-medium">
                ⭐ 83% Response Rate on IndiaMART
              </span>
            </div>

            {/* Google Maps Link */}
            <div>
              <a
                href="https://maps.google.com?q=23.23564000,77.43587000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center bg-gray-100 border border-gray-200 rounded-lg text-km-teal font-body font-medium hover:bg-gray-200 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Payment Modes */}
            <div className="pt-4 border-t border-gray-200">
              <p className="font-body text-gray-600 text-[0.85rem]">
                <strong className="text-gray-900">Payment Modes:</strong> Cash · Credit
                Card · Bank Transfer · Cheque · DD · Online
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="bg-white border border-gray-200 rounded-[14px] p-8 shadow-sm">
            <h3 className="font-display font-bold text-gray-900 text-[1.3rem] mb-6">
              Send Enquiry via WhatsApp
            </h3>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
