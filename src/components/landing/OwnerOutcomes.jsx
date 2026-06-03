import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const outcomes = [
  "Know exactly what your villa earns after all fees",
  "Identify if your management company is underperforming",
  "Spot pricing gaps costing you thousands per year",
  "Build guest trust for direct bookings",
  "Get a 90-day action plan tailored to your situation",
  "Decide whether to hold, improve, or sell with confidence",
];

const VILLA_BG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/0062d0442_generated_image.png";

export default function OwnerOutcomes() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={VILLA_BG} alt="Orlando villa lifestyle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A1628]/92" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            <span className="inline-block bg-green-500/15 text-green-400 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-wide uppercase">
              Owner Outcomes
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              After Using the Toolkit,
              <span className="text-gradient"> You'll Know…</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Before / After card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-4 sm:p-6 border-b border-border">
              <h3 className="font-display font-bold text-white text-base sm:text-lg md:text-xl">Real Owner Results</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">Davenport, FL — 5-bed villa</p>
            </div>
            <div className="grid grid-cols-2">
              {/* Before */}
              <div className="p-4 sm:p-6 border-r border-border">
                <p className="text-[10px] sm:text-xs font-semibold text-red-400 uppercase tracking-wider mb-2 sm:mb-3">Before</p>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-400">$18,200</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Annual net income</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-400">22 wks</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Occupancy</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-400">40%</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Manager commission</p>
                  </div>
                </div>
              </div>
              {/* After */}
              <div className="p-4 sm:p-6 bg-primary/5">
                <p className="text-[10px] sm:text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 sm:mb-3">After 6 Months</p>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">$34,600</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Annual net income</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">36 wks</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Occupancy</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">15%</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Direct booking fee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-primary/10 flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="font-bold text-primary text-sm sm:text-base md:text-lg">+90% net income increase</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}