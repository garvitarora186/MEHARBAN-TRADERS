import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  ExternalLink,
  Clock,
  Globe
} from 'lucide-react';
import { EXPORT_COUNTRIES } from '../data/countriesData';
import { SPICES_CATALOG } from '../data/spicesData';

interface ContactInquiryFormProps {
  initialSubject?: string;
  initialCountry?: string;
}

export const InquiryForm: React.FC<ContactInquiryFormProps> = ({
  initialSubject = '',
  initialCountry = 'Taiwan'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: initialCountry,
    productInterest: initialSubject || 'All Spice Commodities',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, productInterest: initialSubject }));
    }
  }, [initialSubject]);

  useEffect(() => {
    if (initialCountry) {
      setFormData(prev => ({ ...prev, country: initialCountry }));
    }
  }, [initialCountry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Trade Inquiry: ${formData.productInterest} [${formData.country}] - ${formData.companyName || formData.fullName}`);
    const body = encodeURIComponent(`Dear Mehrban Traders,

I would like to inquire about your spice commodities:

Product / Commodity: ${formData.productInterest}
Destination Country: ${formData.country}

Buyer Details:
Name: ${formData.fullName}
Company: ${formData.companyName || 'Not specified'}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message || 'Please provide technical specifications and current pricing.'}

Regards,
${formData.fullName}`);

    return `mailto:nehabery@yahoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-[#E8DFD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E4321] mb-1.5">
            <Mail className="w-3.5 h-3.5 text-[#C87D20]" />
            <span>Commercial Inquiries</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1B1612]">
            Contact Trade Desk
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#6B5A4E]">
            Connect directly with our registered Delhi Cantonment office for spice orders, specifications, and shipment schedules to Taiwan, UAE, Canada, US, UK, and Australia.
          </p>
        </div>

        {/* Submission Confirmation Alert */}
        {isSubmitted && (
          <div className="mb-8 bg-[#F6FBF7] border border-emerald-300 rounded-lg p-5 space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <h3 className="font-bold text-sm text-[#1B1612]">
                  Inquiry Received Successfully
                </h3>
                <p className="text-xs text-[#5A4738]">
                  Thank you, <strong>{formData.fullName}</strong>. Our team will contact you shortly at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
                </p>
              </div>
            </div>

            <div className="pt-1 flex gap-2">
              <a
                href={generateMailtoUrl()}
                className="px-3 py-1.5 bg-[#C87D20] text-white text-xs font-semibold rounded hover:bg-[#B46F19]"
              >
                Send Direct Email (nehabery@yahoo.com)
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-3 py-1.5 bg-white border border-[#D9CFC1] text-[#4A3E35] text-xs font-semibold rounded"
              >
                New Inquiry
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Compact Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 rounded-lg border border-[#E3D9CC]">
            <h3 className="font-serif-title text-lg font-bold text-[#1B1612] pb-2 border-b border-[#E8DFD1] mb-4">
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enterprise / Importer"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                    Phone / Mobile <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                    Destination Country:
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                  >
                    {EXPORT_COUNTRIES.map((c) => (
                      <option key={c.id} value={c.country}>
                        {c.flag} {c.country}
                      </option>
                    ))}
                    <option value="Other Country">Other Country</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                    Product of Interest:
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                  >
                    <option value="All Spice Commodities">All Spice Commodities</option>
                    {SPICES_CATALOG.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#4A3E35] block mb-1">
                  Message / Specifications:
                </label>
                <textarea
                  rows={3}
                  placeholder="Packaging preferences, grade, or target quantity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-2 rounded border border-[#D9CFC1] bg-white text-[#1B1612]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#C87D20] hover:bg-[#B46F19] text-white font-semibold text-xs rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right Column: Office & Direct Contact Details */}
          <div className="lg:col-span-5 bg-[#1B1612] text-white p-6 rounded-lg space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#E59819]">
                Head Office & Shop
              </span>
              <h3 className="font-serif-title text-xl font-bold text-white">
                Mehrban Traders
              </h3>
            </div>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E59819] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Shop Address:</span>
                  <p className="mt-0.5 text-neutral-300">
                    2/26, Kabul Lines, Delhi Cantonment, New Delhi, Delhi 110010
                  </p>
                  <a
                    href="https://maps.google.com/?q=2/26,+Kabul+Lines,+Delhi+Cantonment,+New+Delhi,+Delhi+110010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#F0B24C] hover:underline mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E59819] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Mobile:</span>
                  <a href="tel:9911262235" className="text-white hover:text-[#E59819] font-mono font-medium">
                    9911262235
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E59819] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Email:</span>
                  <a href="mailto:nehabery@yahoo.com" className="text-white hover:text-[#E59819] font-mono">
                    nehabery@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E59819] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Working Hours:</span>
                  <p className="text-neutral-300">
                    Mon - Sat: 09:00 AM – 07:30 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
              <p>Key Destinations: Taiwan · UAE · Canada · US · London · Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
