import React from "react";
import { motion } from "framer-motion";
import { Download, Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA({ onDownload, onWatchVideo }) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Stop Leaving Money on the Table.
            <br />
            <span className="text-gradient">Start With the Toolkit.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join hundreds of Orlando villa owners who've used these exact tools to take back control and grow their rental income.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={onDownload}
              data-event="toolkit_download_started"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02]"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free Owner Toolkit
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onWatchVideo}
              data-event="watch_video_clicked"
              className="border-accent/40 text-accent hover:bg-accent/10 font-semibold text-lg px-8 py-6 rounded-xl"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Free Video
            </Button>
          </div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-primary mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}