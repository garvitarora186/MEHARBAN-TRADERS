import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpicesCatalog } from './components/SpicesCatalog';
import { CertificatesSection } from './components/CertificatesSection';
import { SupplyChain } from './components/SupplyChain';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProductInterest, setSelectedProductInterest] = useState<string>('All Spice Commodities');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalogue = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireAboutSpice = (spiceName: string) => {
    setSelectedProductInterest(spiceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E19] flex flex-col font-sans selection:bg-[#C87D20] selection:text-white">
      {/* Navigation Header */}
      <Header
        onContactClick={scrollToContact}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Concise Hero Section */}
        <Hero
          onContactClick={scrollToContact}
          onExploreCatalog={scrollToCatalogue}
        />

        {/* Product Catalogue & Technical Specs */}
        <SpicesCatalog
          onInquireAboutSpice={handleInquireAboutSpice}
        />

        {/* Quality Certifications (like jaianandfoods.com/#certificates) */}
        <CertificatesSection
          onInquire={scrollToContact}
        />

        {/* Processing Infrastructure & Delhi Cantonment Hub */}
        <SupplyChain />

        {/* Clean Contact & Trade Inquiry Form */}
        <InquiryForm
          initialSubject={selectedProductInterest}
        />
      </main>

      {/* Concise Footer */}
      <Footer
        onContactClick={scrollToContact}
      />
    </div>
  );
}
