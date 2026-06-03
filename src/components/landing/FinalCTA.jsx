import React from "react";
import { motion } from "framer-motion";
import { Download, Play, ArrowRight } from "lucide-react";

export default function FinalCTA({ onDownload, onWatchVideo }) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-navy">
      {/* Footer gradient accent */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #081D3A 0%, #1a3a6b 50%, #1e4d8c 100%)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Urgency bar */}
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2"
            style={{ background: "rgba(253,224,71,0.12)", border: "1px solid rgba(253,224,71,0.35)" }}>
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" style={{ animationDuration: "1.2s" }} />
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow">Limited Free Access — Get Yours Now</span>
          </div>

          <h2 className="font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
            Stop Leaving Money on the Table.<br />
            <span className="text-gradient">Start With the Toolkit.</span>
          </h2>

          <p className="font-semibold text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Join hundreds of Orlando villa owners who've used these exact tools to take back control and grow their rental income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={onDownload}
              data-event="toolkit_download_started"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-extrabold text-lg px-8 py-4 text-white transition-all hover:scale-[1.02] glow-blue"
              style={{ background: "#2166F3" }}
            >
              <Download className="w-5 h-5" />
              Claim My Free Access Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onWatchVideo}
              data-event="watch_video_clicked"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-lg px-8 py-4 text-white transition-all hover:bg-white/10 border"
              style={{ borderColor: "rgba(79,142,247,0.4)", color: "#4F8EF7" }}
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Free Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}