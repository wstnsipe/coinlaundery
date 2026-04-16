import Link from "next/link";
import type { Metadata } from "next";
import ContactStrip from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: "Payments | Coin Laundry — Guntersville, AL",
  description:
    "Pay for laundry with coins, a debit or credit card, or the free Airwallet app. Easy payment options at Coin Laundry in Guntersville, AL.",
};

const steps = [
  {
    n: "01",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Choose a Machine",
    body: "Walk up to any open washer or dryer. All machines accept every payment method — pick the one that's right for your load size.",
  },
  {
    n: "02",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pay Your Way",
    body: "Insert coins, tap your debit or credit card, or open the Airwallet app on your phone — all three work on every machine.",
  },
  {
    n: "03",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Start Your Machine",
    body: "Your machine starts right away once payment is confirmed. Load your clothes and you're all set.",
  },
];

const reassurances = [
  {
    q: "Do I have to use Airwallet?",
    a: "No. Coins and debit/credit cards are accepted on every machine. Airwallet is just an extra option if you prefer paying by phone.",
  },
  {
    q: "Are coins still accepted?",
    a: "Yes, absolutely. Traditional quarters work on every machine, just like always. Nothing has changed.",
  },
  {
    q: "Is Airwallet hard to use?",
    a: "Not at all. Download the free app, add your card, load some funds, and tap to pay. Most people are ready in under two minutes.",
  },
  {
    q: "Is the Airwallet app free?",
    a: "Yes — free to download on iPhone and Android. You only pay for your laundry, nothing else.",
  },
];

