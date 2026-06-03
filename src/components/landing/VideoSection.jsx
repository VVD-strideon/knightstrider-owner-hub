import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection({ onDownload }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative py-16 lg:py-20 overflow-hidden bg-[#050d1a]">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight mb-3">
            WATCH THE FREE VIDEO
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto">
            In this full 1-hour 10-minute webinar, discover the 7 critical truths every Orlando villa owner needs to know.
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border-2 border-primary/30 glow-orange mb-8"
        >
          {!playing ? (
            <div className="relative aspect-video bg-[#0d1b2a] cursor-pointer group" onClick={() => setPlaying(true)}>
              <img
                src={`https://img.youtube.com/vi/O_kYqax63B4/maxresdefault.jpg`}
                alt="7 Things They Don't Tell You About Owning an Orlando Villa"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-[#0A1628]/40" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  data-event="watch_video_clicked"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center glow-orange group-hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                </button>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">▶ 7 Things They Don't Tell You</p>
                  <p className="text-white/60 text-xs sm:text-sm">Knightstrider Villas Direct</p>
                </div>
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">1:10:00</span>
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

        {/* Download CTA below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <Button
            size="lg"
            onClick={onDownload}
            data-event="toolkit_download_started"
            className="bg-primary hover:bg-primary/90 text-white font-extrabold text-lg px-10 py-7 rounded-xl uppercase tracking-wide glow-orange transition-all hover:scale-[1.02] shadow-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            DOWNLOAD FREE TOOLKIT NOW
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/40 text-xs font-semibold">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> 100% Free</span>
            <span>•</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> No Spam, Ever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}