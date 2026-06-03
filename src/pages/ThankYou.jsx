import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";

export default function ThankYou() {
  useEffect(() => {
    base44.analytics.track({
      eventName: "thank_you_page_viewed",
      properties: { source: "lead_form_conversion" },
    });
  }, []);

  const handleDownload = () => {
    base44.analytics.track({
      eventName: "toolkit_download_started",
      properties: { source: "thank_you_page" },
    });
    window.open("https://knightstrider.com/toolkit", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050d1a] via-[#071224] to-[#050d1a] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-green-500/15 rounded-full mb-8 glow-blue"
        >
          <CheckCircle2 className="w-12 h-12 text-green-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
        >
          You're In! <span className="text-primary">🎉</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Your free <strong className="text-white">Villa Owner Toolkit</strong> is on its way to your inbox.
          Download it now or check your email shortly.
        </motion.p>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Button
            size="lg"
            onClick={handleDownload}
            data-event="toolkit_download_started"
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02] shadow-2xl"
          >
            <Download className="w-6 h-6 mr-2" />
            Download Toolkit PDF Now
          </Button>
        </motion.div>

        {/* Email Confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-muted-foreground mb-10"
        >
          <Mail className="w-5 h-5 text-accent" />
          <span className="text-sm">
            Can't find the email? Check your <strong className="text-white">spam folder</strong>
          </span>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground/60"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            100% Free
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            No Obligation
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Instant Access
          </span>
        </motion.div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}