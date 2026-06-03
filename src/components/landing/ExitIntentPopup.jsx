import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { base44 } from "@/api/base44Client";

export default function ExitIntentPopup({ onDownload }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("exitPopupShown") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (hasShown) return;

    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      if (mouseY < 100 && !isOpen && !submitted) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("exitPopupShown", "true");
        base44.analytics.track({
          eventName: "exit_intent_popup_shown",
          properties: { source: "mouse_leave_top" },
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !isOpen && !submitted && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem("exitPopupShown", "true");
        base44.analytics.track({
          eventName: "exit_intent_popup_shown",
          properties: { source: "scroll_70_percent" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, submitted, hasShown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !consent) return;

    setLoading(true);
    try {
      await base44.entities.Lead.create({
        first_name: "Exit Intent",
        email: email,
        phone: undefined,
        villa_resort: "N/A",
        address: "N/A",
        consent: consent,
        source: "exit_intent_popup",
      });

      base44.analytics.track({
        eventName: "exit_intent_converted",
        properties: { email: email },
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error saving lead:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4 z-50"
          >
            <div className="relative bg-gradient-to-br from-[#0A1628] to-[#1a2a4a] rounded-2xl shadow-2xl border border-primary/30 overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {!submitted ? (
                <>
                  {/* Header with urgency */}
                  <div className="relative pt-8 pb-6 px-6 sm:px-8 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-4">
                      <Gift className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">Last Chance Offer</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                      Wait! Get a{" "}
                      <span className="text-primary">Bonus Checklist</span>
                    </h2>
                    
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      Before you go, grab our <strong>5-Minute Villa Profit Audit</strong> — 
                      the quick checklist that reveals hidden revenue opportunities in your property.
                    </p>
                  </div>

                  {/* Visual preview */}
                  <div className="px-6 sm:px-8 pb-6">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold text-sm">Discover your villa's true profit margin</p>
                          <p className="text-white/50 text-xs">Most owners miss 23% of their income</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold text-sm">Spot management company red flags</p>
                          <p className="text-white/50 text-xs">Avoid costly commission traps</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold text-sm">Get 3 quick wins to boost bookings</p>
                          <p className="text-white/50 text-xs">Implement in under 30 minutes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8 space-y-4">
                    <div>
                      <Label htmlFor="popup-email" className="text-white text-sm mb-2 block">
                        Enter your email for instant access
                      </Label>
                      <Input
                        id="popup-email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 text-base"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="popup-consent"
                        checked={consent}
                        onCheckedChange={(v) => setConsent(v)}
                        required
                        className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                      />
                      <Label htmlFor="popup-consent" className="text-white/60 text-xs leading-relaxed cursor-pointer">
                        I agree to receive the bonus checklist and villa owner tips. Unsubscribe anytime.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading || !email || !consent}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base py-5 rounded-xl glow-orange transition-all hover:scale-[1.01] disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Send Me the Bonus Checklist
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-xs text-white/40">
                      🔒 We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="p-8 sm:p-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/15 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Bonus Checklist Sent! 🎉
                  </h2>
                  
                  <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
                    Check your inbox for the <strong>5-Minute Villa Profit Audit</strong>. 
                    It arrives in the next 5 minutes.
                  </p>

                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
                    <p className="text-white/80 text-sm mb-3">While you wait, get the full toolkit:</p>
                    <Button
                      onClick={onDownload}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base py-4 rounded-xl glow-orange transition-all hover:scale-[1.01]"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Toolkit (9 Tools)
                    </Button>
                  </div>

                  <button
                    onClick={handleClose}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Close this window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}