import React from "react";
import { motion } from "framer-motion";
import { Home, DollarSign, MapPin, Shield } from "lucide-react";

const benefits = [
  { icon: Home, label: "SMART INVESTMENT", desc: "Build wealth with your villa." },
  { icon: DollarSign, label: "STRONG INCOME POTENTIAL", desc: "Higher bookings. Better returns." },
  { icon: MapPin, label: "UNBEATABLE LOCATION", desc: "Orlando – year-round demand." },
  { icon: Shield, label: "OWNER CONTROL", desc: "No middlemen. More freedom." },
];

export default function BenefitsStrip() {
  return (
    <section className="bg-[#071828] border-y border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 px-4 py-2"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center mt-0.5">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase leading-tight">{b.label}</p>
                <p className="text-white/55 text-xs mt-0.5 leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}