"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { primaryNav, site } from "@/lib/data";
import { Icon } from "@/components/icon";
import { Wordmark } from "@/components/logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const renderNavItems = (items: typeof primaryNav) =>
    items.map((item) => {
      const active = "href" in item ? isActive(item.href) : false;

      if ("children" in item) {
        return (
          <div key={item.label} className="group relative">
            <button
              className="relative flex w-full items-center justify-between px-4 py-3 text-base font-medium text-ink/70 hover:text-ink cursor-default"
            >
              <span className="relative z-10">{item.label}</span>
              <Icon name="chevron-down" size={16} className="relative z-10 ml-2 shrink-0 text-ink/50" />
            </button>
            <div className="absolute left-0 top-full hidden min-w-[200px] rounded-xl border border-ink/10 bg-white py-2 shadow-lg z-20 group-hover:block">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    isActive(child.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink/80 hover:bg-sand"
                  }`}
                >
                  <span className="font-medium">{child.label}</span>
                  <span className="block text-[11px] text-ink/40">{child.en}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      }
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={`relative px-4 py-2 text-base font-medium transition-colors ${
            active ? "text-brand-700" : "text-ink/70 hover:text-ink"
          }`}
        >
          {active && (
            <motion.div
              layoutId="desktop-nav-pill"
              className="absolute inset-0 z-0 rounded-full bg-ink/5"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </Link>
      );
    });

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-white/90 shadow-[0_10px_30px_-24px_rgba(14,19,18,0.08)] backdrop-blur-xl"
            : "border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >


        {/* Main header */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5 sm:py-3">
          <div className="flex-shrink-0">
            <Wordmark />
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex md:items-center md:gap-1"
            aria-label="Main navigation"
          >
            <LayoutGroup>
              {renderNavItems(primaryNav)}
            </LayoutGroup>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">

            <Link
              href="/contact"
              className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
            >
              જોડાઓ
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/12 bg-white text-ink transition-colors hover:bg-sand"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-ink/10 bg-white md:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4" aria-label="Mobile">
            {primaryNav.map((item) => {
              if ("children" in item) {
                return (
                  <details key={item.label} className="group">
                    <summary className="flex items-center justify-between px-4 py-3 text-base font-medium text-ink/80 hover:bg-sand list-none">
                      {item.label}
                      <Icon name="chevron-down" size={16} className="ml-2 shrink-0 text-ink/50" />
                    </summary>
                    <div className="grid gap-1 px-4 pb-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center justify-between px-4 py-3 text-base font-medium transition-colors ${
                            isActive(child.href)
                              ? "bg-brand-50 text-brand-700"
                              : "text-ink/80 hover:bg-sand"
                          }`}
                        >
                          <span>{child.label}</span>
                          <span className="text-[11px] text-ink/40">{child.en}</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink/80 hover:bg-sand"
                  }`}
                >
                  {item.label}
                  <Icon name="arrow-right" size={17} />
                </Link>
              );
            })}

          </nav>
        </div>
      </div>
    </header>
  );
}