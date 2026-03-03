import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.jpg" alt="ADW Logo" width={36} height={36} className="rounded-lg" />
              <span className="text-lg font-bold tracking-tight text-white">Automated DesignWorks</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/25 max-w-sm">
              We merge automation with design to help businesses build faster, smarter, and more intuitive systems.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-accent/60 mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { href: "/services/cad-automation", label: "CAD Automation" },
                { href: "/services/remote-design", label: "Remote Design" },
                { href: "/services", label: "All Services" },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-white/30 hover:text-accent transition-colors flex items-center gap-1">{l.label} <ArrowUpRight className="h-3 w-3" /></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-accent/60 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-white/30 hover:text-accent transition-colors flex items-center gap-1">Contact <ArrowUpRight className="h-3 w-3" /></Link></li>
              <li><a href="mailto:info@automateddesignworks.com" className="text-sm text-white/30 hover:text-accent transition-colors flex items-center gap-1"><Mail className="h-3 w-3" /> Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">&copy; {new Date().getFullYear()} Automated DesignWorks. All rights reserved.</p>
          <p className="text-xs text-white/15">Automation is what we do.</p>
        </div>
      </div>
    </footer>
  );
}
