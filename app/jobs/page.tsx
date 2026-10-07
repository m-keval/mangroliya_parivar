import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, jobs, jobTypes } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "નોકરી — Jobs in the Parivar",
  description:
    "Openings at businesses run by members of the Samast Mangroliya Parivar — and one opening at the trust itself.",
  alternates: { canonical: "/jobs" },
};

const typeStyles = {
  "Full-time": "bg-brand-50 text-brand-800",
  "Part-time": "bg-marigold-200 text-marigold-600",
  Internship: "bg-sand text-muted",
} as const;

export default function JobsPage() {
  const byType = jobTypes.map((type) => ({
    type,
    count: jobs.filter((job) => job.type === type).length,
  }));

  return (
    <>
      <PageHero
        title="Openings inside the parivar"
        crumbs={[{ label: "નોકરી" }]}
      />

      <PageSection>
        <div className="flex flex-wrap items-end justify-between gap-6">
          
          <TextLink href="/business">The businesses behind them</TextLink>
        </div>

        <ul className="mt-12 space-y-5">
          {jobs.map((job) => (
            <li key={job.slug}>
              <article className="group grid gap-5 rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_30px_60px_-45px_rgba(14,19,18,0.7)] sm:p-7 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${typeStyles[job.type]}`}
                    >
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Icon name="map-pin" size={13} className="text-brand-600" />
                      {job.city}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Icon name="graduation" size={13} className="text-brand-600" />
                      {job.experience}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl leading-snug font-semibold transition-colors group-hover:text-brand-700 sm:text-2xl">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-brand-700">
                    {job.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-ink/12 px-3 py-1 text-[11px] font-medium text-ink/70"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 rounded-2xl bg-sand/70 p-5">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
                        Posted
                      </p>
                      <p className="mt-1 font-semibold">{formatDate(job.posted)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.14em] text-muted uppercase">
                        Apply by
                      </p>
                      <p className="mt-1 font-semibold text-marigold-600">
                        {formatDate(job.deadline)}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${job.contact}?subject=${encodeURIComponent(job.title + " — application")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
                  >
                    Apply by email
                    <Icon name="mail" size={16} />
                  </a>
                  <p className="text-center text-xs text-muted">{job.contact}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection tone="sand" className="border-t border-ink/8">
        <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-ink/20 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">
              Hiring in your business?
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              Postings stay up for sixty days. Send the title, city, experience
              and a contact — nothing else is needed.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
            >
              Post an opening
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-cream"
            >
              Offer letter format
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
