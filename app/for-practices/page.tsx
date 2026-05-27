import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, ClipboardList, BarChart3, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "For Practices — Adherix",
  description:
    "Built for psychiatrists, office coordinators, and practice administrators managing injectable treatment schedules.",
};

const roiRows = [
  {
    label: "Average missed injection appointment value",
    value: "$400–$800",
    highlight: false,
  },
  {
    label: "Staff hours/week on manual outreach",
    value: "4–8 hours",
    highlight: false,
  },
  {
    label: "Adherix monthly cost (pilot tier)",
    value: "$299/month",
    highlight: false,
  },
  {
    label: "Appointments recovered to break even",
    value: "Less than 1/month",
    highlight: true,
  },
];

const pilotIncludes = [
  "Full platform access for 8 weeks",
  "Onboarding support and CSV import help",
  "Outcome tracking (missed treatment rate before vs. after)",
  "No setup fee. No credit card required.",
  "Cancel anytime — no lock-in",
];

const qualifications = [
  "Psychiatric or behavioral health practice",
  "Administers injectable treatments (LAI antipsychotics, Vivitrol, Sublocade, ketamine, Spravato)",
  "Uses Practice Fusion or willing to use CSV export workflow",
  "1–5 providers",
];

export default function ForPracticesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Built for how psychiatric practices actually work.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Not a generic CRM. Not a repurposed EHR module. A purpose-built tool
            for practices managing injectable psychiatric treatments.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 mb-12">
            Designed for everyone on your team.
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                Icon: Stethoscope,
                role: "Psychiatrists",
                body: "Your patients need consistent injection intervals. Adherix gives you visibility into who's at risk — before they miss.",
              },
              {
                Icon: ClipboardList,
                role: "Office Coordinators",
                body: "Your morning just got a checklist. See who's due, who's overdue, and generate outreach scripts without switching between six systems.",
              },
              {
                Icon: BarChart3,
                role: "Practice Administrators",
                body: "Track adherence rates, staff outreach activity, and treatment continuity metrics — ready for your quarterly review.",
              },
            ].map(({ Icon, role, body }) => (
              <div
                key={role}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{role}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">The math is straightforward.</h2>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                {roiRows.map((row) => (
                  <tr
                    key={row.label}
                    className={`border-b border-slate-100 last:border-0 ${
                      row.highlight ? "bg-brand-50" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-slate-700">{row.label}</td>
                    <td
                      className={`px-6 py-4 text-right text-sm font-semibold ${
                        row.highlight ? "text-brand-700" : "text-slate-900"
                      }`}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-slate-600 text-sm leading-relaxed">
            One recovered Vivitrol appointment covers Adherix for the month.
            Everything after that is recovered revenue — and better patient outcomes.
          </p>
        </div>
      </section>

      {/* Pilot Program */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">The 8-Week Pilot Program</h2>
            <p className="mt-2 text-slate-600">
              No risk. No commitment. Just data on what changes when your practice uses Adherix.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-base font-semibold text-slate-900 mb-5">What&apos;s included</h3>
              <ul className="space-y-3">
                {pilotIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-base font-semibold text-slate-900 mb-5">Who qualifies</h3>
              <ul className="space-y-3">
                {qualifications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 transition-colors"
            >
              Apply for the Pilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
