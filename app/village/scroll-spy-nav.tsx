"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function ScrollSpyNav({ letters }: { letters: string[] }) {
  const [activeLetter, setActiveLetter] = useState<string>("");

  useEffect(() => {
    // Basic intersection observer to track which section is currently in view
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLetter(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    });

    letters.forEach((letter) => {
      const el = document.getElementById(letter);
      if (el) observer.observe(el);
    });

    // Check initial position on mount
    const onScroll = () => {
      if (window.scrollY < 100) {
        setActiveLetter(""); // Clear if scrolled to top
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [letters]);

  return (
    <div className="sticky top-[61px] sm:top-[73px] z-40 bg-cream/95 backdrop-blur-md shadow-sm border-b border-ink/10 transition-all">
      <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap justify-center gap-2">
        {letters.map((letter) => {
          const isActive = activeLetter === letter;
          return (
            <Link
              key={letter}
              href={`#${letter}`}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full font-display text-base sm:text-lg font-bold transition-all ${
                isActive
                  ? "bg-brand-700 text-white shadow-md border-transparent scale-110"
                  : "bg-white text-brand-700 hover:bg-brand-100 border-ink/5"
              } border`}
            >
              {letter}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
