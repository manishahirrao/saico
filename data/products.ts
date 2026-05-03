export type Tag = 'entry' | 'mono' | 'colour' | 'volume' | 'riso' | 'other';

export interface Product {
  id: string;
  brand: 'konica' | 'riso' | 'other';
  model: string;
  fullName: string;
  tag: Tag;
  speed?: string;
  price: string | null;
  priceNum?: number;
  functions: string[];
  paperSize: string;
  colourOutput: 'Mono B&W' | 'Full Colour' | 'Colour + B&W' | 'Single Colour';
  bestFor?: string;
}

export const konicaProducts: Product[] = [
  {
    id: '185en',
    brand: 'konica',
    model: '185en',
    fullName: 'bizhub 185en Mono MFP',
    tag: 'entry',
    speed: '18 ppm',
    price: '₹40,000',
    priceNum: 40000,
    functions: ['Print', 'Scan', 'Copy'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Small offices and home use',
  },
  {
    id: '207i',
    brand: 'konica',
    model: '207i',
    fullName: 'bizhub 207i Mono MFP',
    tag: 'mono',
    speed: '20 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Scan', 'Copy'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Small to medium workgroups',
  },
  {
    id: '227i',
    brand: 'konica',
    model: '227i',
    fullName: 'bizhub 227i Mono MFP',
    tag: 'mono',
    speed: '21-30 ppm',
    price: '₹59,000',
    priceNum: 59000,
    functions: ['Print', 'Scan', 'Copy', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Medium-sized offices',
  },
  {
    id: '247i',
    brand: 'konica',
    model: '247i',
    fullName: 'bizhub 247i Mono MFP',
    tag: 'mono',
    speed: '24 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Scan', 'Copy'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Busy workgroups',
  },
  {
    id: '266i',
    brand: 'konica',
    model: '266i',
    fullName: 'bizhub 266i Mono MFP',
    tag: 'mono',
    speed: '26 ppm',
    price: '₹88,000',
    priceNum: 88000,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'High-volume offices',
  },
  {
    id: '306i',
    brand: 'konica',
    model: '306i',
    fullName: 'bizhub 306i Mono MFP',
    tag: 'volume',
    speed: '30 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Enterprise workgroups',
  },
  {
    id: '367',
    brand: 'konica',
    model: '367',
    fullName: 'bizhub 367 Mono MFP',
    tag: 'volume',
    speed: '36 ppm',
    price: '₹1,70,000',
    priceNum: 170000,
    functions: ['Print', 'Scan', 'Copy', 'Email'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Large enterprises',
  },
  {
    id: '451i',
    brand: 'konica',
    model: '451i',
    fullName: 'bizhub 451i Mono MFP',
    tag: 'volume',
    speed: '45-50 ppm',
    price: '₹4,60,000',
    priceNum: 460000,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'High-volume production',
  },
  {
    id: 'c226i',
    brand: 'konica',
    model: 'C226i',
    fullName: 'bizhub C226i Colour MFP',
    tag: 'colour',
    speed: '26 ppm',
    price: '₹1,70,000',
    priceNum: 170000,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Colour-rich workgroups',
  },
  {
    id: 'c251i',
    brand: 'konica',
    model: 'C251i',
    fullName: 'bizhub C251i Colour MFP',
    tag: 'colour',
    speed: '25 ppm',
    price: '₹2,65,000',
    priceNum: 265000,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Professional colour printing',
  },
];

export const risoProducts: Product[] = [
  {
    id: 'cv3230',
    brand: 'riso',
    model: 'CV3230',
    fullName: 'Riso CV3230 Digital Duplicator',
    tag: 'riso',
    speed: '100 PPM',
    price: '₹2,30,000',
    priceNum: 230000,
    functions: ['High-Speed Printing'],
    paperSize: 'A3/A4',
    colourOutput: 'Single Colour',
    bestFor: 'Schools, bulk printing',
  },
  {
    id: 'sf5330',
    brand: 'riso',
    model: 'SF5330',
    fullName: 'Riso SF5330 Digital Duplicator',
    tag: 'riso',
    speed: '130 PPM',
    price: '₹4,50,000',
    priceNum: 450000,
    functions: ['High-Speed Printing', 'Auto Master Making'],
    paperSize: 'A3/A4',
    colourOutput: 'Colour + B&W',
    bestFor: 'Print shops, high-volume',
  },
  {
    id: 'wedding-card',
    brand: 'riso',
    model: 'Wedding Card Machine',
    fullName: 'Riso Wedding Card Printing Machine',
    tag: 'riso',
    speed: '80 sheet/hr',
    price: '₹2,35,000',
    priceNum: 235000,
    functions: ['Digital Printing', 'Wide Format'],
    paperSize: 'Up to 480mm width',
    colourOutput: 'Full Colour',
    bestFor: 'Wedding cards, invitations',
  },
  {
    id: 'ft1430',
    brand: 'riso',
    model: 'FT1430',
    fullName: 'Riso Comcolor FT1430',
    tag: 'riso',
    speed: 'High Speed',
    price: '₹15,00,000',
    priceNum: 1500000,
    functions: ['Offset Multi-Function', 'B&W Printing'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Industrial printing',
  },
];

export const otherBrands: Product[] = [
  {
    id: 'xerox',
    brand: 'other',
    model: 'Xerox',
    fullName: 'Xerox Multifunction Printer',
    tag: 'other',
    speed: 'Up to 50 ppm',
    price: '₹4,60,000',
    priceNum: 460000,
    functions: ['Print', 'Copy', 'Scan'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Enterprise solutions',
  },
  {
    id: 'kyocera',
    brand: 'other',
    model: 'Kyocera',
    fullName: 'Kyocera Multifunction Printer',
    tag: 'other',
    speed: 'Up to 30 ppm',
    price: '₹1,30,000',
    priceNum: 130000,
    functions: ['Print', 'Copy', 'Scan'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Medium businesses',
  },
  {
    id: 'ricoh',
    brand: 'other',
    model: 'Ricoh',
    fullName: 'Ricoh Multifunction Printer',
    tag: 'other',
    speed: 'Multiple models',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Various applications',
  },
  {
    id: 'canon',
    brand: 'other',
    model: 'Canon',
    fullName: 'Canon Photocopying Machine',
    tag: 'other',
    speed: 'Up to 30 ppm',
    price: '₹1,30,000',
    priceNum: 130000,
    functions: ['Print', 'Copy', 'Scan'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Office use',
  },
];

export const allProducts = [...konicaProducts, ...risoProducts, ...otherBrands];

export const filterByBrand = (brand: 'konica' | 'riso' | 'other') => {
  return allProducts.filter((p) => p.brand === brand);
};

export const filterByTag = (tag: Tag | 'all') => {
  if (tag === 'all') return allProducts;
  return allProducts.filter((p) => p.tag === tag);
};

export const getFeaturedProducts = () => {
  return [
    konicaProducts.find((p) => p.id === 'c251i')!,
    risoProducts.find((p) => p.id === 'sf5330')!,
    konicaProducts.find((p) => p.id === '451i')!,
    konicaProducts.find((p) => p.id === 'c226i')!,
    risoProducts.find((p) => p.id === 'cv3230')!,
    konicaProducts.find((p) => p.id === '367')!,
  ];
};
