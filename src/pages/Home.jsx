import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsStrip from "@/components/landing/BenefitsStrip";
import VideoSection from "@/components/landing/VideoSection";
import ToolkitSection from "@/components/landing/ToolkitSection";
import SmartOwnershipBenefits from "@/components/landing/SmartOwnershipBenefits";
import ResultsSection from "@/components/landing/ResultsSection";
import LeadForm from "@/components/landing/LeadForm";
import FAQSection from "@/components/landing/FAQSection";
import VillaPerformanceSection from "@/components/landing/VillaPerformanceSection";
import SocialStatsBanner from "@/components/landing/SocialStatsBanner";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import { base44 } from "@/api/base44Client";

export default function Home() {
  const scrollToForm = () => {
    base44.analytics.track({ eventName: "toolkit_download_started", properties: { source: "cta_button" } });
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVideo = () => {
    base44.analytics.track({ eventName: "watch_video_clicked", properties: { source: "cta_button" } });
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });
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
      <ToolkitSection onDownload={scrollToForm} />
      <SmartOwnershipBenefits />
      <ResultsSection />
      <VillaPerformanceSection onDownload={scrollToForm} />
      <LeadForm id="lead-form" />
      <FAQSection />
      <FinalCTA onDownload={scrollToForm} />
      <Footer />
    </div>
  );
}