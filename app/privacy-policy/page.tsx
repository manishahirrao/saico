import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import GlobalNav from '@/components/GlobalNav';

export const metadata: Metadata = {
  title: 'Privacy Policy | Saicotech Services',
  description: 'Privacy Policy for Saicotech Services - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <GlobalNav />
      <main className="min-h-screen bg-km-navy text-white pt-20">
      {/* Header */}
      <div className="bg-km-navy-mid border-b border-km-teal/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-km-teal hover:text-km-cyan transition-colors mb-6"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 font-body">
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-teal max-w-none">
          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              1. Information We Collect
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              At Saicotech Services, we collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Submit an enquiry form or request a quote</li>
              <li>Contact us via phone, email, or WhatsApp</li>
              <li>Schedule a product demonstration</li>
              <li>Enter into a service contract or purchase agreement</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              The information we collect may include: your name, phone number, email address, business name, 
              address, product/service interests, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Respond to your enquiries and provide customer support</li>
              <li>Process your orders and service requests</li>
              <li>Schedule product demonstrations and service appointments</li>
              <li>Send you information about our products, services, and promotions</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations and resolve disputes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>With Konica Minolta and Riso Japan for warranty and service purposes</li>
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              4. Data Security
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              5. Your Rights
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              8. Contact Us
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-km-navy-light border border-km-teal/20 rounded-lg p-6">
              <p className="text-white font-body mb-2">
                <strong>Saicotech Services</strong>
              </p>
              <p className="text-white/80 font-body mb-2">
                Ground Floor, Plot No. 03, Saidisha Complex<br />
                MP Nagar Zone 1, Bhopal - 462011, Madhya Pradesh
              </p>
              <p className="text-white/80 font-body mb-2">
                Phone: <a href="tel:07949314044" className="text-km-teal hover:text-km-cyan">07949314044</a>
              </p>
              <p className="text-white/80 font-body mb-2">
                WhatsApp: <a href="https://wa.me/919826444348" className="text-km-teal hover:text-km-cyan">+91 98264 44348</a>
              </p>
              <p className="text-white/80 font-body">
                GST: <span className="font-mono text-km-teal">23BAZPS4838N1ZM</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}

