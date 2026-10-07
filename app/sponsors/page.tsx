import type { Metadata } from "next";
import Link from "next/link";
import { sponsors } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "પ્રાયોજક — Sponsors & Partners",
  description:
    "The businesses and practices that sponsor Diwali Milan, Holi Milan, the scholarship ceremony and the family health camp.",
  alternates: { canonical: "/sponsors" },
};

const levelStyles = {
  Title: "bg-ink text-cream",
  Gold: "bg-marigold-200 text-marigold-600",
  Supporter: "bg-brand-50 text-brand-800",
} as const;

export default function SponsorsPage() {
  const byLevel = {
    Title: sponsors.filter((s) => s.level === "Title"),
    Gold: sponsors.filter((s) => s.level === "Gold"),
    Supporter: sponsors.filter((s) => s.level === "Supporter"),
  };

  return (
    <>
      <PageHero
        title="Sponsors of the samast gatherings"
        crumbs={[{ label: "પ્રાયોજક" }]}
      />

      <PageSection>
        

        <div className="mt-12 space-y-10">
          {(["Title", "Gold", "Supporter"] as const).map((level) => (
            <div key={level}>
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${levelStyles[level]}`}
                >
                  {level === "Title"
                    ? "ટાઇટલ પ્રાયોજક"
                    : level === "Gold"
                      ? "ગોલ્ડ પ્રાયોજક"
                      : "સહયોગી"}
                  <span className="opacity-70">· {level}</span>
                </span>
                <span className="h-px flex-1 bg-ink/10" />
                <span className="text-xs text-muted">
                  {byLevel[level].length} sponsors
                </span>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {byLevel[level].map((sponsor) => (
                  <article
                    key={sponsor.name}
                    className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-45px_rgba(14,19,18,0.7)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-800 font-display text-lg font-semibold text-white">
                        {sponsor.name.charAt(0)}
                      </span>
                      <span className="rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-muted">
                        Since {sponsor.since}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-lg leading-snug font-semibold transition-colors group-hover:text-brand-700">
                      {sponsor.name}
                    </h2>
                    <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">
                      {sponsor.category}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {sponsor.note}
                    </p>

                    <p className="mt-auto flex items-center gap-2 border-t border-ink/8 pt-4 text-xs text-muted">
                      <Icon name="map-pin" size={14} className="text-brand-600" />
                      {sponsor.city}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Become a sponsor */}
      <PageSection tone="sand" className="border-t border-ink/8">
        <div className="grid gap-8 rounded-[2rem] border border-ink/10 bg-cream p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
              >
                Ask for the sponsorship deck
                <Icon name="mail" size={16} />
              </Link>
              <Link
                href="/business"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-sand"
              >
                See family businesses
              </Link>
            </div>
          </div>

          <ul className="space-y-3 text-sm">
            {[
              "Your logo on the invitation and the banner",
              "A two-minute address at the gathering, after the elders",
              "First refusal on the next year's title slot",
              "Receipt and line item in the audited accounts",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-sand/70 p-4"
              >
                <Icon
                  name="check"
                  size={17}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                <span className="text-ink/75">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <TextLink href="/donors">See the donors instead</TextLink>
        </div>
      </PageSection>
    </>
  );
}
