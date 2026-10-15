import Link from "next/link";
import { navLinks, site } from "@/lib/data";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-cream px-6 py-32 text-ink border-y border-ink/10">
      <div
        aria-hidden
        className="glow-dots absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.3em] text-marigold-600 uppercase">
          Page nathi mali
        </p>
        <p className="mt-8 font-display text-8xl leading-none font-semibold sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 font-display text-3xl leading-tight font-semibold sm:text-4xl">
          This page is not in the register
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink/65">
          Either someone moved it or nobody has written it down yet. The{" "}
          {site.name} keeps its records carefully — try one of these instead.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
          >
            <Icon name="arrow-left" size={16} />
            Back home
          </Link>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
          >
            Member directory
          </Link>
        </div>

        <nav className="mt-14 border-t border-ink/12 pt-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-ink/45 uppercase">
            Or jump straight to
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/75 transition-colors hover:border-brand-400 hover:bg-brand-500/20 hover:text-ink"
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
