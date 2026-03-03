"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Users, ArrowRight, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">Our Services</h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We provide end-to-end automation and design solutions tailored to your business. From custom CAD automation to full-scale design workflows, we help you transform your engineering process.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20">
            {/* CAD Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                  <Code2 className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">CAD Automation</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Automate repetitive CAD tasks and accelerate your design workflow with dynamic templates and smart scripts.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Dynamic layout generation in SolidWorks", "Parametric templates and rule-based configurations", "Batch drawing and production file automation", "ERP-integrated automated outputs"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/cad-automation" className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-10 border border-gray-100">
                  <div className="space-y-4">
                    {[
                      { label: "Design Time Savings", end: 60, suffix: "%+" },
                      { label: "Error Reduction", end: 95, suffix: "%" },
                      { label: "ROI Timeline", value: "< 3 months" },
                    ].map((stat) => (
                      <motion.div
                        key={stat.label}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium text-muted">{stat.label}</span>
                        {stat.end ? (
                          <AnimatedCounter end={stat.end} suffix={stat.suffix} className="text-lg font-bold text-blue-600" />
                        ) : (
                          <span className="text-lg font-bold text-blue-600">{stat.value}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="border-t border-gray-100" />

            {/* Remote Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" delay={0.1} className="order-2 lg:order-1">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-10 border border-gray-100">
                  <div className="space-y-4">
                    {[
                      { label: "Team Availability", value: "Global" },
                      { label: "Communication", value: "Real-time" },
                      { label: "Quality Standard", value: "ISO-aligned" },
                    ].map((stat) => (
                      <motion.div
                        key={stat.label}
                        className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-100"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium text-muted">{stat.label}</span>
                        <span className="text-lg font-bold text-cyan-600">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="order-1 lg:order-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Remote Design Group</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Enable efficient, off-site design work with tools that streamline communication, ensure consistency, and keep projects moving.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Expert CAD designers available remotely", "Seamless collaboration with cutting-edge tools", "Multi-configuration layout automation", "Parameter-driven component modeling"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-cyan-600 mt-0.5 shrink-0" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/remote-design" className="group inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition-all shadow-sm hover:shadow-md">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Not Sure Which Service Is Right for You?</h2>
            <p className="text-lg text-muted max-w-xl mx-auto mb-8">Let&apos;s talk through your needs. We&apos;ll help you find the right approach.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all">
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
