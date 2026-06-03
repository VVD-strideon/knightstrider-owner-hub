import React, { useRef } from "react";
import HeroSection from "@/components/landing/HeroSection";
import TrustBadges from "@/components/landing/TrustBadges";
import VideoSection from "@/components/landing/VideoSection";
import BenefitsStrip from "@/components/landing/BenefitsStrip";
import ToolkitPreview from "@/components/landing/ToolkitPreview";
import WhatsIncluded from "@/components/landing/WhatsIncluded";
import OwnerOutcomes from "@/components/landing/OwnerOutcomes";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FAQSection from "@/components/landing/FAQSection";
import LeadForm from "@/components/landing/LeadForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import { base44 } from "@/api/base44Client";

export default function Home() {
  const formRef = useRef(null);

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
      <HeroSection onWatchVideo={scrollToVideo} onDownload={scrollToForm} />
      <TrustBadges />
      <VideoSection />
      <BenefitsStrip />
      <ToolkitPreview onDownload={scrollToForm} />
      <WhatsIncluded />
      <LeadForm id="lead-form" />
      <OwnerOutcomes />
      <TestimonialSection />
      <FAQSection />
      <FinalCTA onDownload={scrollToForm} onWatchVideo={scrollToVideo} />
      <LeadForm id="lead-form-bottom" />
      <Footer />
    </div>
  );
}