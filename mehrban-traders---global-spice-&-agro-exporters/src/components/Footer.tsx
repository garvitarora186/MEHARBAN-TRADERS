import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp,
  Award
} from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14100C] text-[#D4C8B8] border-t border-neutral-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-neutral-800">
          {/* Brand & Address */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#C87D20] flex items-center justify-center text-white font-serif-title text-lg font-bold">
                M
              </div>
              <span className="font-serif-title text-xl font-bold text-white tracking-tight">
                MEHRBAN TRADERS
              </span>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
              Indian Spices & Agro Commodities Exporters. Sourced from India's key mandis and exported to Taiwan, UAE, Canada, US, UK, and Australia.
            </p>

            <div className="text-xs text-neutral-300 space-y-1 pt-1">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F0B24C] shrink-0 mt-0.5" />
                <span>2/26, Kabul Lines, Delhi Cantonment, New Delhi, Delhi 110010</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#F0B24C] shrink-0" />
                <a href="tel:9911262235" className="hover:text-white font-mono">9911262235</a>
                <span className="text-neutral-600">·</span>
                <Mail className="w-3.5 h-3.5 text-[#F0B24C] shrink-0" />
                <a href="mailto:nehabery@yahoo.com" className="hover:text-white font-mono">nehabery@yahoo.com</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-neutral-400">
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Product Catalogue
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-white transition-colors flex items-center gap-1 text-[#F0B24C]">
                  <Award className="w-3 h-3" />
                  <span>Certificates</span>
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors">
                  Quality & Hub
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Trade Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Commercial Desk
            </h4>
            <p className="text-neutral-400 text-xs">
              Direct inquiries for container orders and specification sheets.
            </p>
            <button
              onClick={onContactClick}
              className="w-full py-2 px-3 bg-[#C87D20] hover:bg-[#B46F19] text-white rounded font-medium text-xs transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Mehrban Traders. 2/26, Kabul Lines, Delhi Cantonment 110010.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
