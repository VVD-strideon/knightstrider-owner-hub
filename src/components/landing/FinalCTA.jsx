import React from "react";
import { motion } from "framer-motion";
import { Download, Lock, ShieldCheck, MailX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA({ onDownload }) {
  return (
    <section className="bg-[#071828] border-t border-white/10 py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight uppercase">
            READY TO TAKE CONTROL OF YOUR
            <span className="text-primary"> VILLA SUCCESS?</span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg max-w-xl mx-auto">
            Download your FREE Toolkit now and start making smarter decisions today.
          </p>

          <Button
            size="lg"
            onClick={onDownload}
            data-event="toolkit_download_started"
            className="bg-primary hover:bg-primary/90 text-white font-extrabold text-lg px-10 py-7 rounded-xl uppercase tracking-wide glow-orange transition-all hover:scale-[1.02] shadow-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            DOWNLOAD YOUR FREE TOOLKIT NOW
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-5 text-white/50 text-xs font-semibold pt-2">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Instant Access</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> 100% Free</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><MailX className="w-3.5 h-3.5" /> No Spam, Ever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}