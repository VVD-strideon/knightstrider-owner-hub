import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, DollarSign } from "lucide-react";

const benefits = [
  { icon: TrendingUp, label: "Higher Occupancy", desc: "Fill more weeks at premium rates" },
  { icon: DollarSign, label: "More Revenue", desc: "Keep more of what you earn" },
  { icon: Shield, label: "Owner Control", desc: "Stop relying on middlemen" },
  { icon: Clock, label: "Less Stress", desc: "Systems that run themselves" },
];

export default function BenefitsStrip() {
  return (
    <section className="relative py-16 border-y border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-3 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-1">{b.label}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}