import React, { Suspense, lazy } from "react";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsStrip from "@/components/landing/BenefitsStrip";
import VideoSection from "@/components/landing/VideoSection";
import SmartOwnershipBenefits from "@/components/landing/SmartOwnershipBenefits";
import ResultsSection from "@/components/landing/ResultsSection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection from "@/components/landing/FAQSection";
import SocialStatsBanner from "@/components/landing/SocialStatsBanner";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import { base44 } from "@/api/base44Client";

// Lazy load components below the fold
const ToolkitSection = lazy(() => import("@/components/landing/ToolkitSection"));
const VillaPerformanceSection = lazy(() => import("@/components/landing/VillaPerformanceSection"));
const ExitIntentPopup = lazy(() => import("@/components/landing/ExitIntentPopup"));

export default function Home() {
  const scrollToForm = () => {
    base44.analytics.track({ eventName: "toolkit_download_started", properties: { source: "cta_button" } });
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onDownload={scrollToForm} />
      <BenefitsStrip />
      <div className="bg-gradient-to-b from-white to-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <SocialStatsBanner />
        </div>
      </div>
      <Suspense fallback={<div className="py-20 bg-white" />}>
        <ToolkitSection onDownload={scrollToForm} />
      </Suspense>
      <SmartOwnershipBenefits />
      <ResultsSection />
      <Suspense fallback={<div className="py-20 bg-background" />}>
        <VillaPerformanceSection onDownload={scrollToForm} />
      </Suspense>
      <LeadForm id="lead-form" />
      <FAQSection />
      <FinalCTA onDownload={scrollToForm} />
      <Footer />
      <Suspense fallback={null}>
        <ExitIntentPopup onDownload={scrollToForm} />
      </Suspense>
    </div>
  );
}