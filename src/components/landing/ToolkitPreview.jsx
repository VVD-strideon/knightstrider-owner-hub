import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";

const TOOLKIT_IMG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/4d6430a1f_generated_image.png";

export default function ToolkitPreview({ onDownload }) {
  return (
    <section id="toolkit" className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#EEF4FB" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Toolkit image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-30" style={{ background: "linear-gradient(135deg, #2166F3, #4F8EF7)" }} />
              <img
                src={TOOLKIT_IMG}
                alt="9-Tool Villa Owner Toolkit PDF"
                className="relative rounded-2xl w-full max-w-md"
                style={{ boxShadow: "0 40px 100px rgba(8,29,58,0.18)" }}
              />
              <div className="absolute -top-4 -right-4 rounded-xl px-4 py-2 font-extrabold text-sm text-white rotate-3 shadow-lg"
                style={{ background: "#2166F3" }}>
                FREE PDF
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: "rgba(33,102,243,0.10)", color: "#2166F3", border: "1px solid rgba(33,102,243,0.25)" }}>
              Instant Download
            </span>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#081D3A" }}>
              Your Complete<br />
              <span className="text-gradient">Villa Owner Toolkit</span>
            </h2>

            <p className="font-semibold text-lg leading-relaxed" style={{ color: "#3a506b" }}>
              9 proven tools, checklists, and calculators built specifically for Orlando villa owners. 
              Find hidden revenue and build a direct booking strategy — 
              <strong style={{ color: "#081D3A" }}> all in one free PDF.</strong>
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#2166F3" }}>
              <FileText className="w-4 h-4" />
              PDF format · Instant access · No credit card required
            </div>

            {/* Value anchor */}
            <div className="inline-flex items-center gap-3 rounded-xl px-4 py-3 border"
              style={{ background: "rgba(253,224,71,0.12)", borderColor: "rgba(253,224,71,0.5)" }}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow">Value</span>
              <span className="font-bold line-through opacity-50 text-navy">$643</span>
              <span className="font-extrabold text-brand-yellow text-lg">FREE</span>
            </div>

            <button
              onClick={onDownload}
              data-event="toolkit_download_started"
              className="inline-flex items-center gap-2 rounded-xl font-extrabold text-lg px-8 py-4 text-white transition-all hover:scale-[1.02] glow-blue"
              style={{ background: "#2166F3" }}
            >
              <Download className="w-5 h-5" />
              Download Free Toolkit Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}