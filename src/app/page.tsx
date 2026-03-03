import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Users,
  Clock,
  Code2,
  LayoutTemplate,
  Settings2,
  FileOutput,
  Quote,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTEyIDBjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0xMiAxMmMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6TTI0IDMwYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm mb-8 border border-white/10">
              <Zap className="h-3.5 w-3.5 text-accent" />
              Design Automation Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              We Build the Systems
              <br />
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                That Build Your Products
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              From intelligent CAD automation to full-scale design workflows, we
              help engineering teams eliminate repetitive work and ship faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
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
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "60%+", label: "Design time reduced", sub: "Average client improvement" },
                { value: "100+", label: "Projects delivered", sub: "Across industries" },
                { value: "10+", label: "Years experience", sub: "In CAD automation" },
                { value: "24hr", label: "Response time", sub: "For all inquiries" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-surface p-6 border border-border/50 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/services/cad-automation"
              className="group relative rounded-2xl bg-white p-8 sm:p-10 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                CAD Automation
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Streamline your design process with intelligent CAD workflows.
                From repetitive drafting tasks to complex model generation, our
                automation solutions boost accuracy and free up your team to
                focus on innovation.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/services/remote-design"
              className="group relative rounded-2xl bg-white p-8 sm:p-10 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Remote Design Group
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Connect with our expert design team from anywhere. Using
                cutting-edge tools and seamless communication, we deliver
                precise, efficient CAD solutions — no on-site visits required.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                Learn more <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Why Choose ADW
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Built for Efficiency
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Automate repetitive tasks and enhance consistency at every stage of
              your design workflow.
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
                desc: "Parametric templates ready to drop into your projects and accelerate design.",
              },
              {
                icon: Settings2,
                title: "Rule-Based Config",
                desc: "Automate part and assembly logic using if/then rules — generate variants in seconds.",
              },
              {
                icon: FileOutput,
                title: "Automated Outputs",
                desc: "Instantly generate drawings, reports, BOMs, and production files within your CAD interface.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group text-center p-6 rounded-2xl hover:bg-surface transition-colors"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
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
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Testimonials
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
            ].map((testimonial) => (
              <div
                key={testimonial.company}
                className="relative rounded-2xl bg-white p-8 border border-border/50 hover:shadow-lg transition-shadow"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 sm:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptLTEyIDBjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0xMiAxMmMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJ6TTI0IDMwYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-white/70" />
                <span className="text-sm font-medium text-white/70">
                  Typical response within 24 hours
                </span>
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
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg hover:bg-white/90 transition-all"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
