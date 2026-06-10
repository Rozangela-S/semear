import { useState } from "react";

import { Navbar } from "../../components/Landing/Navbar";
import { HeroSection } from "../../components/Landing/HeroSection";
import { FeaturesSection } from "../../components/Landing/FeaturesSection";
import { AboutSection } from "../../components/Landing/AboutSection";
import { PlansSection } from "../../components/Landing/PlansSection";
import { CTASection } from "../../components/Landing/CTASection";
import { Footer } from "../../components/Landing/Footer";
import { DashboardPreviewModal } from "../../components/Landing/DashboardPreviewModal";

export function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  function openDemoModal() {
    setIsDemoModalOpen(true);
  }

  function closeDemoModal() {
    setIsDemoModalOpen(false);
  }

  return (
    <main className="min-h-screen bg-white text-[#1f2937] transition-colors duration-500 dark:bg-[#06130a] dark:text-white">
      <Navbar />
      <HeroSection onOpenDemo={openDemoModal} />
      <FeaturesSection />
      <AboutSection />
      <PlansSection />
      <CTASection onOpenDemo={openDemoModal} />
      <Footer />

      <DashboardPreviewModal
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
      />
    </main>
  );
}