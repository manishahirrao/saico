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
  image?: string;
}

export const konicaProducts: Product[] = [
  {
    id: '207i',
    brand: 'konica',
    model: '207i',
    fullName: 'Konica Minolta bizhub 207i',
    tag: 'entry',
    speed: '20 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Scan', 'Copy'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Small offices & light workgroups',
    image: '/konica-minolta-photocopy-machine-207i-500x500.webp',
  },
  {
    id: '227i',
    brand: 'konica',
    model: '227i',
    fullName: 'Konica Minolta bizhub 227i',
    tag: 'entry',
    speed: '22 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Scan', 'Copy', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Small to medium offices',
    image: '/konica-minolta-227i-500x500.webp',
  },
  {
    id: '247i',
    brand: 'konica',
    model: '247i',
    fullName: 'Konica Minolta bizhub 247i',
    tag: 'mono',
    speed: '24 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Scan', 'Copy', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Medium-sized offices',
    image: '/konica-minolta-photocopy-machine-247i-500x500.jpeg',
  },
  {
    id: '266i',
    brand: 'konica',
    model: '266i',
    fullName: 'Konica Minolta bizhub 266i',
    tag: 'mono',
    speed: '26 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Busy workgroups',
    image: '/konica-minolta-multifunction-printer-500x500.webp',
  },
  {
    id: '306i',
    brand: 'konica',
    model: '306i',
    fullName: 'Konica Minolta bizhub 306i',
    tag: 'volume',
    speed: '30 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'High-volume offices',
    image: '/konica-minolta-bizhub-306i-500x500.webp',
  },
  {
    id: '367',
    brand: 'konica',
    model: '367',
    fullName: 'Konica Minolta bizhub 367',
    tag: 'volume',
    speed: '36 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Scan', 'Copy', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Mono B&W',
    bestFor: 'Large enterprises & high-volume printing',
    image: '/bizhub-367-konica-minolta-photocopy-machine-500x500.webp',
  },
  {
    id: 'c226i',
    brand: 'konica',
    model: 'C226i',
    fullName: 'Konica Minolta bizhub C226i',
    tag: 'colour',
    speed: '22 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Colour printing for small to medium offices',
    image: '/konica-minolta-model-c226i-digital-photocopy-machine-500x500.webp',
  },
  {
    id: 'c251i',
    brand: 'konica',
    model: 'C251i',
    fullName: 'Konica Minolta bizhub C251i',
    tag: 'colour',
    speed: '25 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'Professional colour printing & busy workgroups',
    image: '/c251i-konica-minolta-multifunction-machine-500x500.webp',
  },
  {
    id: 'c450i',
    brand: 'konica',
    model: 'C450i',
    fullName: 'Konica Minolta bizhub C450i',
    tag: 'volume',
    speed: '45 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['Print', 'Copy', 'Scan', 'Fax'],
    paperSize: 'A3/A4',
    colourOutput: 'Full Colour',
    bestFor: 'High-volume colour production',
    image: '/c450i-konica-minolta-photocopy-machine-500x500.webp',
  },
];

export const risoProducts: Product[] = [
  {
    id: 'cv3230',
    brand: 'riso',
    model: 'CV3230',
    fullName: 'Riso CV3230 Digital Duplicator',
    tag: 'riso',
    speed: '130 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['High-Speed Printing', 'Auto Master Making'],
    paperSize: 'A3/A4 (B4 print area)',
    colourOutput: 'Single Colour',
    bestFor: 'Schools, bulk printing & high-volume jobs',
    image: '/riso-cv3230-digital-duplicator-500x500.webp',
  },
  {
    id: 'sf5330',
    brand: 'riso',
    model: 'SF5330',
    fullName: 'Riso SF5330 Digital Duplicator',
    tag: 'riso',
    speed: '130 ppm',
    price: 'Get Quote',
    priceNum: undefined,
    functions: ['High-Speed Printing', 'Auto Master Making', 'USB Direct Print'],
    paperSize: 'A3/A4',
    colourOutput: 'Single Colour',
    bestFor: 'Print shops, offices & high-volume bulk printing',
    image: '/sf5330-riso-digital-duplicator-500x500.webp',
  },
];

export const otherBrands: Product[] = [];

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
    konicaProducts.find((p) => p.id === 'c226i')!,
    risoProducts.find((p) => p.id === 'sf5330')!,
    konicaProducts.find((p) => p.id === 'c251i')!,
    konicaProducts.find((p) => p.id === 'c450i')!,
    risoProducts.find((p) => p.id === 'cv3230')!,
    konicaProducts.find((p) => p.id === '367')!,
  ];
};
