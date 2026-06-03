import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-accent/15 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Free Training Video
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Watch Before You Make Your Next
            <span className="text-gradient"> Villa Decision</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In under 15 minutes, discover the 7 critical truths every Orlando villa owner needs to know — 
            before it costs you another season of lost revenue.
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border-2 border-primary/30 glow-orange"
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
      </div>
    </section>
  );
}