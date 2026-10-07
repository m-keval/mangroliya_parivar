import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDate, news } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "સમાચાર — News from the Parivar",
  description:
    "News, milestones and announcements from the Samast Mangroliya Parivar: Diwali Milan, scholarships, the archive and the samiti.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHero
        title="What the parivar is saying"
        crumbs={[{ label: "સમાચાર" }]}
      />

      <PageSection>
        {/* Featured */}
        <article className="group grid gap-8 overflow-hidden rounded-[2rem] border border-ink/10 bg-sand/60 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-ink px-3 py-1 font-semibold text-cream">
                Latest
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-800">
                {featured.tag}
              </span>
              <span className="text-muted">{formatDate(featured.date, "full")}</span>
            </div>

            <h2 className="mt-4 font-display text-2xl leading-tight font-semibold sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {featured.excerpt}
            </p>

            <ol className="mt-5 space-y-3">
              {featured.body.map((paragraph, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-400" />
                  {paragraph}
                </li>
              ))}
            </ol>

            <p className="mt-5 text-xs text-muted">
              Posted by the {featured.author}
            </p>
          </div>

          <div className="order-1 overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 lg:order-2">
            <Image
              src={`https://picsum.photos/seed/${featured.seed}/900/700`}
              alt={featured.title}
              width={900}
              height={700}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72 lg:h-80"
            />
          </div>
        </article>

        {/* Rest */}
        <div className="mt-14">
          

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <article
                key={item.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_30px_60px_-45px_rgba(14,19,18,0.7)]"
              >
                <div className="relative h-40 overflow-hidden bg-ink/5">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/700/440`}
                    alt={item.title}
                    width={700}
                    height={440}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-muted">
                    {formatDate(item.date, "full")}
                  </p>
                  <h3 className="mt-2 font-display text-lg leading-snug font-semibold transition-colors group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {item.excerpt}
                  </p>
                  <p className="mt-auto flex items-center justify-between border-t border-ink/8 pt-4 text-xs text-muted">
                    <span>{item.author}</span>
                    <span className="font-semibold text-brand-700">
                      {item.body.length} paragraphs
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Notices strip */}
        <div className="mt-14 flex flex-col gap-4 rounded-3xl border border-ink/10 bg-ink p-7 text-cream sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-marigold-300 uppercase">
              Official notices
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
              Longer, formal notices from the trust
            </h2>
            <p className="mt-2 text-sm text-cream/65">
              Posted with a date, an author and a signature — the record the
              family falls back on when memories differ.
            </p>
          </div>
          <Link
            href="/notices"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-marigold-300"
          >
            Open the notice board
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          <TextLink href="/events">Upcoming gatherings</TextLink>
          <TextLink href="/downloads">Press &amp; forms</TextLink>
        </div>
      </PageSection>
    </>
  );
}
