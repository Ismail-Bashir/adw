"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Terminal,
  Workflow,
  Database,
  Plug,
  Cpu,
  Braces,
  GitBranch,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CustomSoftwarePage() {
  return (
    <>
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-white/30 hover:text-white/60 transition-colors mb-4"
            >
              Services<span className="mx-1 text-white/20">/</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-4">
              Custom Software Development
            </h1>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl">
              We build tailored automation tools, integrations, and internal
              software that eliminate manual work and supercharge your engineering
              workflows.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                What We Build
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Software That Works <span className="blue-shimmer">For You</span>
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Every business has unique processes. We develop custom tools that
                plug directly into your workflow — no off-the-shelf compromises.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Terminal,
                title: "CAD Automation Scripts",
                desc: "Custom macros and scripts that automate repetitive CAD tasks — from model generation to drawing output — saving hundreds of engineering hours.",
                color: "#0EA5E9",
              },
              {
                icon: Plug,
                title: "System Integrations",
                desc: "Connect your CAD environment to ERP systems, databases, and production tools. Seamless data flow from design to manufacturing.",
                color: "#38BDF8",
              },
              {
                icon: Workflow,
                title: "Workflow Automation Tools",
                desc: "Internal tools that manage configuration logic, part selection, and file generation — replacing spreadsheets and manual processes.",
                color: "#0284C7",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <motion.div
                  className="rounded-2xl bg-card border border-card-border p-6 h-full"
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(14,165,233,0.25)",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
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
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                Capabilities
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                End-to-End Development
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Braces,
                title: "API Development",
                desc: "RESTful APIs and middleware that bridge your design tools with business systems.",
                color: "#0EA5E9",
              },
              {
                icon: Database,
                title: "Data Management",
                desc: "Databases, design tables, and configuration engines that drive your parametric models.",
                color: "#38BDF8",
              },
              {
                icon: Cpu,
                title: "Desktop Applications",
                desc: "Standalone tools and SolidWorks add-ins built in C#, Python, or VBA for your team.",
                color: "#0284C7",
              },
              {
                icon: GitBranch,
                title: "Version Control & CI/CD",
                desc: "Proper software practices — source control, testing, and automated deployment pipelines.",
                color: "#7DD3FC",
              },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl bg-card p-6 border border-card-border hover:border-accent/20 transition-colors"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                  }}
                >
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                    style={{
                      backgroundColor: `${f.color}15`,
                      color: f.color,
                    }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <f.icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
                Our Process
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                How We Work
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We learn your workflows, pain points, and goals to define the right solution." },
              { step: "02", title: "Architecture", desc: "We design the system — data models, integrations, and user flows — before writing a line of code." },
              { step: "03", title: "Development", desc: "Iterative builds with regular demos so you see progress and provide feedback throughout." },
              { step: "04", title: "Delivery & Support", desc: "Deployment, documentation, training, and ongoing support to keep things running smoothly." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl bg-card p-6 border border-card-border h-full"
                  whileHover={{ y: -4, borderColor: "rgba(14,165,233,0.25)" }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-2xl font-black text-accent/20 mb-3 block">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              Have a Process That Needs Automating?
            </h2>
            <p className="text-base text-muted max-w-xl mx-auto mb-6">
              Tell us about it — we&apos;ll build the software to make it happen.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:brightness-110 transition-all"
            >
              Contact Us{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
