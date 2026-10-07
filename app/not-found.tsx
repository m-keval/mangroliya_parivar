import Link from "next/link";
import { navLinks, site } from "@/lib/data";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-ink px-6 py-32 text-cream">
      <div
        aria-hidden
        className="glow-dots absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.3em] text-marigold-300 uppercase">
          Page nathi mali
        </p>
        <p className="mt-8 font-display text-8xl leading-none font-semibold sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 font-display text-3xl leading-tight font-semibold sm:text-4xl">
          This page is not in the register
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/65">
          Either someone moved it or nobody has written it down yet. The{" "}
          {site.name} keeps its records carefully — try one of these instead.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-marigold-300"
          >
            <Icon name="arrow-left" size={16} />
            Back home
          </Link>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-marigold-300 hover:text-marigold-300"
          >
            Member directory
          </Link>
        </div>

        <nav className="mt-14 border-t border-cream/12 pt-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-cream/45 uppercase">
            Or jump straight to
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/75 transition-colors hover:border-brand-400 hover:bg-brand-500/20 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
