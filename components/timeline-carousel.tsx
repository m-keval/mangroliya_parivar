"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { snehMilanYears } from "@/lib/data";
import { Icon } from "@/components/icon";

const total = snehMilanYears.length;
/** Scroll distance devoted to each year inside the pinned journey. */
const VH_PER_YEAR = 45;

export function TimelineCarousel() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  const outerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const jumpingRef = useRef(false);

  const goTo = useCallback((i: number) => {
    const outer = outerRef.current;
    if (!outer) return;
    const next = Math.max(0, Math.min(total - 1, i));
    const top = outer.getBoundingClientRect().top + window.scrollY;
    const scrollable = outer.offsetHeight - window.innerHeight;
    jumpingRef.current = true;
    activeRef.current = next;
    setActive(next);
    window.scrollTo({
      top: top + (next / (total - 1)) * scrollable,
      behavior: "smooth",
    });
    window.setTimeout(() => (jumpingRef.current = false), 650);
  }, []);

  // Page scroll drives the year — viewer stays pinned in the same place.
  // Discrete switch only: no per-frame style writes, so text can never get stuck blurred.
  // Commits are debounced so fast scrolls don't strobe through every year.
  useEffect(() => {
    let raf = 0;
    let pending: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      if (jumpingRef.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const outer = outerRef.current;
        if (!outer) return;
        const scrollable = outer.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const progressed = Math.min(
          Math.max(-outer.getBoundingClientRect().top, 0),
          scrollable,
        );
        const idx = Math.round((progressed / scrollable) * (total - 1));
        if (idx !== activeRef.current) {
          clearTimeout(pending);
          pending = setTimeout(() => {
            activeRef.current = idx;
            setActive(idx);
          }, 90);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(pending);
    };
  }, []);

  // Keep active year pill in view
  useEffect(() => {
    const pill = railRef.current?.children[active] as
      | HTMLElement
      | undefined;
    pill?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(activeRef.current + 1);
      if (e.key === "ArrowLeft") goTo(activeRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  const current = snehMilanYears[active];

  return (
    <div
      ref={outerRef}
      className="relative pt-6"
      style={{ height: `${total * VH_PER_YEAR}vh` }}
    >
      <div className="sticky top-[72px] sm:top-[84px] flex min-h-[calc(100vh-110px)] flex-col justify-center py-4">
        {/* Preload neighbours so the photo never pops in late */}
        {active < total - 1 && (
          <link rel="preload" as="image" href={snehMilanYears[active + 1].photo} />
        )}
        {active > 0 && (
          <link rel="preload" as="image" href={snehMilanYears[active - 1].photo} />
        )}

        {/* Pinned viewer — stays in the same place, year + image change on scroll */}
        <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ink text-cream shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex flex-col justify-center">
          {/* Per-year image — soft crossfade on switch */}
          <Image
            key={current.year}
            src={current.photo}
            alt={`${current.year} સ્નેહ મિલન`}
            fill
            sizes="100vw"
            className="object-cover opacity-40 animate-[fade-in_0.5s_ease_both]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="relative p-7 sm:p-12 lg:p-14">
            <div className="flex flex-wrap items-center justify-between gap-3 min-h-[2rem]">
              <p className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[12px] font-bold tracking-[0.2em] uppercase border border-cream/20">
                <Icon name="sparkle" size={14} />
                <span>{current.year} · {current.edition}મું સ્નેહ મિલન · {current.era}</span>
              </p>
              <p className="text-[13px] font-bold tracking-widest text-cream/70 tabular-nums">
                {active + 1} / {total}
              </p>
            </div>

            <div
              key={`content-${active}`}
              className="mt-8 flex flex-col lg:flex-row gap-8 lg:min-h-[24rem] animate-[fade-up_0.32s_cubic-bezier(0.16,1,0.3,1)_both]"
            >              <p className="font-display text-7xl sm:text-8xl font-bold tracking-tight leading-none tabular-nums shrink-0 lg:w-72">
                {current.year}
              </p>
              <div className="max-w-2xl flex-1 flex flex-col justify-center">
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug min-h-[2.5rem] sm:min-h-[3.5rem] line-clamp-2">
                  {current.title}
                </h3>
                <p className="mt-3 text-cream/75 text-base sm:text-lg leading-relaxed min-h-[10rem] sm:min-h-[12rem] line-clamp-6">
                  {current.text}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] font-semibold min-h-[2.5rem]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 border border-cream/20 px-3 py-1.5">
                    <Icon name="map-pin" size={14} />
                    {current.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 border border-cream/20 px-3 py-1.5">
                    <Icon name="users" size={14} />
                    {current.footfall}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 ${
                      current.highlight
                        ? "bg-marigold-500 text-white"
                        : "invisible"
                    }`}
                    aria-hidden={!current.highlight}
                  >
                    <Icon name="star" size={14} />
                    સીમાચિહ્ન વર્ષ
                  </span>
                </div>
              </div>
            </div>

            {/* arrows stay fixed — page scroll changes the year */}
            <div className="mt-7 flex items-center gap-4">
              <button
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Previous year"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-cream/10 border border-cream/20 hover:bg-cream/20 transition-all active:scale-95 disabled:opacity-30"
              >
                <Icon name="arrow-left" size={18} />
              </button>
              <button
                onClick={() => goTo(active + 1)}
                disabled={active === total - 1}
                aria-label="Next year"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-cream text-ink hover:bg-white transition-all active:scale-95 disabled:opacity-30"
              >
                <Icon name="arrow-right" size={18} />
              </button>
              <div className="flex-1 h-1.5 rounded-full bg-cream/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-marigold-400 to-marigold-500 transition-[width] duration-300"
                  style={{ width: `${(((active + 1) / total) * 100).toFixed(2)}%` }}
                />
              </div>
              <button
                onClick={() => goTo(0)}
                className="hidden sm:inline-flex text-[13px] font-bold text-cream/70 hover:text-cream underline underline-offset-4"
              >
                1991થી શરૂ કરો
              </button>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-[13px] font-semibold text-ink/55">
          સ્ક્રોલ કરતા જાઓ — કાર્ડ અહીં જ રહેશે, વર્ષ + ફોટો બદલાશે · એરો પણ ચાલશે
        </p>

        {/* Year rail */}
        <div
          ref={railRef}
          className="mt-2 flex gap-2 overflow-x-auto no-scrollbar py-2 px-1"
        >
          {snehMilanYears.map((y, i) => (
            <button
              key={y.year}
              onClick={() => goTo(i)}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-bold border transition-all ${
                i === active
                  ? "bg-brand-700 text-white border-brand-700 shadow-md"
                  : y.highlight
                    ? "bg-marigold-50 text-marigold-700 border-marigold-200 hover:border-marigold-400"
                    : "bg-white text-ink/70 border-ink/10 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {y.year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
