import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import GlobalNav from '@/components/GlobalNav';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Saicotech Services',
  description: 'Terms and Conditions for Saicotech Services - Read our terms of service, warranty policies, and usage guidelines.',
};

export default function TermsAndConditionsPage() {
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
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              By accessing and using the Saicotech Services website and services, you accept and agree to be bound 
              by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              2. Services Offered
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Saicotech Services is an authorised channel partner of Konica Minolta and Riso Japan, offering:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Sales of multifunction printers, copiers, and digital duplicators</li>
              <li>Annual Maintenance Contracts (AMC)</li>
              <li>Repair and spare parts services</li>
              <li>Equipment rental and leasing</li>
              <li>Multimedia projectors and wide-format solutions</li>
              <li>On-site demonstrations and consultations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              3. Product Pricing and Availability
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              All prices displayed on our website are subject to change without notice. Final pricing will be 
              confirmed at the time of quotation or purchase. Product availability may vary, and we reserve the 
              right to discontinue any product at any time.
            </p>
            <p className="text-white/80 font-body leading-relaxed">
              Prices are exclusive of GST (18%) unless otherwise stated. Installation, transportation, and other 
              charges may apply and will be communicated separately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              4. Orders and Quotations
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Quotations provided are valid for 30 days from the date of issue. Orders are subject to acceptance 
              by Saicotech Services. We reserve the right to refuse or cancel any order for any reason.
            </p>
            <p className="text-white/80 font-body leading-relaxed">
              A purchase order or signed quotation constitutes a binding agreement. Cancellations must be made 
              in writing and may be subject to cancellation fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              5. Payment Terms
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              We accept the following payment methods:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Cash</li>
              <li>Credit/Debit Card</li>
              <li>Bank Transfer (NEFT/RTGS/IMPS)</li>
              <li>Cheque</li>
              <li>Demand Draft (DD)</li>
              <li>Online Payment Gateway</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              Payment terms will be specified in the quotation or invoice. Late payments may incur interest charges 
              at the rate of 2% per month or the maximum rate permitted by law, whichever is lower.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              6. Delivery and Installation
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Delivery timelines are estimates and may vary based on product availability and location. We serve 
              all districts of Madhya Pradesh.
            </p>
            <p className="text-white/80 font-body leading-relaxed">
              Installation services are provided by our trained engineers. The customer must ensure adequate space, 
              power supply, and environmental conditions as per manufacturer specifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              7. Warranty and Support
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              All products come with manufacturer's warranty as specified. Warranty terms vary by product and will 
              be provided at the time of purchase.
            </p>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Warranty does not cover:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Damage due to misuse, negligence, or accidents</li>
              <li>Unauthorized repairs or modifications</li>
              <li>Consumables (toner, drums, etc.)</li>
              <li>Normal wear and tear</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              8. Annual Maintenance Contracts (AMC)
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              AMC terms include:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Regular preventive maintenance visits</li>
              <li>Priority service response (24-hour resolution target)</li>
              <li>Genuine spare parts replacement</li>
              <li>Timely consumables supply</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              AMC fees are payable annually in advance. Renewal terms will be communicated 30 days before expiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              Saicotech Services shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from the use of our products or services. Our total liability shall not exceed the amount paid 
              for the product or service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of 
              Saicotech Services or its content suppliers and is protected by copyright laws. Konica Minolta 
              and Riso are registered trademarks of their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              11. Governing Law
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the 
              exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
              immediately upon posting on this website. Continued use of our services constitutes acceptance of 
              the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              13. Contact Information
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact:
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

