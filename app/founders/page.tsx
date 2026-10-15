import type { Metadata } from "next";
import Link from "next/link";
import { founders, getMember } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Avatar } from "@/components/member-card";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "પાયાના શિલ્પીઓ — The Founders",
  description:
    "The eight people who laid the foundation of Samast Mangroliya Parivar — from Bapaji's field in 1931 to the trust deed of 2004.",
  alternates: { canonical: "/founders" },
};

export default function FoundersPage() {
  return (
    <>
      <PageHero
        title="પાયાના શિલ્પીઓ"
        crumbs={[{ label: "પાયાના શિલ્પીઓ" }]}
      />

      <PageSection>
        

        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {founders.map((founder, index) => {
            const member = getMember(founder.slug);
            if (!member) return null;

            return (
              <li key={founder.slug}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-45px_rgba(14,19,18,0.7)] sm:p-7">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-500 via-brand-400 to-marigold-400 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex items-start gap-5">
                    <span className="relative">
                      <Avatar member={member} size="lg" />
                      <span className="absolute -top-2 -left-2 grid h-7 w-7 place-items-center rounded-full bg-brand-600 font-display text-[11px] font-semibold text-cream">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
                        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-800">
                          {founder.titleGu}
                        </span>
                        <span className="text-muted">Est. {founder.year}</span>
                      </div>
                      <h2 className="mt-2.5 font-display text-xl leading-snug font-semibold">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-sm text-muted">
                        {member.role} · {member.city}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-ink/75">
                    <span className="font-semibold text-ink">
                      {founder.title}.
                    </span>{" "}
                    {founder.contribution}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/8 pt-4">
                    <span className="text-xs text-muted">
                      {member.profession}
                    </span>
                    <Link
                      href={`/members/${member.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                    >
                      Profile
                      <Icon
                        name="arrow-right"
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </PageSection>

      <PageSection tone="sand" className="border-t border-ink/8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/committee"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
              >
                Meet the samiti
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold transition-colors hover:bg-cream"
              >
                Propose a name
              </Link>
            </div>
          </div>

          <blockquote className="rounded-3xl bg-sand p-7 text-ink border border-ink/10">
            <Icon name="quote" size={22} className="text-marigold-600" />
            <p className="mt-4 font-display text-xl leading-snug font-semibold">
              A family which does not know its own history will one day have to
              be introduced to itself.
            </p>
            <footer className="mt-5 border-t border-ink/12 pt-4 text-sm text-ink/60">
              Shri Bhikhabhai Kalidas Mangroliya, 1931–2014
            </footer>
          </blockquote>
        </div>

        <div className="mt-10">
          <TextLink href="/about">Read the family story</TextLink>
        </div>
      </PageSection>
    </>
  );
}
