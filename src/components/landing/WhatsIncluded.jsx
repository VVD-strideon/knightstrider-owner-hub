import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, GitFork, Users, Calculator, 
  Receipt, Shield, ClipboardCheck, Rocket, Target 
} from "lucide-react";

const tools = [
  { icon: Target, name: "Villa Investor Scorecard", desc: "Rate your villa's investment performance at a glance" },
  { icon: GitFork, name: "Buy / Hold / Improve / Sell Decision Sheet", desc: "Know exactly what move to make next with your property" },
  { icon: Users, name: "Guest Demand Checklist", desc: "Ensure your villa ticks every box guests are searching for" },
  { icon: Calculator, name: "Owner Margin Calculator", desc: "See your true profit after every fee, cost, and commission" },
  { icon: Receipt, name: "Pricing Review Worksheet", desc: "Benchmark your nightly rates against the market" },
  { icon: Shield, name: "Direct Booking Trust Audit", desc: "Score how trustworthy your direct booking setup looks to guests" },
  { icon: ClipboardCheck, name: "Manager Review Checklist", desc: "Evaluate your management company with the right questions" },
  { icon: Rocket, name: "Direct Booking Readiness Checklist", desc: "Find out if you're ready to take bookings directly" },
  { icon: BarChart3, name: "90-Day Villa Owner Action Plan", desc: "A step-by-step roadmap to higher income in 90 days" },
];

export default function WhatsIncluded() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-accent/15 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            What's Inside
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            9 Tools Built for
            <span className="text-gradient"> Villa Owners</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each tool targets a specific challenge Orlando villa owners face — from pricing to guest trust to direct booking readiness.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/40 hover:bg-card/80 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm mb-1 leading-snug">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}