import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { committee, committeeTerm, getMember, portraitUrl } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "મુખ્ય સમિતિ — Main Committee",
  description:
    "The Samast Mangroliya Parivar samiti for the term 2025 – 2028: ten posts, direct phone lines, duties and the rules it works by.",
  alternates: { canonical: "/committee" },
};

function telHref(phone: string) {
  return `tel:+91${phone.replace(/\D/g, "")}`;
}

export default function CommitteePage() {
  const categories = [
    "Karobari Samiti",
    "Yuva Samiti",
    "Mahila Samiti",
    "Vividh Samiti",
    "Salahkar Samiti",
  ] as const;

  return (
    <>
      <PageHero
        title="The samiti that runs the parivar"
        crumbs={[{ label: "મુખ્ય સમિતિ" }]}
      />

      {/* The board */}
      <PageSection tone="ink">
        <div className="flex flex-wrap items-end justify-between gap-6">
          
          <TextLink href="/contact" tone="light">
            Write to the secretary
          </TextLink>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          {categories.map((category) => {
            const group = committee.filter((post) => post.category === category);
            if (group.length === 0) return null;

            return (
              <div key={category}>
                <span className="inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-6">
                  {category}
                </span>
                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.map((post) => {
                    const member = getMember(post.slug);
                    if (!member) return null;

                    return (
                      <li key={post.post} className="group relative">
                        <Link href={`/members/${member.slug}`} className="block h-full">
                          <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-gray-300">
                            <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-gray-100">
                              <Image
                                src={portraitUrl(member.slug, 400)}
                                alt={member.name}
                                width={400}
                                height={500}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <div className="flex flex-1 flex-col items-center justify-center p-5 text-center">
                              <h3 className="font-sans text-[15px] font-semibold text-gray-900">
                                {member.name} - {member.city}
                              </h3>
                              <p className="mt-1.5 text-[13px] font-medium text-[#8B1D24]">
                                {post.post}
                              </p>
                            </div>
                          </article>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* How it works */}
      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          
          <ul className="space-y-5">
            {[
              {
                icon: "calendar" as const,
                title: "It meets four times a year",
                text: "January, April, August and December at Parivar Bhavan. Minutes go to every household within a week.",
              },
              {
                icon: "shield" as const,
                title: "It is elected, never appointed",
                text: "Nine of the ten posts go to a show of hands at the January general meeting. Anyone may stand.",
              },
              {
                icon: "book" as const,
                title: "Its accounts are public to members",
                text: "Audited every Diwali by the family's own auditors and published before Uttarayan, without exception.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-5 rounded-2xl border border-ink/10 bg-sand/60 p-5 transition-colors hover:border-brand-300"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-cream">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Write to the secretary
            <Icon name="mail" size={16} />
          </Link>
          <Link
            href="/downloads"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-sand"
          >
            Constitution &amp; forms
          </Link>
          <TextLink href="/founders">The founders</TextLink>
        </div>
      </PageSection>
    </>
  );
}
