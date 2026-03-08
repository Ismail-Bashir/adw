"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/services/cad-automation", label: "CAD Automation" },
    { href: "/services/remote-design", label: "Remote Design" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/logo.png" alt="ADW Logo" width={36} height={36} className="rounded-lg transition-transform group-hover:scale-105" />
            <span className="text-lg font-bold tracking-tight text-white">ADW</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-3 inline-flex items-center rounded-lg bg-gradient-to-r from-accent to-accent-light px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:brightness-110">
              Get a Quote
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden rounded-lg p-2 text-white/60 hover:bg-white/5 transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-lg bg-gradient-to-r from-accent to-accent-light px-4 py-2.5 text-center text-sm font-bold text-white transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
