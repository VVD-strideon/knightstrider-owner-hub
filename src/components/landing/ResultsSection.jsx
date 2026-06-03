import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight, Users, MessageCircle, Globe, DollarSign, BarChart2 } from "lucide-react";

const tableRows = [
  { icon: Users, metric: "Monthly Enquiries", before: "23", beforeSub: "per month", after: "61", afterSub: "per month" },
  { icon: MessageCircle, metric: "Average Response Time", before: "12 hrs", beforeSub: "", after: "1.6 hrs", afterSub: "" },
  { icon: Globe, metric: "Direct Booking Share", before: "21%", beforeSub: "", after: "64%", afterSub: "" },
  { icon: DollarSign, metric: "Revenue Kept (after fees)", before: "$2,850", beforeSub: "per month", after: "$7,430", afterSub: "per month" },
  { icon: BarChart2, metric: "Annual Revenue Kept", before: "$34,200", beforeSub: "per year", after: "$89,160", afterSub: "per year" },
];

const checks = [
  "Joined in March 2024",
  "Full Toolkit Implementation",
  "Active on Direct Booking Channels",
  "Manager Performance Tracking",
];

export default function ResultsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-[#e8f0fb] via-[#f0f6ff] to-[#e6f0fa]">
      {/* Subtle uplight glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-48 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Results table card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
        >
          <div className="p-6 text-center border-b border-gray-100">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a56db]">
              Real results. Better control. More profit.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-3 w-1/2"></th>
                  <th className="px-4 py-3 text-[#6b7280] font-extrabold text-xs uppercase tracking-widest text-center">BEFORE</th>
                  <th className="px-3 py-3 w-8"></th>
                  <th className="px-4 py-3 text-green-600 font-extrabold text-xs uppercase tracking-widest text-center">AFTER</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <tr key={row.metric} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#1a56db] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-[#111827] font-semibold text-sm sm:text-base">{row.metric}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <p className="text-[#111827] font-bold text-lg">{row.before}</p>
                        {row.beforeSub && <p className="text-gray-400 text-xs">{row.beforeSub}</p>}
                      </td>
                      <td className="px-2 py-4 text-center">
                        <ArrowRight className="w-4 h-4 text-blue-300 mx-auto" />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <p className="text-green-600 font-extrabold text-lg">{row.after}</p>
                        {row.afterSub && <p className="text-gray-400 text-xs">{row.afterSub}</p>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Left: headline + owner info */}
            <div className="flex-shrink-0 sm:w-64">
              <p className="font-extrabold text-[#1a56db] text-3xl sm:text-4xl leading-tight">
                12 ENQUIRIES<br />IN 24 HOURS
              </p>
              <div className="mt-4">
                <p className="font-bold text-[#111827] text-sm">Laura G, Project Pixiedust Villa Owner</p>
                <p className="text-[#1a56db] text-xs font-semibold mt-0.5">DBPR License: DWE5921586</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px self-stretch bg-gray-100" />

            {/* Right: photo + quote */}
            <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start">
              <img
                src="https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/bb1c842f3_image.png"
                alt="Laura G"
                className="w-24 h-24 rounded-xl object-cover flex-shrink-0 shadow"
              />
              <div className="space-y-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[#111827] text-base sm:text-lg leading-relaxed">
                  "I listed with Knightstrider Villas and had <strong>12 enquiries in 24 hours!</strong> No commission, no middlemen. Just direct bookings."
                </p>
                <p className="text-[#1a56db] font-bold">– Laura G.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}