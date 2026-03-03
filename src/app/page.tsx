"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Clock,
  Code2,
  LayoutTemplate,
  Settings2,
  FileOutput,
  Quote,
  ChevronRight,
  Users,
} from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import FloatingBlueprint from "@/components/FloatingBlueprint";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white min-h-[90vh] flex items-center">
        <HeroCanvas />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44 z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm mb-8 border border-white/10"
            >
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              Design Automation Experts
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              We Build the Systems
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                That Build Your Products
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              From intelligent CAD automation to full-scale design workflows, we
              help engineering teams eliminate repetitive work and ship faster.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/30"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* About + Blueprint */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                Automation Meets
                <br />
                Intelligent Design
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                We merge automation with design to help businesses build faster,
                smarter, and more intuitive systems. Our mission is simple:
                bring your product ideas to life through intelligent, streamlined
                design automation.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Every solution starts with your users. We take a collaborative,
                transparent approach to designing automation tools that
                don&apos;t just work — they feel intuitive, clean, and built to
                last.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <FloatingBlueprint />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 60, suffix: "%+", label: "Design time reduced", sub: "Average client improvement" },
              { end: 100, suffix: "+", label: "Projects delivered", sub: "Across industries" },
              { end: 10, suffix: "+", label: "Years experience", sub: "In CAD automation" },
              { end: 24, suffix: "hr", label: "Response time", sub: "For all inquiries" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <motion.div
                  className="rounded-2xl bg-white p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all cursor-default"
                  whileHover={{ y: -5 }}
                >
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    className="text-3xl font-bold text-blue-600 block mb-1"
                  />
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted mt-1">{stat.sub}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                Our Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                End-to-End Automation Solutions
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                From custom CAD automation to full-scale design workflows, we
                transform your engineering process.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                href: "/services/cad-automation",
                icon: Code2,
                title: "CAD Automation",
                desc: "Streamline your design process with intelligent CAD workflows. From repetitive drafting tasks to complex model generation, our automation solutions boost accuracy and free up your team.",
                color: "blue",
              },
              {
                href: "/services/remote-design",
                icon: Users,
                title: "Remote Design Group",
                desc: "Connect with our expert design team from anywhere. Using cutting-edge tools and seamless communication, we deliver precise, efficient CAD solutions — no on-site visits required.",
                color: "cyan",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <Link href={service.href} className="group block">
                  <motion.div
                    className="relative rounded-2xl bg-white p-8 sm:p-10 border border-gray-100 hover:border-blue-200 transition-colors overflow-hidden"
                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(59,130,246,0.15)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.color === "blue" ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600" : "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600"} group-hover:text-white transition-colors mb-6`}>
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted leading-relaxed mb-6">{service.desc}</p>
                    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${service.color === "blue" ? "text-blue-600" : "text-cyan-600"} group-hover:gap-2 transition-all`}>
                      Learn more <ChevronRight className="h-4 w-4" />
                    </span>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Our Automation Pipeline
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                A streamlined process from input to output — fully automated,
                fully customizable.
              </p>
            </div>
          </ScrollReveal>
          <WorkflowDiagram />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                Why Choose ADW
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                Built for Efficiency
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: "Smart Scripts", desc: "Custom scripts that adapt to your CAD environment — minimize manual steps and eliminate errors.", color: "#2563eb" },
              { icon: LayoutTemplate, title: "Template Library", desc: "Parametric templates ready to drop into your projects and accelerate design.", color: "#0891b2" },
              { icon: Settings2, title: "Rule-Based Config", desc: "Automate part and assembly logic using if/then rules — generate variants in seconds.", color: "#7c3aed" },
              { icon: FileOutput, title: "Automated Outputs", desc: "Instantly generate drawings, reports, BOMs, and production files within your CAD interface.", color: "#059669" },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <motion.div
                  className="group text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 transition-colors cursor-default"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
                >
                  <motion.div
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-5 transition-colors"
                    style={{ backgroundColor: `${feature.color}10`, color: feature.color }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <feature.icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="text-base font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                Testimonials
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "ADW's automation reduced our design time by over 60%. Their team understood our process and delivered solutions that scaled effortlessly.", name: "Engineering Lead", company: "Modular Stairs Inc." },
              { quote: "We used to spend hours building assemblies manually. ADW created a parametric workflow that does it in minutes.", name: "CAD Manager", company: "Elevate Systems" },
              { quote: "Reliable, precise, and fast. ADW has transformed how our team approaches design automation.", name: "Product Dev", company: "RailCraft" },
            ].map((t, i) => (
              <ScrollReveal key={t.company} delay={i * 0.15}>
                <motion.div
                  className="relative rounded-2xl bg-white p-8 border border-gray-100 h-full"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
                >
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 sm:p-16 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTEyIDBjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0xMiAxMmMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6TTI0IDMwYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-white/70" />
                  <span className="text-sm font-medium text-white/70">Typical response within 24 hours</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                  Let&apos;s discuss how automation can save your team hundreds of
                  hours and eliminate manual design errors.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-lg hover:bg-white/90 transition-all"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
