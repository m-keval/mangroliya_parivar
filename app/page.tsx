import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  events,
  gallery,
  notices,
  site,
  values,
  news,
} from "@/lib/data";
import { Icon } from "@/components/icon";
import { EventCard } from "@/components/event-card";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { PageSection, TextLink } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "સમસ્ત માંગરોળીયા પરિવાર — એક પરિવાર · એક ઓળખ",
  description:
    "સમસ્ત માંગરોળીયા પરિવાર નો ઓનલાઇન ઘર: ડિરેક્ટરી, ઇવેન્ટ્સ, નોતિસ અને પરિવાર આર્કাইવ — સ્થાપના 1991.",
  alternates: { canonical: "/" },
};

const ticker = [
  "સંસ્કાર",
  "એકતા",
  "શિક્ષા",
  "સેવા",
  "એક પરિવાર · એક ઓળખ",
  "માંગરોલ → અમદાવાદ → રાજકોટ → મુંબઈ",
  "1931 થી",
];

const upcoming = events.slice(0, 3);
const latestNotices = notices.slice(0, 3);
const photoStrip = gallery.slice(0, 6);

const homeVillages = [
  { name: "માંગરોલ", nameEn: "Mangrol", district: "કચ્છ / Kutch" },
  { name: "રાપર", nameEn: "Rapar", district: "કચ્છ / Kutch" },
  { name: "અંજાર", nameEn: "Anjar", district: "કચ્છ / Kutch" },
  { name: "આદિપુર", nameEn: "Adipur", district: "કચ્છ / Kutch" },
  { name: "ભુજ", nameEn: "Bhuj", district: "કચ્છ / Kutch" },
  { name: "સુરત", nameEn: "Surat", district: "દક્ષિણ ગુજરાત / South Gujarat" },
];

const homeStats = [
  { value: "645", label: "પરિવાર / Families" },
  { value: "3590", label: "સભ્યો / Members" },
  { value: "22+", label: "ગામ / Villages" },
  { value: "35", label: "વર્ષો / Years" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero — Devotional banner                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-cream border-b border-ink/10">
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-10">
          <div className="text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-sand border border-ink/10 mb-6">
              <Image
                src="/logo.png"
                alt={site.name}
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>

            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              {site.name}
            </h1>

            <div className="mt-6 max-w-3xl mx-auto text-center text-ink/80 leading-relaxed">
              <p className="text-base sm:text-lg">
                આઈ શ્રી ગૌરી સત્યાય માતાજી · જય સુરાપુરા દાદા ·  આઈ શ્રી ખોડિયાર માઁ
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 bg-white px-8 py-4 text-base font-semibold text-ink transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700"
              >
                અમારો પરિચય / Our Introduction
                <Icon name="arrow-right" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Marquee Ticker                                                    */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative overflow-hidden border-y border-ink/10 bg-marigold-50 py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-10 text-[12px] font-semibold tracking-[0.28em] text-ink/80 uppercase"
            >
              {word}
              <span aria-hidden className="text-brand-600">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Stats Cards                                                       */}
      {/* ---------------------------------------------------------------- */}
      <PageSection className="py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 text-center transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_40px_-20px_rgba(14,19,18,0.15)]"
            >
              <p className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-brand-700">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[13px] font-semibold tracking-wider text-ink/70 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ---------------------------------------------------------------- */}
      {/* Blog & News Section                                               */}
      {/* ---------------------------------------------------------------- */}
      <PageSection className="py-16 sm:py-24 bg-sand border-t border-ink/10">
        <SectionHeading
          eyebrow="Latest Updates"
          title="સમાચાર અને બ્લોગ / News & Blog"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex flex-col justify-between bg-white rounded-[2rem] p-6 md:p-8 border border-ink/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_-12px_rgba(123,30,30,0.15)] hover:-translate-y-1 hover:border-brand-200"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-[11px] font-bold tracking-widest uppercase">
                    {item.tag}
                  </span>
                  <span className="text-ink/50 text-[13px] font-semibold">
                    {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-display text-[20px] font-bold text-ink leading-tight mb-4 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink/60 text-[14.5px] font-medium leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-5">
                <span className="text-[13px] font-bold tracking-wide text-ink/70">
                  {item.author}
                </span>
                <div className="w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center text-ink/40 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Icon name="arrow-right" size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-7 py-3.5 text-[14.5px] font-bold text-ink shadow-sm transition-all hover:border-brand-700 hover:bg-brand-700 hover:text-white hover:shadow-md"
          >
            બધા સમાચાર જુઓ / View all news
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </PageSection>

    </>
  );
}