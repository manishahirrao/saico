'use client';

import { useState } from 'react';
import { allProducts } from '@/data/products';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `Hi, I'm interested in Saicotech Services!

Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}
${formData.product ? `Product Interest: ${formData.product}` : ''}
${formData.message ? `Message: ${formData.message}` : ''}`;

    const whatsappUrl = `https://wa.me/919826444348?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  if (isSuccess) {
    return (
      <div className="bg-km-teal/10 border border-km-teal rounded-[14px] p-8 text-center">
        <div className="text-[3rem] mb-4">✅</div>
        <h3 className="font-display font-bold text-[1.5rem] text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="font-body text-gray-600 text-[1rem]">
          Your enquiry has been sent via WhatsApp. Mr. Sandeep's team will contact you
          within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', phone: '', email: '', product: '', message: '' });
          }}
          className="mt-6 px-6 py-2 bg-km-teal text-white font-body font-medium rounded-lg hover:bg-km-cyan transition-colors duration-200"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block font-body font-medium text-gray-900 text-[14px] mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-lg text-gray-900 font-body focus:outline-none focus:border-km-teal focus:ring-2 focus:ring-km-teal/20 transition-all duration-200`}
          placeholder="Enter your full name"
          suppressHydrationWarning
        />
        {errors.name && (
          <p className="mt-1 text-red-400 text-[13px] font-body">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block font-body font-medium text-gray-900 text-[14px] mb-2"
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } rounded-lg text-gray-900 font-body focus:outline-none focus:border-km-teal focus:ring-2 focus:ring-km-teal/20 transition-all duration-200`}
          placeholder="10-digit mobile number"
          suppressHydrationWarning
        />
        {errors.phone && (
          <p className="mt-1 text-red-400 text-[13px] font-body">{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-body font-medium text-gray-900 text-[14px] mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-lg text-gray-900 font-body focus:outline-none focus:border-km-teal focus:ring-2 focus:ring-km-teal/20 transition-all duration-200`}
          placeholder="your.email@example.com"
          suppressHydrationWarning
        />
        {errors.email && (
          <p className="mt-1 text-red-400 text-[13px] font-body">{errors.email}</p>
        )}
      </div>

      {/* Product Interest */}
      <div>
        <label
          htmlFor="product"
          className="block font-body font-medium text-gray-900 text-[14px] mb-2"
        >
          Product / Service Interest
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-body focus:outline-none focus:border-km-teal focus:ring-2 focus:ring-km-teal/20 transition-all duration-200"
          suppressHydrationWarning
        >
          <option value="">Select a product or service</option>
          <optgroup label="Konica Minolta">
            {allProducts
              .filter((p) => p.brand === 'konica')
              .map((p) => (
                <option key={p.id} value={p.fullName}>
                  {p.fullName}
                </option>
              ))}
          </optgroup>
          <optgroup label="Riso">
            {allProducts
              .filter((p) => p.brand === 'riso')
              .map((p) => (
                <option key={p.id} value={p.fullName}>
                  {p.fullName}
                </option>
              ))}
          </optgroup>
          <optgroup label="Services">
            <option value="AMC">AMC - Annual Maintenance Contract</option>
            <option value="Repair">Repair & Spare Parts</option>
            <option value="Rental">Rental / Lease</option>
            <option value="Projector">Multimedia Projectors</option>
            <option value="Wide Format">Wide Format Solutions</option>
            <option value="Other">Other</option>
          </optgroup>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-body font-medium text-gray-900 text-[14px] mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-body focus:outline-none focus:border-km-teal focus:ring-2 focus:ring-km-teal/20 transition-all duration-200 resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[52px] bg-km-teal text-white font-body font-semibold text-[16px] rounded-lg hover:bg-km-cyan transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-km-teal/20"
        suppressHydrationWarning
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>Send Quote Request via WhatsApp →</>
        )}
      </button>

      <p className="text-center text-gray-600 text-[13px] font-body">
        Your enquiry will be sent via WhatsApp to our team
      </p>
    </form>
  );
}
