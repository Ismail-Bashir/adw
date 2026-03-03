import type { Metadata } from "next";
import { Mail, MapPin, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Automated DesignWorks. Whether you're looking to automate a process, launch a project, or just say hello.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-foreground via-[#1e293b] to-[#0f172a] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-light mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">Get in Touch</h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Whether you&apos;re looking to automate a process, launch a project, or just say hello — drop us a line. We&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text" id="name" name="name" required
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email" id="email" name="email" required
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text" id="company" name="company"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                  <select
                    id="service" name="service"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="cad-automation">CAD Automation</option>
                    <option value="remote-design">Remote Design</option>
                    <option value="both">Both</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell us about your project or what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Info</h2>
              {[
                { icon: Mail, title: "Email", detail: "contact@automateddesignworks.com", href: "mailto:contact@automateddesignworks.com" },
                { icon: Clock, title: "Response Time", detail: "Within 24 hours", href: null },
                { icon: MapPin, title: "Location", detail: "Remote-first team", href: null },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted hover:text-primary transition-colors">{item.detail}</a>
                    ) : (
                      <p className="text-sm text-muted">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-surface p-8 border border-border/50 mt-8">
                <h3 className="text-base font-bold text-foreground mb-3">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Innovative, modern automation solutions",
                    "User-first design philosophy",
                    "On time, on budget delivery",
                    "Transparent, collaborative process",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
