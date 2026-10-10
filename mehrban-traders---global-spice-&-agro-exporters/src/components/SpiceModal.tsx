import React from 'react';
import { 
  X, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Ship, 
  Globe,
  Mail,
  ArrowRight
} from 'lucide-react';
import { SpiceProduct } from '../types/spice';

interface SpiceModalProps {
  spice: SpiceProduct | null;
  onClose: () => void;
  onInquireAboutSpice: (spiceName: string) => void;
}

export const SpiceModal: React.FC<SpiceModalProps> = ({ 
  spice, 
  onClose, 
  onInquireAboutSpice
}) => {
  if (!spice) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-[#D9CFC1] my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4A3E35] flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Image & Key Attributes Column */}
          <div className="md:col-span-5 bg-[#FAF7F2] p-6 border-b md:border-b-0 md:border-r border-[#E8DFD1] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E3D9CC] shadow-inner">
                <img
                  src={spice.imageUrl}
                  alt={spice.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                  HS: {spice.hsCode}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9E4321]">
                  {spice.categoryLabel}
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-[#1B1612]">
                  {spice.name}
                </h3>
                {spice.hindiName && (
                  <p className="text-xs text-[#8C7A6E] font-medium mt-0.5">
                    {spice.hindiName}
                  </p>
                )}
                <p className="text-xs italic text-[#5A4738] mt-1 font-mono">
                  {spice.botanicalName}
                </p>
              </div>

              <div className="p-3 bg-white rounded-md border border-[#E8DFD1] text-xs space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C87D20] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1B1612]">Origin Harvest Mandi:</span>
                    <p className="text-[#5A4738]">{spice.origin}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#C87D20] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1B1612]">Export Grade:</span>
                    <p className="text-[#5A4738]">{spice.grade}</p>
                  </div>
                </div>
              </div>

              {/* Destination tags */}
              <div className="space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C3A19] flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  Primary Export Destinations
                </span>
                <div className="flex flex-wrap gap-1">
                  {spice.popularDestinations.map((dest, i) => (
                    <span 
                      key={i}
                      className="text-[11px] bg-white border border-[#D9CFC1] text-[#4A3E35] px-2 py-0.5 rounded font-medium"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications badges */}
            <div className="pt-4 border-t border-[#E8DFD1] mt-4">
              <span className="text-[10px] uppercase font-bold text-[#7A695C] block mb-1">
                Quality Compliance
              </span>
              <div className="flex flex-wrap gap-1 text-[11px] text-[#2D5A3C] font-medium">
                {spice.certifications.map((cert, idx) => (
                  <span key={idx} className="bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Technical Specifications & Direct Inquiry Action */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#8C3A19]">
                  Product Description & Processing
                </h4>
                <p className="mt-1.5 text-sm text-[#4A3E35] leading-relaxed">
                  {spice.description}
                </p>
              </div>

              {/* Key Features Bullet points */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#8C3A19]">
                  Key Export Characteristics
                </h4>
                <ul className="mt-2 space-y-1.5 text-xs text-[#4A3E35]">
                  {spice.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C87D20] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Lab Parameters Table */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#8C3A19] flex items-center justify-between">
                  <span>Technical Assay & Analytical Parameters</span>
                  <span className="text-[10px] text-[#7A695C] font-mono">ASTA / ISO Standards</span>
                </h4>

                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1]">
                    <span className="text-[11px] text-[#7A695C] block">Purity</span>
                    <span className="font-semibold text-[#1B1612]">{spice.specifications.purity}</span>
                  </div>

                  <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1]">
                    <span className="text-[11px] text-[#7A695C] block">Moisture</span>
                    <span className="font-semibold text-[#1B1612]">{spice.specifications.moisture}</span>
                  </div>

                  <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1]">
                    <span className="text-[11px] text-[#7A695C] block">Foreign Matter</span>
                    <span className="font-semibold text-[#1B1612]">{spice.specifications.extrinsicMatter}</span>
                  </div>

                  {spice.specifications.volatileOil && (
                    <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1]">
                      <span className="text-[11px] text-[#7A695C] block">Volatile Oil</span>
                      <span className="font-semibold text-[#1B1612]">{spice.specifications.volatileOil}</span>
                    </div>
                  )}

                  {spice.specifications.curcuminContent && (
                    <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1]">
                      <span className="text-[11px] text-[#7A695C] block">Curcumin Content</span>
                      <span className="font-semibold text-[#9E4321]">{spice.specifications.curcuminContent}</span>
                    </div>
                  )}

                  {spice.specifications.scovilleHeatUnits && (
                    <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1]">
                      <span className="text-[11px] text-[#7A695C] block">Heat Value (SHU)</span>
                      <span className="font-semibold text-rose-700">{spice.specifications.scovilleHeatUnits}</span>
                    </div>
                  )}

                  <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8DFD1] col-span-2 sm:col-span-3">
                    <span className="text-[11px] text-[#7A695C] block">Aroma & Visual Profile</span>
                    <span className="font-medium text-[#1B1612]">{spice.specifications.aroma} ({spice.specifications.color})</span>
                  </div>
                </div>
              </div>

              {/* Packaging & Container Stuffing Specs */}
              <div className="p-3.5 bg-[#FAF7F2] rounded-lg border border-[#E8DFD1] text-xs space-y-2">
                <div>
                  <span className="font-semibold text-[#1B1612] block mb-1">Standard Packaging:</span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-[#5A4738]">
                    {spice.packagingOptions.map((opt, i) => (
                      <span key={i} className="bg-white px-2 py-0.5 rounded border border-[#D9CFC1]">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8DFD1] text-xs text-[#5A4738]">
                  <div className="flex items-center gap-1.5">
                    <Ship className="w-3.5 h-3.5 text-[#C87D20]" />
                    <span>20ft FCL: <strong>{spice.containerLoading.fcl20ft}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Ship className="w-3.5 h-3.5 text-[#C87D20]" />
                    <span>40ft FCL: <strong>{spice.containerLoading.fcl40ft}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Inquire Action */}
            <div className="pt-4 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FFFBF5] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8">
              <div>
                <span className="text-xs font-bold text-[#8C3A19] block">
                  Looking to source {spice.name}?
                </span>
                <p className="text-xs text-[#6B5A4E]">
                  Contact our Delhi Cantonment export desk directly for current availability & specifications.
                </p>
              </div>

              <button
                onClick={() => {
                  onInquireAboutSpice(spice.name);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#C87D20] hover:bg-[#B46F19] text-white text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Inquire About {spice.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
