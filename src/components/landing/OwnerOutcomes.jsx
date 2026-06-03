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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img src={VILLA_BG} alt="Orlando villa" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: "rgba(8,29,58,0.88)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Outcomes list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: "rgba(22,163,74,0.12)", color: "#16A34A", border: "1px solid rgba(22,163,74,0.3)" }}>
              Owner Outcomes
            </span>
            <h2 className="font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              After Using the Toolkit,<br />
              <span className="text-gradient">You'll Know…</span>
            </h2>
            <div className="space-y-3.5">
              {outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="font-semibold text-lg" style={{ color: "rgba(255,255,255,0.88)" }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Before / After card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border"
            style={{ background: "rgba(8,29,58,0.7)", backdropFilter: "blur(16px)", borderColor: "rgba(33,102,243,0.3)", boxShadow: "0 40px 100px rgba(8,29,58,0.5)" }}
          >
            <div className="px-6 py-5 border-b" style={{ borderColor: "rgba(33,102,243,0.2)" }}>
              <h3 className="font-extrabold text-white text-xl">Real Owner Results</h3>
              <p className="font-medium text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Davenport, FL — 5-bed villa</p>
            </div>

            <div className="grid grid-cols-2">
              <div className="p-6 border-r" style={{ borderColor: "rgba(33,102,243,0.2)" }}>
                <p className="text-xs font-extrabold uppercase tracking-wider mb-4" style={{ color: "#ef4444" }}>Before</p>
                <div className="space-y-4">
                  {[["$18,200", "Annual net income"], ["22 wks", "Occupancy"], ["40%", "Manager commission"]].map(([v, l]) => (
                    <div key={l}>
                      <p className="text-2xl font-extrabold" style={{ color: "#ef4444" }}>{v}</p>
                      <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6" style={{ background: "rgba(22,163,74,0.06)" }}>
                <p className="text-xs font-extrabold uppercase tracking-wider mb-4 text-brand-green">After 6 Months</p>
                <div className="space-y-4">
                  {[["$34,600", "Annual net income"], ["36 wks", "Occupancy"], ["15%", "Direct booking fee"]].map(([v, l]) => (
                    <div key={l}>
                      <p className="text-2xl font-extrabold text-brand-green">{v}</p>
                      <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 flex items-center justify-center gap-2" style={{ background: "rgba(22,163,74,0.12)", borderTop: "1px solid rgba(22,163,74,0.2)" }}>
              <ArrowRight className="w-5 h-5 text-brand-green" />
              <span className="font-extrabold text-brand-green text-lg">+90% net income increase</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}