import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BrochureSection from "@/components/BrochureSection";
import BrochureContent from "@/components/BrochureContent";
import ContactSection from "@/components/ContactSection";
import TawkChat from "@/components/TawkChat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <BrochureSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Hidden brochure template for PDF generation */}
      <BrochureContent />

      {/* Tawk.to section-aware tracking */}
      <TawkChat />
    </>
  );
}
