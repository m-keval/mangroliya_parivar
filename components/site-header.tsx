"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { Icon } from "@/components/icon";
import { Wordmark } from "@/components/logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes (state adjusted during
  // render, so no setState inside an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement strip */}
      <div className="hidden bg-ink text-cream md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[13px]">
          <p className="flex items-center gap-2 text-cream/75">
            <Icon name="calendar" size={15} />
            <span>
              <span className="text-marigold-300">Next up:</span> Diwali Milan
              — 24 October 2026, Surat
            </span>
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/news"
              className="text-cream/70 transition-colors hover:text-marigold-300"
            >
              સમાચાર
            </Link>
            <Link
              href="/downloads"
              className="text-cream/70 transition-colors hover:text-marigold-300"
            >
              ડોઉનલોડ
            </Link>
            <Link
              href="/contact"
              className="text-cream/70 transition-colors hover:text-marigold-300"
            >
              સંપર્ક
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-cream/85 shadow-[0_10px_30px_-24px_rgba(14,19,18,0.9)] backdrop-blur-xl"
            : "border-transparent bg-cream/70 backdrop-blur-md"
        }`}
      >
        {/* Logo row */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Wordmark />

          <div className="flex items-center gap-2">
            <Link
              href="/members"
              className="hidden rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand-400 hover:text-brand-700 sm:inline-flex"
            >
              Directory
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-brand-700 md:inline-flex"
            >
              જોડાઓ
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/12 bg-cream text-ink transition-colors hover:bg-sand lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Module row — all thirteen modules, desktop */}
        <div className="hidden border-t border-ink/8 lg:block">
          <nav
            className="mx-auto flex max-w-7xl items-stretch justify-between gap-1 px-4"
            aria-label="Main"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-2.5 py-3 text-[15px] font-medium whitespace-nowrap transition-colors ${
                    active
                      ? "text-brand-700"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-2.5 bottom-1.5 h-0.5 origin-left bg-brand-600 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-ink/10 bg-cream lg:hidden"
        >
          <nav
            className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink/80 hover:bg-sand"
                  }`}
                >
                  {link.label}
                  <Icon name="arrow-right" size={17} />
                </Link>
              );
            })}
            <Link
              href="/members"
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Member directory
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
