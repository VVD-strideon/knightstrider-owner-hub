import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/15 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Owner Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Owners Who Took
            <span className="text-gradient"> Action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-white/90 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="font-display font-bold text-white text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}