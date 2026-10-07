import type { Metadata } from "next";
import Link from "next/link";
import { villages } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Village List",
  description: "The villages and towns the Samast Mangroliya Parivar comes from.",
  alternates: { canonical: "/village" },
};

export default function VillagePage() {
  return (
    <>
      <PageHero
        title="Village List"
        crumbs={[{ label: "Village List" }]}
      />

      <PageSection>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {villages.map((village) => (
            <div
              key={village.slug}
              className="flex items-center justify-center rounded-2xl border border-ink/10 bg-cream p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <h5 className="font-display text-lg font-bold text-brand-700">
                {village.name}
              </h5>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="sand" className="border-t border-ink/8">
        <div className="flex flex-col gap-4 rounded-3xl border border-ink/10 bg-cream p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">
              Is your village missing from the list?
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              Add a place, a contact and the families that trace back to it —
              the trust publishes the correction in the January edition.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Request an addition
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="mt-8">
          <TextLink href="/members">Full member directory</TextLink>
        </div>
      </PageSection>
    </>
  );
}
