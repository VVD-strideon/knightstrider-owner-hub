import React from "react";
import { ShieldCheck, Users, MapPin, Award, Lock } from "lucide-react";

const badges = [
  { icon: MapPin, text: "Orlando Specialists" },
  { icon: Users, text: "500+ Owners Helped" },
  { icon: Award, text: "5-Star Rated" },
  { icon: Lock, text: "No Spam Guarantee" },
  { icon: ShieldCheck, text: "Instant PDF Access" },
];

export default function TrustBadges() {
  return (
    <div className="border-y border-slate-200 py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {badges.map((b) => (
          <div key={b.text} className="flex items-center gap-2" style={{ color: "#081D3A" }}>
            <b.icon className="w-4 h-4 text-brand-blue flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}