import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  Award
} from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD1]">
      {/* Top Bar */}
      <div className="bg-[#1B1612] text-[#E8DFD1] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#E59819] font-medium hidden sm:inline">
              Exports to: Taiwan · UAE · Canada · US · London · Australia
            </span>
            <span className="text-[#E59819] font-medium sm:hidden">
              Mehrban Traders Export Desk
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:9911262235" 
              className="flex items-center gap-1 hover:text-white transition-colors text-white font-semibold"
            >
              <Phone className="w-3 h-3 text-[#E59819]" />
              <span>9911262235</span>
            </a>
            <span className="text-neutral-600">·</span>
            <a 
              href="mailto:nehabery@yahoo.com" 
              className="flex items-center gap-1 hover:text-white transition-colors text-neutral-300"
            >
              <Mail className="w-3 h-3 text-[#E59819]" />
              <span className="hidden sm:inline">nehabery@yahoo.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded bg-[#C87D20] flex items-center justify-center text-white font-serif-title text-2xl font-bold shadow-xs">
            M
          </div>
          <div>
            <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#1B1612]">
              MEHRBAN TRADERS
            </span>
            <p className="text-[10px] font-medium uppercase tracking-wider text-[#9E4321] hidden sm:block">
              Spices & Agro Commodities Exporter · Delhi Cantonment
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A3E35]">
          <a href="#catalogue" className="hover:text-[#C87D20] transition-colors py-1">
            Catalogue
          </a>
          <a href="#certificates" className="hover:text-[#C87D20] transition-colors py-1 flex items-center gap-1 text-[#8C3A19] font-semibold">
            <Award className="w-4 h-4 text-[#C87D20]" />
            <span>Certificates</span>
          </a>
          <a href="#quality" className="hover:text-[#C87D20] transition-colors py-1">
            Quality & Hub
          </a>
          <a href="#contact" className="hover:text-[#C87D20] transition-colors py-1">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden sm:block">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#C87D20] hover:bg-[#B46F19] rounded-md transition-all shadow-2xs cursor-pointer"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md border border-[#D9CFC1] text-[#4A3E35]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFD1] px-4 py-4 space-y-2 text-sm font-medium text-[#4A3E35]">
          <a 
            href="#catalogue" 
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2 rounded hover:bg-[#F3EDE2]"
          >
            Product Catalogue
          </a>
          <a 
            href="#certificates" 
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2 rounded hover:bg-[#F3EDE2] font-semibold text-[#8C3A19]"
          >
            Certificates & Standards
          </a>
          <a 
            href="#quality" 
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2 rounded hover:bg-[#F3EDE2]"
          >
            Quality & Delhi Cantonment Hub
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2 rounded hover:bg-[#F3EDE2]"
          >
            Contact Trade Desk
          </a>
        </div>
      )}
    </header>
  );
};
