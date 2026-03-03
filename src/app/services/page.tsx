import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Users, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end automation and design solutions tailored to your business. CAD automation and remote design services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-light mb-3">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We provide end-to-end automation and design solutions tailored to
              your business. From custom CAD automation to full-scale design
              workflows, we help you transform your engineering process.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* CAD Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                  <Code2 className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  CAD Automation
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Automate repetitive CAD tasks and accelerate your design
                  workflow with dynamic templates and smart scripts. From layout
                  automation to batch production file generation, we build
                  systems that scale with your business.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Dynamic layout generation in SolidWorks",
                    "Parametric templates and rule-based configurations",
                    "Batch drawing and production file automation",
                    "ERP-integrated automated outputs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/cad-automation"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-all shadow-sm hover:shadow-md"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-10 border border-border/50">
                <div className="space-y-4">
                  {[
                    { label: "Design Time Savings", value: "60%+" },
                    { label: "Error Reduction", value: "95%" },
                    { label: "ROI Timeline", value: "< 3 months" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-4 rounded-xl bg-white border border-border/50"
                    >
                      <span className="text-sm font-medium text-muted">
                        {stat.label}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border/50" />

            {/* Remote Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 p-10 border border-border/50">
                <div className="space-y-4">
                  {[
                    { label: "Team Availability", value: "Global" },
                    { label: "Communication", value: "Real-time" },
                    { label: "Quality Standard", value: "ISO-aligned" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-4 rounded-xl bg-white border border-border/50"
                    >
                      <span className="text-sm font-medium text-muted">
                        {stat.label}
                      </span>
                      <span className="text-lg font-bold text-accent">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Remote Design Group
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Enable efficient, off-site design work with tools that
                  streamline communication, ensure consistency, and keep projects
                  moving — no matter where your team is.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Expert CAD designers available remotely",
                    "Seamless collaboration with cutting-edge tools",
                    "Multi-configuration layout automation",
                    "Parameter-driven component modeling",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/remote-design"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-all shadow-sm hover:shadow-md"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto mb-8">
            Let&apos;s talk through your needs. We&apos;ll help you find the
            right approach for your team and budget.
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
