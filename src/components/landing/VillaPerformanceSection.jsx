import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Search, Users, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
{ title: "0% Commission", sub: "Keep 100% of your revenue." },
{ title: "Direct Enquiries", sub: "No middlemen. No extra fees." },
{ title: "You Stay in Control", sub: "Decide rates, rules & availability." },
{ title: "Owner Direct Bookings Only", sub: "Real guests. Real enquiries." }];


const scores = [
{ icon: Eye, label: "Photo Score", value: 85, color: "text-green-500" },
{ icon: Search, label: "SEO Score", value: 42, color: "text-orange-500" },
{ icon: Users, label: "Social Ready", value: 57, color: "text-orange-400" },
{ icon: ClipboardList, label: "Listing Complete", value: 78, color: "text-blue-500", suffix: "%" }];


export default function VillaPerformanceSection({ onDownload }) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#e8f4ff] via-[#f0f8ff] to-[#ddeeff] hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            
            <div>
              <span className="inline-block border border-[#1a56db] text-[#1a56db] text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
                Exclusive for Orlando Villa Owners
              </span>
              <h2 className="font-display font-extrabold leading-tight text-4xl sm:text-5xl">
                <span className="text-[#0a1628]">See How Your</span><br />
                <span className="text-[#1a56db]">Villa Performs.</span>
              </h2>
              <p className="text-gray-500 text-base mt-4 leading-relaxed">
                Get your free performance assessment and unlock more owner direct bookings.
              </p>
            </div>

            <ul className="space-y-4">
              {bullets.map((b) =>
              <li key={b.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#0a1628] text-sm sm:text-base">{b.title}</p>
                    <p className="text-gray-500 text-sm">{b.sub}</p>
                  </div>
                </li>
              )}
            </ul>

            <div className="flex items-end gap-4">
              <img
                src="https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/847b16f51_image.png"
                alt="Villa Expert"
                className="w-20 h-20 rounded-xl object-cover object-top shadow-md flex-shrink-0" />
              
              <div>
                <p className="text-[#1a56db] font-bold italic text-base leading-tight">
                  More enquiries.<br />More bookings.<br />More profit.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              onClick={onDownload}
              className="bg-primary hover:bg-primary/90 text-white font-extrabold text-base px-8 py-6 rounded-xl uppercase tracking-wide glow-orange transition-all hover:scale-[1.02] shadow-lg">
              
              Get Your Free Villa Assessment
            </Button>
          </motion.div>

          {/* Right: mock snapshot card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            
            {/* Dashed border decoration */}
            <div className="absolute -inset-3 border-2 border-dashed border-[#1a56db]/30 rounded-3xl pointer-events-none" />

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
              {/* Card header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="flex items-center gap-1.5 text-green-500 text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Free Assessment Preview
                    </span>
                    <h3 className="font-extrabold text-[#0a1628] text-xl leading-tight">Your Villa Performance<br />Snapshot</h3>
                    <p className="text-gray-400 text-xs mt-1">See how your villa performs across key areas.</p>
                  </div>
                  {/* Score circle */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center">
                      <span className="font-extrabold text-green-500 text-xl leading-none">82</span>
                    </div>
                    <span className="text-gray-400 text-xs mt-0.5">/100</span>
                    <span className="text-green-500 text-xs font-bold mt-0.5">Great Potential!</span>
                  </div>
                </div>
              </div>

              {/* Score grid */}
              <div className="grid grid-cols-4 gap-0 border-b border-gray-100">
                {scores.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="p-4 text-center border-r border-gray-50 last:border-r-0">
                      <Icon className={`w-5 h-5 mx-auto mb-1.5 ${s.color}`} />
                      <p className="text-gray-400 text-xs leading-tight">{s.label}</p>
                      <p className={`font-extrabold text-base mt-1 ${s.color}`}>
                        {s.value}{s.suffix || "/100"}
                      </p>
                    </div>);

                })}
              </div>

              {/* Revenue section */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Revenue Potential</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">Est. Annual Revenue</p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="font-extrabold text-[#0a1628] text-3xl">$43,800</p>
                  <div className="text-right space-y-0.5">
                    <div>
                      <span className="text-green-500 font-extrabold text-sm">You Keep (80%) </span>
                      <span className="text-green-500 font-extrabold text-lg">$35k</span>
                    </div>
                    <div>
                      <span className="text-red-400 font-extrabold text-sm">Platform (20%) </span>
                      <span className="text-red-400 font-extrabold text-lg">$9k</span>
                    </div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="relative h-3 rounded-full overflow-hidden bg-red-200">
                  <div className="absolute left-0 top-0 h-full bg-green-500 rounded-full" style={{ width: "80%" }} />
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-green-500">You keep 80%</span>
                  <span className="text-red-400">Platform takes 20%</span>
                </div>
                {/* Warning banner */}
                <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-red-400 text-lg leading-none">⚠</span>
                  <div>
                    <p className="text-red-500 font-bold text-sm">Stop giving $9k/yr away</p>
                    <p className="text-gray-500 text-xs">No fees. 0% commission with direct bookings on Knightstrider Villas.</p>
                  </div>
                </div>
              </div>

              {/* Villa photos strip */}
              <div className="grid grid-cols-4 gap-1 p-3 pt-0">
                {[
                "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=200&h=120&fit=crop",
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&h=120&fit=crop",
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=200&h=120&fit=crop",
                "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=200&h=120&fit=crop"].
                map((src, i) =>
                <img key={i} src={src} alt="Villa" className="rounded-lg w-full h-14 object-cover" />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}