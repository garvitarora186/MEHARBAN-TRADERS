import { ExportCountry } from '../types/spice';

export const EXPORT_COUNTRIES: ExportCountry[] = [
  {
    id: 'taiwan',
    country: 'Taiwan',
    flag: '🇹🇼',
    majorPorts: ['Kaohsiung Port', 'Keelung Port', 'Taichung Port', 'Taipei Airport (TPE)'],
    avgSeaTransit: '14 - 18 Days',
    airTransit: '24 - 48 Hours',
    topDemandedSpices: ['Curcumin Turmeric', 'Guntur Red Chilli', 'White Sesame Seeds', 'Coriander Seeds'],
    regulatoryBodies: ['TFDA (Taiwan Food & Drug Admin)', 'BAPHIQ (Quarantine)'],
    certificationsRequired: ['Phytosanitary Certificate', 'SGS Non-GMO & Pesticide Residue Pass', 'Certificate of Origin'],
    customsNote: 'Strict maximum pesticide residue limits (MRLs) routinely verified through pre-shipment accredited lab tests.',
    marketHighlights: 'Heavy demand from Taiwanese food processors, traditional herbal industries, and bubble tea / seasoning formulations.'
  },
  {
    id: 'uae',
    country: 'UAE & Middle East',
    flag: '🇦🇪',
    majorPorts: ['Jebel Ali Port (Dubai)', 'Khalifa Port (Abu Dhabi)', 'Sharjah Port', 'Dubai Int’l Cargo (DXB)'],
    avgSeaTransit: '4 - 6 Days',
    airTransit: 'Same Day / 18 Hours',
    topDemandedSpices: ['Green Cardamom Bold 8mm', 'Cumin Seeds 99.5%', 'Cloves', 'Kashmiri Saffron', 'Fennel'],
    regulatoryBodies: ['Dubai Municipality Food Safety', 'ESMA (Emirates Authority)', 'MoIAT'],
    certificationsRequired: ['Halal Certification', 'Health Certificate', 'Phytosanitary', 'FSSAI Export Clearance'],
    customsNote: 'Ultra-fast sea clearance via Mundra/Nhava Sheva to Jebel Ali. Full compliance with GCC Food Safety standards.',
    marketHighlights: 'High-volume re-export gateway and luxury retail market requiring highest aesthetic grades and aroma preservation.'
  },
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    majorPorts: ['Port of Vancouver', 'Port of Montreal', 'Prince Rupert', 'Toronto Pearson Cargo (YYZ)'],
    avgSeaTransit: '22 - 28 Days',
    airTransit: '36 - 48 Hours',
    topDemandedSpices: ['Tellicherry Black Pepper', 'Organic Turmeric High Curcumin', 'Fenugreek', 'Yellow Mustard'],
    regulatoryBodies: ['CFIA (Canadian Food Inspection Agency)', 'Health Canada'],
    certificationsRequired: ['CFIA Import Declaration', 'Phytosanitary Inspection', 'Certificate of Origin', 'Purity Test'],
    customsNote: 'Moisture content strictly regulated under 10-12% for seed spices to eliminate risk of condensation during sea freight.',
    marketHighlights: 'Rapidly growing South Asian diaspora and mainstream organic supermarket chain procurement.'
  },
  {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    majorPorts: ['Port of New York & New Jersey', 'Port of Houston', 'Port of Los Angeles/Long Beach', 'Port of Savannah'],
    avgSeaTransit: '24 - 32 Days',
    airTransit: '36 - 54 Hours',
    topDemandedSpices: ['ASTA Black Pepper', 'Crushed Red Pepper Flakes', 'Whole Cumin Seeds', 'Dry Ginger Slices'],
    regulatoryBodies: ['US FDA (Food and Drug Administration)', 'USDA APHIS', 'ASTA Compliant'],
    certificationsRequired: ['FDA Prior Notice & Facility Registration', 'ASTA Cleanliness Specs', 'Phytosanitary', 'Certificate of Analysis (COA)'],
    customsNote: 'ETO (Ethylene Oxide) residue-free steam sterilized options available for industrial culinary processors.',
    marketHighlights: 'Large-scale seasoning blenders, wholesale restaurant suppliers, and specialty gourmet spice packagers.'
  },
  {
    id: 'uk',
    country: 'London & United Kingdom',
    flag: '🇬🇧',
    majorPorts: ['London Gateway Port', 'Port of Felixstowe', 'Southampton Port', 'London Heathrow Cargo (LHR)'],
    avgSeaTransit: '20 - 26 Days',
    airTransit: '24 - 36 Hours',
    topDemandedSpices: ['Cardamom Jumbo Extra Bold', 'Star Anise', 'Garam Masala Seed Assortments', 'Coriander Badami'],
    regulatoryBodies: ['UK FSA (Food Standards Agency)', 'DEFRA (Animal & Plant Health)'],
    certificationsRequired: ['UK Phyto Import Check', 'Aflatoxin Lab Analysis', 'EUR1 / GSP Origin Docs', 'HACCP Audit'],
    customsNote: 'Post-Brexit single-window IPAFFS import declarations managed with dedicated UK customs broker partners.',
    marketHighlights: 'Heritage British curry house supply chains, ethnic supermarkets in London/Birmingham, and artisanal blenders.'
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    majorPorts: ['Port of Melbourne', 'Port Botany (Sydney)', 'Port of Brisbane', 'Fremantle (Perth)'],
    avgSeaTransit: '18 - 24 Days',
    airTransit: '30 - 45 Hours',
    topDemandedSpices: ['Sortex Cumin Seeds', 'Brown/Black Mustard', 'Fennel Seeds Lucknow', 'Pure Turmeric Powder'],
    regulatoryBodies: ['DAFF (Biosecurity Australia)', 'FSANZ (Food Standards ANZ)'],
    certificationsRequired: ['BICON Biosecurity Clearance', 'Heat / Gamma Treatment Certificate', 'Phytosanitary', 'Fumigation Certificate'],
    customsNote: 'Zero-soil and pest tolerance under Australian biosecurity. 100% Sortex optical cleaned with fumigation sealing.',
    marketHighlights: 'Strict quarantine requirements met with precision packaging; high repeat demand from national food service distributors.'
  }
];
