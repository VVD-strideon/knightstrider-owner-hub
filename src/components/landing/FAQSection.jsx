import React from "react";
import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this really free? What's the catch?",
    a: "100% free, no catch. We built these tools because we believe informed villa owners make better decisions — and when they're ready for hands-on help, they know where to find us."
  },
  {
    q: "I already use a management company. Is this still useful?",
    a: "Absolutely. Several of the tools (Manager Review Checklist, Owner Margin Calculator) are designed specifically to help you evaluate whether your current setup is working — or costing you money."
  },
  {
    q: "How quickly will I get the toolkit?",
    a: "Instantly. As soon as you submit your details, you'll get immediate access to download the full PDF toolkit — no waiting for emails."
  },
  {
    q: "Do I need to own a villa in Orlando specifically?",
    a: "The toolkit is designed for Orlando and Central Florida villa owners (Kissimmee, Davenport, Champions Gate, Reunion, etc.), but many of the principles apply to vacation rental owners anywhere."
  },
  {
    q: "Will you sell my information?",
    a: "Never. Your data stays with Knightstrider Villas Direct. We'll send you useful villa owner content — and you can unsubscribe in one click at any time."
  },
  {
    q: "What is Knightstrider Villas Direct?",
    a: "We help Orlando villa owners earn more from their properties through direct booking strategies, better pricing, and hands-on owner support. This toolkit is a taste of how we work."
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#EEF4FB", color: "#2166F3", border: "1px solid rgba(33,102,243,0.2)" }}>
            Questions?
          </span>
          <h2 className="font-extrabold tracking-tight text-navy" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-2xl px-6 border border-slate-200 data-[state=open]:border-brand-blue card-shadow"
              >
                <AccordionTrigger className="font-semibold text-left text-sm sm:text-base hover:no-underline py-5 text-navy">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-medium text-sm leading-relaxed pb-5" style={{ color: "#3a506b" }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}