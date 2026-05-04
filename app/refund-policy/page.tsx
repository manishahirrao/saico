import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import GlobalNav from '@/components/GlobalNav';

export const metadata: Metadata = {
  title: 'Refund Policy | Saicotech Services',
  description: 'Refund and Return Policy for Saicotech Services - Understand our refund terms for products and services.',
};

export default function RefundPolicyPage() {
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
            Refund & Return Policy
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
              1. General Policy
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              At Saicotech Services, we strive to ensure complete customer satisfaction. This Refund and Return 
              Policy outlines the terms and conditions for returns, refunds, and exchanges of products and services 
              purchased from us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              2. Product Returns
            </h2>
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              2.1 Return Eligibility
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Products may be returned within <strong>7 days</strong> of delivery if:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>The product is defective or damaged upon delivery</li>
              <li>The wrong product was delivered</li>
              <li>The product does not match the specifications agreed upon</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-white mb-3 mt-6">
              2.2 Non-Returnable Items
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Consumables (toner cartridges, drums, ink, etc.)</li>
              <li>Products with broken seals or tampered packaging</li>
              <li>Customized or specially ordered products</li>
              <li>Products damaged due to misuse or negligence</li>
              <li>Products without original packaging and accessories</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-white mb-3 mt-6">
              2.3 Return Process
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              To initiate a return:
            </p>
            <ol className="list-decimal list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Contact us within 7 days of delivery at 07949314044 or via WhatsApp at +91 98264 44348</li>
              <li>Provide your order details and reason for return</li>
              <li>Our team will inspect the product and verify the return eligibility</li>
              <li>If approved, we will arrange for product pickup</li>
              <li>The product must be returned in original packaging with all accessories</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              3. Refund Policy
            </h2>
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              3.1 Refund Processing
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Once your return is received and inspected, we will notify you of the approval or rejection of 
              your refund.
            </p>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              If approved, your refund will be processed within <strong>7-10 business days</strong> to your 
              original method of payment.
            </p>

            <h3 className="font-display text-xl font-semibold text-white mb-3 mt-6">
              3.2 Partial Refunds
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Partial refunds may be granted in the following cases:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Product shows signs of use beyond inspection</li>
              <li>Missing accessories or documentation</li>
              <li>Damaged packaging (not caused during shipping)</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-white mb-3 mt-6">
              3.3 Non-Refundable Charges
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              The following charges are non-refundable:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Installation charges (if service was completed)</li>
              <li>Transportation and delivery charges</li>
              <li>Service charges for on-site demonstrations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              4. Exchanges
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              We offer exchanges only for defective or damaged products. If you need to exchange a product:
            </p>
            <ol className="list-decimal list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Contact us within 7 days of delivery</li>
              <li>Our engineer will inspect the product</li>
              <li>If the defect is confirmed, we will arrange for a replacement</li>
              <li>Replacement will be provided subject to stock availability</li>
            </ol>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              If a replacement is not available, we will offer a full refund or an alternative product of 
              equal or greater value.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              5. Warranty Claims
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Products under manufacturer's warranty should be serviced through our authorized service center. 
              Warranty claims do not qualify for refunds but are covered under repair or replacement terms as 
              per the manufacturer's warranty policy.
            </p>
            <p className="text-white/80 font-body leading-relaxed">
              For warranty service, contact our service team at 07949314044.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              6. AMC and Service Refunds
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Annual Maintenance Contract (AMC) fees are non-refundable once the contract period has commenced. 
              However, if you cancel within 7 days of signing and no service has been provided, a full refund 
              will be issued minus any administrative charges.
            </p>
            <p className="text-white/80 font-body leading-relaxed">
              Service charges for one-time repairs are non-refundable once the service has been completed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              7. Cancellation Policy
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Orders can be cancelled before shipment or installation. To cancel an order:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Contact us immediately at 07949314044</li>
              <li>Provide your order number and details</li>
              <li>If the order has not been processed, a full refund will be issued</li>
              <li>If the order is in transit, return policy will apply upon delivery</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              Cancellation charges may apply if the product has been specially ordered or customized.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              8. Shipping Costs
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              Return shipping costs are the responsibility of the customer unless the return is due to our error 
              (wrong product, defective product, etc.). In such cases, we will arrange and cover the return 
              shipping costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              9. Contact for Returns and Refunds
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              For any questions or to initiate a return/refund, please contact:
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

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              10. Policy Updates
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              We reserve the right to modify this Refund and Return Policy at any time. Changes will be effective 
              immediately upon posting on our website. Please review this policy periodically for updates.
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}

