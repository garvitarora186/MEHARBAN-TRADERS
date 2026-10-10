import { SpiceProduct } from '../types/spice';

export const SPICES_CATALOG: SpiceProduct[] = [
  {
    id: 'cumin-seeds',
    name: 'Indian Cumin Seeds (Jeera)',
    hindiName: 'ज़ीरा (Jeera)',
    botanicalName: 'Cuminum cyminum',
    category: 'seeds',
    categoryLabel: 'Seed Spices',
    origin: 'Unjha, Gujarat / Rajasthan, India',
    hsCode: '09093129 / 09093200',
    grade: 'Singapore Quality (99.5% Purity) & Europe Quality (99.8% Sortex)',
    description: 'Premier sun-dried, Sortex optical-cleaned cumin seeds characterized by an earthy, warm aroma and high essential oil content. Sourced directly from the legendary mandis of Unjha.',
    keyFeatures: [
      'Machine cleaned & double Sortex sorted',
      'Extremely low extraneous foreign matter (<0.2%)',
      'Rich in cuminaldehyde essential oil (>2.5%)',
      'No pesticide residues, ASTA compliant'
    ],
    specifications: {
      purity: '99.5% to 99.8% Min',
      moisture: '8.0% - 9.0% Max',
      extrinsicMatter: '0.2% Max',
      volatileOil: '2.5% - 3.5% v/w Min',
      aroma: 'Pungent, warm, intensely herbal aromatic',
      color: 'Uniform light greenish-brown'
    },
    packagingOptions: ['25 kg / 50 kg PP bags', 'Multi-wall kraft paper bags', 'Jute bags with inner poly-liner', 'Custom retail packing (500g - 5kg)'],
    containerLoading: {
      fcl20ft: '13 to 14.5 Metric Tons',
      fcl40ft: '26 to 28 Metric Tons'
    },
    certifications: ['FSSAI', 'Spice Board of India', 'APEDA', 'Phytosanitary', 'SGS Inspected'],
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['UAE', 'Taiwan', 'United States', 'Australia', 'Canada', 'London & UK'],
    isFeatured: true
  },
  {
    id: 'green-cardamom',
    name: 'Malabar & Alleppey Green Cardamom',
    hindiName: 'हरी इलायची (Chhoti Elaichi)',
    botanicalName: 'Elettaria cardamomum',
    category: 'exotic',
    categoryLabel: 'Exotic & Royal',
    origin: 'Idukki, Western Ghats, Kerala, India',
    hsCode: '09083100',
    grade: 'Jumbo Bold (8mm+), Super Bold (7.5 - 8mm), Bold (7 - 7.5mm)',
    description: 'The undisputed "Queen of Spices". Hand-harvested from high-altitude mist-shrouded plantations in Kerala, shade-cured in temperature-controlled curing chambers to retain brilliant emerald color and camphor-sweet zest.',
    keyFeatures: [
      'Diameter sorted: 7mm, 7.5mm, 8mm & 8.5mm Jumbo',
      'High volatile oil content with lingering sweet floral notes',
      'Zero artificial dye or coloring added (natural cured green)',
      'Airtight nitrogen/vacuum packaging available for air cargo'
    ],
    specifications: {
      purity: '99.5% Min',
      moisture: '9.0% - 10.5% Max',
      extrinsicMatter: '0.5% Max',
      volatileOil: '6.0% - 8.5% v/w Min',
      aroma: 'Intensely fragrant, sweet eucalyptus & citrus undertones',
      color: 'Vibrant natural deep emerald green'
    },
    packagingOptions: ['5 kg Master cartons with vacuum foil pouches', '10 kg & 25 kg Food-grade corrugated cartons', 'Custom hermetic nitrogen-flushed tins'],
    containerLoading: {
      fcl20ft: '10 to 11 Metric Tons',
      fcl40ft: '22 Metric Tons / Express Air Freight palletized'
    },
    certifications: ['Spice Board of India', 'HACCP', 'FSSAI', 'Halal', 'Organic Certificate on demand'],
    imageUrl: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['UAE', 'London & UK', 'Canada', 'United States', 'Australia'],
    isFeatured: true
  },
  {
    id: 'tellicherry-black-pepper',
    name: 'Tellicherry Black Pepper (TGSEB / TGL)',
    hindiName: 'काली मिर्च (Kali Mirch)',
    botanicalName: 'Piper nigrum',
    category: 'whole',
    categoryLabel: 'Whole Spices',
    origin: 'Malabar Coast & Wayanad, Kerala, India',
    hsCode: '09041110 / 09041120',
    grade: 'Tellicherry Garbled Special Extra Bold (TGSEB 4.75mm+) & TGL',
    description: 'Revered as the world\'s finest black peppercorns, Tellicherry berries are left on the vine longer to ripen before careful harvesting. Delivers complex, rich fruity warmth with intense piperine bite.',
    keyFeatures: [
      'Screened berry size exceeding 4.25mm to 4.75mm',
      'High piperine concentration (4.5% - 6%)',
      'Steam sterilized (ETO free) for US FDA & EU import compliance',
      'Bulk density 550 g/l to 580 g/l garbled'
    ],
    specifications: {
      purity: '99.0% - 99.5% Min',
      moisture: '11.0% - 12.0% Max',
      extrinsicMatter: '0.5% Max',
      volatileOil: '2.5% - 3.8% v/w Min',
      aroma: 'Pungent, deep woody, resinous and floral citrus',
      color: 'Uniform dark brown to deep wrinkled black'
    },
    packagingOptions: ['25 kg / 50 kg 3-ply kraft paper bags with PE liner', 'Jute bags 50 kg', 'Bulk big bags (500kg - 1000kg)'],
    containerLoading: {
      fcl20ft: '14 to 15 Metric Tons',
      fcl40ft: '27 to 28 Metric Tons'
    },
    certifications: ['ASTA Clean', 'ESA Compliant', 'Spice Board of India', 'FSSAI', 'SGS Pre-shipment'],
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['United States', 'Canada', 'London & UK', 'Australia', 'Taiwan'],
    isFeatured: true
  },
  {
    id: 'red-chilli-teja-sanam',
    name: 'Guntur Dry Red Chilli (Teja & Sanam S4)',
    hindiName: 'लाल मिर्च (Lal Mirch)',
    botanicalName: 'Capsicum annuum',
    category: 'whole',
    categoryLabel: 'Whole Spices',
    origin: 'Guntur, Andhra Pradesh & Warangal, Telangana, India',
    hsCode: '09042110 / 09042120',
    grade: 'Teja S17 (Stemless / With Stem) & Sanam S4 / 334',
    description: 'Renowned globally for fiery pungency and vivid crimson color value. Guntur is the chili capital of Asia, producing pods with exceptional Scoville heat units and natural ASTA color.',
    keyFeatures: [
      'Available with stem, stem-cut, or 100% stemless',
      'High ASTA color value (50 to 120 ASTA)',
      'Scoville Heat Units ranging 20,000 to 75,000 SHU',
      'Strictly tested for zero Sudan dye and low aflatoxin'
    ],
    specifications: {
      purity: '99.0% Min',
      moisture: '10.0% - 11.5% Max',
      extrinsicMatter: '1.0% Max',
      scovilleHeatUnits: '25,000 - 75,000 SHU (Teja High Heat)',
      aroma: 'Fiery, sharp pungent and smoky sweet',
      color: 'Deep vibrant blood red'
    },
    packagingOptions: ['5 kg / 10 kg / 25 kg Compressed Jute Bales', 'PP woven bags 10kg to 25kg', 'Carton boxes for stemless quality'],
    containerLoading: {
      fcl20ft: '6.5 to 7.5 Metric Tons (Volume commodity)',
      fcl40ft: '14 to 15 Metric Tons (40ft High Cube)'
    },
    certifications: ['Spice Board of India', 'APEDA', 'Non-Sudan Dye Certified', 'Aflatoxin Lab Tested'],
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['Taiwan', 'United States', 'UAE', 'Canada', 'Australia'],
    isFeatured: true
  },
  {
    id: 'turmeric-fingers-powder',
    name: 'Salem & Nizamabad Golden Turmeric',
    hindiName: 'हल्दी (Haldi)',
    botanicalName: 'Curcuma longa',
    category: 'roots',
    categoryLabel: 'Roots & Curcumin',
    origin: 'Salem, Tamil Nadu & Nizamabad, Telangana, India',
    hsCode: '09103020 (Whole Fingers) / 09103030 (Powder)',
    grade: 'Salem Double Polished Fingers & Nizamabad Bulbs / 5%+ Curcumin Powder',
    description: 'Selected rhizomes washed, boiled, sun-cured, and mechanically polished. Blessed with high natural curcuminoids prized both in international culinary seasoning and nutraceutical formulations.',
    keyFeatures: [
      'High active Curcumin (3.5% up to 5.5% laboratory certified)',
      'Double polished fingers with bright yellow interior core',
      'Heavy lead & chromate free, clean lab verification',
      'Available in whole whole fingers, finger splits, and ultra-fine mesh powder'
    ],
    specifications: {
      purity: '99.0% Min',
      moisture: '9.0% - 10.0% Max',
      extrinsicMatter: '0.5% Max',
      curcuminContent: '3.5% - 5.5% HPLC Tested',
      aroma: 'Warm, peppery, earthy musk with ginger nuances',
      color: 'Intense radiant golden orange-yellow'
    },
    packagingOptions: ['25 kg / 50 kg PP bags with inner polyethylene', 'Multi-ply paper bags for powdered spice', '500kg Big tote bags'],
    containerLoading: {
      fcl20ft: '18 Metric Tons (Fingers) / 19 MT (Powder)',
      fcl40ft: '27 Metric Tons'
    },
    certifications: ['ISO 22000', 'APEDA Registered', 'Heavy Metals Free (ICP-MS)', 'FSSAI'],
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['Taiwan', 'Canada', 'United States', 'London & UK', 'Australia'],
    isFeatured: true
  },
  {
    id: 'coriander-seeds',
    name: 'Indian Coriander Seeds (Dhania)',
    hindiName: 'धनिया (Dhania)',
    botanicalName: 'Coriandrum sativum',
    category: 'seeds',
    categoryLabel: 'Seed Spices',
    origin: 'Kota & Ramganj Mandi, Rajasthan / Madhya Pradesh, India',
    hsCode: '09092110 / 09092200',
    grade: 'Eagle Quality, Badami Quality & Scooter / Green Sortex',
    description: 'Plump, aromatic whole coriander seeds from the fertile river plains of Rajasthan. Highly valued for sweet citrusy fragrance and mild herbal warmth in spice grinding and brewing.',
    keyFeatures: [
      'Eagle & Badami grades with high split-resistance',
      'Delicate, sweet citrus-floral volatile oil (>0.4%)',
      'Sortex sorted with zero insect-damaged seeds',
      'Light golden-tan kernel color without sulfur bleaching'
    ],
    specifications: {
      purity: '99.0% - 99.5% Min',
      moisture: '9.0% Max',
      extrinsicMatter: '0.5% Max',
      volatileOil: '0.4% - 0.7% v/w',
      aroma: 'Sweet, citrus-like, gently woody',
      color: 'Uniform light brownish golden green'
    },
    packagingOptions: ['20 kg / 25 kg / 40 kg PP Bags or Jute Bags', 'Custom vacuum bales'],
    containerLoading: {
      fcl20ft: '9.5 to 10.5 Metric Tons',
      fcl40ft: '20 to 22 Metric Tons'
    },
    certifications: ['Spice Board of India', 'FSSAI', 'Phytosanitary Clean'],
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['Taiwan', 'UAE', 'London & UK', 'Canada'],
    isFeatured: false
  },
  {
    id: 'fennel-seeds',
    name: 'Fennel Seeds (Saunf - Lucknow & Green)',
    hindiName: 'सौंफ (Saunf)',
    botanicalName: 'Foeniculum vulgare',
    category: 'seeds',
    categoryLabel: 'Seed Spices',
    origin: 'Gujarat & Rajasthan, India',
    hsCode: '09096139 / 09096230',
    grade: 'Green Sweet Extra Bold, Lucknow Quality & Machine Cleaned 99%',
    description: 'Crisp, aromatic fennel seeds with high anethole oil content lending an authentic sweet licorice bouquet. Sourced from choice winter harvests and gently dried.',
    keyFeatures: [
      'Natural delicate green hue without synthetic color coating',
      'Sweet anise-like refreshing aftertaste',
      'Extensively sorted for uniform seed elongation and cleanliness'
    ],
    specifications: {
      purity: '99.0% - 99.5% Min',
      moisture: '8.5% - 9.5% Max',
      extrinsicMatter: '0.5% Max',
      volatileOil: '1.5% - 2.5% Min',
      aroma: 'Sweet, warm, licorice-like, refreshing aniseed',
      color: 'Light green to golden olive'
    },
    packagingOptions: ['25 kg / 50 kg PP bags', 'Multiwall paper sacks', 'Retail branded containers'],
    containerLoading: {
      fcl20ft: '13 Metric Tons',
      fcl40ft: '26 Metric Tons'
    },
    certifications: ['FSSAI', 'Spice Board of India', 'HACCP'],
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['UAE', 'Australia', 'United States', 'Canada', 'London & UK'],
    isFeatured: false
  },
  {
    id: 'cloves-handpicked',
    name: 'Zanzibar & Indian Hand-Picked Cloves (Laung)',
    hindiName: 'लौंग (Laung)',
    botanicalName: 'Syzygium aromaticum',
    category: 'exotic',
    categoryLabel: 'Exotic & Royal',
    origin: 'Kanyakumari & Nilgiris, Tamil Nadu, India',
    hsCode: '09071000 / 09072000',
    grade: 'Hand Picked Selected (HPS) & Lal Pari Grade',
    description: 'Unopened flower buds dried to aromatic perfection. Packed with eugenol essential oil, plump with intact crowns and deep reddish-brown stems.',
    keyFeatures: [
      'Intact full flower heads (crowns) > 92%',
      'Exceptional eugenol oil content (>17% - 19%)',
      'No headless stems or Mother cloves adulteration',
      'Sinks in water (indicator of premium oil density)'
    ],
    specifications: {
      purity: '99.0% Min',
      moisture: '10.5% - 11.5% Max',
      extrinsicMatter: '0.5% Max',
      volatileOil: '16.0% - 19.0% v/w Min',
      aroma: 'Pungent, warm, sweet aromatic with medicinal freshness',
      color: 'Rich mahogany reddish-brown'
    },
    packagingOptions: ['10 kg / 25 kg / 50 kg Cartons & Jute bags with inner poly liner'],
    containerLoading: {
      fcl20ft: '11 to 12 Metric Tons',
      fcl40ft: '24 Metric Tons'
    },
    certifications: ['Spice Board', 'Phytosanitary', 'FSSAI'],
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['UAE', 'United States', 'London & UK', 'Australia'],
    isFeatured: false
  },
  {
    id: 'kashmiri-saffron',
    name: 'Kashmiri Mongra Saffron (Grade A1)',
    hindiName: 'कश्मीरी केसर (Kesar)',
    botanicalName: 'Crocus sativus',
    category: 'exotic',
    categoryLabel: 'Exotic & Royal',
    origin: 'Pampore, Kashmir Valley, India',
    hsCode: '09102010 / 09102090',
    grade: 'GI Tagged Mongra Super Grade (Pure Stigma Only)',
    description: 'The world\'s most prized spice. Harvested exclusively in the plateau soils of Pampore, Kashmir. Possesses the highest natural safranal and crocin levels, deep dark purple-crimson strands with intense coloring strength.',
    keyFeatures: [
      '100% pure thick trumpet-shaped crimson stigmas (no yellow style threads)',
      'Crocin coloring strength > 230 to 250 (ISO 3632 Category I)',
      'Packaged in Delhi Cantonment under hermetic vacuum nitrogen condition',
      'Express air delivery to UAE, US, UK, Canada, Australia within 48h'
    ],
    specifications: {
      purity: '100% Pure Crocus sativus',
      moisture: '7.0% Max',
      extrinsicMatter: '0.0% Nil',
      volatileOil: 'Safranal aroma > 35, Picrocrocin bitter > 80',
      aroma: 'Sublime, honeyed, bittersweet hay-like floral',
      color: 'Deep blood-crimson with golden tips'
    },
    packagingOptions: ['Airtight acrylic boxes (1g, 5g, 10g, 25g)', '100g & 500g vacuum sealed metal tins', '1 kg export bulk master cases'],
    containerLoading: {
      fcl20ft: 'Shipped exclusively via Temperature-Controlled Air Cargo with security tracking',
      fcl40ft: 'Air freight express'
    },
    certifications: ['GI Tag Kashmir Saffron', 'ISO 3632 Lab Grade 1 Test Report', 'FSSAI Export'],
    imageUrl: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['UAE', 'United States', 'London & UK', 'Australia', 'Canada'],
    isFeatured: true
  },
  {
    id: 'star-anise-cinnamon',
    name: 'Star Anise & Ceylon Cinnamon Quills',
    hindiName: 'चक्र फूल व दालचीनी (Chakra Phool & Dalchini)',
    botanicalName: 'Illicium verum & Cinnamomum verum',
    category: 'whole',
    categoryLabel: 'Whole Spices',
    origin: 'Northeast Hills & South India',
    hsCode: '09096149 / 09061100',
    grade: 'Whole 8-point Stars (>85% unbroken) & Alba / C5 Special Cinnamon Quills',
    description: 'Flawlessly formed 8-point star anise pods alongside aromatic multi-layered cinnamon quills. Delivers delicate sweetness and warm licorice spice to gourmet seasoning and bakery.',
    keyFeatures: [
      'High percentage of whole unbroken star carpophores',
      'Authentic low-coumarin Ceylon cinnamon sticks available',
      'Hand-sorted and gently packed in cushioned export cartons'
    ],
    specifications: {
      purity: '98.5% - 99.0% Min',
      moisture: '10.0% Max',
      extrinsicMatter: '0.8% Max',
      aroma: 'Warm, spicy-sweet, fragrant woody anethole bouquet',
      color: 'Warm reddish-tan to dark autumn amber'
    },
    packagingOptions: ['10 kg / 20 kg Master Cartons', 'Jute bags with inner poly lining'],
    containerLoading: {
      fcl20ft: '6.5 Metric Tons (Star Anise) / 9 MT (Cinnamon)',
      fcl40ft: '14 Metric Tons'
    },
    certifications: ['Spice Board of India', 'FSSAI', 'Phytosanitary'],
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['London & UK', 'Canada', 'United States', 'Taiwan', 'Australia'],
    isFeatured: false
  },
  {
    id: 'ground-spices-powders',
    name: 'Custom Ground Spices & Pure Masala Powders',
    hindiName: 'पिसे हुए मसाले (Pise Masale)',
    botanicalName: 'Custom culinary botanical blends',
    category: 'ground',
    categoryLabel: 'Ground & Powders',
    origin: 'Delhi Cantonment Processing Hub, New Delhi, India',
    hsCode: '09109100 / 09109929',
    grade: 'Cold-Micro-Pulverized 60 - 100 Mesh Fineness',
    description: 'Custom cryogenic and cool-hammer milled pure spice powders: Pure Turmeric Powder, Extra Pungent Chilli Powder, Roasted Cumin Powder, Garam Masala, and bespoke curry blends tailored to importer specifications.',
    keyFeatures: [
      'Cryogenic / cool grinding preserves volatile aromatic oils',
      'Sieve-tested mesh size (60 to 100 mesh) for silk-smooth dispersibility',
      'Zero starch, flour or foreign color adulteration',
      'Private label contract packaging available for overseas supermarket brands'
    ],
    specifications: {
      purity: '100% Pure Single Origin or Formulated Blend',
      moisture: '7.5% - 9.0% Max',
      extrinsicMatter: 'Nil',
      aroma: 'Freshly ground, highly volatile aromatic bouquet',
      color: 'Rich, natural, unbleached spice tones'
    },
    packagingOptions: ['20 kg / 25 kg Multi-wall Kraft paper sacks with barrier foil liner', 'Private label retail pouches (100g, 200g, 500g, 1kg) with zipper seals'],
    containerLoading: {
      fcl20ft: '16 to 18 Metric Tons',
      fcl40ft: '26 to 27 Metric Tons'
    },
    certifications: ['FSSAI Central Export License', 'ISO 22000', 'HACCP', 'Halal', 'US FDA Facility Registered'],
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['United States', 'Canada', 'London & UK', 'Australia', 'UAE', 'Taiwan'],
    isFeatured: true
  },
  {
    id: 'mustard-fenugreek-seeds',
    name: 'Mustard (Rai) & Fenugreek Seeds (Methi)',
    hindiName: 'राई व मेथी दाना (Rai & Methi)',
    botanicalName: 'Brassica nigra & Trigonella foenum-graecum',
    category: 'seeds',
    categoryLabel: 'Seed Spices',
    origin: 'Rajasthan & Madhya Pradesh, India',
    hsCode: '12075000 / 09109912',
    grade: 'Machine Cleaned & Sortex 99.5% Clean',
    description: 'Golden Yellow and Bold Brown Mustard seeds paired with aromatic golden-amber Fenugreek seeds. Pungent sinigrin oil for mustard and high dietary saponin / maple aroma for fenugreek.',
    keyFeatures: [
      'Uniform seed morphology and low seed split count',
      'Double Sortex passed for stone and clay free output',
      'Meets strict biosecurity regulations for Australia and Canada'
    ],
    specifications: {
      purity: '99.0% - 99.5% Min',
      moisture: '8.0% - 9.0% Max',
      extrinsicMatter: '0.5% Max',
      aroma: 'Sharp pungent (Mustard) / Bitter-sweet maple (Fenugreek)',
      color: 'Glossy dark brown / radiant golden yellow'
    },
    packagingOptions: ['25 kg / 50 kg PP bags', 'Jute bags with poly liner'],
    containerLoading: {
      fcl20ft: '18 Metric Tons',
      fcl40ft: '26 Metric Tons'
    },
    certifications: ['Spice Board of India', 'FSSAI', 'Phytosanitary'],
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    popularDestinations: ['Australia', 'Canada', 'United States', 'London & UK'],
    isFeatured: false
  }
];
