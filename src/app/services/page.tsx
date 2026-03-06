"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Users, ArrowRight, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,160,23,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">What We Do</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-4">Our Services</h1>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl">We provide end-to-end automation and design solutions tailored to your business.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <ScrollReveal direction="left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                  <Code2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">CAD Automation</h2>
                <p className="text-base text-muted leading-relaxed mb-4">Automate repetitive CAD tasks and accelerate your design workflow with dynamic templates and smart scripts.</p>
                <ul className="space-y-2 mb-6">
                  {["Dynamic layout generation in SolidWorks", "Parametric templates and rule-based configurations", "Batch drawing and production file automation", "ERP-integrated automated outputs"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/cad-automation" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-2xl bg-card p-6 border border-card-border">
                  <div className="space-y-3">
                    {[
                      { label: "Design Time Savings", end: 60, suffix: "%+" },
                      { label: "Error Reduction", end: 95, suffix: "%" },
                      { label: "ROI Timeline", value: "< 3 months" },
                    ].map((stat) => (
                      <motion.div key={stat.label} className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border" whileHover={{ x: 5 }}>
                        <span className="text-sm font-medium text-muted">{stat.label}</span>
                        {stat.end ? <AnimatedCounter end={stat.end} suffix={stat.suffix} className="text-lg font-bold text-accent" /> : <span className="text-lg font-bold text-accent">{stat.value}</span>}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="border-t border-border" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <ScrollReveal direction="left" delay={0.1} className="order-2 lg:order-1">
                <div className="rounded-2xl bg-card p-6 border border-card-border">
                  <div className="space-y-3">
                    {[{ label: "Team Availability", value: "Global" }, { label: "Communication", value: "Real-time" }, { label: "Quality Standard", value: "ISO-aligned" }].map((stat) => (
                      <motion.div key={stat.label} className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border" whileHover={{ x: 5 }}>
                        <span className="text-sm font-medium text-muted">{stat.label}</span>
                        <span className="text-lg font-bold text-accent-light">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="order-1 lg:order-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Remote Design Group</h2>
                <p className="text-base text-muted leading-relaxed mb-4">Enable efficient, off-site design work with tools that streamline communication and keep projects moving.</p>
                <ul className="space-y-2 mb-6">
                  {["Expert CAD designers available remotely", "Seamless collaboration with cutting-edge tools", "Multi-configuration layout automation", "Parameter-driven component modeling"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/remote-design" className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition-all shadow-lg shadow-accent/20">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Not Sure Which Service Is Right for You?</h2>
            <p className="text-base text-muted max-w-xl mx-auto mb-6">Let&apos;s talk through your needs.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:brightness-110 transition-all">
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
