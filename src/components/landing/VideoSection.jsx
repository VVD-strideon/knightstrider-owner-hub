import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative py-20 lg:py-28 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d1e3a] to-navy" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(33,102,243,0.12)", color: "#4F8EF7", border: "1px solid rgba(33,102,243,0.3)" }}>
            Free Training Video
          </span>
          <h2 className="font-extrabold text-white mb-4 tracking-tight" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}>
            Watch Before You Make Your Next<br />
            <span className="text-gradient">Villa Decision</span>
          </h2>
          <p className="font-semibold text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            In under 15 minutes, discover the 7 critical truths every Orlando villa owner needs to know — 
            before it costs you another season of lost revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
          style={{ border: "2px solid rgba(33,102,243,0.4)", boxShadow: "0 0 60px rgba(33,102,243,0.2)" }}
        >
          {!playing ? (
            <div
              className="relative aspect-video cursor-pointer group"
              style={{ background: "#050f1d" }}
              onClick={() => setPlaying(true)}
            >
              <img
                src="https://img.youtube.com/vi/O_kYqax63B4/maxresdefault.jpg"
                alt="7 Things They Don't Tell You About Owning an Orlando Villa"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  data-event="watch_video_clicked"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 glow-blue"
                  style={{ background: "#2166F3" }}
                >
                  <Play className="w-9 h-9 text-white fill-white ml-1" />
                  <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#2166F3" }} />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-extrabold text-sm sm:text-base">▶ 7 Things They Don't Tell You</p>
                  <p className="font-semibold text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Knightstrider Villas Direct</p>
                </div>
                <span className="text-white text-xs px-2 py-1 rounded font-bold" style={{ background: "rgba(0,0,0,0.6)" }}>14:32</span>
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