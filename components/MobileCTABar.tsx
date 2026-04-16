"use client";
// Fixed bottom bar on mobile — always-visible Call + Directions CTAs
// Hidden on md+ (desktop shows CTAs inline)
export default function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-slate-200/70 bg-white/96 px-4 py-3 shadow-[0_-4px_20px_-4px_rgb(0_0_0/0.10)] backdrop-blur-md">
        <div className="flex gap-3">

          {/* Call Now */}
          <a href="tel:2565727011"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-blue-600 py-3.5 text-sm font-extrabold text-blue-700 transition-all duration-150 active:scale-[0.97] active:bg-blue-50">
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call Now
          </a>

          {/* Get Directions */}
          <a href="https://maps.google.com/?q=11687+US-431+Guntersville+AL+35976"
            target="_blank" rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-extrabold text-white shadow-blue transition-all duration-150 active:scale-[0.97] active:bg-blue-700">
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
