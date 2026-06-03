import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James T.",
    location: "Champions Gate, FL",
    text: "We had no idea our management company was taking 40% until we used the margin calculator. Switched to a direct model and our income nearly doubled in 6 months.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Reunion Resort, FL",
    text: "The 90-Day Action Plan gave me a clear roadmap. I stopped guessing and started executing. Our villa went from 22 weeks booked to 38 in one year.",
    rating: 5,
  },
  {
    name: "Michelle K.",
    location: "Solterra Resort, FL",
    text: "The Trust Audit was an eye-opener. We fixed our booking page in a weekend and saw direct inquiries jump immediately. Worth every minute.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative py-20 lg:py-28" style={{ background: "#EEF4FB" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(33,102,243,0.10)", color: "#2166F3", border: "1px solid rgba(33,102,243,0.2)" }}>
            Owner Stories
          </span>
          <h2 className="font-extrabold tracking-tight text-navy" style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)" }}>
            Owners Who Took <span className="text-gradient">Action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 card-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="font-semibold text-sm leading-relaxed mb-6" style={{ color: "#3a506b" }}>"{t.text}"</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-extrabold text-navy text-sm">{t.name}</p>
                <p className="font-medium text-xs mt-0.5" style={{ color: "#2166F3" }}>{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}