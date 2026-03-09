"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-white placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all";

  return (
    <>
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Contact</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-4">Get in Touch</h1>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl">Whether you&apos;re looking to automate a process, launch a project, or just say hello — drop us a line.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-2">
              <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>

              {status === "success" ? (
                <motion.div
                  className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-white/50">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">Full Name <span className="text-accent">*</span></label>
                      <input type="text" id="name" name="name" required className={inputClass} placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">Email Address <span className="text-accent">*</span></label>
                      <input type="email" id="email" name="email" required className={inputClass} placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1.5">Company</label>
                    <input type="text" id="company" name="company" className={inputClass} placeholder="Your company name" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-1.5">Service Interested In</label>
                    <select id="service" name="service" className={inputClass}>
                      <option value="">Select a service...</option>
                      <option value="CAD Automation">CAD Automation</option>
                      <option value="Remote Design">Remote Design</option>
                      <option value="Both">Both</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">Message <span className="text-accent">*</span></label>
                    <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-3">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg || "Something went wrong. Please try again."}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-xl font-bold text-white mb-6">Contact Info</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", detail: "info@automateddesignworks.com", href: "mailto:info@automateddesignworks.com" },
                  { icon: Clock, title: "Response Time", detail: "Within 24 hours", href: null },
                  { icon: MapPin, title: "Location", detail: "125 Don Hillock Dr, Unit 15, Aurora, ON", href: null },
                ].map((item, i) => (
                  <motion.div key={item.title} className="flex gap-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                    <motion.div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent" whileHover={{ rotate: 10, scale: 1.1 }}>
                      <item.icon className="h-4 w-4" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      {item.href ? <a href={item.href} className="text-sm text-muted hover:text-accent transition-colors">{item.detail}</a> : <p className="text-sm text-muted">{item.detail}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="rounded-2xl bg-card p-6 border border-card-border mt-8" whileHover={{ y: -3, borderColor: "rgba(14,165,233,0.2)" }}>
                <h3 className="text-sm font-bold text-white mb-2">Why Work With Us?</h3>
                <ul className="space-y-2">
                  {["Innovative, modern automation solutions", "User-first design philosophy", "On time, on budget delivery", "Transparent, collaborative process"].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
