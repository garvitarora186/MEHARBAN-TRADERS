import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  X, 
  Building2, 
  Calendar, 
  Layers, 
  Search,
  ExternalLink
} from 'lucide-react';
import { CERTIFICATES_DATA, CertificateItem } from '../data/certificatesData';

interface CertificatesSectionProps {
  onInquire: () => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onInquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'Government Accreditation', label: 'Government Accreditations' },
    { id: 'Food Safety Standard', label: 'Food Safety (ISO & HACCP)' },
    { id: 'International Export', label: 'International Export & FDA' },
    { id: 'Religious & Quality', label: 'Halal & Quality' }
  ];

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (selectedCategory === 'all') return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="certificates" className="py-20 bg-white border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (like jaianandfoods.com/#certificates) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E4321] mb-2">
            <Award className="w-4 h-4 text-[#C87D20]" />
            <span>Accreditations & Quality Benchmarks</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1612] tracking-tight">
            Our Quality Certifications & Standards
          </h2>
          <p className="mt-3 text-base text-[#6B5A4E] leading-relaxed">
            At Mehrban Traders, food safety and purity are certified by premier national and international accreditation councils. Our Kabul Lines processing and export operations strictly comply with the food import laws of Taiwan, UAE, Canada, the US, the UK, and Australia.
          </p>
        </div>

        {/* Category Tabs (styled cleanly per frontend-design) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1B1612] text-white shadow-2xs'
                  : 'bg-[#FAF7F2] text-[#5A4738] border border-[#D9CFC1] hover:bg-[#F3EDE2] hover:text-[#1B1612]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#FAF7F2] rounded-xl border border-[#E3D9CC] p-6 hover:border-[#C87D20]/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge Strip */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#D9CFC1] flex items-center justify-center text-[#C87D20] shadow-2xs group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <span className={`inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded border ${cert.colorScheme.badgeBg} ${cert.colorScheme.badgeText} ${cert.colorScheme.border}`}>
                      {cert.code}
                    </span>
                    <p className="text-[10px] text-[#7A695C] mt-0.5">{cert.category}</p>
                  </div>
                </div>

                {/* Certificate Title & Issuing Authority */}
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#1B1612] group-hover:text-[#9E4321] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#8C3A19] font-medium mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.issuingBody}</span>
                  </p>
                </div>

                {/* Registration Details */}
                <div className="p-3 bg-white rounded-lg border border-[#E8DFD1] text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#7A695C]">Registration Ref:</span>
                    <span className="font-mono font-bold text-[#1B1612] text-[11px] truncate max-w-[170px]">
                      {cert.registrationNo}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#7A695C]">Compliance Status:</span>
                    <span className="font-semibold text-emerald-700 text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {cert.validity}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#5A4738] leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Key Standards Bullet points */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] uppercase font-bold text-[#8C7A6E] tracking-wider block">
                    Verified Parameters:
                  </span>
                  <ul className="space-y-1 text-[11px] text-[#4A3E35]">
                    {cert.standards.slice(0, 2).map((st, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="truncate">{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-5 mt-5 border-t border-[#E8DFD1] flex items-center justify-between">
                <button
                  onClick={() => setActiveCertificate(cert)}
                  className="text-xs font-semibold text-[#C87D20] hover:text-[#9E4321] flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Scope & Details</span>
                </button>

                <span className="text-[11px] text-[#7A695C] font-mono">
                  Verified Facility
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Food Safety Trust Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#1B1612] to-[#2B2119] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E59819]">
              Consignment Documentation Guarantee
            </span>
            <h3 className="font-serif-title text-2xl font-bold text-white">
              Complete Export Certification Dossier Provided With Every Consignment
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Every maritime container (Mundra/JNPT) and air cargo dispatch (Delhi IGI) includes: Certificate of Origin, Phytosanitary Certificate, Fumigation Certificate, Packing List, Commercial Invoice, Certificate of Analysis (COA), and optional third-party inspection certificates from SGS, Bureau Veritas, or Intertek.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onInquire}
              className="px-6 py-3 bg-[#C87D20] hover:bg-[#B46F19] text-white font-semibold text-xs sm:text-sm rounded-md transition-all shadow-sm cursor-pointer"
            >
              Inquire About Certifications & Orders
            </button>
          </div>
        </div>

        {/* Certificate Detail Modal */}
        {activeCertificate && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
            <div 
              className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#D9CFC1] my-8 animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
            >
              {/* Modal Header */}
              <div className="bg-[#1B1612] text-white p-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C87D20] text-white flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E59819]">
                      {activeCertificate.code} · {activeCertificate.category}
                    </span>
                    <h3 className="font-serif-title text-xl font-bold text-white">
                      {activeCertificate.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCertificate(null)}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-md bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-5 text-xs text-[#241E19]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#FAF7F2] rounded-lg border border-[#E8DFD1]">
                  <div>
                    <span className="text-[11px] text-[#7A695C] block">Issuing Authority:</span>
                    <p className="font-semibold text-[#1B1612] mt-0.5">{activeCertificate.issuingBody}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#7A695C] block">Registration Number:</span>
                    <p className="font-mono font-bold text-[#C87D20] mt-0.5">{activeCertificate.registrationNo}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#7A695C] block">Registered Facility:</span>
                    <p className="font-semibold text-[#1B1612] mt-0.5">2/26, Kabul Lines, Delhi Cantonment, New Delhi</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#7A695C] block">Audit & Validity Status:</span>
                    <p className="font-semibold text-emerald-700 mt-0.5">{activeCertificate.validity}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-[#8C3A19] tracking-wider mb-1.5">
                    Certified Scope of Operations
                  </h4>
                  <p className="text-sm text-[#4A3E35] leading-relaxed bg-[#FAF7F2] p-3.5 rounded border border-[#E8DFD1]">
                    {activeCertificate.scope}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-[#8C3A19] tracking-wider mb-2">
                    Verified Quality Benchmarks
                  </h4>
                  <ul className="space-y-2">
                    {activeCertificate.standards.map((std, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-2 bg-[#FAF7F2] rounded border border-[#E8DFD1] text-[#241E19]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-[#8C3A19] tracking-wider mb-1">
                    Regulatory Purpose
                  </h4>
                  <p className="text-xs text-[#5A4738] leading-relaxed">
                    {activeCertificate.description}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-[#FAF7F2] p-4 border-t border-[#E8DFD1] flex items-center justify-between">
                <span className="text-[11px] text-[#7A695C]">
                  Official document copies available for accredited import buyers.
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setActiveCertificate(null);
                      onInquire();
                    }}
                    className="px-4 py-2 bg-[#C87D20] text-white text-xs font-semibold rounded hover:bg-[#B46F19]"
                  >
                    Contact Trade Desk
                  </button>
                  <button
                    onClick={() => setActiveCertificate(null)}
                    className="px-4 py-2 bg-white border border-[#D9CFC1] text-[#4A3E35] text-xs font-semibold rounded hover:bg-[#FAF7F2]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
