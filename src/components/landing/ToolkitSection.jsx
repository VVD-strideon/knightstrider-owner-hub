import React from "react";
import { motion } from "framer-motion";
import { Download, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOOLKIT_IMG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/61db6d2a6_ChatGPTImageJun3202612_38_07PM.png";

const tools = [
  "Villa Investor Scorecard",
  "Buy / Hold / Improve / Sell Decision Sheet",
  "Resort & Community Analyzer",
  "Comp Set Analyzer",
  "Rental Rate Optimizer",
  "Booking Channel Analyzer",
  "Marketing Effectiveness Tracker",
  "Owner ROI Calculator",
  "Property Management Scorecard",
];

export default function ToolkitSection({ onDownload }) {
  return (
    <section id="toolkit" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Left: Toolkit visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <img
                src={TOOLKIT_IMG}
                alt="9-Tool Villa Owner Toolkit"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* "9 TOOLS" badge */}
              <div className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 bg-accent text-white rounded-2xl p-3 sm:p-4 shadow-2xl text-center border-4 border-white">
                <p className="text-4xl sm:text-5xl font-extrabold leading-none">9</p>
                <p className="text-xs font-extrabold tracking-wider uppercase leading-tight mt-1">TOOLS<br />&amp; GUIDES</p>
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest mt-1">INSTANT ACCESS</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy + list + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5"
          >
            <div>
              <p className="text-gray-500 font-extrabold text-sm sm:text-lg tracking-wider uppercase">GET YOUR</p>
              <h2 className="font-display font-extrabold leading-tight">
                <span className="text-primary text-3xl sm:text-4xl md:text-5xl block">FREE</span>
                <span className="text-[#0a1628] text-2xl sm:text-3xl md:text-4xl block">OWNER TOOLKIT</span>
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                A complete collection of 9 expert tools &amp; guides designed specifically for Orlando villa owners looking for short term rental bookings.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid sm:grid-cols-1 gap-2">
              {tools.map((tool) => (
                <div key={tool} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-[#0a1628] font-semibold text-sm">{tool}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <Button
                size="lg"
                onClick={onDownload}
                data-event="toolkit_download_started"
                className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold text-base sm:text-lg py-5 sm:py-6 rounded-xl uppercase tracking-wide glow-orange transition-all hover:scale-[1.01] shadow-lg"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                DOWNLOAD YOUR FREE TOOLKIT NOW
              </Button>
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-500 text-xs font-semibold">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> 100% FREE</span>
                <span>•</span>
                <span>No Obligation</span>
                <span>•</span>
                <span>Instant Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}