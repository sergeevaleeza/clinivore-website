"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send, FlaskConical, Code2, MessageCircle } from "lucide-react";

const reasons = [
  { value: "pilot", label: "Pilot Application" },
  { value: "api", label: "API Access" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const org = data.get("org") as string;
    const reason = data.get("reason") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `Clinivore Inquiry — ${reason || "General"} from ${org || name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nReason: ${reason}\n\n${message}`
    );
    window.location.href = `mailto:hello@clinivore.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Pilot applications, partnership inquiries, and API access requests.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Send className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Message ready to send</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Your email client should have opened. If not, email us directly at{" "}
                  <a
                    href="mailto:hello@clinivore.com"
                    className="text-brand-600 hover:underline"
                  >
                    hello@clinivore.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="you@practice.com"
                  />
                </div>

                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-slate-700 mb-1">
                    Organization / Practice Name
                  </label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Your practice name"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">
                    Reason
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 bg-white"
                  >
                    {reasons.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Tell us about your practice and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Submitting will open your email client to send to hello@clinivore.com
                </p>
              </form>
            )}
          </div>

          {/* Contact Cards */}
          <div className="space-y-5">
            {[
              {
                Icon: FlaskConical,
                title: "Pilot Applications",
                body: "We&apos;re onboarding practices now. Tell us about your practice — what treatments you administer, how many providers, and what your biggest outreach challenge is.",
              },
              {
                Icon: Code2,
                title: "Developer / API",
                body: "Reviewing Clinivore for Practice Fusion integration? We&apos;d love to connect. See our <a href='/developer' class='text-brand-600 hover:underline'>Developer Hub</a> for integration documentation.",
              },
              {
                Icon: MessageCircle,
                title: "General",
                body: "Questions about HIPAA, pricing, or the roadmap? Reach out anytime. We respond within one business day.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-lg bg-brand-100 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <p
                  className="text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body.replace(/&apos;/g, "'") }}
                />
              </div>
            ))}

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500 mb-1">Direct email</p>
              <a
                href="mailto:hello@clinivore.com"
                className="text-brand-600 font-medium hover:underline"
              >
                hello@clinivore.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
