import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Award } from "lucide-react";

const badges = [
  { icon: MapPin, text: "Orlando Specialists" },
  { icon: Users, text: "500+ Owners Helped" },
  { icon: Award, text: "5-Star Rated" },
  { icon: ShieldCheck, text: "No Spam Guarantee" },
];

export default function TrustBadges() {
  return (
    <div className="bg-muted/30 border-y border-border/30 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {badges.map((b, i) => (
          <motion.div
            key={b.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <b.icon className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">{b.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}