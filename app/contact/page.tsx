import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactStrip from "@/components/ContactStrip";

export const metadata: Metadata = {
  title: "Contact | Coin Laundry — Guntersville, AL",
  description: "Have questions? Contact Coin Laundry in Guntersville, AL. Call (256) 572-7011 or send a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* ══ HEADER ═══════════════════════════════ */}
      <section className="bg-slate-950 py-20 sm:py-28">
        <div className="section-wrap">
          <p className="eyebrow mb-4 text-blue-400">Get In Touch</p>
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            We&rsquo;re here{" "}
            <span className="text-gradient">to help.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
            Have questions? Reach out — we&rsquo;re happy to help.
          </p>
        </div>
      </section>

      <ContactStrip />

      {/* ══ CONTACT GRID ════════════════════════ */}
      <section className="section-light">
        <div className="section-wrap">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

            {/* Direct contact */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="mb-2">
                <h2 className="text-xl font-extrabold text-slate-900">Contact us directly</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  The fastest way to reach us is by phone or email.
                </p>
              </div>

              {/* Phone */}
              <a href="tel:2565727011"
                className="card group flex items-center gap-5 p-6 hover:border-blue-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue transition-all duration-200 group-hover:scale-105 group-hover:bg-blue-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                  <p className="text-lg font-extrabold text-slate-900 transition-colors duration-150 group-hover:text-blue-700">
                    (256) 572-7011
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-blue-600">Tap to call</p>
                </div>
                <svg className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-colors duration-150 group-hover:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:h2oworksguntersville@gmail.com"
                className="card group flex items-center gap-5 p-6 hover:border-blue-100">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue transition-all duration-200 group-hover:scale-105 group-hover:bg-blue-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <p className="break-all text-sm font-extrabold leading-snug text-slate-900 transition-colors duration-150 group-hover:text-blue-700">
                    h2oworksguntersville@gmail.com
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-blue-600">Tap to email</p>
                </div>
                <svg className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-colors duration-150 group-hover:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </a>

              {/* Address */}
              <div className="card-flat flex items-start gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-blue">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Address</p>
                  <p className="font-extrabold leading-snug text-slate-900">
                    11687 US-431<br/>Guntersville, AL 35976
                  </p>
                  <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
                    target="_blank" rel="noopener noreferrer"
                    className="link-arrow mt-2">
                    Get directions
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 shadow-card-md sm:p-10 hover:shadow-card-lg">
                <h2 className="mb-1 text-xl font-extrabold text-slate-900">Send us a message</h2>
                <p className="mb-8 text-sm leading-relaxed text-slate-500">
                  Fill out the form and we&rsquo;ll get back to you as soon as we can.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
