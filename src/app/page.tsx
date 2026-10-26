import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurWorkSection from "@/components/OurWorkSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CACCertificate from "@/components/CACDocument"

export default function Home() {
  return (
    <main className="min-h-screen h-fit bg-[#f8fafc]">
      <Navbar />
      <div className="max-w-179.75 mx-auto">
        <HeroSection />
      </div>

      <OurWorkSection />
      <TechnologiesSection />
      <TestimonialsSection />
       <InfoSection />
     <ContactSection />
     <CACCertificate/>
      <Footer /> 
    </main>
  );
}
