"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutTemplate, Settings2, FileOutput, Quote, Layers, FileStack } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function RemoteDesignPage() {
  return (
    <>
      <section className="relative bg-navy text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm text-white/30 hover:text-white/60 transition-colors mb-4">Services<span className="mx-1 text-white/20">/</span></Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-4">Remote Design</h1>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl">Enable efficient, off-site design work with tools that streamline communication, ensure consistency, and keep projects moving.</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="max-w-2xl mb-10"><p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Our Work</p><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Remote-First Solutions</h2><p className="text-base text-muted leading-relaxed">Discover how we&apos;ve enabled teams to work seamlessly across locations.</p></div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Layers, title: "Layout Automation", desc: "Automated generation of multi-configuration kitchen layouts in SolidWorks with full parametric control.", color: "text-accent/40", gradient: "from-accent/5 to-accent/[0.02]" },
              { icon: FileStack, title: "Stair Lifts", desc: "Parameter-driven lift components modeled with photogrammetry data for precise, real-world accuracy.", color: "text-accent/40", gradient: "from-accent/5 to-accent/[0.02]" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <motion.div className="rounded-2xl bg-card border border-card-border overflow-hidden" whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)" }}>
                  <div className={`h-36 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }}><item.icon className={`h-14 w-14 ${item.color}`} /></motion.div>
                  </div>
                  <div className="p-6"><h3 className="text-lg font-bold text-white mb-2">{item.title}</h3><p className="text-sm text-muted leading-relaxed">{item.desc}</p></div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center max-w-2xl mx-auto mb-10"><p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Capabilities</p><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Built for Efficiency</h2></div></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Code2, title: "Smart Scripts", desc: "Custom scripts that adapt to your CAD environment — minimize manual steps and eliminate errors.", color: "#0EA5E9" },
              { icon: LayoutTemplate, title: "Template Library", desc: "A curated collection of parametric templates ready to drop into your projects.", color: "#38BDF8" },
              { icon: Settings2, title: "Rule-Based Configurations", desc: "Automate part and assembly logic using if/then rules — generate variants in seconds.", color: "#0284C7" },
              { icon: FileOutput, title: "Automated Outputs", desc: "Instantly generate drawings, reports, and BOMs — directly within your CAD interface.", color: "#7DD3FC" },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <motion.div className="rounded-2xl bg-card p-6 border border-card-border hover:border-accent/20 transition-colors" whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)" }}>
                  <motion.div className="flex h-11 w-11 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${f.color}15`, color: f.color }} whileHover={{ rotate: 10, scale: 1.1 }}><f.icon className="h-5 w-5" /></motion.div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{f.title}</h3><p className="text-xs text-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center max-w-2xl mx-auto mb-10"><p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Client Stories</p><h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">What Our Clients Say</h2></div></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "ADW's automation reduced our design time by over 60%. Their team understood our process and delivered solutions that scaled effortlessly.", name: "Engineering Lead", company: "Modular Stairs Inc." },
              { quote: "We used to spend hours building assemblies manually. ADW created a parametric workflow that does it in minutes.", name: "CAD Manager", company: "Elevate Systems" },
              { quote: "Reliable, precise, and fast. ADW has transformed how our team approaches design automation.", name: "Product Dev", company: "RailCraft" },
            ].map((t, i) => (
              <ScrollReveal key={t.company} delay={i * 0.15}>
                <motion.div className="rounded-2xl bg-card p-6 border border-card-border h-full" whileHover={{ y: -4, borderColor: "rgba(14,165,233,0.2)" }}>
                  <Quote className="h-7 w-7 text-accent/20 mb-3" /><p className="text-sm text-muted leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="border-t border-card-border pt-3"><p className="text-sm font-semibold text-white">{t.name}</p><p className="text-xs text-muted">{t.company}</p></div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">Ready to Transform Your CAD Workflow?</h2>
            <p className="text-base text-muted max-w-xl mx-auto mb-6">Let&apos;s connect your team with expert remote design capabilities.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:brightness-110 transition-all">
              Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
