import { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import GlobalNav from '@/components/GlobalNav';

export const metadata: Metadata = {
  title: 'Shipping Policy | Saicotech Services',
  description: 'Shipping and Delivery Policy for Saicotech Services - Learn about our delivery process, timelines, and coverage areas.',
};

export default function ShippingPolicyPage() {
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
            Shipping & Delivery Policy
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
              1. Service Coverage Area
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Saicotech Services provides delivery and installation services across <strong>all districts of 
              Madhya Pradesh</strong>, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Bhopal (headquarters)</li>
              <li>Indore</li>
              <li>Jabalpur</li>
              <li>Gwalior</li>
              <li>Ujjain</li>
              <li>Sagar</li>
              <li>Dewas</li>
              <li>Satna</li>
              <li>Ratlam</li>
              <li>And all other districts in Madhya Pradesh</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              For deliveries outside Madhya Pradesh, please contact us for availability and shipping arrangements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              2. Delivery Methods
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              We offer the following delivery methods:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li><strong>By Road:</strong> Standard delivery method for most locations within MP</li>
              <li><strong>By Air:</strong> Available for urgent deliveries to remote locations (additional charges apply)</li>
              <li><strong>Self-Pickup:</strong> Available from our Bhopal office (no delivery charges)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              3. Delivery Timeline
            </h2>
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              3.1 Standard Delivery
            </h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Delivery timelines vary based on product availability and location:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li><strong>Bhopal:</strong> 2-3 business days</li>
              <li><strong>Major cities (Indore, Jabalpur, Gwalior):</strong> 3-5 business days</li>
              <li><strong>Other MP districts:</strong> 5-7 business days</li>
              <li><strong>Remote locations:</strong> 7-10 business days</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-white mb-3 mt-6">
              3.2 Express Delivery
            </h3>
            <p className="text-white/80 font-body leading-relaxed">
              Express delivery (1-2 business days) is available for select products and locations at additional 
              cost. Contact us for availability and pricing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              4. Delivery Charges
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Delivery charges are calculated based on:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Product size and weight</li>
              <li>Delivery location and distance from Bhopal</li>
              <li>Delivery method (road/air)</li>
              <li>Installation requirements</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              Delivery charges will be clearly communicated in your quotation. For orders above a certain value, 
              we may offer free delivery within Bhopal city limits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              5. Installation Services
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              All multifunction printers, copiers, and digital duplicators include professional installation by 
              our trained engineers. Installation services include:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Unpacking and physical setup</li>
              <li>Connection to power and network</li>
              <li>Driver installation and configuration</li>
              <li>Initial testing and calibration</li>
              <li>Basic user training</li>
              <li>Removal of packaging materials</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              Installation is typically completed within 2-4 hours of delivery, depending on the product complexity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              6. Delivery Requirements
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              To ensure smooth delivery and installation, please ensure:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Adequate space for the equipment as per specifications</li>
              <li>Proper electrical connection (voltage and grounding as required)</li>
              <li>Network connectivity (if applicable)</li>
              <li>Clear access path for moving the equipment</li>
              <li>Authorized person available to receive delivery</li>
              <li>Suitable environmental conditions (temperature, humidity)</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              Our team will provide detailed site preparation guidelines before delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              7. Order Tracking
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              Once your order is dispatched, we will notify you via phone or WhatsApp with:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4 mt-4">
              <li>Dispatch confirmation</li>
              <li>Expected delivery date</li>
              <li>Delivery personnel contact information</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              You can also contact us at any time to check your order status.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              8. Delivery Inspection
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              Upon delivery, please:
            </p>
            <ol className="list-decimal list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Inspect the packaging for any visible damage</li>
              <li>Check the product against your order confirmation</li>
              <li>Report any damage or discrepancies immediately to our delivery personnel</li>
              <li>Sign the delivery receipt only after inspection</li>
            </ol>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              If you notice any damage or issues, do not accept the delivery and contact us immediately at 
              07949314044.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              9. Failed Delivery Attempts
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              If delivery cannot be completed due to:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4">
              <li>Incorrect or incomplete address</li>
              <li>No one available to receive delivery</li>
              <li>Site not ready for installation</li>
              <li>Customer request for rescheduling</li>
            </ul>
            <p className="text-white/80 font-body leading-relaxed mt-4">
              We will attempt to contact you to reschedule. Additional delivery charges may apply for 
              rescheduled deliveries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              10. Consumables and Spare Parts Delivery
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              For consumables (toner, drums, etc.) and spare parts:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4 mt-4">
              <li>Same-day delivery available in Bhopal for orders placed before 2 PM</li>
              <li>Next-day delivery for other MP locations (subject to availability)</li>
              <li>Courier delivery for small items</li>
              <li>Free delivery for AMC customers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              11. Rental and Lease Equipment
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              For rental and lease equipment:
            </p>
            <ul className="list-disc list-inside text-white/80 font-body space-y-2 ml-4 mt-4">
              <li>Delivery and installation included in rental fee</li>
              <li>Pickup and removal at end of rental period</li>
              <li>24-48 hour delivery for event rentals (subject to availability)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl font-bold text-km-teal mb-4">
              12. Contact for Shipping Queries
            </h2>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              For any questions about shipping, delivery, or installation:
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
              13. Policy Updates
            </h2>
            <p className="text-white/80 font-body leading-relaxed">
              We reserve the right to modify this Shipping and Delivery Policy at any time. Changes will be 
              effective immediately upon posting on our website.
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}

