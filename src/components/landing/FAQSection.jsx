import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/15 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-white font-semibold text-left text-sm sm:text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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