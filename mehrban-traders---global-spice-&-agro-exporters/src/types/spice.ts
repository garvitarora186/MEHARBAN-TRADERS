export interface SpiceProduct {
  id: string;
  name: string;
  hindiName?: string;
  botanicalName: string;
  category: 'whole' | 'seeds' | 'ground' | 'exotic' | 'roots';
  categoryLabel: string;
  origin: string;
  hsCode: string;
  grade: string;
  description: string;
  keyFeatures: string[];
  specifications: {
    purity: string;
    moisture: string;
    extrinsicMatter: string;
    volatileOil?: string;
    curcuminContent?: string;
    scovilleHeatUnits?: string;
    aroma: string;
    color: string;
  };
  packagingOptions: string[];
  containerLoading: {
    fcl20ft: string;
    fcl40ft: string;
  };
  certifications: string[];
  imageUrl: string;
  popularDestinations: string[];
  isFeatured?: boolean;
}

export interface ExportCountry {
  id: string;
  country: string;
  flag: string;
  majorPorts: string[];
  avgSeaTransit: string;
  airTransit: string;
  topDemandedSpices: string[];
  regulatoryBodies: string[];
  certificationsRequired: string[];
  customsNote: string;
  marketHighlights: string;
}

export interface RFQItem {
  spiceId: string;
  spiceName: string;
  grade: string;
  quantity: number;
  unit: 'MT' | 'KG' | 'Bags';
  packaging: string;
}

export interface RFQFormState {
  fullName: string;
  companyName: string;
  email: string;
  mobile: string;
  destinationCountry: string;
  destinationPort: string;
  incoTerms: 'CIF' | 'FOB' | 'CFR' | 'EXW';
  selectedSpices: RFQItem[];
  customMessage: string;
  inspectionRequired: boolean;
  sampleRequired: boolean;
}
