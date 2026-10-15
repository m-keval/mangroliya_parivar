"use client";

import { useRef } from "react";
import type { Sponsor } from "@/lib/data";
import { Icon } from "@/components/icon";

const levelLabel: Record<Sponsor["level"], string> = {
  Title: "મુખ્ય પ્રાયોજક",
  Gold: "ગોલ્ડ પ્રાયોજક",
  Supporter: "સહયોગી",
};

/** Horizontally scrolling sponsor strip with prev/next arrows. */
export function SponsorSlider({ sponsors }: { sponsors: Sponsor[] }) {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = (card?.clientWidth ?? 260) + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll sponsors left"
        className="absolute top-1/2 -left-3 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-brand-700 shadow-md transition-colors hover:bg-brand-700 hover:text-white sm:grid"
      >
        <Icon name="arrow-left" size={20} />
      </button>

      <ul
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-2"
      >
        {sponsors.map((s) => (
          <li
            key={s.name}
            className="w-[240px] shrink-0 snap-start rounded-xl border border-line bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-marigold-400 hover:shadow-[0_20px_40px_-28px_rgba(74,18,18,0.5)] sm:w-[260px]"
          >
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-marigold-400 bg-sand font-display text-3xl font-bold text-brand-700">
              {s.name.charAt(0)}
            </span>
            <h3 className="mt-4 font-semibold text-ink">{s.name}</h3>
            <p className="mt-1 text-xs text-muted">
              {s.category} · {s.city}
            </p>
            <span className="mt-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold text-brand-700">
              {levelLabel[s.level]}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Scroll sponsors right"
        className="absolute top-1/2 -right-3 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-brand-700 shadow-md transition-colors hover:bg-brand-700 hover:text-white sm:grid"
      >
        <Icon name="arrow-right" size={20} />
      </button>
    </div>
  );
}
