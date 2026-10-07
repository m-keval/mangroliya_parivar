import type { Metadata } from "next";
import Link from "next/link";
import { businessIndustries, businesses, getMember } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Avatar } from "@/components/member-card";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "બિસનેશ — Family Business Directory",
  description:
    "Businesses run by members of the Samast Mangroliya Parivar: textiles, manufacturing, healthcare, hospitality, design and professional services.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  const totalStaff = businesses.reduce((sum, b) => sum + b.staff, 0);
  const oldest = Math.min(...businesses.map((b) => b.since));

  return (
    <>
      <PageHero
        title="The family business directory"
        crumbs={[{ label: "બિસનેશ" }]}
      />

      <PageSection>
        <div className="flex flex-wrap items-end justify-between gap-6">
          
          <TextLink href="/jobs">Openings in these firms</TextLink>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {businessIndustries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-ink/12 bg-sand/70 px-4 py-2 text-xs font-semibold text-ink/70"
            >
              {industry}
              <span className="ml-2 text-muted">
                {businesses.filter((b) => b.industry === industry).length}
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {businesses.map((business) => {
            const owner = getMember(business.owner);

            return (
              <li key={business.name}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-45px_rgba(14,19,18,0.7)] sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-700 uppercase">
                        {business.industry}
                      </p>
                      <h2 className="mt-2 font-display text-xl leading-snug font-semibold">
                        {business.name}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-muted">
                      Since {business.since}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {business.about}
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-sand/70 p-3.5">
                      <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
                        City
                      </dt>
                      <dd className="mt-1 font-semibold text-ink">
                        {business.city}
                      </dd>
                    </div>
                    <div className="rounded-2xl bg-sand/70 p-3.5">
                      <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
                        Staff
                      </dt>
                      <dd className="mt-1 font-semibold text-ink">
                        {business.staff}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/8 pt-4">
                    {owner ? (
                      <Link
                        href={`/members/${owner.slug}`}
                        className="flex min-w-0 items-center gap-3"
                      >
                        <Avatar member={owner} size="sm" />
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold transition-colors group-hover:text-brand-700">
                            {owner.name}
                          </span>
                          <span className="block truncate text-xs text-muted">
                            Owner
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <span className="text-sm text-muted">
                        Family-owned
                      </span>
                    )}
                    <a
                      href={`mailto:${business.email}`}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-700"
                    >
                      <Icon name="mail" size={15} />
                      Enquire
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </PageSection>

      <PageSection tone="ink">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-marigold-300"
              >
                List your business
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-marigold-300 hover:text-marigold-300"
              >
                Sponsors of the parivar
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cream/12 bg-cream/5 p-7">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-marigold-300 uppercase">
              The family trade rule
            </p>
            <p className="mt-4 font-display text-xl leading-snug font-semibold text-cream">
              Deal inside the family first. If a member cannot supply it, go
              outside — but tell them why.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Written into the samiti minutes of 1991 and quoted at every AGM
              since, usually by whoever lost the last order.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
