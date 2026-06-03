import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Shield, Zap } from "lucide-react";

const benefits = [
  { icon: TrendingUp, label: "Higher Occupancy", desc: "Fill more weeks at premium rates" },
  { icon: DollarSign, label: "More Net Revenue", desc: "Keep more of what you earn" },
  { icon: Shield, label: "Owner Control", desc: "Stop relying on middlemen" },
  { icon: Zap, label: "Less Stress", desc: "Systems that run themselves" },
];

export default function BenefitsStrip() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-3 transition-all group-hover:scale-105"
                style={{ background: "#EEF4FB", border: "1px solid rgba(33,102,243,0.2)" }}>
                <b.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="font-extrabold text-navy text-base mb-1">{b.label}</h3>
              <p className="font-medium text-sm" style={{ color: "#4a5e78" }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}