"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",         label: "Home"     },
  { href: "/services", label: "Services" },
  { href: "/payments", label: "Payments" },
  { href: "/location", label: "Location" },
  { href: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    fn(); // run once on mount
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    /* ── Sticky wrapper: announcement bar + nav together ── */
    <div className="sticky top-0 z-50">

      {/* ── Announcement bar ── */}
      <div className="bg-blue-600 px-4 py-2 text-center text-xs font-semibold text-white">
        <span className="hidden sm:inline">📍 11687 US-431, Guntersville, AL &nbsp;·&nbsp;</span>
        <a href="tel:2565727011"
          className="underline underline-offset-2 transition-colors duration-150 hover:text-blue-100">
          (256) 572-7011
        </a>
        <span className="sm:hidden"> · Guntersville, AL</span>
      </div>

      {/* ── Main header ── */}
      <header
        className={`w-full transition-all duration-250 ${
          scrolled
            ? "bg-white/96 shadow-[0_1px_0_0_rgb(0_0_0/0.08)] backdrop-blur-lg"
            : "border-b border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">

          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-[11px] font-extrabold text-white shadow-blue transition-all duration-200 group-hover:scale-105 group-hover:bg-blue-700">
              CL
            </span>
            <span className="text-[15px] font-extrabold tracking-tight text-slate-900">
              Coin Laundry
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href}
                  className={`relative rounded-lg px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 ${
                    active
                      ? "text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <a href="tel:2565727011"
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] font-bold text-slate-700 transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.97]">
              <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Now
            </a>
            <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary py-2.5 text-[13px]">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Get Directions
            </a>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a href="tel:2565727011"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-150 hover:bg-blue-100 active:scale-[0.97]"
              aria-label="Call us">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-all duration-150 hover:bg-slate-100 active:scale-[0.97]">
              <span className="relative flex h-5 w-5 flex-col justify-between">
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${open ? "translate-y-[9px] rotate-45" : ""}`} />
                <span className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${open ? "w-0 opacity-0" : "w-full opacity-100"}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${open ? "-translate-y-[9px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer (absolute to sticky wrapper = always below nav) ── */}
      <div
        className={`absolute inset-x-0 top-full z-50 md:hidden transition-all duration-300 ease-out ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {/* Overlay */}
        {open && (
          <div className="fixed inset-0 -z-10 bg-slate-950/25 backdrop-blur-sm"
            onClick={() => setOpen(false)} aria-hidden="true" />
        )}

        <div className="mx-3 mt-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-dark">

          {/* Address strip */}
          <div className="border-b border-slate-100 bg-slate-50 px-5 py-3.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</p>
            <p className="mt-0.5 text-sm font-semibold text-slate-800">11687 US-431, Guntersville, AL 35976</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col p-2.5">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors duration-150 ${
                    active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {label}
                  {active ? (
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA buttons */}
          <div className="border-t border-slate-100 p-3.5 flex flex-col gap-2">
            <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary justify-center py-4 text-base">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Get Directions
            </a>
            <a href="tel:2565727011"
              className="btn-secondary justify-center py-4 text-base">
              <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call (256) 572-7011
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
