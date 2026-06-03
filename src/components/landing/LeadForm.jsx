import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, Loader2, Lock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { base44 } from "@/api/base44Client";

export default function LeadForm({ id }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ first_name: "", email: "", phone: "", villa_resort: "", consent: false });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.email || !form.consent) return;
    setLoading(true);
    await base44.entities.Lead.create({
      first_name: form.first_name,
      email: form.email,
      phone: form.phone || undefined,
      villa_resort: form.villa_resort || undefined,
      consent: form.consent,
      source: "landing_page",
    });
    base44.analytics.track({ eventName: "lead_form_submitted", properties: { source: "landing_page" } });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id={id} className="relative py-20 lg:py-28 bg-navy">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d2040] to-navy" />

      <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="rounded-3xl p-8 sm:p-10"
              style={{ background: "rgba(8,29,58,0.6)", backdropFilter: "blur(24px)", border: "1px solid rgba(33,102,243,0.25)", boxShadow: "0 40px 100px rgba(8,29,58,0.5)" }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                  style={{ background: "rgba(33,102,243,0.15)", border: "1px solid rgba(33,102,243,0.3)" }}>
                  <Download className="w-8 h-8 text-brand-blue" />
                </div>
                <h2 className="font-extrabold text-white text-2xl sm:text-3xl mb-1">Get Your Free Toolkit</h2>
                <p className="font-medium text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Instant access · 9 tools · No credit card needed
                </p>
                <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(253,224,71,0.1)", border: "1px solid rgba(253,224,71,0.3)" }}>
                  <span className="line-through text-xs font-bold opacity-50 text-white">$643 value</span>
                  <span className="text-brand-yellow font-extrabold text-sm">— FREE today</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "first_name", label: "First Name", placeholder: "Your first name", type: "text", required: true },
                  { id: "email", label: "Email Address", placeholder: "you@example.com", type: "email", required: true },
                  { id: "phone", label: "Phone", placeholder: "+1 (555) 000-0000", type: "tel", required: false, optional: true },
                  { id: "villa_resort", label: "Villa / Resort Name", placeholder: "e.g. Champions Gate, Reunion Resort", type: "text", required: false, optional: true },
                ].map(field => (
                  <div key={field.id}>
                    <Label htmlFor={field.id} className="text-sm font-semibold mb-1.5 block" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {field.label}
                      {field.required && <span className="text-brand-blue ml-1">*</span>}
                      {field.optional && <span className="ml-1 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>(optional)</span>}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      required={field.required}
                      className="h-12 font-medium rounded-xl text-white placeholder:text-white/30"
                      style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)" }}
                    />
                  </div>
                ))}

                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="consent"
                    checked={form.consent}
                    onCheckedChange={(v) => handleChange("consent", v)}
                    className="mt-0.5"
                    style={{ borderColor: "rgba(255,255,255,0.25)" }}
                  />
                  <Label htmlFor="consent" className="font-medium text-xs leading-relaxed cursor-pointer" style={{ color: "rgba(255,255,255,0.55)" }}>
                    I agree to receive villa owner tips and resources from Knightstrider Villas Direct.
                    Unsubscribe any time. <span className="text-brand-blue">*</span>
                  </Label>
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.first_name || !form.email || !form.consent}
                  data-event="toolkit_download_started"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl font-extrabold text-lg py-4 text-white transition-all hover:scale-[1.01] disabled:opacity-40 glow-blue"
                  style={{ background: "#2166F3" }}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                  {loading ? "Sending…" : "Download Your Free Owner Toolkit"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-center text-xs font-medium flex items-center justify-center gap-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  <Lock className="w-3 h-3" /> Your information is secure and will never be shared.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl p-10 text-center"
              style={{ background: "rgba(8,29,58,0.6)", backdropFilter: "blur(24px)", border: "1px solid rgba(22,163,74,0.35)", boxShadow: "0 40px 100px rgba(8,29,58,0.5)" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ background: "rgba(22,163,74,0.15)" }}>
                <CheckCircle2 className="w-10 h-10 text-brand-green" />
              </div>
              <h2 className="font-extrabold text-white text-2xl sm:text-3xl mb-3">You're In! 🎉</h2>
              <p className="font-semibold text-lg mb-8 max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
                Your 9-Tool Villa Owner Toolkit is ready. Click below to download your free PDF.
              </p>
              <button
                data-event="toolkit_download_started"
                onClick={() => base44.analytics.track({ eventName: "toolkit_download_started", properties: { source: "success_state" } })}
                className="inline-flex items-center gap-2 rounded-xl font-extrabold text-lg px-10 py-4 text-white glow-blue transition-all hover:scale-[1.02]"
                style={{ background: "#16A34A" }}
              >
                <Download className="w-5 h-5" />
                Download Toolkit PDF
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-medium text-sm mt-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                We've also sent a copy to <strong className="text-white">{form.email}</strong>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}