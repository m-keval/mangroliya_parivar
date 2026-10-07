import Link from "next/link";
import { site } from "@/lib/data";
import { Icon } from "@/components/icon";
import { LogoMark } from "@/components/logo";

/**
 * The thirteen modules of the site, grouped the way the family portal groups
 * them. Gujarati label first, English underneath for guests.
 */
const columns = [
  {
    title: "પરિવાર",
    subtitle: "The family",
    links: [
      { label: "અમારો પરિચય", href: "/about", en: "Our introduction" },
      { label: "ગામની યાદી", href: "/village", en: "Village directory" },
      { label: "પાયાના શિલ્પીઓ", href: "/founders", en: "The founders" },
      { label: "મુખ્ય સમિતિ", href: "/committee", en: "Main committee" },
    ],
  },
  {
    title: "સહયોગ",
    subtitle: "Support",
    links: [
      { label: "દાતા", href: "/donors", en: "Donors" },
      { label: "પ્રાયોજક", href: "/sponsors", en: "Sponsors" },
      { label: "ગેલેરી", href: "/gallery", en: "Gallery" },
      { label: "સમાચાર", href: "/news", en: "News" },
    ],
  },
  {
    title: "વ્યવસાય",
    subtitle: "Work & records",
    links: [
      { label: "બિસનેશ", href: "/business", en: "Business directory" },
      { label: "નોકરી", href: "/jobs", en: "Jobs" },
      { label: "ડોઉનલોડ", href: "/downloads", en: "Downloads" },
      { label: "સંપર્ક", href: "/contact", en: "Contact" },
    ],
  },
];

const moreLinks = [
  { label: "Member directory", href: "/members" },
  { label: "Upcoming events", href: "/events" },
  { label: "Notices", href: "/notices" },
];

/** Evaluated once at build time so every prerendered page stays stable. */
const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden className="glow-dots pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={`${site.name} — home`}
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cream p-1.5">
                <LogoMark className="h-full w-full" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold">
                  {site.name}
                </span>
                <span className="mt-1 text-[13px] font-semibold text-marigold-300">
                  {site.nameGu} · {site.chapter}
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              Four generations, three branches, one family register that began
              as a cloth-bound ledger and now lives online. This is where the
              parivar keeps its people, its business and its memory.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-cream/70">
              <li className="flex gap-3">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-brand-300" />
                <span>
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-cream"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-brand-300" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-cream"
                >
                  {site.phone}
                </a>
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex rounded-full border border-cream/15 px-3.5 py-1.5 text-xs text-cream/70 transition-colors hover:border-brand-400 hover:bg-brand-500/20 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.subtitle}>
              <h3 className="flex items-baseline gap-2">
                <span className="text-base font-semibold text-marigold-300">
                  {col.title}
                </span>
                <span className="text-[11px] tracking-[0.18em] text-cream/45 uppercase">
                  {col.subtitle}
                </span>
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between gap-3 text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      <span>{link.label}</span>
                      <span className="text-[11px] text-cream/35 transition-colors group-hover:text-brand-300">
                        {link.en}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/12 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName} · {site.nameGu} · Est. {site.founded},{" "}
            {site.chapter}
          </p>
          <p className="flex items-center gap-2">
            <Icon name="sparkle" size={14} className="text-marigold-300" />
            Server-rendered with Next.js · Designed for the parivar
          </p>
        </div>
      </div>
    </footer>
  );
}