export default function PaymentsPage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 noise">
        <div className="pointer-events-none absolute -left-48 -top-48 h-[550px] w-[550px] rounded-full bg-blue-800/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -right-48 h-[550px] w-[550px] rounded-full bg-blue-900/25 blur-3xl" />

        <div className="section-wrap relative">
          <div className="max-w-2xl">
            <div className="badge-blue mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Flexible Payment Options
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Easy Payment Options{" "}
              <span className="block text-gradient">with Airwallet.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Use coins, card, or your phone &mdash; whatever works best for you.
              All three options are available on every machine at Coin Laundry.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://airwallet.net/user-home/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center px-8 py-5 text-base sm:justify-start"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get the Airwallet App
              </a>
              <a
                href="tel:2565727011"
                className="btn-ghost-dark justify-center px-8 py-5 text-base sm:justify-start"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (256) 572-7011
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT STRIP ════════════════════════ */}
      <ContactStrip />

      {/* ══ WHAT IS AIRWALLET ════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

            {/* Text */}
            <div>
              <p className="eyebrow mb-3">What Is Airwallet?</p>
              <h2 className="section-heading max-w-lg">
                The payment system on our machines.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                Airwallet is the payment system we use at Coin Laundry. It handles
                coin, card, and phone payments &mdash; all in one place.
                You don&rsquo;t need to learn anything new. If you have quarters,
                drop them in. If you have a card, tap it. And if you want to pay
                from your phone, Airwallet makes that simple too.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: "🪙", text: "Coins accepted on every machine — nothing has changed" },
                  { icon: "💳", text: "Debit and credit cards work right at the machine" },
                  { icon: "📱", text: "The free Airwallet app lets you pay from your phone" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
                    <span className="shrink-0 text-xl">{icon}</span>
                    <span className="text-[15px] font-medium leading-snug text-slate-700">{text}</span>
                    <svg className="ml-auto h-4 w-4 shrink-0 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark feature card */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-8 shadow-card-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-700/20 blur-2xl" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-blue">
                    <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-extrabold text-white">Airwallet</p>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    The payment system at Coin Laundry. Accepts coins, card, and
                    phone payments so everyone can pay the way they prefer.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-bold text-green-300">Active at this location</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method pills */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: "🪙", label: "Coins" },
                  { emoji: "💳", label: "Card" },
                  { emoji: "📱", label: "App" },
                ].map(({ emoji, label }) => (
                  <div key={label} className="card flex flex-col items-center py-5 text-center">
                    <span className="text-2xl">{emoji}</span>
                    <span className="mt-2 text-xs font-bold text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 noise">
        <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-800/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-900/20 blur-3xl" />

        <div className="section-wrap relative">
          <div className="mb-14 text-center">
            <p className="eyebrow mb-3 text-blue-400">Step by Step</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              How it works &mdash;{" "}
              <span className="text-gradient">3 simple steps.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
              Every machine works the same way. Choose it, pay for it, start it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map(({ n, icon, title, body }, i) => (
              <div
                key={n}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition-all duration-200 hover:border-blue-800/50 hover:bg-slate-900"
              >
                <span className="absolute right-5 top-3 select-none text-8xl font-black leading-none text-slate-800/50">
                  {n}
                </span>
                <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue">
                  {icon}
                </div>
                <h3 className="relative mb-3 text-lg font-extrabold text-white">{title}</h3>
                <p className="relative text-[15px] leading-relaxed text-slate-400">{body}</p>

                {/* Desktop connector */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Coins reassurance */}
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-green-500/20 bg-green-500/[0.07] p-5 sm:items-center">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400 sm:mt-0">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base leading-relaxed text-green-100">
              <strong className="text-green-300">Coins still work exactly as they always have.</strong>{" "}
              Airwallet is an addition, not a replacement. Drop in quarters and go &mdash; no app needed.
            </p>
          </div>
        </div>
      </section>

      {/* ══ VISUALS ══════════════════════════════ */}
      <section className="section-muted">
        <div className="section-wrap">
          <div className="mb-12">
            <p className="eyebrow mb-3">How It Looks</p>
            <h2 className="section-heading max-w-lg">
              A closer look at Airwallet.
            </h2>
            <p className="section-sub max-w-xl">
              From opening the app to starting your machine, every step is
              straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            {/* Card 1 — App interface */}
            <div className="card overflow-hidden">
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <svg viewBox="0 0 120 200" className="h-44 w-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="4" width="100" height="192" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
                  <rect x="16" y="18" width="88" height="160" rx="8" fill="#0f172a"/>
                  <rect x="42" y="10" width="36" height="5" rx="2.5" fill="#334155"/>
                  <rect x="44" y="184" width="32" height="3" rx="1.5" fill="#334155"/>
                  <rect x="16" y="18" width="88" height="22" rx="8" fill="#1d4ed8"/>
                  <rect x="16" y="30" width="88" height="10" fill="#1d4ed8"/>
                  <text x="60" y="33" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui">Airwallet</text>
                  <rect x="22" y="46" width="76" height="38" rx="7" fill="#2563eb"/>
                  <text x="60" y="61" textAnchor="middle" fill="white" fontSize="7" fontFamily="system-ui" opacity="0.8">Your balance</text>
                  <text x="60" y="76" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="system-ui">$12.50</text>
                  <text x="24" y="97" fill="#64748b" fontSize="6" fontWeight="700" fontFamily="system-ui" letterSpacing="1">SELECT MACHINE</text>
                  <rect x="22" y="101" width="76" height="16" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.75"/>
                  <text x="30" y="112" fill="#93c5fd" fontSize="6.5" fontFamily="system-ui">Washer #3 — Large</text>
                  <rect x="86" y="104" width="8" height="10" rx="2" fill="#3b82f6" opacity="0.4"/>
                  <rect x="22" y="120" width="76" height="14" rx="4" fill="#1e293b"/>
                  <text x="30" y="130" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui">Washer #5 — XL</text>
                  <rect x="22" y="137" width="76" height="14" rx="4" fill="#1e293b"/>
                  <text x="30" y="147" fill="#94a3b8" fontSize="6.5" fontFamily="system-ui">Dryer #2</text>
                  <rect x="22" y="156" width="76" height="16" rx="5" fill="#2563eb"/>
                  <text x="60" y="167" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="system-ui">Pay &amp; Start Machine</text>
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
                    <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">Airwallet app interface</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  Check your balance, select a machine, and pay &mdash; all from one screen.
                </p>
              </div>
            </div>

            {/* Card 2 — Payment selection */}
            <div className="card overflow-hidden">
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-6">
                <div className="pointer-events-none absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
                <svg viewBox="0 0 160 160" className="h-40 w-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="144" height="144" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
                  <rect x="8" y="8" width="144" height="28" rx="12" fill="#2563eb"/>
                  <rect x="8" y="24" width="144" height="12" fill="#2563eb"/>
                  <text x="80" y="26" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui">Choose Payment Method</text>
                  <rect x="16" y="44" width="128" height="28" rx="7" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1"/>
                  <circle cx="34" cy="58" r="9" fill="#f59e0b"/>
                  <text x="34" y="62" textAnchor="middle" fontSize="10" fontFamily="system-ui">🪙</text>
                  <text x="50" y="55" fill="#78350f" fontSize="8" fontWeight="700" fontFamily="system-ui">Coins</text>
                  <text x="50" y="65" fill="#a16207" fontSize="6.5" fontFamily="system-ui">Insert quarters as usual</text>
                  <rect x="16" y="78" width="128" height="28" rx="7" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5"/>
                  <rect x="25" y="86" width="18" height="12" rx="2" fill="#3b82f6"/>
                  <rect x="25" y="92" width="18" height="2" fill="#93c5fd"/>
                  <text x="52" y="89" fill="#1d3a8a" fontSize="8" fontWeight="700" fontFamily="system-ui">Debit / Credit Card</text>
                  <text x="52" y="99" fill="#3b82f6" fontSize="6.5" fontFamily="system-ui">Tap or swipe at the reader</text>
                  <rect x="132" y="85" width="8" height="14" rx="2" fill="#3b82f6" opacity="0.3"/>
                  <circle cx="136" cy="92" r="3" fill="#3b82f6"/>
                  <rect x="16" y="112" width="128" height="28" rx="7" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1"/>
                  <rect x="25" y="120" width="12" height="20" rx="3" fill="#16a34a"/>
                  <rect x="27" y="123" width="8" height="8" rx="1" fill="#4ade80"/>
                  <text x="46" y="123" fill="#14532d" fontSize="8" fontWeight="700" fontFamily="system-ui">Airwallet App</text>
                  <text x="46" y="133" fill="#16a34a" fontSize="6.5" fontFamily="system-ui">Pay from your phone</text>
                  <rect x="132" y="119" width="8" height="14" rx="4" fill="#22c55e" opacity="0.3"/>
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
                    <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">Payment selection screen</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  Three options every time &mdash; coins, card, or the Airwallet app.
                </p>
              </div>
            </div>

            {/* Card 3 — Machine process */}
            <div className="card overflow-hidden">
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 p-6">
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-green-500/10 blur-2xl" />
                <svg viewBox="0 0 160 160" className="h-40 w-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="120" height="120" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
                  <rect x="20" y="20" width="120" height="28" rx="10" fill="#0f172a"/>
                  <rect x="20" y="36" width="120" height="12" fill="#0f172a"/>
                  <rect x="30" y="26" width="52" height="16" rx="4" fill="#1e3a5f"/>
                  <text x="56" y="38" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontWeight="700" fontFamily="system-ui">READY</text>
                  <circle cx="105" cy="34" r="8" fill="#15803d"/>
                  <path d="M100.5 34 L103.5 37 L109.5 31" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="80" cy="98" r="38" fill="#0f172a" stroke="#334155" strokeWidth="2"/>
                  <circle cx="80" cy="98" r="30" fill="#1e293b" stroke="#1d4ed8" strokeWidth="1.5"/>
                  <circle cx="80" cy="98" r="22" fill="#0f172a"/>
                  <path d="M65 90 Q80 82 95 90" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <path d="M63 98 Q80 88 97 98" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <path d="M65 106 Q80 114 95 106" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <ellipse cx="74" cy="96" rx="7" ry="5" fill="#2563eb" opacity="0.5"/>
                  <ellipse cx="86" cy="101" rx="6" ry="4" fill="#475569" opacity="0.6"/>
                  <rect x="108" y="56" width="22" height="30" rx="4" fill="#1d4ed8"/>
                  <rect x="111" y="60" width="16" height="10" rx="2" fill="#60a5fa" opacity="0.6"/>
                  <path d="M118 75 Q122 71 126 75" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M115 78 Q122 71 129 78" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4"/>
                  <rect x="96" y="46" width="14" height="22" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1"/>
                  <rect x="98" y="49" width="10" height="14" rx="1.5" fill="#0f172a"/>
                  <rect x="99" y="50" width="8" height="10" rx="1" fill="#1d4ed8" opacity="0.8"/>
                  <text x="103" y="58" textAnchor="middle" fill="white" fontSize="5" fontWeight="700" fontFamily="system-ui">PAY</text>
                  <path d="M110 57 L108 64" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arrowGreen)"/>
                  <defs>
                    <marker id="arrowGreen" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                      <path d="M0,0 L4,2 L0,4 Z" fill="#22c55e"/>
                    </marker>
                  </defs>
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-100">
                    <svg className="h-3.5 w-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                  </div>
                  <p className="text-sm font-extrabold text-slate-900">Machine payment process</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  Tap your phone near the reader and the machine starts right away.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ MOBILE APP SECTION ═══════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

            {/* Text */}
            <div>
              <p className="eyebrow mb-3">Pay by Phone</p>
              <h2 className="section-heading">
                Use Airwallet to pay{" "}
                <span className="text-blue-600">from your phone.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                If you prefer not to carry cash or a card, the free Airwallet app
                lets you pay for any machine right from your phone. Download it
                once, add funds, and you&rsquo;re good to go every visit.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Free to download on iPhone and Android",
                  "Add funds once — use them every visit",
                  "No monthly fees, no subscriptions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                    <svg className="h-5 w-5 shrink-0 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://airwallet.net/user-home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center sm:justify-start"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit airwallet.net
                </a>
                <a href="tel:2565727011" className="btn-secondary justify-center sm:justify-start">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Need Help? Call Us
                </a>
              </div>
            </div>

            {/* App mockup */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-xs rounded-3xl bg-gradient-to-b from-slate-900 to-blue-950 p-8 shadow-dark">
                <div className="mx-auto w-full rounded-2xl border border-slate-700/60 bg-slate-800/80 p-6">
                  <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-slate-600" />
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Airwallet</p>
                      <p className="text-[10px] text-slate-400">Your balance</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                      <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mb-5 rounded-xl bg-blue-600 p-4 text-center">
                    <p className="text-3xl font-extrabold text-white">$12.50</p>
                    <p className="mt-1 text-xs text-blue-200">Available balance</p>
                  </div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Select Machine</p>
                  <div className="space-y-2">
                    {["Washer #3 — Large", "Washer #5 — XL", "Dryer #2"].map((m, i) => (
                      <div key={m} className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${i === 0 ? "border border-blue-500/40 bg-blue-600/20" : "bg-slate-700/50"}`}>
                        <span className="text-[11px] font-medium text-slate-200">{m}</span>
                        {i === 0 && (
                          <span className="rounded-full bg-blue-500/30 px-2 py-0.5 text-[9px] font-bold text-blue-300">Selected</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-[13px] font-extrabold text-white shadow-blue">
                    Pay &amp; Start Machine
                  </button>
                  <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-slate-600" />
                </div>
                <div className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 shadow-card">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-extrabold text-green-300">Live at our location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REASSURANCE ══════════════════════════ */}
      <section className="section-muted">
        <div className="section-wrap">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">Good to Know</p>
            <h2 className="section-heading">Simple for everyone.</h2>
            <p className="section-sub mx-auto max-w-xl">
              Airwallet is designed to be easy. And if you&rsquo;re not interested
              in the app at all, coins and cards still work exactly as they always have.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reassurances.map(({ q, a }) => (
              <div key={q} className="card p-7">
                <div className="mb-3 flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{q}</h3>
                </div>
                <p className="pl-10 text-[15px] leading-relaxed text-slate-500">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card sm:flex-row sm:justify-between sm:p-8 sm:text-left">
            <div>
              <p className="text-base font-extrabold text-slate-900">Still have questions?</p>
              <p className="mt-1 text-sm text-slate-500">We&rsquo;re happy to walk you through any payment option in person or by phone.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <a href="tel:2565727011" className="btn-primary justify-center">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (256) 572-7011
              </a>
              <Link href="/contact" className="btn-secondary justify-center">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AIRWALLET LINK CTA ═══════════════════ */}
      <section className="relative overflow-hidden bg-blue-600 py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="section-wrap relative text-center">
          <div className="badge-white mb-8 mx-auto w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Free App
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Want to pay from your phone?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-blue-100">
            Visit the Airwallet website to get the free app for iPhone or Android.
            Setup takes minutes, and it works on every machine at Coin Laundry.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://airwallet.net/user-home/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-extrabold text-blue-700 shadow-[0_4px_20px_-2px_rgb(0_0_0/0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 active:scale-[0.97]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Get Airwallet at airwallet.net
            </a>
            <a
              href="tel:2565727011"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
