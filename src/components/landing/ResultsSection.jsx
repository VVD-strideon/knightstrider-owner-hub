import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const VILLA_BG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/0062d0442_generated_image.png";

const tableRows = [
  { metric: "Monthly Enquiries", before: "23", after: "61" },
  { metric: "Direct Booking Share", before: "21%", after: "54%" },
  { metric: "Average Response Time", before: "12 hrs", after: "1.6 hrs" },
  { metric: "Revenue Kept (after fees)", before: "$2,850/mo", after: "$7,430/mo" },
  { metric: "Annual Revenue Kept", before: "$34,200/yr", after: "$89,160/yr" },
];

export default function ResultsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={VILLA_BG} alt="Villa at night" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#050d1a]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="text-5xl text-accent font-serif leading-none">"</div>
            <p className="text-white text-lg sm:text-xl leading-relaxed font-semibold italic">
              Within 24 hours of listing with Knightstrider Villas, we had more qualified enquiries than we'd received in the previous three months. The direct bookings, zero commission, and owner-first approach just make sense.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <div>
              <p className="text-white font-extrabold text-base">Laura G.</p>
              <p className="text-white/60 text-sm">Orlando Villa Owner</p>
              <div className="inline-flex items-center gap-1.5 mt-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Verified Owner</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Before/After table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#071828]/90 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-5 border-b border-white/10 text-center">
              <p className="text-white font-extrabold text-lg tracking-wider uppercase">REAL RESULTS.</p>
              <p className="text-primary font-extrabold text-lg tracking-wider uppercase">BETTER RETURNS.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-5 py-3 text-white/50 font-semibold text-xs uppercase tracking-wider"></th>
                    <th className="px-4 py-3 text-red-400 font-extrabold text-xs uppercase tracking-wider text-center">BEFORE</th>
                    <th className="px-4 py-3 text-green-400 font-extrabold text-xs uppercase tracking-wider text-center bg-green-400/5">AFTER</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={row.metric} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/2"}`}>
                      <td className="px-5 py-3 text-white/70 font-medium text-xs">{row.metric}</td>
                      <td className="px-4 py-3 text-red-300 font-bold text-center text-sm">{row.before}</td>
                      <td className="px-4 py-3 text-green-400 font-extrabold text-center text-sm bg-green-400/5">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-primary/10 border-t border-primary/20">
              <p className="text-center text-white/70 text-xs italic">
                "I finally have a clear plan and the right tools. My guests love the experience, and my numbers speak for themselves." — <strong className="text-white">Sarah M.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}