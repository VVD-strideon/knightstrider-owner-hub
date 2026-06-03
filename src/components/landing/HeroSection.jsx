import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/39a79cad3_generated_image.png";

const bullets = [
  "Protect your investment",
  "Avoid costly mistakes",
  "Win more bookings & keep more profit",
];

export default function HeroSection({ onDownload }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Luxury Orlando villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/95 via-[#071224]/90 to-[#050d1a]/98" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-8">

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
          <div className="leading-none text-left">
            <p className="text-white font-extrabold text-xs tracking-widest uppercase">KNIGHTSTRIDER</p>
            <p className="text-accent font-extrabold text-xs tracking-widest uppercase">VILLAS DIRECT</p>
          </div>
        </motion.div>

        {/* Giant headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight">
            <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">7 THINGS</span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">THEY DON'T TELL YOU</span>
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
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center"
        >
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-white/90 font-semibold text-sm sm:text-base">{b}</span>
            </div>
          ))}
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full rounded-2xl overflow-hidden border-2 border-primary/30 glow-orange"
        >
          {!playing ? (
            <div className="relative aspect-video bg-[#0d1b2a] cursor-pointer group" onClick={() => setPlaying(true)}>
              <img
                src="https://img.youtube.com/vi/O_kYqax63B4/maxresdefault.jpg"
                alt="7 Things They Don't Tell You About Owning an Orlando Villa"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-[#0A1628]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  data-event="watch_video_clicked"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center glow-orange group-hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">▶ 7 Things They Don't Tell You</p>
                  <p className="text-white/60 text-xs sm:text-sm">Knightstrider Villas Direct</p>
                </div>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">14:32</span>
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/O_kYqax63B4?autoplay=1&rel=0"
                title="7 Things They Don't Tell You About Owning an Orlando Villa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col items-center gap-3"
        >
          <Button
            size="lg"
            onClick={onDownload}
            data-event="toolkit_download_started"
            className="bg-primary hover:bg-primary/90 text-white font-extrabold text-lg px-10 py-7 rounded-xl glow-orange transition-all hover:scale-[1.02] uppercase tracking-wide shadow-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            DOWNLOAD FREE TOOLKIT NOW
          </Button>
          <p className="text-white/40 text-xs font-semibold">100% Free · No Spam, Ever</p>
        </motion.div>

      </div>
    </section>
  );
}