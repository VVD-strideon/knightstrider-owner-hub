import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, DollarSign, Eye, Gem, Home } from "lucide-react";

const benefits = [
  { icon: Shield, label: "PROTECT YOUR INVESTMENT", desc: "Safeguard your asset and future returns." },
  { icon: TrendingUp, label: "INCREASE REVENUE", desc: "Attract more bookings at better rates." },
  { icon: DollarSign, label: "REDUCE COSTS & FEES", desc: "Keep more of what you earn." },
  { icon: Eye, label: "STAY IN CONTROL OF YOUR VILLA", desc: "Make confident decisions with complete visibility." },
  { icon: Gem, label: "BUILD LONG-TERM VALUE", desc: "Stronger systems. Better returns." },
  { icon: Home, label: "SELL & BUY RIGHT", desc: "Gain advice from a pro. Learn about Garry.", href: "https://www.garrywalmsley.com" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col items-center text-center gap-3 ${b.href ? "cursor-pointer group" : ""}`}
              onClick={b.href ? () => window.open(b.href, "_blank") : undefined}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${b.href ? "bg-orange-100 border border-orange-300 group-hover:bg-orange-500" : "bg-accent/10 border border-accent/20"}`}>
                <b.icon className={`w-7 h-7 transition-colors ${b.href ? "text-orange-500 group-hover:text-white" : "text-accent"}`} />
              </div>
              <p className={`font-extrabold text-[10px] sm:text-xs tracking-wide uppercase leading-tight transition-colors ${b.href ? "text-orange-500 group-hover:text-orange-600" : "text-[#0a1628]"}`}>{b.label}</p>
              <p className="text-gray-500 text-xs leading-snug">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}