import React from "react";
import { motion } from "framer-motion";
import { Play, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/39a79cad3_generated_image.png";
const HOST_IMG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/cd5c054eb_generated_image.png";

const bullets = [
  "Protect your investment",
  "Avoid costly mistakes",
  "Win more bookings & keep more profit",
];

export default function HeroSection({ onWatchVideo, onDownload }) {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Luxury Orlando villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/98 via-[#071224]/90 to-[#071224]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-[#050d1a]/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-0 lg:gap-8 items-center">

          {/* Left: Headline */}
          <div className="lg:col-span-3 space-y-5">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-white"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" /></svg>
              </div>
              <div className="leading-none">
                <p className="text-white font-extrabold text-xs tracking-widest uppercase">KNIGHTSTRIDER</p>
                <p className="text-accent font-extrabold text-xs tracking-widest uppercase">VILLAS DIRECT</p>
              </div>
            </motion.div>

            {/* Giant headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-display font-extrabold leading-[0.95] tracking-tight">
                <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">7 THINGS</span>
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">THEY DON'T</span>
                <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">TELL YOU</span>
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 bg-accent/80 -skew-x-3 rounded" />
                  <span className="relative text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl px-3 py-1 italic font-extrabold tracking-wide drop-shadow-xl">ABOUT OWNING AN</span>
                </span>
                <span className="block text-[hsl(25,100%,55%)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl italic drop-shadow-2xl mt-1">ORLANDO VILLA</span>
              </h1>
            </motion.div>

            {/* Bullet points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 pt-2"
            >
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 font-semibold text-base sm:text-lg">{b}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={onDownload}
                data-event="toolkit_download_started"
                className="bg-primary hover:bg-primary/90 text-white font-extrabold text-base sm:text-lg px-8 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02] uppercase tracking-wide"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Toolkit
              </Button>
            </motion.div>
          </div>

          {/* Right: Host photo + play button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex lg:col-span-2 justify-center relative"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent rounded-3xl blur-3xl" />
              <img
                src={HOST_IMG}
                alt="Villa ownership experts"
                className="relative z-10 w-80 xl:w-96 object-cover rounded-2xl"
              />

              {/* Play button overlay */}
              <button
                onClick={onWatchVideo}
                data-event="watch_video_clicked"
                className="absolute z-20 inset-0 flex flex-col items-center justify-center group"
              >
                <div className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center glow-orange group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-9 h-9 text-white fill-white ml-1" />
                  <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                </div>
                <span className="mt-3 text-white font-bold text-sm tracking-wide bg-black/50 px-4 py-1 rounded-full">Watch Free Video</span>
              </button>

              {/* Floating stat */}
              <div className="absolute -left-10 bottom-16 z-30 bg-[#071224]/95 backdrop-blur-sm border border-accent/30 rounded-xl px-4 py-3 shadow-2xl">
                <p className="text-xs text-muted-foreground">Avg. owner increase</p>
                <p className="text-2xl font-extrabold text-primary">+37%</p>
                <p className="text-xs text-green-400">rental income</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}