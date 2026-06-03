import React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOOLKIT_IMG = "https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/3979436f5_generated_f57946ad.png";

export default function ToolkitPreview({ onDownload }) {
  return (
    <section id="toolkit" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-3xl blur-2xl" />
            <img
              src={TOOLKIT_IMG}
              alt="9-Tool Villa Owner Toolkit"
              className="relative rounded-2xl shadow-2xl border border-border/50 w-full"
            />
            {/* Floating tag */}
            <div className="absolute -top-4 -right-4 bg-primary text-white font-bold text-sm px-4 py-2 rounded-xl rotate-3 shadow-lg">
              FREE PDF
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-block bg-primary/15 text-primary text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
              Instant Download
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Complete
              <span className="text-gradient"> Villa Owner</span>
              <br />Toolkit
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              9 proven tools, checklists, and calculators built specifically for Orlando villa owners. 
              Use them to audit your rental, find hidden revenue, and build a direct booking strategy — 
              <strong className="text-white">all in one free PDF</strong>.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <FileText className="w-5 h-5 text-accent" />
              <span>PDF format • Instant access • No credit card required</span>
            </div>
            <Button
              size="lg"
              onClick={onDownload}
              data-event="toolkit_download_started"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free Toolkit Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}