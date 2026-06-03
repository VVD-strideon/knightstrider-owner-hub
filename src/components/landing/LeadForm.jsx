import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { base44 } from "@/api/base44Client";

export default function LeadForm({ id }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    email: localStorage.getItem("exitPopupEmail") || "",
    phone: "",
    villa_resort: "",
    address: "",
    consent: false,
  });

  // Auto-fill from exit popup if user already gave email
  React.useEffect(() => {
    const savedEmail = localStorage.getItem("exitPopupEmail");
    if (savedEmail && !form.email) {
      setForm(prev => ({ ...prev, email: savedEmail }));
    }
  }, []);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.email || !form.villa_resort || !form.address || !form.consent) return;
    
    setLoading(true);
    
    // Get video engagement from localStorage
    const videoWatched = localStorage.getItem("videoWatched") === "true";
    const watchProgress = localStorage.getItem("watchProgress") || "0";
    
    const leadScore = videoWatched ? 75 : 25;
    
    await base44.entities.Lead.create({
      first_name: form.first_name,
      email: form.email,
      phone: form.phone || undefined,
      villa_resort: form.villa_resort,
      address: form.address,
      consent: form.consent,
      source: "landing_page",
      video_watched: videoWatched,
      lead_score: leadScore,
      email_sent: false,
    });

    base44.analytics.track({
      eventName: "lead_form_submitted",
      properties: { 
        source: "landing_page",
        video_watched: videoWatched,
        watch_progress: watchProgress,
        lead_score: leadScore,
      },
    });

    // Send toolkit email
    try {
      await base44.functions.invoke("sendToolkitEmail", {
        email: form.email,
        first_name: form.first_name,
      });
      
      // Update lead to mark email as sent
      const leads = await base44.entities.Lead.filter({ email: form.email });
      if (leads.length > 0) {
        await base44.entities.Lead.update(leads[0].id, { email_sent: true });
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue anyway - don't block the user
    }

    setLoading(false);
    
    // Save email for ThankYou page display
    localStorage.setItem("lastSubmittedEmail", form.email);
    
    window.location.href = `/thank-you?email=${encodeURIComponent(form.email)}&video_watched=${videoWatched}`;
  };

  return (
    <section id={id} className="relative py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-2xl"
            >
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/15 rounded-2xl mb-3 sm:mb-4">
                  <Download className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  Get Your Free Toolkit
                </h2>
                <p className="text-muted-foreground text-sm">
                  Enter your details below for instant access to all 9 tools.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <Label htmlFor="first_name" className="text-white text-xs sm:text-sm mb-1.5 block">
                    First Name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="first_name"
                    placeholder="Your first name"
                    value={form.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    required
                    className="bg-muted/50 border-border/60 text-white placeholder:text-muted-foreground/60 h-11 sm:h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white text-xs sm:text-sm mb-1.5 block">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-muted/50 border-border/60 text-white placeholder:text-muted-foreground/60 h-11 sm:h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white text-xs sm:text-sm mb-1.5 block">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-muted/50 border-border/60 text-white placeholder:text-muted-foreground/60 h-11 sm:h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="villa" className="text-white text-xs sm:text-sm mb-1.5 block">
                    Resort Name <span className="text-primary">*</span>
                    <span className="text-muted-foreground font-normal"> (type N/A if not applicable)</span>
                  </Label>
                  <Input
                    id="villa"
                    placeholder="e.g. Champions Gate, Reunion Resort, N/A"
                    value={form.villa_resort}
                    onChange={(e) => handleChange("villa_resort", e.target.value)}
                    required
                    className="bg-muted/50 border-border/60 text-white placeholder:text-muted-foreground/60 h-11 sm:h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-white text-xs sm:text-sm mb-1.5 block">
                    Villa Address (first line) <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="e.g. 123 Vacation Blvd, N/A"
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    required
                    className="bg-muted/50 border-border/60 text-white placeholder:text-muted-foreground/60 h-11 sm:h-12 text-base"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="consent"
                    checked={form.consent}
                    onCheckedChange={(v) => handleChange("consent", v)}
                    className="mt-0.5 border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="consent" className="text-muted-foreground text-xs leading-relaxed cursor-pointer">
                    I agree to receive villa owner tips and resources from Knightstrider Villas Direct. 
                    Unsubscribe any time. <span className="text-primary">*</span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading || !form.first_name || !form.email || !form.villa_resort || !form.address || !form.consent}
                  data-event="toolkit_download_started"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base sm:text-lg py-5 sm:py-6 rounded-xl glow-orange transition-all hover:scale-[1.01] disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" />
                  ) : (
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  )}
                  {loading ? "Sending…" : "Download Your Free Owner Toolkit"}
                </Button>

                <p className="text-center text-xs text-muted-foreground/60">
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 shadow-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/15 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                You're In! 🎉
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">
                Your 9-Tool Villa Owner Toolkit is ready. Click below to download your free PDF.
              </p>
              <Button
                size="lg"
                data-event="toolkit_download_started"
                onClick={() => {
                  base44.analytics.track({
                    eventName: "toolkit_download_started",
                    properties: { source: "success_state" },
                  });
                  window.open("https://knightstrider.com/toolkit", "_blank");
                }}
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 rounded-xl glow-orange transition-all hover:scale-[1.02]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Toolkit PDF
              </Button>
              <p className="text-muted-foreground text-sm mt-6">
                We've also sent a copy to <strong className="text-white">{form.email}</strong>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}