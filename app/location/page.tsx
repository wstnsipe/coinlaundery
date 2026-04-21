import Image from "next/image";
import type { Metadata } from "next";
import ContactStrip from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: "Location & Hours | Coin Laundry — Guntersville, AL",
  description: "Find Coin Laundry at 11687 US-431, Guntersville, AL 35976. Easy access, free parking. Call (256) 572-7011.",
};

const contactItems = [
  {
    id: "address",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: "Address",
    content: (
      <>
        <p className="text-lg font-bold leading-snug text-slate-900">11687 US-431</p>
        <p className="mt-0.5 text-slate-500">Guntersville, AL 35976</p>
        <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
          target="_blank" rel="noopener noreferrer"
          className="link-arrow mt-3">
          Open in Google Maps
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </>
    ),
  },
  {
    id: "hours",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: "Hours",
    content: (
      <>
        <p className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 shrink-0"/>
          Open Daily: 7am – 10pm
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          Every day of the week, including weekends and holidays.
        </p>
        <a href="tel:2565727011"
          className="link-arrow mt-3">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call (256) 572-7011
        </a>
      </>
    ),
  },
  {
    id: "phone",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: "Phone",
    content: (
      <a href="tel:2565727011"
        className="text-lg font-bold text-slate-900 transition-colors duration-150 hover:text-blue-600">
        (256) 572-7011
      </a>
    ),
  },
  {
    id: "email",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: "Email",
    content: (
      <a href="mailto:h2oworksguntersville@gmail.com"
        className="break-all text-sm font-bold leading-relaxed text-slate-900 transition-colors duration-150 hover:text-blue-600">
        h2oworksguntersville@gmail.com
      </a>
    ),
  },
];

const quickFacts = [
  { emoji: "🚗", title: "Free Parking",     body: "Plenty of free parking directly in front — just pull right up." },
  { emoji: "📍", title: "On US-431",        body: "Located on the main highway through Guntersville."             },
  { emoji: "♿", title: "Fully Accessible", body: "Ground-level entry and a spacious layout for everyone."        },
];

export default function LocationPage() {
  return (
    <>
      {/* ══ HEADER ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate-950">
        <Image src="/images/exterior.jpg" alt="Coin Laundry storefront exterior" fill priority
          className="object-cover opacity-20" sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"/>
        <div className="section-wrap relative py-20 sm:py-28">
          <p className="eyebrow mb-4 text-blue-400">Find Us</p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Location &amp;{" "}
            <span className="text-gradient">Hours</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Conveniently located in Guntersville with easy access and free parking.
            Right on US-431 — easy to find, easy to get in and out.
          </p>
        </div>
      </section>

      <ContactStrip />

      {/* ══ MAP + DETAILS ════════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-start">

            {/* Info column */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactItems.map(({ id, icon, label, content }) => (
                <div key={id} className="card p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue">
                      {icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {label}
                    </span>
                  </div>
                  {content}
                </div>
              ))}

              <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary justify-center py-4 text-sm">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Get Turn-by-Turn Directions
              </a>
            </div>

            {/* Map + photo */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card-md">
                <iframe
                  title="Coin Laundry on Google Maps"
                  src="https://maps.google.com/maps?q=11687+US-431,+Guntersville,+AL+35976&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="420"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="relative aspect-[16/7] overflow-hidden rounded-2xl shadow-card">
                <Image src="/images/exterior.jpg" alt="Coin Laundry exterior — 11687 US-431" fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width:1024px) 100vw, 60vw"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"/>
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-sm font-semibold text-white">11687 US-431 · Guntersville, AL 35976</p>
                  <p className="mt-0.5 text-xs text-slate-300">Look for the Coin Laundry sign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUICK FACTS ══════════════════════════ */}
      <section className="section-muted border-t border-slate-100">
        <div className="section-wrap">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {quickFacts.map(({ emoji, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 text-2xl">{emoji}</span>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
