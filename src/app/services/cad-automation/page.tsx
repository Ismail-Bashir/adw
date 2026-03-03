"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  LayoutTemplate,
  Settings2,
  FileOutput,
  Quote,
  Layers,
  FileStack,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingBlueprint from "@/components/FloatingBlueprint";

export default function CadAutomationPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-white/80 transition-colors mb-6">
              Services<span className="mx-1">/</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">CAD Automation</h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Automate repetitive CAD tasks and accelerate your design workflow with dynamic templates and smart scripts.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Our Work */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">Our Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Real-World Automation</h2>
              <p className="text-lg text-muted leading-relaxed">Explore how we&apos;ve helped businesses automate and scale their CAD workflows.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Layers, title: "Layout Automation", desc: "Automated generation of dynamic cabinet and countertop layouts in SolidWorks. Full parametric control with instant variant generation.", gradient: "from-blue-500/10 to-blue-500/5", color: "text-blue-500/30" },
              { icon: FileStack, title: "Batch Production File Automation", desc: "Scripted export and packaging of detailed manufacturing drawings and production files. Integrated directly into existing workflows.", gradient: "from-cyan-500/10 to-cyan-500/5", color: "text-cyan-500/30" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <motion.div
                  className="rounded-2xl bg-white border border-gray-100 overflow-hidden"
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59,130,246,0.12)" }}
                >
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }}>
                      <item.icon className={`h-16 w-16 ${item.color}`} />
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16">
              <FloatingBlueprint />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Built for Efficiency</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: "Smart Scripts", desc: "Custom scripts that adapt to your CAD environment — minimize manual steps and eliminate errors.", color: "#2563eb" },
              { icon: LayoutTemplate, title: "Template Library", desc: "A curated collection of parametric templates ready to drop into your projects.", color: "#0891b2" },
              { icon: Settings2, title: "Rule-Based Configurations", desc: "Automate part and assembly logic using if/then rules — generate variants in seconds.", color: "#7c3aed" },
              { icon: FileOutput, title: "Automated Outputs", desc: "Generate ERP-integrated drawings, production files, reports, and BOMs directly in CAD.", color: "#059669" },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl bg-white p-8 border border-gray-100 hover:border-blue-200 transition-colors"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
                >
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                    style={{ backgroundColor: `${f.color}15`, color: f.color }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  >
                    <f.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">Client Stories</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "ADW's automation reduced our design time by over 60%. Their team understood our process and delivered solutions that scaled effortlessly.", name: "Engineering Lead", company: "Modular Stairs Inc." },
              { quote: "We used to spend hours building assemblies manually. ADW created a parametric workflow that does it in minutes.", name: "CAD Manager", company: "Elevate Systems" },
              { quote: "Reliable, precise, and fast. ADW has transformed how our team approaches design automation.", name: "Product Dev", company: "RailCraft" },
            ].map((t, i) => (
              <ScrollReveal key={t.company} delay={i * 0.15}>
                <motion.div className="rounded-2xl bg-surface p-8 border border-gray-100 h-full" whileHover={{ y: -5 }}>
                  <Quote className="h-8 w-8 text-blue-100 mb-4" />
                  <p className="text-muted leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted">{t.company}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Ready to Transform Your CAD Workflow?</h2>
            <p className="text-lg text-muted max-w-xl mx-auto mb-8">Let&apos;s build automation that saves your team hundreds of hours.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all">
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
