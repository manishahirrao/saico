# Saicotech Services - Konica Minolta & Riso Dealer Website

A modern, professional Next.js website for Saicotech Services, the authorised channel partner for Konica Minolta & Riso in Bhopal, Madhya Pradesh.

## Features

- ✅ **Modern Design**: Clean, professional light theme with Konica Minolta brand colors (teal accents)
- ✅ **Responsive**: Fully responsive design that works on all devices
- ✅ **SEO Optimized**: Proper meta tags, JSON-LD schema, and semantic HTML
- ✅ **WhatsApp Integration**: Direct WhatsApp enquiry form and floating chat button
- ✅ **Product Showcase**: Interactive product cards with filtering
- ✅ **Smooth Animations**: Framer Motion animations with reduced-motion support
- ✅ **Performance**: Built with Next.js 14+ for optimal performance

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Fonts**: Outfit, DM Sans, JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd saicotech
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
saicotech/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── GlobalNav.tsx       # Navigation bar
│   ├── HeroSection.tsx     # Hero section
│   ├── KonicaSection.tsx   # Konica Minolta products
│   ├── ContactSection.tsx  # Contact form & info
│   ├── Footer.tsx          # Footer
│   ├── hero/
│   │   ├── HeroBackground.tsx
│   │   └── AnimatedShowcase.tsx
│   ├── products/
│   │   └── ProductCard.tsx
│   └── contact/
│       └── EnquiryForm.tsx
├── data/
│   └── products.ts         # Product data
└── public/
    └── logo.jpg            # Konica Minolta logo (placeholder)
```

## Important Notes

### Logo File

⚠️ **IMPORTANT**: Replace `public/logo.jpg` with the actual Konica Minolta logo image (`konicaminolta-120x120.jpg`).

The current file is a placeholder. Copy your logo file to:
```
public/logo.jpg
```

### WhatsApp Integration

All enquiries are sent directly to WhatsApp:
- **Phone Number**: +91 98264 44348
- **Floating Button**: Fixed bottom-right corner
- **Enquiry Form**: Sends formatted message to WhatsApp

### SEO & Metadata

The site includes:
- Proper meta tags (title, description, keywords)
- Open Graph tags for social sharing
- JSON-LD structured data for local business
- Semantic HTML for better SEO

### Contact Information

Update the following if needed:
- **Address**: Ground Floor, Plot No. 03, Saidisha Complex, MP Nagar Zone 1, Bhopal – 462011
- **Phone**: 07949314044 | +91 98264 44348
- **GST**: 23BAZPS4838N1ZM
- **Proprietor**: Mr. Sandeep Shrivastava

## Customization

### Colors

Brand colors are defined in `tailwind.config.js`:
- Primary Teal: `#00B0CA`
- Cyan Accent: `#00D4E8`
- Light Background: `#FFFFFF`
- Gray Background: `#F8F9FA`

### Products

Edit product data in `data/products.ts`:
- Add/remove products
- Update prices
- Modify specifications

### Content

Update text content in component files:
- Hero section: `components/HeroSection.tsx`
- Products: `components/KonicaSection.tsx`
- Contact: `components/ContactSection.tsx`
- Footer: `components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:
```bash
npm run build
```

The output will be in `.next/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Performance: Target ≥85 on mobile
- Optimized images with Next.js Image component
- Lazy loading for below-fold content
- Reduced motion support for accessibility

## License

© 2025 Saicotech Services. All rights reserved.

## Support

For technical support or questions:
- **Email**: Contact through website form
- **Phone**: 07949314044
- **WhatsApp**: +91 98264 44348
