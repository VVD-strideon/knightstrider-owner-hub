import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3, GitFork, Users, Calculator,
  Receipt, Shield, ClipboardCheck, Rocket, Target
} from "lucide-react";

const tools = [
  { num: "01", icon: Target, name: "Villa Investor Scorecard", desc: "Rate your villa's investment performance at a glance" },
  { num: "02", icon: GitFork, name: "Buy / Hold / Improve / Sell Decision Sheet", desc: "Know exactly what move to make next with your property" },
  { num: "03", icon: Users, name: "Guest Demand Checklist", desc: "Ensure your villa ticks every box guests are searching for" },
  { num: "04", icon: Calculator, name: "Owner Margin Calculator", desc: "See your true profit after every fee, cost, and commission" },
  { num: "05", icon: Receipt, name: "Pricing Review Worksheet", desc: "Benchmark your nightly rates against the market" },
  { num: "06", icon: Shield, name: "Direct Booking Trust Audit", desc: "Score how trustworthy your direct booking setup looks to guests" },
  { num: "07", icon: ClipboardCheck, name: "Manager Review Checklist", desc: "Evaluate your management company with the right questions" },
  { num: "08", icon: Rocket, name: "Direct Booking Readiness Checklist", desc: "Find out if you're ready to take bookings directly" },
  { num: "09", icon: BarChart3, name: "90-Day Villa Owner Action Plan", desc: "A step-by-step roadmap to higher income in 90 days" },
];

export default function WhatsIncluded() {
  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#EEF4FB", color: "#2166F3", border: "1px solid rgba(33,102,243,0.2)" }}>
            What's Inside
          </span>
          <h2 className="font-extrabold tracking-tight mb-4 text-navy" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}>
            9 Tools Built for<br />
            <span className="text-gradient">Villa Owners</span>
          </h2>
          <p className="font-semibold text-lg max-w-2xl mx-auto" style={{ color: "#3a506b" }}>
            Each tool targets a specific challenge Orlando villa owners face — from pricing to guest trust to direct booking readiness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl p-5 border border-slate-200 bg-white hover:border-brand-blue transition-all card-shadow hover:card-shadow-heavy"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-105"
                  style={{ background: "#EEF4FB", border: "1px solid rgba(33,102,243,0.2)" }}>
                  <tool.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#2166F3" }}>{tool.num}</span>
                    <h3 className="font-extrabold text-navy text-sm leading-snug">{tool.name}</h3>
                  </div>
                  <p className="font-medium text-sm leading-relaxed" style={{ color: "#4a5e78" }}>{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}