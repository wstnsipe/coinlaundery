import Image from "next/image";
import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Coin Laundry — Guntersville, AL",
  description: "Self-service laundry with modern washers and dryers. Coin, card, and mobile app payments. Guntersville, AL.",
};

const machines = [
  { name: "Small Washers",       cap: "~15–20 lbs", best: "Everyday loads — shirts, jeans, light bedding.",          color: "bg-blue-600"  },
  { name: "Large Washers",       cap: "~30–40 lbs", best: "Towels, heavier clothes, and thick fabrics.",             color: "bg-blue-800"  },
  { name: "Extra-Large Washers", cap: "50+ lbs",    best: "Comforters, blankets, sleeping bags, and large items.",   color: "bg-green-600" },
  { name: "Dryers",              cap: "All sizes",  best: "Fast, high-efficiency drying — matched to every washer.", color: "bg-slate-600" },
];

const payments = [
  { emoji: "🪙", label: "Coins",      badge: "Classic",  badgeCls: "bg-yellow-100 text-yellow-700", sub: "Traditional quarters — simple and always accepted."        },
  { emoji: "💳", label: "Card",       badge: "Tap & Go", badgeCls: "bg-blue-100 text-blue-700",    sub: "Debit or credit — tap or swipe at the machine."            },
  { emoji: "📱", label: "Mobile App", badge: "Digital",  badgeCls: "bg-purple-100 text-purple-700",sub: "Download, load funds, and pay from your phone in seconds." },
];

const steps = [
  { n: "01", title: "Choose a machine", body: "Pick a washer sized for your load — small, large, or extra-large."         },
  { n: "02", title: "Load up",          body: "Add clothes and detergent. Detergent is available at our vending machine." },
  { n: "03", title: "Pay & start",      body: "Select your cycle and pay with coins, card, or the app."                  },
  { n: "04", title: "Dry & fold",       body: "Move to a dryer when done, then use our folding tables to finish up."     },
];

const amenities = [
  "Modern, high-efficiency machines",
  "Small, large & extra-large capacity",
  "Comfortable seating while you wait",
  "Folding tables throughout",
  "Snack & drink vending on-site",
  "Change machine available",
  "Clean facility maintained daily",
];

export default function ServicesPage() {
  return (
    <>
      {/* ══ HEADER ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950">
        <Image src="/images/machines-wide.jpg" alt="Modern washers and dryers" fill priority
          className="object-cover opacity-20" sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"/>
        <div className="section-wrap relative py-20 sm:py-28">
          <p className="eyebrow mb-4 text-blue-400">What We Offer</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Self-Service Laundry,{" "}
            <span className="text-gradient">Done Right.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Modern machines, flexible payments, and a clean space — everything 
            you need, nothing you don&rsquo;t.
          </p>
        </div>
      </section>

      {/* ══ TRUST BANNER ══════════════════════════ */}
      <div className="bg-blue-600">
        <div className="section-wrap py-5">
          <p className="text-center text-sm font-semibold text-white sm:text-base">
            &ldquo;Whether you prefer traditional coin machines or modern digital payments, 
            we&rsquo;ve made it easy for everyone.&rdquo;
          </p>
        </div>
      </div>

      <ContactStrip />

      {/* ══ SERVICE OVERVIEW ══════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-600"/>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Our Service</span>
              </div>
              <h2 className="section-heading">Self-Service Laundry</h2>
              <p className="section-sub">
                Bring your laundry in, use our machines at your own pace, and leave 
                with everything clean and fresh. It&rsquo;s that simple.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-500">
                Our high-efficiency washers and dryers come in three sizes so you 
                always find the right machine — whether it&rsquo;s a single bag of 
                clothes or a king-size comforter.
              </p>

              <ul className="mt-8 space-y-2.5">
                {amenities.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <svg className="check-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card-md">
              <Image src="/images/machines-wide.jpg" alt="Rows of modern washers and dryers" fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                sizes="(max-width:1024px) 100vw, 50vw"/>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MACHINES ══════════════════════════════ */}
      <section className="section-muted">
        <div className="section-wrap">
          <div className="mb-12">
            <p className="eyebrow mb-3">Our Machines</p>
            <h2 className="section-heading">The right machine for every load</h2>
            <p className="section-sub max-w-xl">
              Multiple sizes means you never overpay for space you don&rsquo;t need 
              or struggle to fit everything in one machine.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {machines.map(({ name, cap, best, color }) => (
              <div key={name} className="card group flex gap-5 p-6">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color} text-white shadow-sm transition-transform duration-200 group-hover:scale-105`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </div>
                <div>
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <h3 className="font-bold text-slate-900">{name}</h3>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">{cap}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">{best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PAYMENTS ══════════════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

            {/* Cards */}
            <div className="space-y-3">
              {payments.map(({ emoji, label, badge, badgeCls, sub }) => (
                <div key={label} className="card flex items-center gap-5 p-5">
                  <span className="shrink-0 text-3xl">{emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-slate-900">{label}</p>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeCls}`}>{badge}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500">{sub}</p>
                  </div>
                  <svg className="h-5 w-5 shrink-0 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              ))}

              <div className="flex gap-3.5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-blue-800">
                  <strong className="text-blue-900">Not sure how to get started?</strong> Our 
                  system is easy to use, and we&rsquo;re always happy to help — 
                  no tech experience required.
                </p>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-600"/>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Payment Options</span>
              </div>
              <h2 className="section-heading">Three ways to pay</h2>
              <p className="section-sub">
                We offer <strong className="text-slate-700">flexible payment options</strong> including 
                coins, card, and mobile app — making laundry easier than ever.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-500">
                Whether you prefer traditional coins or modern digital payments, 
                we&rsquo;ve made it easy for everyone. There&rsquo;s no wrong way to pay.
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl shadow-card-md">
                <Image src="/images/dryers.jpg" alt="Commercial dryers" fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width:1024px) 100vw, 50vw"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 noise">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-800/15 blur-3xl"/>
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-900/15 blur-3xl"/>
        <div className="section-wrap relative">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="eyebrow mb-3 text-blue-400">Step by Step</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How it works</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Never used a laundromat? No problem — here&rsquo;s exactly 
              what to expect from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ n, title, body }, i) => (
              <div key={n} className="relative flex flex-col items-start px-6 py-8 lg:items-center lg:text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+2.5rem)] right-0 top-[3.25rem] hidden h-px bg-slate-800 lg:block"/>
                )}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white shadow-blue">
                  {n}
                </div>
                <h3 className="mb-2 font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHOTO STRIP ═══════════════════════════ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="section-wrap">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {["/images/folding.jpg", "/images/waiting.jpg", "/images/machines-wide.jpg"].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-card">
                <Image src={src} alt="" fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                  sizes="(max-width:640px) 33vw, 33vw"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════ */}
      <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="section-wrap">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Ready to get started?</h2>
              <p className="mt-2 text-slate-500">
                11687 US-431, Guntersville &middot; (256) 572-7011
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary">
                Get Directions
              </a>
              <a href="tel:2565727011" className="btn-secondary">
                <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (256) 572-7011
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
