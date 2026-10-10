import React from 'react';
import { ArrowRight, Award, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreCatalog }) => {
  return (
    <section className="relative overflow-hidden bg-[#1B1612] text-white py-16 lg:py-20">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=80" 
          alt="Authentic Indian Spices" 
          className="w-full h-full object-cover object-center filter saturate-150"
        />
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#14100C] via-[#1B1612]/95 to-[#14100C]/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E59819] bg-[#C87D20]/15 border border-[#C87D20]/30 px-3.5 py-1 rounded-sm">
          <Award className="w-3.5 h-3.5" />
          <span>Mehrban Traders · Delhi Cantonment, New Delhi</span>
        </div>

        {/* Title */}
        <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#FAF7F2]">
          Finest Indian Spices & Agro Commodities
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F0B24C] via-[#E59819] to-[#C87D20]">
            Exported With Certified Purity
          </span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Sourced directly from India's premier farming origins and processed to international food safety standards at our registered facility in Delhi Cantonment.
        </p>

        {/* Target Export Countries clean text strip */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-neutral-300 font-medium">
          <span className="text-neutral-500 uppercase text-[11px] tracking-wider">Export Markets:</span>
          <span>🇹🇼 Taiwan</span>
          <span className="text-neutral-600">·</span>
          <span>🇦🇪 UAE</span>
          <span className="text-neutral-600">·</span>
          <span>🇨🇦 Canada</span>
          <span className="text-neutral-600">·</span>
          <span>🇺🇸 United States</span>
          <span className="text-neutral-600">·</span>
          <span>🇬🇧 London (UK)</span>
          <span className="text-neutral-600">·</span>
          <span>🇦🇺 Australia</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={onExploreCatalog}
            className="px-6 py-3 bg-[#C87D20] hover:bg-[#B46F19] text-white font-semibold text-xs sm:text-sm rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>View Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#certificates"
            className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white border border-neutral-700/80 font-medium text-xs sm:text-sm rounded-md transition-all"
          >
            Our Certificates
          </a>

          <button
            onClick={onContactClick}
            className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/60 font-medium text-xs sm:text-sm rounded-md transition-all cursor-pointer"
          >
            Contact Trade Desk
          </button>
        </div>

        {/* Concise trust markers */}
        <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            99.8% Sortex Optical Purity
          </span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            APEDA & Spice Board Certified
          </span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ISO 22000 & HACCP Standards
          </span>
        </div>
      </div>
    </section>
  );
};
