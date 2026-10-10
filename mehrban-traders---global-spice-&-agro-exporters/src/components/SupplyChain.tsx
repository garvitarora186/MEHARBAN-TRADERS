import React from 'react';
import { 
  Warehouse, 
  MapPin, 
  Plane, 
  Ship, 
  ShieldCheck, 
  Sparkles, 
  Globe
} from 'lucide-react';

export const SupplyChain: React.FC = () => {
  return (
    <section id="quality" className="py-16 bg-[#FAF7F2] border-b border-[#E8DFD1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E4321] mb-1.5">
            <Warehouse className="w-3.5 h-3.5 text-[#C87D20]" />
            <span>Infrastructure & Supply Chain</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1B1612]">
            Delhi Cantonment Processing Hub & Global Supply Chain
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B5A4E]">
            Operating from our strategically located facility in Delhi Cantonment, we pair Sortex optical sorting and strict quality control with rapid multimodal logistics.
          </p>
        </div>

        {/* 3 Concise Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Facility Location */}
          <div className="bg-white p-5 rounded-lg border border-[#E3D9CC] space-y-3 shadow-2xs">
            <div className="w-9 h-9 rounded bg-[#FAF7F2] text-[#C87D20] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1B1612]">Registered Delhi Cantt Hub</h3>
              <p className="text-xs text-[#5A4738] mt-1">
                <strong>2/26, Kabul Lines, Delhi Cantonment, New Delhi 110010</strong>. Climate-controlled warehousing safeguarding aroma, volatile oils, and moisture levels.
              </p>
            </div>
          </div>

          {/* Card 2: Multimodal Logistics */}
          <div className="bg-white p-5 rounded-lg border border-[#E3D9CC] space-y-3 shadow-2xs">
            <div className="w-9 h-9 rounded bg-[#FAF7F2] text-[#C87D20] flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1B1612]">Multimodal Speed</h3>
              <p className="text-xs text-[#5A4738] mt-1">
                Just <strong>10 minutes to IGI International Airport Cargo Terminal</strong> for air cargo (Saffron & Cardamom), plus bonded ICD rail lines direct to Mundra and JNPT seaports.
              </p>
            </div>
          </div>

          {/* Card 3: Export Destinations */}
          <div className="bg-white p-5 rounded-lg border border-[#E3D9CC] space-y-3 shadow-2xs">
            <div className="w-9 h-9 rounded bg-[#FAF7F2] text-[#C87D20] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#1B1612]">Target Export Markets</h3>
              <p className="text-xs text-[#5A4738] mt-1">
                Routine FCL & LCL shipments to <strong>Taiwan, UAE, Canada, US, London (UK), and Australia</strong> with full phytosanitary clearance and certificate of origin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
