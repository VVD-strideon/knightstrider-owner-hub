import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, DollarSign, Eye, Gem } from "lucide-react";

const benefits = [
  { icon: Shield, label: "PROTECT YOUR INVESTMENT", desc: "Safeguard your asset and future returns." },
  { icon: TrendingUp, label: "INCREASE REVENUE", desc: "Attract more bookings at better rates." },
  { icon: DollarSign, label: "REDUCE COSTS & FEES", desc: "Keep more of what you earn." },
  { icon: Eye, label: "STAY IN CONTROL OF YOUR VILLA", desc: "Make confident decisions with complete visibility." },
  { icon: Gem, label: "BUILD LONG-TERM VALUE", desc: "Stronger systems. Better returns." },
];

export default function SmartOwnershipBenefits() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#0a1628] font-extrabold text-lg tracking-widest uppercase mb-10"
        >
          THE BENEFITS OF SMART OWNERSHIP
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <b.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-[#0a1628] font-extrabold text-xs tracking-wide uppercase leading-tight">{b.label}</p>
              <p className="text-gray-500 text-xs leading-snug">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}