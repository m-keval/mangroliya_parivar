import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, notices } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Notices — What the Trust Needs You to Know",
  description:
    "Official notices of the Samast Mangroliya Parivar: events, scholarships, directory updates, trust nominations and commemorations.",
  alternates: { canonical: "/notices" },
};

export default function NoticesPage() {
  const [featured, ...rest] = notices;

  return (
    <>
      <PageHero
        title="Notices from the trust"
        crumbs={[{ label: "Notices" }]}
      />

      <PageSection>
        {/* Featured notice */}
        <Link
          href={`/notices/${featured.slug}`}
          className="group grid gap-8 rounded-3xl border border-ink/10 bg-sand/60 p-7 transition-all hover:border-brand-300 sm:p-9 lg:grid-cols-[1.6fr_1fr] lg:items-center"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-ink px-3 py-1 font-semibold text-cream">
                Latest
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-800">
                {featured.tag}
              </span>
              <span className="text-muted">
                {formatDate(featured.date, "full")}
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl leading-tight font-semibold transition-colors group-hover:text-brand-700 sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {featured.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
              Read the notice
              <Icon
                name="arrow-right"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
          <div className="rounded-2xl bg-ink p-7 text-cream">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-marigold-300 uppercase">
              Posted by
            </p>
            <p className="mt-3 font-display text-xl leading-snug font-semibold">
              {featured.author}
            </p>
            <p className="mt-4 border-t border-cream/15 pt-4 text-sm text-cream/65">
              Notices are posted here first and circulated in the family group
              afterwards. When in doubt, this page is the record.
            </p>
          </div>
        </Link>

        {/* The rest */}
        <div className="mt-14">
          
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {rest.map((notice) => (
              <li key={notice.slug}>
                <Link
                  href={`/notices/${notice.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_26px_54px_-40px_rgba(14,19,18,0.6)]"
                >
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-800">
                      {notice.tag}
                    </span>
                    <span className="text-muted">
                      {formatDate(notice.date)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-snug font-semibold transition-colors group-hover:text-brand-700">
                    {notice.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {notice.excerpt}
                  </p>
                  <p className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4 text-xs text-muted">
                    <span>{notice.author}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-brand-700">
                      Read
                      <Icon
                        name="arrow-right"
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <TextLink href="/contact">Send a notice to the trust</TextLink>
        </div>
      </PageSection>
    </>
  );
}
