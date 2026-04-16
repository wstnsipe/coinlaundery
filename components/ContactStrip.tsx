// Reusable strip — keeps address, phone, and hours always visible
interface ContactStripProps {
  dark?: boolean;
}

export default function ContactStrip({ dark = false }: ContactStripProps) {
  const bg      = dark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-100";
  const label   = dark ? "text-slate-500"                 : "text-slate-400";
  const text    = dark ? "text-white"                     : "text-slate-900";
  const sub     = dark ? "text-slate-400"                 : "text-slate-500";
  const divider = dark ? "divide-slate-800"               : "divide-slate-200";

  const iconBg  = "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white";
  const chevron = `ml-auto h-4 w-4 ${sub}`;

  return (
    <div className={`border-t ${bg}`}>
      <div className="section-wrap py-0">

        {/* ── Mobile: stacked tap rows ── */}
        <div className={`flex flex-col sm:hidden`}>
          <a href="tel:2565727011"
            className={`flex items-center gap-3.5 border-b ${dark ? "border-slate-800" : "border-slate-100"} py-4 transition-opacity active:opacity-60`}>
            <div className={iconBg}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className={`text-[10px] font-bold uppercase tracking-widest ${label}`}>Phone</p>
              <p className={`font-bold ${text}`}>(256) 572-7011</p>
            </div>
            <svg className={chevron} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </a>

          <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3.5 py-4 transition-opacity active:opacity-60">
            <div className={iconBg}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className={`text-[10px] font-bold uppercase tracking-widest ${label}`}>Address</p>
              <p className={`font-bold ${text} truncate`}>11687 US-431, Guntersville</p>
            </div>
            <svg className={chevron} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* ── Desktop: 3-col grid ── */}
        <div className={`hidden sm:grid sm:grid-cols-3 sm:divide-x ${divider}`}>
          {([
            {
              icon: (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              ),
              lbl: "Address",
              val: "11687 US-431, Guntersville, AL",
              href: "https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976",
              external: true,
            },
            {
              icon: (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              ),
              lbl: "Phone",
              val: "(256) 572-7011",
              href: "tel:2565727011",
              external: false,
            },
            {
              icon: (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              ),
              lbl: "Hours",
              val: "Hours coming soon",
              href: null,
              external: false,
            },
          ] as const).map(({ icon, lbl, val, href, external }) => (
            <div key={lbl} className="flex items-center gap-3.5 px-6 py-5">
              <div className={iconBg}>{icon}</div>
              <div className="min-w-0">
                <p className={`text-[10px] font-bold uppercase tracking-widest ${label}`}>{lbl}</p>
                {href ? (
                  <a href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`text-sm font-bold ${text} transition-colors duration-150 hover:text-blue-600`}>
                    {val}
                  </a>
                ) : (
                  <p className={`text-sm font-bold ${sub}`}>{val}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
