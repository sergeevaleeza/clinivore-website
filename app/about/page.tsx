import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Adherix",
  description:
    "Built by people with direct experience in medical office operations and healthcare data.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Built by people who&apos;ve worked in healthcare.
          </h1>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              Adherix was created by a team with direct experience in medical office operations
              and healthcare data. We&apos;ve seen firsthand how psychiatric practices manage
              injection schedules on spreadsheets and sticky notes — and what happens when
              patients fall through the cracks.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              We built Adherix because no existing tool was purpose-built for the specific
              workflows of injection psychiatry: the monthly Vivitrol shot, the quarterly Invega
              Trinza, the ketamine induction series. Generic CRMs don&apos;t understand these
              treatments. Generic EHR modules weren&apos;t designed for coordinators who spend
              their mornings doing outreach.
            </p>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Adherix is currently in pilot phase, working directly with psychiatric practices
              to validate the product before broader release.
            </p>
          </div>

          {/* Team */}
          <div className="mt-14">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Team</h2>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Office &amp; Clinical Operations Lead</p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Background in medical office management, healthcare data, and clinical
                  operations at a multi-specialty psychiatric practice.
                </p>
              </div>
            </div>
          </div>

          {/* Pilot Status */}
          <div className="mt-12 rounded-xl border border-brand-200 bg-brand-50 p-6">
            <p className="text-sm font-semibold text-brand-700 uppercase tracking-wider mb-2">
              Phase 1 Pilot
            </p>
            <p className="text-slate-700 leading-relaxed">
              Adherix is in Phase 1 pilot. We are onboarding a small cohort of practices. If
              you run a psychiatric practice and manage injectable treatments, we&apos;d like to
              talk.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
