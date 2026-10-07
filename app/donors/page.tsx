import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  donorTiers,
  donors,
  getMember,
  portraitUrl,
  type DonorTier,
} from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "દાતા — Donors of the Parivar",
  description:
    "The donors who have funded the Mangrol courtyard hall, the scholarship endowment, the Rapar well and the family health camp.",
  alternates: { canonical: "/donors" },
};

const tierStyles: Record<DonorTier, { badge: string; icon: string }> = {
  Diamond: {
    badge: "bg-brand-700 text-cream",
    icon: "text-brand-600",
  },
  Gold: {
    badge: "bg-marigold-200 text-marigold-600",
    icon: "text-marigold-600",
  },
  Silver: {
    badge: "bg-sand text-muted",
    icon: "text-muted",
  },
};

/** Coloured stripe under each portrait, so the tier reads at a glance. */
const donorStripe: Record<DonorTier, string> = {
  Diamond: "bg-brand-600",
  Gold: "bg-marigold-400",
  Silver: "bg-cream/70",
};

export default function DonorsPage() {
  const total = donors.length;

  return (
    <>
      <PageHero
        title="Those who gave, and what it built"
        crumbs={[{ label: "દાતા" }]}
      />

      {/* Tiers */}
      <PageSection>
        

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {donorTiers.map((tier) => (
            <div
              key={tier.tier}
              className="rounded-3xl border border-ink/10 bg-sand/70 p-6"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tierStyles[tier.tier].badge}`}
              >
                {tier.labelGu} · {tier.tier}
              </span>
              <p className="mt-4 font-display text-xl font-semibold">
                {tier.range}
              </p>
              <p className="mt-2 text-sm text-muted">
                {donors.filter((d) => d.tier === tier.tier).length} donors on
                this page
              </p>
            </div>
          ))}
        </div>

        {/* Donor list */}
        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {donors.map((donor) => {
            const member = donor.slug ? getMember(donor.slug) : undefined;

            return (
              <li
                key={`${donor.name}-${donor.year}`}
                className="flex flex-col rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-brand-300 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  {member ? (
                    <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-sand ring-1 ring-black/10">
                      <Image
                        src={portraitUrl(member.slug, 200)}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover object-top saturate-[0.92] transition-all duration-500 hover:scale-105 hover:saturate-100"
                      />
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 bottom-0 h-1.5 ${donorStripe[donor.tier]}`}
                      />
                    </span>
                  ) : (
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-sand font-display text-lg font-semibold text-brand-700">
                      <Icon name="heart" size={22} className={tierStyles[donor.tier].icon} />
                    </span>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="font-display text-lg leading-snug font-semibold">
                        {member ? (
                          <Link
                            href={`/members/${member.slug}`}
                            className="transition-colors hover:text-brand-700"
                          >
                            {donor.name}
                          </Link>
                        ) : (
                          donor.name
                        )}
                      </h2>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tierStyles[donor.tier].badge}`}
                      >
                        {donor.tier}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted">
                      {donor.cause} · {donor.year}
                    </p>
                  </div>
                </div>

                <p className="mt-4 font-display text-3xl font-semibold text-brand-700">
                  {donor.amount}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {donor.note}
                </p>
              </li>
            );
          })}
        </ul>
      </PageSection>

      {/* CTA */}
      <PageSection tone="ink">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-marigold-300"
              >
                Talk to the treasurer
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href="/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-marigold-300 hover:text-marigold-300"
              >
                Last audited accounts
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cream/12 bg-cream/5 p-7">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-marigold-300 uppercase">
              Where it went, last year
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              {[
                ["Scholarships", "38 students"],
                ["Health camp, Mangrol", "2 camps, 410 patients"],
                ["Bhavan maintenance", "Varachha Road"],
                ["Archive digitisation", "40 hours of tape"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-cream/10 pb-3"
                >
                  <span className="text-cream/75">{label}</span>
                  <span className="font-semibold text-cream">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <TextLink href="/committee" tone="light">
            Who handles the money
          </TextLink>
        </div>
      </PageSection>
    </>
  );
}
