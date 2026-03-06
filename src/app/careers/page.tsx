"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  Users,
  Rocket,
  Heart,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Paperclip,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const openings = [
  {
    title: "SolidWorks Design Automation Engineer",
    type: "Full-time",
    location: "Remote",
    description:
      "Build and maintain parametric SolidWorks models, design tables, and macros that drive automated drawing generation for commercial kitchen and stair lift products.",
    tags: ["SolidWorks", "VBA / API", "Design Tables", "3D Modeling"],
  },
  {
    title: "CAD Drafter / Detailer",
    type: "Full-time / Contract",
    location: "Remote",
    description:
      "Produce production-ready 2D drawings from 3D models — including BOMs, section views, and GD&T annotations — under tight turnaround schedules.",
    tags: ["2D Drafting", "GD&T", "BOMs", "SolidWorks"],
  },
  {
    title: "Software Developer — Automation Tools",
    type: "Full-time",
    location: "Remote",
    description:
      "Develop internal tools and scripts (Python, C#, VBA) that integrate with SolidWorks and other CAD platforms to streamline engineering workflows.",
    tags: ["Python", "C#", "SolidWorks API", "Automation"],
  },
  {
    title: "Project Coordinator",
    type: "Full-time",
    location: "Remote",
    description:
      "Manage timelines, client communication, and deliverables across multiple concurrent design projects. Engineering background preferred.",
    tags: ["Project Management", "Client Relations", "Engineering"],
  },
];

const perks = [
  {
    icon: MapPin,
    title: "100% Remote",
    text: "Work from anywhere — we're a distributed team across multiple time zones.",
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Work",
    text: "Push the boundaries of CAD automation and parametric design every day.",
  },
  {
    icon: Users,
    title: "Small, Focused Team",
    text: "Your work matters here. No red tape, no bureaucracy — just great engineering.",
  },
  {
    icon: Heart,
    title: "Flexible Schedule",
    text: "We care about output, not hours. Structure your day around your life.",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("");
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
      phone: formData.get("phone"),
      position: formData.get("position"),
      portfolio: formData.get("portfolio"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/apply", {
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
      setSelectedPosition("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  function scrollToForm(position: string) {
    setSelectedPosition(position);
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  }

  const inputClass =
    "w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-white placeholder:text-muted-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all";

  return (
    <>
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Careers
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-4">
              Build the Future of{" "}
              <span className="blue-shimmer">Design Automation</span>
            </h1>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl">
              We&apos;re a small, ambitious team turning repetitive CAD work into
              intelligent, automated systems. If you love engineering and hate
              doing the same thing twice — you&apos;ll fit right in.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2 text-center">
              Why Join Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              More Than Just a Job
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl border border-card-border bg-card p-6 h-full"
                  whileHover={{ y: -4, borderColor: "rgba(14,165,233,0.25)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                    <perk.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {perk.text}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2 text-center">
              Open Positions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              Current Openings
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.08}>
                <motion.div
                  className="rounded-2xl border border-card-border bg-card p-6 group cursor-pointer"
                  whileHover={{ borderColor: "rgba(14,165,233,0.3)" }}
                  transition={{ duration: 0.25 }}
                  onClick={() => scrollToForm(job.title)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="h-4 w-4 text-accent" />
                        <h3 className="text-base font-bold text-white">
                          {job.title}
                        </h3>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-white/30">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:opacity-100 opacity-60 transition-opacity"
                      whileHover={{ x: 4 }}
                    >
                      Apply <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply-form" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2 text-center">
              Apply Now
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
              Send Us Your Application
            </h2>
            <p className="text-sm text-white/40 text-center mb-10 max-w-lg mx-auto">
              Fill out the form below and we&apos;ll get back to you within 48 hours. Don&apos;t see your role? Apply anyway — we love talented people.
            </p>
          </ScrollReveal>

          {status === "success" ? (
            <motion.div
              className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Application Sent!</h3>
              <p className="text-sm text-white/50">
                Thank you for your interest. We&apos;ll review your application and get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-accent hover:underline"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="apply-name" className="block text-sm font-medium text-white/70 mb-1.5">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input type="text" id="apply-name" name="name" required className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="apply-email" className="block text-sm font-medium text-white/70 mb-1.5">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input type="email" id="apply-email" name="email" required className={inputClass} placeholder="jane@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="apply-phone" className="block text-sm font-medium text-white/70 mb-1.5">
                      Phone
                    </label>
                    <input type="tel" id="apply-phone" name="phone" className={inputClass} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="apply-position" className="block text-sm font-medium text-white/70 mb-1.5">
                      Position <span className="text-accent">*</span>
                    </label>
                    <select
                      id="apply-position"
                      name="position"
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a position...</option>
                      {openings.map((job) => (
                        <option key={job.title} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="Other">Other / General Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="apply-portfolio" className="block text-sm font-medium text-white/70 mb-1.5">
                    Portfolio / LinkedIn URL
                  </label>
                  <input type="url" id="apply-portfolio" name="portfolio" className={inputClass} placeholder="https://linkedin.com/in/yourprofile" />
                </div>

                <div>
                  <label htmlFor="apply-message" className="block text-sm font-medium text-white/70 mb-1.5">
                    Cover Letter / Tell Us About Yourself <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="apply-message"
                    name="message"
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your experience, what excites you about this role, and any relevant projects you've worked on..."
                  />
                </div>

                <div className="rounded-xl border border-dashed border-card-border bg-card/50 p-4 flex items-center gap-3">
                  <Paperclip className="h-5 w-5 text-white/30 shrink-0" />
                  <p className="text-xs text-white/30">
                    To attach your resume, please email it directly to{" "}
                    <a href="mailto:info@automateddesignworks.com" className="text-accent hover:underline">
                      info@automateddesignworks.com
                    </a>{" "}
                    referencing your application.
                  </p>
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
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Submit Application
                    </>
                  )}
                </motion.button>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
