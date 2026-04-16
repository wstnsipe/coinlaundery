"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">Message sent!</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
            Thanks for reaching out. We&rsquo;ll get back to you as soon as possible.
          </p>
        </div>
        <button onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-blue-600 transition-colors duration-150 hover:text-blue-800">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="label">First name</label>
          <input id="first_name" name="first_name" type="text" required autoComplete="given-name"
            placeholder="Jane" className="input"/>
        </div>
        <div>
          <label htmlFor="last_name" className="label">Last name</label>
          <input id="last_name" name="last_name" type="text" required autoComplete="family-name"
            placeholder="Smith" className="input"/>
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="label">
          Phone{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel"
          placeholder="(256) 000-0000" className="input"/>
      </div>

      <div>
        <label htmlFor="email" className="label">Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email"
          placeholder="jane@example.com" className="input"/>
      </div>

      <div>
        <label htmlFor="message" className="label">Message</label>
        <textarea id="message" name="message" required rows={5}
          placeholder="How can we help you?"
          className="input resize-none"/>
      </div>

      <button type="submit" disabled={status === "sending"}
        className="btn-primary w-full justify-center py-4 text-base">
        {status === "sending" ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending&hellip;
          </>
        ) : (
          <>
            Send Message
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
