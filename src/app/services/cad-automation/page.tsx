import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "CAD Automation",
  description:
    "Automate repetitive CAD tasks and accelerate your design workflow with dynamic templates, smart scripts, and rule-based configurations.",
};

export default function CadAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-white/80 transition-colors mb-6"
            >
              Services
              <span className="mx-1">/</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              CAD Automation
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Automate repetitive CAD tasks and accelerate your design workflow
              with dynamic templates and smart scripts.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Our Work */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Real-World Automation
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Explore how we&apos;ve helped businesses automate and scale their
              CAD workflows — from dynamic templates to full system integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-2xl bg-surface border border-border/50 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Layers className="h-16 w-16 text-primary/30" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Layout Automation
                </h3>
                <p className="text-muted leading-relaxed">
                  Automated generation of dynamic cabinet and countertop layouts
                  in SolidWorks. Full parametric control with instant variant
                  generation.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl bg-surface border border-border/50 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all">
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <FileStack className="h-16 w-16 text-accent/30" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Batch Production File Automation
                </h3>
                <p className="text-muted leading-relaxed">
                  Scripted export and packaging of detailed manufacturing
                  drawings and production files. Integrated directly into
                  existing workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Built for Efficiency
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Automate repetitive tasks and enhance consistency at every stage of
              your CAD workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code2,
                title: "Smart Scripts",
                desc: "Custom scripts that adapt to your CAD environment — minimize manual steps and eliminate errors.",
              },
              {
                icon: LayoutTemplate,
                title: "Template Library",
                desc: "A curated collection of parametric templates ready to drop into your projects and accelerate design.",
              },
              {
                icon: Settings2,
                title: "Rule-Based Configurations",
                desc: "Automate part and assembly logic using if/then rules and formulas — generate variants in seconds with zero manual edits.",
              },
              {
                icon: FileOutput,
                title: "Automated Outputs",
                desc: "Instantly generate ERP-integrated outputs such as drawings, production files, reports, and BOMs directly within your CAD interface.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Client Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "ADW's automation reduced our design time by over 60%. Their team understood our process and delivered solutions that scaled effortlessly.",
                name: "Engineering Lead",
                company: "Modular Stairs Inc.",
              },
              {
                quote:
                  "We used to spend hours building assemblies manually. ADW created a parametric workflow that does it in minutes.",
                name: "CAD Manager",
                company: "Elevate Systems",
              },
              {
                quote:
                  "Reliable, precise, and fast. ADW has transformed how our team approaches design automation.",
                name: "Product Dev",
                company: "RailCraft",
              },
            ].map((t) => (
              <div
                key={t.company}
                className="rounded-2xl bg-surface p-8 border border-border/50"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Ready to Transform Your CAD Workflow?
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-8">
            Let&apos;s build automation that saves your team hundreds of hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
