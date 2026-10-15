"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "patidar-history", label: "પાટીદાર પ્રજાનાં મૂળ અને કુળ" },
  { id: "kuldevi", label: "કુળદેવી આઈ શ્રી ગૌરી સત્યાય" },
  { id: "sneh-milan", label: "સ્નેહ મિલન સમારોહ" },
];

export function AboutSidebar() {
  const [active, setActive] = useState("patidar-history");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-full md:w-60 lg:w-64 shrink-0 sticky top-[61px] sm:top-[73px] md:top-28 z-30 self-start md:-ml-1 2xl:-ml-2">
      <div className="-mx-3 px-3 sm:-mx-5 sm:px-5 md:mx-0 md:px-0 bg-cream/95 backdrop-blur-xl border-b border-ink/10 md:border-0 py-2.5 md:py-0 md:bg-white/50 md:rounded-3xl md:p-6 md:border md:border-ink/5 md:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
        <h3 className="hidden md:block font-display font-bold text-ink text-lg mb-4">
          અમારો પરિચય
        </h3>
        <nav className="grid grid-cols-3 gap-2 md:flex md:flex-col md:gap-1 md:border-l-2 md:border-brand-100 md:pl-4 md:items-stretch">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(l.id)}
                className={`flex items-center justify-center text-center md:text-left rounded-xl md:rounded-lg px-2 py-2.5 md:px-3 text-[11px] sm:text-xs md:text-[14.5px] leading-snug font-semibold transition-all border ${
                  isActive
                    ? "bg-brand-700 text-white border-brand-700 shadow-md md:bg-brand-50 md:text-brand-700 md:border-brand-200 md:shadow-none md:border-l-4 md:border-l-brand-700"
                    : "bg-white md:bg-transparent text-ink/75 md:text-ink/70 border-ink/10 hover:text-brand-700 hover:border-brand-300 shadow-sm md:shadow-none"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
