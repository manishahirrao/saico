import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saicotech Services — Authorised Konica Minolta & Riso Dealer | Bhopal",
  description: "Saico Tech Services, Bhopal — authorised channel partner for Konica Minolta & Riso since 1999. A3/A4 multifunction printers, digital duplicators, AMC & repairs across MP. Call 07949314044.",
  keywords: [
    "Konica Minolta Bhopal",
    "Riso Duplicator Bhopal",
    "Photocopier Bhopal",
    "Multifunction Printer Bhopal",
    "Digital Duplicator MP",
    "Printer AMC Bhopal",
    "Saicotech Services",
  ],
  openGraph: {
    title: "Saicotech Services — Authorised Konica Minolta & Riso Dealer",
    description: "Authorised channel partner for Konica Minolta & Riso since 1999. A3/A4 MFPs, digital duplicators, AMC & repairs across Madhya Pradesh.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saicotech Services",
    alternateName: "Saico Tech Services",
    description: "Authorised channel partner for Konica Minolta & Riso, Japan",
    foundingDate: "1999",
    taxID: "23BAZPS4838N1ZM",
    telephone: "07949314044",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor, Plot No. 03, Saidisha Complex, M.P. Nagar Zone 1",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      postalCode: "462011",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.23564,
      longitude: 77.43587,
    },
    url: "https://saicotech.com",
    priceRange: "₹₹",
    areaServed: {
      "@type": "State",
      name: "Madhya Pradesh",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
