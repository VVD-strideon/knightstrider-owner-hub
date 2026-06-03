import React from "react";
import { motion } from "framer-motion";
import { Play, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/03f2c4ed3_generated_f892cc25.png";
const HOST_IMG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/fd970fc2b_generated_217dc82d.png";

export default function HeroSection({ onWatchVideo, onDownload }) {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Luxury Orlando villa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/85 to-[#0A1628]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/40" />
      </div>

      {/* Palm leaf accent */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path d="M100,10 Q130,50 180,30 Q150,80 190,100 Q140,110 160,170 Q110,130 100,190 Q90,130 40,170 Q60,110 10,100 Q50,80 20,30 Q70,50 100,10Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">Free for Orlando Villa Owners</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-white">7 Things They</span>
              <br />
              <span className="text-gradient">Don't Tell You</span>
              <br />
              <span className="text-white">About Owning an</span>
              <br />
              <span className="text-accent">Orlando Villa</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Watch the free video & grab your <strong className="text-white">9-Tool Owner Toolkit</strong> — 
              the same system helping villa owners earn more, stress less, and take back control.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                onClick={onDownload}
                data-event="toolkit_download_started"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Owner Toolkit
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onWatchVideo}
                data-event="watch_video_clicked"
                className="border-accent/40 text-accent hover:bg-accent/10 font-semibold text-lg px-8 py-6 rounded-xl transition-all hover:scale-[1.02]"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Free Video
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 pt-4 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                100% Free
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                No Spam, Ever
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Instant Access
              </span>
            </motion.div>
          </div>

          {/* Right - Host image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hidden lg:flex lg:col-span-2 justify-center relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl" />
              <img
                src={HOST_IMG}
                alt="Villa ownership expert"
                className="relative z-10 w-80 xl:w-96 object-cover rounded-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -left-8 bottom-20 z-20 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-2xl">
                <p className="text-xs text-muted-foreground">Avg. owner increase</p>
                <p className="text-2xl font-bold text-primary">+37%</p>
                <p className="text-xs text-green-400">rental income</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}