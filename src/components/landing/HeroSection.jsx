import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, CheckCircle, Lock } from "lucide-react";
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
        >
          <img
            src="https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/dfc95bf9f_Untitleddesign23.png"
            alt="Knightstrider Villas Direct"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            style={{ filter: 'invert(1) brightness(1.2)', mixBlendMode: 'screen' }}
          />
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
          <div className="bg-[#0d1b2a] p-6 sm:p-8 text-left space-y-5">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#1a2a3a] border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-xs font-bold uppercase tracking-widest">
            <Play className="w-3 h-3 fill-primary text-primary" />
            On-Demand Webinar — Watch Free
          </span>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl leading-tight">
            The Webinar UK Orlando Owners Are Calling{" "}
            <span className="text-primary">"A Wake-Up Call"</span>
          </h2>

          {/* Body */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            In this candid 50-minute panel, real UK villa owners and Orlando property experts reveal the 7 principles behind successful ownership — including the mistakes that cost owners thousands every year.
          </p>

          {/* Bullets */}
          <ul className="space-y-2.5">
            {[
              "Why 'revenue is not profit' — and what your real numbers look like",
              "The management company trick that costs owners 34% (not 14%)",
              "How Mick's £8,000 Disney games room was a complete waste of money",
              "The direct booking strategy that eliminated OTA fees entirely",
              "What 76.7 million Orlando visitors means for your villa's potential",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-white/85 text-sm">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="space-y-3 w-full">
            <button
              onClick={onDownload}
              data-event="toolkit_download_started"
              className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold text-lg uppercase tracking-widest px-8 py-5 rounded-2xl glow-orange transition-all hover:scale-[1.01] shadow-xl flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD YOUR FREE TOOLKIT NOW
            </button>
            <div className="flex items-center justify-center gap-4 text-white/60 text-xs font-semibold">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> 100% FREE</span>
              <span>•</span>
              <span>No Obligation</span>
              <span>•</span>
              <span>Instant Access</span>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}