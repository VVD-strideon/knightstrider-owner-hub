import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Mail, ArrowLeft, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";

export default function ThankYou() {
  const [userEmail, setUserEmail] = useState("");
  const [videoWatched, setVideoWatched] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email") || localStorage.getItem("lastSubmittedEmail");
    const watched = params.get("video_watched") === "true" || localStorage.getItem("videoWatched") === "true";
    
    if (email) setUserEmail(email);
    setVideoWatched(watched);

    base44.analytics.track({
      eventName: "thank_you_page_viewed",
      properties: { 
        source: "lead_form_conversion",
        video_watched: watched,
        user_email: email,
      },
    });
  }, []);

  const handleDownload = () => {
    base44.analytics.track({
      eventName: "toolkit_downloaded",
      properties: { 
        source: "thank_you_page",
        email: userEmail,
        video_watched: videoWatched,
      },
    });
    window.open("https://knightstrider.com/toolkit", "_blank");
    
    // Track as conversion
    base44.analytics.track({
      eventName: "conversion_completed",
      properties: {
        conversion_type: "toolkit_download",
        email: userEmail,
        lead_score: videoWatched ? 100 : 50,
      },
    });
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

        {/* Direct Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02]"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Toolkit PDF Now
          </Button>
          <p className="text-muted-foreground text-xs mt-3">
            Or check your email at <strong className="text-white">{userEmail || "your inbox"}</strong>
          </p>
        </motion.div>

        {/* Email Confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8"
        >
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Toolkit sent to your inbox</p>
              {userEmail && (
                <p className="text-white/70 text-xs mt-1">
                  Check <strong className="text-white">{userEmail}</strong> (and spam folder)
                </p>
              )}
              <p className="text-white/50 text-xs mt-2">
                Didn't receive it? <button onClick={() => window.location.reload()} className="text-primary hover:underline">Resend</button>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Video Engagement Badge */}
        {videoWatched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 rounded-full px-4 py-2 mb-6"
          >
            <PlayCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-xs font-semibold">Video Watched ✓</span>
          </motion.div>
        )}

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