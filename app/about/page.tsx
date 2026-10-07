import type { Metadata } from "next";
import Image from "next/image";
import { members, site, stats, timeline, values } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { MemberCard } from "@/components/member-card";

export const metadata: Metadata = {
  title: "Hamari Kahani — Our Story",
  description:
    "How a family ledger from 1931 became Samast Mangroliya Parivar, founded in Surat in 1991: our story, our values and the milestones that shaped us.",
  alternates: { canonical: "/about" },
};

const trustees = [
  "dineshbhai-bhikhabhai",
  "nilesh-rameshbhai",
  "bhavna-desai",
  "priya-dineshbhai",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A family that kept writing things down"
        crumbs={[{ label: "Hamari Kahani" }]}
      />

      {/* Story */}
      <PageSection>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-ink/80 sm:text-lg">
            <p className="font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl">
              Bapaji used to say that a family which does not know its own
              history will one day have to be introduced to itself.
            </p>
            <p>
              Shri Bhikhabhai Kalidas Mangroliya was born in {site.familySince}{" "}
              in the fields outside Mangrol. He kept no diary, but Savitriben Ba
              kept everything else: births, marriages, the addresses of cousins
              who left for the cities, the fees paid for whom. By the time the
              ledger reached its third volume it was the family&rsquo;s most
              valuable object — more than the house, more than the land.
            </p>
            <p>
              Three brothers moved south through the seventies and eighties —
              Ahmedabad, Rajkot, Mumbai — and the family scattered across
              Gujarat and beyond. Every Diwali they came back. Every Diwali
              somebody had a child nobody had heard of.
            </p>
            <p>
              In {site.founded}, in a hall in {site.chapter}, the branches
              agreed to stop relying on memory.{" "}
              <strong className="font-semibold text-ink">
                Samast Mangroliya Parivar
              </strong>{" "}
              — the whole family, all branches — was formally constituted, with
              the emblem of joined hands and the ring of people that still
              stands for us today.
            </p>
            <p>
              What you are reading is the fourth volume of that ledger: searchable,
              translatable, and available to a cousin in Bengaluru at three in
              the morning. The cloth binding is gone. The habit is not.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink/5">
              <Image
                src="https://picsum.photos/seed/mangroliya-ledger/800/640"
                alt="The family ledger photographed page by page"
                width={800}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink/5">
                <Image
                  src="https://picsum.photos/seed/mangroliya-fields/500/500"
                  alt="The fields outside Mangrol"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid place-items-center rounded-3xl bg-brand-700 p-6 text-center text-cream">
                <span className="font-display text-5xl font-semibold">
                  {site.founded}
                </span>
                <span className="mt-2 text-[11px] tracking-[0.18em] text-cream/70 uppercase">
                  સ્થાપના · {site.chapter}
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Values */}
      <PageSection tone="sand" className="border-y border-ink/8">
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-brand-300"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-cream">
                  <Icon name={value.icon} size={20} />
                </span>
                <span className="font-display text-3xl font-semibold text-ink/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {value.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Timeline */}
      <PageSection>
        
        <ol className="mt-14 grid gap-8 lg:grid-cols-2">
          {timeline.map((item, i) => (
            <li
              key={item.year}
              className="group relative flex gap-6 rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:border-brand-300 hover:shadow-[0_26px_54px_-40px_rgba(14,19,18,0.6)]"
            >
              <div className="flex flex-col items-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink font-display text-sm font-semibold text-marigold-300 transition-colors group-hover:bg-brand-700">
                  {item.year}
                </span>
                {i < timeline.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-2 w-px flex-1 bg-linear-to-b from-ink/20 to-transparent"
                  />
                )}
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-700 uppercase">
                  {String(i + 1).padStart(2, "0")} — Milestone
                </p>
                <h3 className="mt-2 font-display text-xl leading-snug font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* Trustees */}
      <PageSection tone="sand" className="border-t border-ink/8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          
          <TextLink href="/members">Meet everyone</TextLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustees.map((slug) => {
            const member = members.find((m) => m.slug === slug);
            return member ? <MemberCard key={slug} member={member} /> : null;
          })}
        </div>

        {/* Stats band */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-ink p-8 text-cream sm:p-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-semibold text-marigold-300">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.16em] text-cream/55 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
