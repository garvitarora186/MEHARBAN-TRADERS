import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  MapPin, 
  Sparkles, 
  Grid, 
  List, 
  ArrowRight,
  ShieldCheck,
  Mail
} from 'lucide-react';
import { SPICES_CATALOG } from '../data/spicesData';
import { SpiceProduct } from '../types/spice';
import { SpiceModal } from './SpiceModal';

interface SpicesCatalogProps {
  onInquireAboutSpice: (spiceName: string) => void;
}

export const SpicesCatalog: React.FC<SpicesCatalogProps> = ({ onInquireAboutSpice }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSpiceForModal, setSelectedSpiceForModal] = useState<SpiceProduct | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Agro Spices' },
    { id: 'seeds', label: 'Seed Spices (Cumin, Fennel, Coriander)' },
    { id: 'whole', label: 'Whole Spices (Pepper, Chilli, Cassia)' },
    { id: 'exotic', label: 'Exotic & Royal (Cardamom, Saffron, Cloves)' },
    { id: 'roots', label: 'Roots & Curcumin (Turmeric, Ginger)' },
    { id: 'ground', label: 'Ground & Masala Powders' }
  ];

  const filteredSpices = useMemo(() => {
    return SPICES_CATALOG.filter((spice) => {
      const matchesCategory = selectedCategory === 'all' || spice.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        spice.name.toLowerCase().includes(q) ||
        spice.botanicalName.toLowerCase().includes(q) ||
        spice.origin.toLowerCase().includes(q) ||
        spice.grade.toLowerCase().includes(q) ||
        spice.hsCode.toLowerCase().includes(q) ||
        spice.popularDestinations.some(d => d.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="catalogue" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E8DFD1]">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#9E4321] block mb-2">
              Export Product Range
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1B1612] tracking-tight">
              Premium Spice & Agro Commodities Catalogue
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B5A4E]">
              Processed to rigorous international cleanliness standards (ASTA, ESA, US FDA). Cleaned via dual-camera Sortex, steam sterilized, and packaged at our Kabul Lines, Delhi Cantonment facility.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#5A4738]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>FSSAI & Spice Board of India Certified</span>
          </div>
        </div>

        {/* Filter Controls & Search Toolbar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8C7A6E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by spice name, botanical origin, HS code, or market..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#D9CFC1] rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D20] focus:border-[#C87D20] placeholder-[#A39285]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7A6E] hover:text-[#1B1612]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-[#6B5A4E]">
              <span>Showing <strong>{filteredSpices.length}</strong> products</span>
              
              <div className="flex items-center border border-[#D9CFC1] bg-white rounded-md p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#EDE6DB] text-[#1B1612]' : 'text-[#8C7A6E] hover:text-[#1B1612]'}`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-[#EDE6DB] text-[#1B1612]' : 'text-[#8C7A6E] hover:text-[#1B1612]'}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1B1612] text-white shadow-2xs'
                    : 'bg-white text-[#5A4738] border border-[#D9CFC1] hover:bg-[#F3EDE2] hover:text-[#1B1612]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredSpices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E3D9CC] p-8 space-y-3">
            <Filter className="w-8 h-8 text-[#C87D20] mx-auto opacity-60" />
            <h3 className="text-base font-bold text-[#1B1612]">No spices matched your search</h3>
            <p className="text-xs text-[#7A695C] max-w-sm mx-auto">
              We process custom agro commodities not listed in the standard catalog. Contact our Delhi Cantonment desk for specialized procurement.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-2 text-xs font-semibold text-[#C87D20] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpices.map((spice) => (
              <div 
                key={spice.id} 
                className="bg-white rounded-lg border border-[#E3D9CC] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#C87D20]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image with overlay badge */}
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                    <img
                      src={spice.imageUrl}
                      alt={spice.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    <span className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      HS: {spice.hsCode.split('/')[0].trim()}
                    </span>

                    {spice.isFeatured && (
                      <span className="absolute top-2.5 right-2.5 bg-[#C87D20] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        Export Grade
                      </span>
                    )}
                  </div>

                  {/* Content Body */}
                  <div className="p-5 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#8C3A19] font-semibold">
                        <span>{spice.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[11px] text-[#7A695C]">{spice.botanicalName}</span>
                      </div>

                      <h3 className="font-serif-title text-xl font-bold text-[#1B1612] mt-1 group-hover:text-[#9E4321] transition-colors">
                        {spice.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#5A4738] line-clamp-2 leading-relaxed">
                      {spice.description}
                    </p>

                    {/* Origin and Grade highlights */}
                    <div className="space-y-1.5 pt-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[#5A4738]">
                        <MapPin className="w-3.5 h-3.5 text-[#C87D20] shrink-0" />
                        <span className="truncate"><strong>Origin:</strong> {spice.origin}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#5A4738]">
                        <Sparkles className="w-3.5 h-3.5 text-[#C87D20] shrink-0" />
                        <span className="truncate"><strong>Grade:</strong> {spice.grade}</span>
                      </div>
                    </div>

                    {/* Key Technical Specs Box */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8DFD1] text-[11px]">
                      <div className="bg-[#FAF7F2] p-2 rounded border border-[#EDE6DB]">
                        <span className="text-[#7A695C] block">Sortex Purity</span>
                        <span className="font-semibold text-[#1B1612]">{spice.specifications.purity}</span>
                      </div>
                      <div className="bg-[#FAF7F2] p-2 rounded border border-[#EDE6DB]">
                        <span className="text-[#7A695C] block">Moisture Limit</span>
                        <span className="font-semibold text-[#1B1612]">{spice.specifications.moisture}</span>
                      </div>
                    </div>

                    {/* Export Target destinations tags */}
                    <div className="pt-1">
                      <span className="text-[10px] uppercase font-semibold text-[#8C7A6E] block mb-1">
                        Active Export Corridors:
                      </span>
                      <div className="flex flex-wrap gap-1 text-[11px] text-[#4A3E35]">
                        {spice.popularDestinations.slice(0, 4).map((d, i) => (
                          <span key={i} className="bg-[#F3EDE2] px-1.5 py-0.5 rounded text-[10px]">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedSpiceForModal(spice)}
                    className="py-2 px-3 bg-[#F3EDE2] hover:bg-[#E8DFD1] text-[#3A2E26] text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C87D20]" />
                    <span>View Specs</span>
                  </button>

                  <button
                    onClick={() => onInquireAboutSpice(spice.name)}
                    className="py-2 px-3 bg-[#C87D20] hover:bg-[#B46F19] text-white text-xs font-semibold rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-xl border border-[#E3D9CC] overflow-hidden shadow-2xs">
            <div className="divide-y divide-[#E8DFD1]">
              {filteredSpices.map((spice) => (
                <div key={spice.id} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors">
                  <div className="flex items-center gap-4">
                    <img
                      src={spice.imageUrl}
                      alt={spice.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border border-[#D9CFC1] shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-[#8C3A19] font-medium">
                        <span>{spice.categoryLabel}</span>
                        <span>·</span>
                        <span className="font-mono text-[11px] text-[#7A695C]">HS: {spice.hsCode.split('/')[0]}</span>
                      </div>
                      <h4 className="font-serif-title text-lg font-bold text-[#1B1612]">
                        {spice.name}
                      </h4>
                      <p className="text-xs text-[#5A4738]">
                        <strong>Origin:</strong> {spice.origin} | <strong>Purity:</strong> {spice.specifications.purity} | <strong>Moisture:</strong> {spice.specifications.moisture}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center">
                    <button
                      onClick={() => setSelectedSpiceForModal(spice)}
                      className="px-3 py-2 bg-[#F3EDE2] hover:bg-[#E8DFD1] text-[#3A2E26] text-xs font-semibold rounded transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C87D20]" />
                      <span>Full Specs</span>
                    </button>

                    <button
                      onClick={() => onInquireAboutSpice(spice.name)}
                      className="px-4 py-2 bg-[#C87D20] hover:bg-[#B46F19] text-white text-xs font-semibold rounded transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specification Modal */}
        {selectedSpiceForModal && (
          <SpiceModal
            spice={selectedSpiceForModal}
            onClose={() => setSelectedSpiceForModal(null)}
            onInquireAboutSpice={onInquireAboutSpice}
          />
        )}
      </div>
    </section>
  );
};
