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
  Sparkles,
} from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import FloatingBlueprint from "@/components/FloatingBlueprint";
import OrbitingDiagrams from "@/components/OrbitingDiagrams";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <>
      {/* HERO — full viewport, dramatic */}
      <section className="relative overflow-hidden bg-navy min-h-screen flex items-center">
        <HeroCanvas />
        {/* Radial glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-5 py-2 text-sm font-semibold text-accent backdrop-blur-sm mb-8 border border-accent/20 glow-gold"
            >
              <Sparkles className="h-4 w-4" />
              Design Automation Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white"
            >
              We Build the
              <br />
              Systems{" "}
              <span className="gold-shimmer">
                That Build
              </span>
              <br />
              <span className="blue-shimmer">
                Your Products
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl sm:text-2xl text-white/40 leading-relaxed max-w-2xl mb-12"
            >
              Intelligent CAD automation and design workflows that eliminate
              repetitive work. Your team ships faster, we make it happen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-bold text-navy shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:brightness-110 hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ABOUT + BLUEPRINT */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">
                About Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-8 leading-tight">
                Automation Meets
                <br />
                <span className="text-glow-gold text-accent-light">Intelligent Design</span>
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
              <OrbitingDiagrams />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BLUEPRINT — standalone visual */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="animate-float">
              <FloatingBlueprint />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS — glowing cards */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 60, suffix: "%+", label: "Design Time Reduced", sub: "Average improvement" },
              { end: 100, suffix: "+", label: "Projects Delivered", sub: "Across industries" },
              { end: 10, suffix: "+", label: "Years Experience", sub: "In CAD automation" },
              { end: 24, suffix: "hr", label: "Response Time", sub: "For all inquiries" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <motion.div
                  className="relative rounded-2xl bg-card p-7 border border-card-border overflow-hidden group cursor-default"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      className="text-4xl font-black text-accent text-glow-gold block mb-2"
                    />
                    <p className="text-sm font-bold text-white">{stat.label}</p>
                    <p className="text-xs text-muted mt-1">{stat.sub}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — big dramatic cards */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Our Services</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                End-to-End <span className="gold-shimmer">Automation</span> Solutions
              </h2>
              <p className="text-xl text-muted leading-relaxed">
                From custom CAD automation to full-scale design workflows, we
                transform your engineering process.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { href: "/services/cad-automation", icon: Code2, title: "CAD Automation", desc: "Streamline your design process with intelligent CAD workflows. From repetitive drafting tasks to complex model generation, our automation solutions boost accuracy and free up your team to focus on innovation.", glowColor: "rgba(212,160,23,0.12)", iconColor: "#d4a017" },
              { href: "/services/remote-design", icon: Users, title: "Remote Design Group", desc: "Connect with our expert design team from anywhere. Using cutting-edge tools and seamless communication, we deliver precise, efficient CAD solutions — no on-site visits required.", glowColor: "rgba(212,160,23,0.15)", iconColor: "#d4a017" },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <Link href={service.href} className="group block h-full">
                  <motion.div
                    className="relative rounded-2xl bg-card p-10 border border-card-border overflow-hidden h-full"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${service.glowColor}, transparent 70%)` }}
                    />
                    <div className="relative">
                      <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl mb-8"
                        style={{ backgroundColor: `${service.iconColor}15`, color: service.iconColor }}
                        whileHover={{ rotate: 10, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="h-8 w-8" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-white mb-4">{service.title}</h3>
                      <p className="text-muted leading-relaxed mb-8 text-base">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:gap-3 transition-all">
                        Explore <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK — full-width image carousel */}
      <section className="py-28 sm:py-36 bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-accent/3 blur-[150px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Our Work</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                Real Projects,{" "}
                <span className="gold-shimmer">Real Results</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                From dynamic kitchen layouts to parameter-driven stair lift components,
                our automation solutions deliver measurable impact across industries.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <ImageCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* WORKFLOW DIAGRAM */}
      <section className="py-28 sm:py-36 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">How It Works</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                Our <span className="blue-shimmer">Automation</span> Pipeline
              </h2>
              <p className="text-xl text-muted leading-relaxed">
                A streamlined process from input to output — fully automated,
                fully customizable.
              </p>
            </div>
          </ScrollReveal>
          <WorkflowDiagram />
        </div>
      </section>

      {/* FEATURES — bold grid */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Why Choose ADW</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
                Built for <span className="gold-shimmer">Efficiency</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code2, title: "Smart Scripts", desc: "Custom scripts that adapt to your CAD environment — minimize manual steps and eliminate errors.", color: "#d4a017" },
              { icon: LayoutTemplate, title: "Template Library", desc: "Parametric templates ready to drop into your projects and accelerate design.", color: "#f0c946" },
              { icon: Settings2, title: "Rule-Based Config", desc: "Automate part and assembly logic using if/then rules — generate variants in seconds.", color: "#b8860b" },
              { icon: FileOutput, title: "Auto Outputs", desc: "Instantly generate drawings, reports, BOMs, and production files within your CAD interface.", color: "#e6b800" },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <motion.div
                  className="group text-center p-8 rounded-2xl bg-card border border-card-border overflow-hidden relative cursor-default"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 30%, ${feature.color}15, transparent 70%)` }}
                  />
                  <div className="relative">
                    <motion.div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-6"
                      style={{ backgroundColor: `${feature.color}12`, color: feature.color }}
                      whileHover={{ rotate: 10, scale: 1.2 }}
                    >
                      <feature.icon className="h-7 w-7" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 sm:py-36 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Testimonials</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
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
                  className="relative rounded-2xl bg-card p-8 border border-card-border h-full group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <Quote className="h-10 w-10 text-accent/20 mb-5" />
                    <p className="text-white/70 leading-relaxed mb-6 text-base">&ldquo;{t.quote}&rdquo;</p>
                    <div className="border-t border-card-border pt-4">
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-xs text-accent">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dramatic finale */}
      <section className="py-28 sm:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.div
              className="relative overflow-hidden rounded-3xl p-14 sm:p-20 text-center border border-accent/20"
              style={{ background: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)" }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,160,23,0.08),transparent_60%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div className="relative">
                <motion.div
                  className="flex items-center justify-center gap-2 mb-6"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">Typical response within 24 hours</span>
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                  Ready to <span className="gold-shimmer">Transform</span>
                  <br />Your Workflow?
                </h2>
                <p className="text-xl text-white/40 max-w-xl mx-auto mb-10">
                  Let&apos;s discuss how automation can save your team hundreds of
                  hours and eliminate manual design errors.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent-light px-10 py-5 text-base font-black text-navy shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:brightness-110 hover:scale-105"
                >
                  Start a Conversation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
