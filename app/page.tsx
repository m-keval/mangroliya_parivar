import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  events,
  gallery,
  members,
  notices,
  site,
  stats,
  timeline,
  values,
} from "@/lib/data";
import { Icon } from "@/components/icon";
import { Avatar } from "@/components/member-card";
import { EventCard } from "@/components/event-card";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { PageSection, TextLink } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Samast Mangroliya Parivar, Surat — Ek Parivar, Ek Pehchaan",
  description:
    "The online home of Samast Mangroliya Parivar (સમસ્ત માંગરોલીયા પરિવાર), Surat: directory, events, notices and the family archive — established 1991.",
  alternates: { canonical: "/" },
};

const ticker = [
  "Sanskar",
  "Ekta",
  "Shiksha",
  "Seva",
  "Ek Parivar · Ek Pehchaan",
  "Mangrol → Ahmedabad → Rajkot → Mumbai",
  "Since 1931",
];

const featured = [
  members.find((m) => m.slug === "bhikhabhai-kalidas")!,
  members.find((m) => m.slug === "rameshbhai-bhikhabhai")!,
  members.find((m) => m.slug === "meenakshi-mehta")!,
  members.find((m) => m.slug === "bhavna-desai")!,
];

export default function HomePage() {
  const upcoming = events.slice(0, 3);
  const latestNotices = notices.slice(0, 3);
  const photoStrip = gallery.slice(0, 6);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="glow-dots pointer-events-none absolute inset-0 opacity-50"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-brand-600/35 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/3 h-[22rem] w-[22rem] rounded-full bg-marigold-500/20 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pt-16 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-28">
          <div className="stagger">
            <div
              className="animate-fade-up"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-marigold-300 uppercase backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-marigold-400" />
                સ્થાપના {site.founded} · {site.chapter} · {site.tagline}
              </span>
            </div>

            <h1
              className="mt-7 animate-fade-up font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.4rem]"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              Four generations.
              <br />
              <span className="bg-linear-to-r from-marigold-300 via-marigold-400 to-brand-300 bg-clip-text text-transparent">
                One family register.
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-cream/70 sm:text-lg"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              From a cloth-bound ledger kept in Mangrol to a directory the whole
              parivar can read — meet the people, the villages and the
              gatherings that hold us together.
            </p>

            <div
              className="mt-9 flex flex-wrap animate-fade-up gap-3"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <Link
                href="/members"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-marigold-300"
              >
                Explore the directory
                <Icon
                  name="arrow-right"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/committee"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:border-brand-300 hover:bg-brand-500/15"
              >
                <Icon name="users" size={16} />
                Meet the samiti
              </Link>
            </div>

            <dl
              className="mt-12 grid animate-fade-up grid-cols-2 gap-x-6 gap-y-7 border-t border-cream/12 pt-8 sm:grid-cols-4"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl leading-none font-semibold text-marigold-300">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[11px] leading-snug tracking-[0.16em] text-cream/55 uppercase">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Directory preview collage */}
          <div className="relative animate-scale-in">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-600/25 to-marigold-500/10 blur-2xl"
            />
            <div className="glass relative rounded-3xl p-5 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] sm:p-6">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-cream/60 uppercase">
                  From the register
                </p>
                <span className="rounded-full bg-brand-500/20 px-3 py-1 text-[11px] font-semibold text-brand-200">
                  {members.length} on record
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {featured.map((member) => (
                  <li key={member.slug}>
                    <Link
                      href={`/members/${member.slug}`}
                      className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 px-4 py-3 transition-all hover:border-marigold-300/50 hover:bg-cream/10"
                    >
                      <Avatar member={member} size="md" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-cream">
                          {member.name}
                        </span>
                        <span className="block truncate text-xs text-cream/55">
                          Gen {member.generation} · {member.city}
                        </span>
                      </span>
                      <Icon
                        name="arrow-right"
                        size={16}
                        className="shrink-0 text-cream/30 transition-all group-hover:translate-x-1 group-hover:text-marigold-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-dashed border-cream/15 px-4 py-3">
                <span className="text-xs text-cream/60">
                  4 generations · {new Set(members.map((m) => m.city)).size}{" "}
                  cities
                </span>
                <Link
                  href="/members"
                  className="text-xs font-semibold text-marigold-300 transition-colors hover:text-cream"
                >
                  View all →
                </Link>
              </div>
            </div>

            <div className="glass absolute -top-6 -left-4 hidden animate-float rounded-2xl px-4 py-3 text-center sm:block">
              <span className="block font-display text-2xl leading-none font-semibold text-marigold-300">
                35
              </span>
              <span className="mt-1 block text-[10px] tracking-[0.18em] text-cream/60 uppercase">
                Years since 1991
              </span>
            </div>

            <div
              className="glass absolute -right-3 bottom-10 hidden animate-float rounded-2xl px-4 py-3 text-center sm:block"
              style={{ animationDelay: "1.4s" }}
            >
              <span className="block font-display text-2xl leading-none font-semibold text-brand-200">
                IV
              </span>
              <span className="mt-1 block text-[10px] tracking-[0.18em] text-cream/60 uppercase">
                Generations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Ticker                                                           */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative overflow-hidden border-y border-ink/10 bg-marigold-300 py-3.5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-10 text-[12px] font-semibold tracking-[0.28em] text-ink/80 uppercase"
            >
              {word}
              <span aria-hidden className="text-brand-700">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Story                                                            */}
      {/* ---------------------------------------------------------------- */}
      <PageSection>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-ink/10 bg-sand/60 p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/60"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-cream">
                    <Icon name={value.icon} size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <TextLink href="/about">Read the whole story</TextLink>
            </div>
          </div>

          {/* Heritage collage */}
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink/5">
                <Image
                  src="https://picsum.photos/seed/mangroliya-courtyard/700/900"
                  alt="The courtyard hall at Mangrol"
                  width={700}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-10 space-y-4">
                <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink/5">
                  <Image
                    src="https://picsum.photos/seed/mangroliya-elders/700/520"
                    alt="The second generation together"
                    width={700}
                    height={520}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="rounded-3xl bg-ink p-6 text-cream">
                  <Icon name="quote" size={22} className="text-marigold-300" />
                  <p className="mt-3 font-display text-lg leading-snug">
                    “Keep one chair free. Somebody always comes.”
                  </p>
                  <p className="mt-3 text-xs tracking-[0.16em] text-cream/55 uppercase">
                    Savitriben Ba, 1934–2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ---------------------------------------------------------------- */}
      {/* Events                                                           */}
      {/* ---------------------------------------------------------------- */}
      <PageSection>
        <div className="flex flex-wrap items-end justify-between gap-6">
          
          <TextLink href="/events">All gatherings</TextLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </PageSection>

      {/* ---------------------------------------------------------------- */}
      {/* Gallery strip                                                    */}
      {/* ---------------------------------------------------------------- */}
      <PageSection tone="ink">
        <div className="flex flex-wrap items-end justify-between gap-6">
          
          <TextLink tone="light" href="/gallery">
            Open the gallery
          </TextLink>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {photoStrip.map((photo) => (
            <figure
              key={photo.slug}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/5"
            >
              <Image
                src={`https://picsum.photos/seed/${photo.seed}/500/500`}
                alt={photo.title}
                width={500}
                height={500}
                className="h-40 w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 lg:h-52"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-ink via-ink/80 to-transparent p-3 text-xs font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.title}
                <span className="mt-0.5 block text-[10px] text-marigold-300">
                  {photo.year} · {photo.credit}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageSection>

      {/* ---------------------------------------------------------------- */}
      {/* Timeline teaser + notices                                        */}
      {/* ---------------------------------------------------------------- */}
      <PageSection tone="sand" className="border-y border-ink/8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            
            <ol className="mt-9 space-y-6 border-l border-ink/15 pl-6">
              {timeline.slice(-4).map((item) => (
                <li key={item.year} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-cream bg-brand-600"
                  />
                  <p className="font-display text-xl font-semibold text-brand-700">
                    {item.year}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <TextLink href="/about">The full timeline</TextLink>
            </div>
          </div>

          <div>
            
            <ul className="mt-9 space-y-4">
              {latestNotices.map((notice) => (
                <li key={notice.slug}>
                  <Link
                    href={`/notices/${notice.slug}`}
                    className="group flex flex-col gap-2 rounded-2xl border border-ink/10 bg-cream p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_24px_50px_-38px_rgba(14,19,18,0.7)]"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-800">
                        {notice.tag}
                      </span>
                      <span className="text-muted">{notice.author}</span>
                    </div>
                    <h3 className="font-display text-lg leading-snug font-semibold text-ink transition-colors group-hover:text-brand-700">
                      {notice.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {notice.excerpt}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-brand-700">
                      Read notice
                      <Icon
                        name="arrow-right"
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink href="/notices">All notices</TextLink>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-brand-700 text-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-marigold-400/30 blur-[100px]"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="light">Add your family</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-[2.6rem]">
              Is your name missing from the register?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
              Send the trust your details — a photo, a branch, a city — and your
              page joins the directory before the January print edition.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-marigold-300"
            >
              Join the directory
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Browse members
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
