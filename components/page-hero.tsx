import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icon";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/70">
      <Link href="/" className="transition-colors hover:text-marigold-300">
        હોમ
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span aria-hidden className="text-marigold-400">
            ›
          </span>
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-marigold-300">
              {item.label}
            </Link>
          ) : (
            <span className="text-marigold-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/**
 * The maroon title band used at the top of every inner page.
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
    <section className="relative overflow-hidden border-b-4 border-marigold-500 bg-brand-800 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgb(212_181_74/0.6)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-4 text-center sm:py-5">
        {eyebrow && (
          <p className="font-display text-xs font-semibold tracking-[0.24em] text-marigold-300 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-0.5 font-display text-xl font-bold text-balance sm:text-2xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-1 max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm">
            {description}
          </p>
        )}
        <div className="mt-2">
          <Breadcrumbs items={crumbs} />
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
        ? "bg-cream text-ink border-y border-ink/10"
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
        tone === "light" ? "text-brand-700" : "text-brand-700"
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
