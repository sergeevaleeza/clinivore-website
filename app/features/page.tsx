import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  FlaskConical,
  PhoneCall,
  FileText,
  Plug,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Clinivore",
  description:
    "Full feature breakdown: morning dashboard, treatment protocols, outreach queue, AI documentation, Practice Fusion integration, and HIPAA audit trail.",
};

const features = [
  {
    Icon: LayoutDashboard,
    title: "Morning Dashboard",
    tagline: "Start every day knowing exactly who needs attention.",
    bullets: [
      "Due Today / Overdue / High Priority / Needs Outreach counts",
      "Urgent patient list sorted by severity",
      "One-click access to outreach queue",
    ],
    detail:
      "The dashboard is the first screen your coordinator opens every morning. It aggregates every patient on an active treatment protocol and surfaces the ones who need action today — no manual review of spreadsheets or appointment calendars required.",
    align: "left",
  },
  {
    Icon: FlaskConical,
    title: "Treatment Protocols Engine",
    tagline: "Configurable rules. Clinical precision.",
    bullets: [
      "9 built-in protocols covering injection psychiatry",
      "Per-protocol: due-soon window, overdue threshold, escalation trigger",
      "Custom protocol builder for non-standard regimens",
    ],
    detail:
      "Each protocol has its own clinical timeline. Vivitrol is monthly; Invega Trinza is every three months. The protocols engine tracks every patient against their specific schedule, surfacing risk at the right time — not too early, not too late.",
    align: "right",
  },
  {
    Icon: PhoneCall,
    title: "Outreach Queue",
    tagline: "Follow-up that doesn't fall through the cracks.",
    bullets: [
      "Priority-sorted: Urgent → High → Normal",
      "One-click: Mark Contacted, Voicemail Left, SMS Sent, Notify Provider",
      "Every action logged for compliance",
    ],
    detail:
      "The outreach queue gives coordinators a structured, priority-ordered list of patients to contact. Every action taken is timestamped and stored in the audit log, creating a defensible record of your practice's outreach efforts.",
    align: "left",
  },
  {
    Icon: FileText,
    title: "AI Documentation Assistant",
    tagline: "From missed appointment to chart note in 30 seconds.",
    bullets: [
      "Call scripts in psychiatric-appropriate, non-stigmatizing language",
      "Chart notes ready for Practice Fusion copy-paste",
      "SMS drafts (staff-reviewed before sending)",
      "BAA-covered AI configuration available",
    ],
    detail:
      "The AI assistant drafts outreach scripts and chart notes based on the patient's treatment history and current status. Language is carefully calibrated for behavioral health — no stigmatizing framing, no clinical jargon that doesn't belong in outreach communications.",
    align: "right",
  },
  {
    Icon: Plug,
    title: "Practice Fusion Integration",
    tagline: "Built to work with your existing EHR.",
    bullets: [
      "CSV appointment import with automatic missed-visit detection",
      "Patient matching by name + date of birth",
      "Full FHIR API integration: Phase 2 roadmap",
      "Chart note export formatted for Practice Fusion",
    ],
    detail:
      "Today, Clinivore works with Practice Fusion via the same CSV appointment export your front desk already uses. No new logins for patients. No IT project. Full FHIR R4 API integration is in active development for Phase 2.",
    align: "left",
  },
  {
    Icon: ShieldCheck,
    title: "HIPAA-Aware Audit Trail",
    tagline: "Every action. Every actor. Every timestamp.",
    bullets: [
      "Append-only audit log across all staff actions",
      "Role-based access: Admin, Provider, Staff",
      "AI draft generation logged with PHI safety flags",
      "Designed for HIPAA Security Rule compliance",
    ],
    detail:
      "Every action in Clinivore — patient views, outreach attempts, AI draft generation, status changes — is written to an append-only audit log. The log captures who did what, when, and from which role. Designed for HIPAA Security Rule compliance from the ground up.",
    align: "right",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Every feature built for injection psychiatry.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Not a generic patient tracker. Not a repurposed CRM. A purpose-built
            tool for the specific workflows of practices that administer
            injectable psychiatric treatments.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {features.map(({ Icon, title, tagline, bullets, detail, align }) => (
            <div
              key={title}
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                align === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-6 w-6 text-brand-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                <p className="mt-1 text-brand-600 font-medium">{tagline}</p>
                <p className="mt-4 text-slate-600 leading-relaxed">{detail}</p>
                <ul className="mt-6 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-brand-100 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-brand-100 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-brand-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{title}</span>
                  </div>
                  <div className="space-y-3">
                    {bullets.map((b, i) => (
                      <div
                        key={b}
                        className="flex items-center gap-3 rounded-lg bg-white border border-slate-100 px-4 py-3 shadow-sm"
                      >
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center font-bold">
                          {i + 1}
                        </span>
                        <span className="text-sm text-slate-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            See all of this working in your practice.
          </h2>
          <p className="mt-3 text-brand-100">
            Apply for the 8-week pilot and get full platform access — no setup fee.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-brand-600 hover:bg-brand-50 transition-colors"
            >
              Apply for the Pilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
