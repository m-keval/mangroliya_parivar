import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icon";
import { Eyebrow } from "@/components/section-heading";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-cream/60">
      <Link href="/" className="transition-colors hover:text-cream">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden className="text-cream/30">
            /
          </span>
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-cream">
              {item.label}
            </Link>
          ) : (
            <span className="text-cream">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/**
 * The dark, gradient-washed banner used at the top of every inner page.
 * Everything here is static markup, so it ships in the prerendered shell.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="glow-dots pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-24 h-80 w-80 rounded-full bg-brand-600/30 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-32 h-72 w-72 rounded-full bg-marigold-500/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <Breadcrumbs items={crumbs} />
        <div className="mt-5 max-w-3xl animate-fade-up">
          {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
          <h1 className={`font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl ${eyebrow ? "mt-4" : ""}`}>
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageSection({
  children,
  className = "",
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sand" | "ink";
}) {
  const bg =
    tone === "sand"
      ? "bg-sand"
      : tone === "ink"
        ? "bg-ink text-cream"
        : "bg-cream";
  return (
    <section className={`relative ${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">{children}</div>
    </section>
  );
}

export function TextLink({
  href,
  children,
  tone = "brand",
}: {
  href: string;
  children: ReactNode;
  tone?: "brand" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold ${
        tone === "light" ? "text-marigold-300" : "text-brand-700"
      }`}
    >
      {children}
      <Icon
        name="arrow-right"
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
