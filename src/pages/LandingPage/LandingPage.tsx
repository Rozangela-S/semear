import { Navbar } from "../../components/Landing/Navbar";
import { HeroSection } from "../../components/Landing/HeroSection";
import { FeaturesSection } from "../../components/Landing/FeaturesSection";
import { AboutSection } from "../../components/Landing/AboutSection";
import { CTASection } from "../../components/Landing/CTASection";
import { Footer } from "../../components/Landing/Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2937] transition-colors duration-500 dark:bg-[#06130a] dark:text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}