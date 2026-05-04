import GlobalNav from '@/components/GlobalNav';
import HeroSection from '@/components/HeroSection';
import KonicaSection from '@/components/KonicaSection';
import RisoSection from '@/components/RisoSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <GlobalNav />
      <main>
        <HeroSection />
        <KonicaSection />
        <RisoSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />

      {/* WhatsApp FAB (Floating Action Button) */}
      <Link
        href="https://wa.me/919826444348"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-[2rem]" />
      </Link>
    </>
  );
}
