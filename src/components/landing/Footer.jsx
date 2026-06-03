import React from "react";
import { Facebook, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.476 2 2 6.477 2 12.004c0 1.77.463 3.434 1.27 4.876L2 22l5.233-1.243A9.953 9.953 0 0012.004 22C17.53 22 22 17.523 22 11.996 22 6.477 17.53 2 12.004 2zm0 18.26a8.231 8.231 0 01-4.205-1.153l-.301-.18-3.107.738.784-2.998-.197-.308A8.23 8.23 0 013.77 12.004c0-4.544 3.692-8.235 8.234-8.235 4.541 0 8.231 3.691 8.231 8.235 0 4.542-3.69 8.256-8.231 8.256z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1a3a6b] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10">

          {/* Brand */}
          <div className="space-y-2.5 sm:space-y-3">
            <h2 className="font-extrabold text-lg sm:text-xl tracking-tight">
              <span className="text-[#4db8ff]">KNIGHTSTRIDER</span>{" "}
              <span className="text-white">VILLAS</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              No booking fees. 0% commission.<br className="hidden sm:inline" />
              100% Good times. Stride on!
            </p>
          </div>

          {/* For Guests */}
          <div className="space-y-2.5 sm:space-y-3">
            <p className="font-bold text-white text-xs sm:text-sm">For Guests</p>
            <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
              <li><a href="https://knightstridervillas.com" className="hover:text-white transition-colors">Vacation Rentals</a></li>
              <li><a href="https://knightstridervillas.com/deals" className="hover:text-white transition-colors">Latest Deals</a></li>
              <li><a href="https://knightstridervillas.com/verify" className="hover:text-white transition-colors">Villa Verification</a></li>
            </ul>
          </div>

          {/* For Owners */}
          <div className="space-y-2.5 sm:space-y-3">
            <p className="font-bold text-white text-xs sm:text-sm">For Owners</p>
            <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
              <li><a href="https://knightstridervillas.com/list" className="hover:text-white transition-colors">List My Villa</a></li>
              <li><a href="https://knightstridervillas.com/dashboard" className="hover:text-white transition-colors">Owner Dashboard</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2.5 sm:space-y-3">
            <p className="font-bold text-white text-xs sm:text-sm">Company</p>
            <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm">
              <li><a href="https://knightstridervillas.com/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://knightstridervillas.com/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="https://knightstridervillas.com/policies" className="hover:text-white transition-colors">Policies</a></li>
              <li><a href="https://knightstridervillas.com/cookies" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 sm:gap-6 py-4 sm:py-6 border-t border-white/10">
          {[
            { icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#" },
            { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#" },
            { icon: <TikTokIcon />, href: "#" },
            { icon: <WhatsAppIcon />, href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-4 sm:pt-5 text-center">
          <p className="text-white/40 text-[10px] sm:text-xs px-4">
            Knightstrider Villas Direct is registered in USA under Vacation Villas Direct. Registered LLC (EIN 93-3504773).
          </p>
        </div>

      </div>
    </footer>
  );
}