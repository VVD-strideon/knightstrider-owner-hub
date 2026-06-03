import React from "react";
import { motion } from "framer-motion";
import { Play, Download, ChevronDown, CheckCircle2 } from "lucide-react";

const HERO_BG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/39a79cad3_generated_image.png";
const HOST_IMG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/cd5c054eb_generated_image.png";

export default function HeroSection({ onWatchVideo, onDownload }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Luxury Orlando villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(8,29,58,0.72)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left content */}
          <div className="lg:col-span-3 space-y-7">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5"
              style={{ background: "rgba(33,102,243,0.12)", borderColor: "rgba(33,102,243,0.35)" }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" style={{ animationDuration: "1.5s" }} />
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">Free for Orlando Villa Owners</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="font-extrabold leading-[1.04] tracking-tight text-white"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)" }}
            >
              7 Things They<br />
              <span className="text-gradient">Don't Tell You</span><br />
              About Owning an<br />
              <span style={{ color: "#4F8EF7" }}>Orlando Villa</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl font-semibold leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Watch the free video & grab your <span className="text-white font-extrabold">9-Tool Owner Toolkit</span> — 
              the same system helping villa owners earn more, stress less, and take back control.
            </motion.p>

            {/* Value anchor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl px-4 py-2.5"
            >
              <span className="text-brand-yellow text-xs font-extrabold uppercase tracking-widest">Combined value</span>
              <span className="text-white/40 font-bold line-through text-sm">$643</span>
              <span className="text-brand-yellow font-extrabold text-lg">FREE today</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
              <button
                onClick={onDownload}
                data-event="toolkit_download_started"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-extrabold text-lg px-8 py-4 text-white transition-all hover:scale-[1.02] glow-blue"
                style={{ background: "#2166F3" }}
              >
                <Download className="w-5 h-5" />
                Download Free Owner Toolkit
              </button>
              <button
                onClick={onWatchVideo}
                data-event="watch_video_clicked"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-lg px-8 py-4 text-white transition-all hover:bg-white/10 border"
                style={{ borderColor: "rgba(79,142,247,0.5)", color: "#4F8EF7" }}
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Free Video
              </button>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              {["100% Free", "No Spam, Ever", "Instant Access"].map(t => (
                <span key={t} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — host cutout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex lg:col-span-2 justify-center relative"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, rgba(33,102,243,0.4) 0%, transparent 70%)" }} />
              <img
                src={HOST_IMG}
                alt="Villa ownership advisor"
                className="relative z-10 w-80 xl:w-96 rounded-3xl object-cover"
                style={{ boxShadow: "0 40px 100px rgba(8,29,58,0.5)" }}
              />
              {/* Floating stat */}
              <div className="absolute -left-6 bottom-16 z-20 rounded-2xl px-4 py-3 border"
                style={{ background: "rgba(8,29,58,0.9)", backdropFilter: "blur(12px)", borderColor: "rgba(33,102,243,0.3)", boxShadow: "0 8px 32px rgba(8,29,58,0.4)" }}>
                <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.55)" }}>Avg. owner increase</p>
                <p className="text-2xl font-extrabold text-brand-yellow">+37%</p>
                <p className="text-xs font-semibold text-brand-green">rental income</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: "rgba(255,255,255,0.4)" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}