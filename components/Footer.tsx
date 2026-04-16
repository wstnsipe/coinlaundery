import Link from "next/link";

const navLinks = [
  { href: "/",         label: "Home"     },
  { href: "/services", label: "Services" },
  { href: "/location", label: "Location" },
  { href: "/contact",  label: "Contact"  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">

      {/* ── Top grid ── */}
      <div className="border-b border-slate-800/60">
        <div className="section-wrap py-14 sm:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand col */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              <Link href="/" className="group inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-[11px] font-extrabold text-white shadow-blue transition-all duration-200 group-hover:bg-blue-500 group-hover:scale-105">
                  CL
                </span>
                <span className="text-[15px] font-extrabold tracking-tight text-white">
                  Coin Laundry
                </span>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                Guntersville&rsquo;s modern self-service laundromat. Clean machines,
                flexible payments, and a comfortable space to wait.
              </p>
              {/* Quick contact icons */}
              <div className="flex items-center gap-2.5">
                {[
                  { href: "tel:2565727011", label: "Call us", icon: (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  )},
                  { href: "mailto:h2oworksguntersville@gmail.com", label: "Email us", icon: (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  )},
                  { href: "https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976", label: "Get directions", icon: (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  )},
                ].map(({ href, label, icon }) => (
                  <a key={href} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-all duration-150 hover:bg-blue-600 hover:text-white"
                    aria-label={label}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}
                      className="text-sm text-slate-400 transition-colors duration-150 hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-sm leading-relaxed">
                    11687 US-431<br />Guntersville, AL 35976
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a href="tel:2565727011"
                    className="text-sm transition-colors duration-150 hover:text-white">
                    (256) 572-7011
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:h2oworksguntersville@gmail.com"
                    className="break-all text-sm transition-colors duration-150 hover:text-white">
                    h2oworksguntersville@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                Hours
              </h3>
              <p className="text-sm font-semibold text-white">Hours coming soon</p>
              <p className="mt-1 text-sm text-slate-500">Check back for updates.</p>
              <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-blue transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-lg active:scale-[0.97]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="section-wrap py-5">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Coin Laundry &middot; Guntersville, AL
          </p>
          <p className="text-xs text-slate-700">
            Serving Guntersville &amp; Marshall County
          </p>
        </div>
      </div>
    </footer>
  );
}
