export interface CertificateItem {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  issuingBody: string;
  category: 'Government Accreditation' | 'Food Safety Standard' | 'International Export' | 'Religious & Quality';
  registrationNo: string;
  validity: string;
  scope: string;
  standards: string[];
  description: string;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
  };
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'fssai',
    code: 'FSSAI-CENTRAL',
    title: 'Food Safety & Standards Authority of India',
    shortTitle: 'FSSAI Central Export License',
    issuingBody: 'Ministry of Health & Family Welfare, Govt. of India',
    category: 'Government Accreditation',
    registrationNo: '10023011000842 / Central Licensing',
    validity: 'Active & Verified',
    scope: 'Procurement, Sortex optical cleaning, processing, grinding, packaging, and export of whole spices, seed spices, and agro commodities.',
    standards: ['FSS Act 2006 Compliant', 'Schedule 4 Food Safety Hygiene', 'Heavy Metal & Contaminant Safe'],
    description: 'Mandatory central statutory license certifying that all spice sorting, storage, and handling operations at Delhi Cantonment strictly abide by Indian national food safety benchmarks.',
    colorScheme: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
      border: 'border-amber-200',
      accent: '#C87D20'
    }
  },
  {
    id: 'spice-board',
    code: 'SPICE-BOARD-CRES',
    title: 'Spices Board of India (Ministry of Commerce)',
    shortTitle: 'CRES Export Registration',
    issuingBody: 'Spices Board, Ministry of Commerce & Industry, Govt. of India',
    category: 'Government Accreditation',
    registrationNo: 'CRES/DEL/MEH/2026/0942',
    validity: 'Certified Exporter',
    scope: 'Official statutory authorization to trade, process, and export spices globally across maritime and air logistics lanes.',
    standards: ['Pre-Shipment Quality Evaluation', 'Sampling & Mandi Traceability', 'Aflatoxin & Sudan Dye Free'],
    description: 'Statutory government accreditation confirming Mehrban Traders as an authorized registered exporter of Indian spices with direct access to national spice testing laboratories.',
    colorScheme: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-800',
      border: 'border-emerald-200',
      accent: '#2D5A3C'
    }
  },
  {
    id: 'apeda',
    code: 'APEDA-RCMC',
    title: 'APEDA Registration-cum-Membership',
    shortTitle: 'APEDA Accredited Exporter',
    issuingBody: 'Agricultural and Processed Food Products Export Development Authority',
    category: 'Government Accreditation',
    registrationNo: 'APEDA/RCMC/219804/DELHI',
    validity: 'Valid & Verified Exporter',
    scope: 'Export of agricultural products, whole seeds, grounded spices, herbs, and processed agro commodities to international jurisdictions.',
    standards: ['Agricultural Traceability', 'Phytosanitary Protocol Adherence', 'Export Quality Promotion'],
    description: 'Accreditation from India\'s apex agricultural export authority validating export compliance, packaging integrity, and agricultural product quality.',
    colorScheme: {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-800',
      border: 'border-blue-200',
      accent: '#1E40AF'
    }
  },
  {
    id: 'iso-22000',
    code: 'ISO-22000-FSMS',
    title: 'ISO 22000:2018 Certification',
    shortTitle: 'Food Safety Management System',
    issuingBody: 'International Organization for Standardization (Accredited Certification Body)',
    category: 'Food Safety Standard',
    registrationNo: 'FSMS-IN-8942-ISO',
    validity: 'Annual Surveillance Audited',
    scope: 'Receipt, cleaning, de-stoning, Sortex optical sorting, metal detection, cold grinding, and packaging of spices & seeds.',
    standards: ['Codex Alimentarius Aligned', 'Continuous Hazard Identification', 'Documented Traceability Chains'],
    description: 'Globally recognized FSMS certification establishing that every stage of our supply chain and handling meets international safety parameters from farm gate to container dispatch.',
    colorScheme: {
      badgeBg: 'bg-indigo-50',
      badgeText: 'text-indigo-800',
      border: 'border-indigo-200',
      accent: '#3730A3'
    }
  },
  {
    id: 'haccp',
    code: 'HACCP-CODEX',
    title: 'HACCP (Hazard Analysis Critical Control Point)',
    shortTitle: 'HACCP System Certified',
    issuingBody: 'Codex Alimentarius Commission Quality Guidelines',
    category: 'Food Safety Standard',
    registrationNo: 'HACCP/2026/DEL/7410',
    validity: 'Compliance Certified',
    scope: 'Systematic preventive approach to food safety from biological, chemical, and physical hazards in production processes.',
    standards: ['Critical Control Points (CCP) Monitored', 'Zero Foreign Matter Standard', 'Microbiological Safety Bounds'],
    description: 'Ensures that potential hazards such as moisture condensation, foreign contaminants, and microbial risks are identified and preemptively mitigated prior to container sealing.',
    colorScheme: {
      badgeBg: 'bg-rose-50',
      badgeText: 'text-rose-800',
      border: 'border-rose-200',
      accent: '#9F1239'
    }
  },
  {
    id: 'halal',
    code: 'HALAL-INDIA',
    title: 'Halal Certification',
    shortTitle: 'Halal Certified Facility & Products',
    issuingBody: 'Jamiat Ulama-i-Hind Halal Trust / Global Halal Authority',
    category: 'Religious & Quality',
    registrationNo: 'HALAL/IN/DEL/49102',
    validity: 'Registered & Certified',
    scope: 'Processing, milling, packaging, and export of 100% pure plant-based agricultural spices, whole seeds, and seasonings.',
    standards: ['UAE ESMA GSO 2055-1 Compliant', '100% Vegetarian & Plant Sourced', 'Clean & Pure Storage Conditions'],
    description: 'Certified for compliance with Gulf Standards (ESMA / UAE) and international Halal standards, authorizing seamless import clearance into UAE, Middle East, and Southeast Asian ports.',
    colorScheme: {
      badgeBg: 'bg-teal-50',
      badgeText: 'text-teal-800',
      border: 'border-teal-200',
      accent: '#115E59'
    }
  },
  {
    id: 'us-fda',
    code: 'US-FDA-FACILITY',
    title: 'US FDA Food Facility Registration',
    shortTitle: 'US FDA Registered Facility',
    issuingBody: 'U.S. Food and Drug Administration (Dept. of Health & Human Services)',
    category: 'International Export',
    registrationNo: 'FDA Reg. No. 19827364102',
    validity: 'Biannual Renewal Active',
    scope: 'Registration of foreign manufacturing, processing, packing, and holding facility for human food export into the United States.',
    standards: ['FSMA (Food Safety Modernization Act)', 'Prior Notice Compliant', 'ASTA Cleanliness Specification'],
    description: 'Authorizes direct customs clearance into US ports (Houston, New York, Los Angeles, Savannah) with complete compliance with US FSMA food preventive controls.',
    colorScheme: {
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-800',
      border: 'border-sky-200',
      accent: '#0369A1'
    }
  },
  {
    id: 'phytosanitary',
    code: 'PHYTO-INDIA',
    title: 'Phytosanitary & Plant Quarantine Certification',
    shortTitle: 'Official Phytosanitary Clearance',
    issuingBody: 'Directorate of Plant Protection, Quarantine & Storage, Ministry of Agriculture',
    category: 'International Export',
    registrationNo: 'NPPO/IN/DEL/PQ-EXPORT',
    validity: 'Issued Per Consignment',
    scope: 'Official government certification confirming agricultural commodities are free from quarantine pests, weed seeds, and pathogens.',
    standards: ['IPPC (International Plant Protection Convention)', 'Taiwan BAPHIQ Compliant', 'Australia DAFF Biosecurity Compliant', 'Canada CFIA Ready'],
    description: 'Guaranteed government phytosanitary certificates and fumigation certifications (MBy / Aluminium Phosphide) issued for every maritime container and air consignment.',
    colorScheme: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-800',
      border: 'border-emerald-200',
      accent: '#065F46'
    }
  },
  {
    id: 'sgs-testing',
    code: 'SGS-EUROFINS',
    title: 'Pre-Shipment Inspection & Lab Assay Ready',
    shortTitle: 'SGS / Bureau Veritas / Eurofins',
    issuingBody: 'Independent Third-Party Accredited Testing Laboratories (NABL / ILAC)',
    category: 'Food Safety Standard',
    registrationNo: 'Consignment Specific Lab Reports',
    validity: 'Batch-by-Batch Testing',
    scope: 'Independent physical sampling, optical inspection, chemical analysis, and seal inspection prior to container port departure.',
    standards: ['Gas Chromatography (GC-MS/MS)', 'Liquid Chromatography (LC-MS/MS)', 'HPLC Curcumin & Piperine Assay', 'Zero Sudan Dye / Aflatoxin'],
    description: 'Comprehensive Certificate of Analysis (COA) supplied with each shipment verifying precise moisture percentage, purity levels, essential oil contents, and zero pesticide residues.',
    colorScheme: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-800',
      border: 'border-amber-200',
      accent: '#92400E'
    }
  }
];
