import Link from "next/link";
import { Cog, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Cog className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Automated DesignWorks
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              We merge automation with design to help businesses build faster,
              smarter, and more intuitive systems. Bringing your product ideas
              to life through intelligent design automation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/cad-automation" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  CAD Automation <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/services/remote-design" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  Remote Design <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  All Services <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  Contact <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <a href="mailto:contact@automateddesignworks.com" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <Mail className="h-3 w-3" /> Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Automated DesignWorks. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Automation is what we do.
          </p>
        </div>
      </div>
    </footer>
  );
}
