import Image from "next/image";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";

const features = [
  {
    icon: (<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>),
    title: "Self-Service Laundry",
    body:  "Commercial-grade washers and dryers in small, large, and extra-large sizes — do any load at your own pace.",
  },
  {
    icon: (<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>),
    title: "Coin, Card & App",
    body:  "Pay with quarters, a debit or credit card, or our mobile app — whichever is easiest for you.",
  },
  {
    icon: (<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>),
    title: "Clean & Comfortable",
    body:  "A bright, well-maintained facility with seating, folding tables, and snack vending while you wait.",
  },
  {
    icon: (<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>),
    title: "Convenient Location",
    body:  "Right on US-431 in Guntersville with free parking. Easy to find, easy to use.",
  },
];

const payments = [
  { emoji: "🪙", label: "Coins",               sub: "Traditional quarters — always accepted"  },
  { emoji: "💳", label: "Debit / Credit Card",  sub: "Tap or swipe right at the machine"       },
  { emoji: "📱", label: "Mobile App",            sub: "Pay from your phone in seconds"          },
];

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════ */}
      <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-slate-950">
        <Image src="/images/exterior.jpg" alt="Coin Laundry exterior in Guntersville, AL"
          fill priority className="object-cover opacity-30" sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-950/40"/>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"/>

        <div className="section-wrap relative z-10 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="badge-blue mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"/>
              Guntersville, Alabama
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
              Clean. Fast.{" "}
              <span className="block text-gradient">Easy Laundry.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 sm:text-xl">
              Modern self-service laundromat on US-431 in Guntersville.
              Coin, card, and mobile app payments — simple for everyone.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary justify-center px-8 py-5 text-base sm:justify-start">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Get Directions
              </a>
              <a href="tel:2565727011"
                className="btn-ghost-dark justify-center px-8 py-5 text-base sm:justify-start">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call (256) 572-7011
              </a>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <svg className="h-3.5 w-3.5 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              11687 US-431, Guntersville, AL 35976
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
          <svg className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* ══ CONTACT STRIP ════════════════════════ */}
      <ContactStrip />

      {/* ══ FEATURES ═════════════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="mb-14">
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="section-heading max-w-lg">
              Everything you need,<br className="hidden sm:block"/> nothing you don&rsquo;t.
            </h2>
            <p className="section-sub max-w-xl">
              Easy payments, reliable machines, and a space that&rsquo;s comfortable for everyone — 
              whether it&rsquo;s your first time or your hundredth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon, title, body }, i) => (
              <div key={title} className="card group relative overflow-hidden p-7">
                <span className="absolute right-4 top-3 select-none text-7xl font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-blue-50/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue transition-all duration-200 group-hover:scale-105 group-hover:bg-blue-700">
                  {icon}
                </div>
                <h3 className="relative mb-2 text-[15px] font-extrabold text-slate-900">{title}</h3>
                <p className="relative text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-extrabold text-slate-900">Ready to come in?</p>
              <p className="mt-1 text-sm text-slate-500">We&rsquo;re on US-431 — easy to find, easy to use.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary justify-center">
                Get Directions
              </a>
              <a href="tel:2565727011" className="btn-secondary justify-center">
                <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PAYMENT ══════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 noise">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-800/15 blur-3xl"/>
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-3xl"/>

        <div className="section-wrap relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4 text-blue-400">Flexible Payments</p>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Pay the way<br/><span className="text-gradient">that works for you.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Coins, debit or credit card, or a mobile app — all accepted on 
                every machine. No cash? No problem.
              </p>
              <div className="mt-8 flex gap-3.5 rounded-2xl border border-green-500/20 bg-green-500/[0.08] p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-green-100">
                  <strong className="text-green-300">Simple to use for everyone</strong> — 
                  and we&rsquo;re always happy to help. No tech experience required.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-2 sm:flex-row">
                <Link href="/services" className="btn-primary justify-center sm:justify-start">See All Services</Link>
                <a href="tel:2565727011" className="btn-ghost-dark justify-center sm:justify-start">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {payments.map(({ emoji, label, sub }) => (
                <div key={label}
                  className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-5 transition-all duration-200 hover:border-blue-800/50 hover:bg-slate-900">
                  <span className="shrink-0 text-3xl">{emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{sub}</p>
                  </div>
                  <svg className="h-5 w-5 shrink-0 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              ))}
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-blue-600/20 bg-blue-600/10 py-4">
                <span className="text-sm font-bold text-blue-300">All 3 options on every machine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GALLERY ══════════════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="mb-12">
            <p className="eyebrow mb-3">Inside Our Location</p>
            <h2 className="section-heading">See the space</h2>
            <p className="section-sub max-w-xl">
              Clean, bright, and well-maintained — with rows of modern machines, 
              comfortable seating, folding tables, and vending.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {/* Wide hero image */}
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-card">
              <Image src="/images/machines-wide.jpg" alt="Rows of commercial washers and dryers" fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width:640px) 100vw, 66vw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"/>
              <span className="absolute bottom-4 left-5 text-sm font-semibold text-white">Multiple machine sizes available</span>
            </div>
            {/* Tall exterior */}
            <div className="relative row-span-2 overflow-hidden rounded-2xl bg-slate-100 shadow-card sm:aspect-auto">
              <Image src="/images/exterior.jpg" alt="Coin Laundry storefront" fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width:640px) 50vw, 33vw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"/>
              <span className="absolute bottom-4 left-4 right-4 text-xs font-semibold leading-tight text-white">11687 US-431, Guntersville AL</span>
            </div>
            {/* Waiting area */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-card">
              <Image src="/images/waiting.jpg" alt="Waiting area with vending" fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width:640px) 50vw, 33vw"/>
            </div>
            {/* Dryers */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-card">
              <Image src="/images/dryers.jpg" alt="Wall of commercial dryers" fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width:640px) 50vw, 33vw"/>
            </div>
            {/* Folding tables */}
            <div className="relative col-span-2 aspect-[16/7] overflow-hidden rounded-2xl bg-slate-100 shadow-card">
              <Image src="/images/folding.jpg" alt="Folding tables and seating" fill
                className="object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width:640px) 100vw, 66vw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"/>
              <span className="absolute bottom-4 left-5 text-sm font-semibold text-white">Folding tables &amp; comfortable seating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LOCATION ═════════════════════════════ */}
      <section className="section-muted">
        <div className="section-wrap">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Find Us</p>
              <h2 className="section-heading">We&rsquo;re easy to find</h2>
              <p className="section-sub">
                Conveniently located on US-431 in Guntersville with free parking 
                right out front. Look for the Coin Laundry sign.
              </p>

              <ul className="mt-8 space-y-3.5">
                {[
                  { emoji: "📍", text: "11687 US-431, Guntersville, AL 35976" },
                  { emoji: "📞", text: "(256) 572-7011"                        },
                  { emoji: "🕐", text: "Hours coming soon"                     },
                  { emoji: "🚗", text: "Free parking directly out front"       },
                ].map(({ emoji, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="text-lg">{emoji}</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary justify-center sm:justify-start">
                  Get Directions
                </a>
                <a href="tel:2565727011" className="btn-secondary justify-center sm:justify-start">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call Now
                </a>
                <Link href="/location" className="btn-secondary justify-center sm:justify-start">More Info</Link>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-card-md">
              <iframe title="Coin Laundry location"
                src="https://maps.google.com/maps?q=11687+US-431,+Guntersville,+AL+35976&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════ */}
      <section className="relative overflow-hidden bg-blue-600 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}/>
        <div className="section-wrap relative text-center">
          <div className="badge-white mb-8 mx-auto w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400"/>
            Open in Guntersville
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop by today and see how easy laundry can be.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-blue-100">
            Modern machines. Flexible payments. A clean, comfortable space — 
            all right on US-431 in Guntersville.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-extrabold text-blue-700 shadow-[0_4px_20px_-2px_rgb(0_0_0/0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 active:scale-[0.97]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Get Directions
            </a>
            <a href="tel:2565727011"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.97]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call (256) 572-7011
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            11687 US-431 &middot; Guntersville, AL 35976 &middot; h2oworksguntersville@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
