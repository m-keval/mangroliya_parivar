"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { Icon } from "@/components/icon";

const slides = [
  { seed: "mangroliya-diwali", alt: "દિવાળી મિલન" },
  { seed: "mangroliya-courtyard", alt: "પરિવાર ભવન" },
  { seed: "mangroliya-baraat", alt: "પરિવારનો પ્રસંગ" },
];

/**
 * Full-width banner carousel. Rotates every four seconds; the copy and the
 * calls to action stay fixed on top of the maroon wash.
 */
export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate h-[480px] overflow-hidden bg-brand-900 sm:h-[560px]">
      {slides.map((slide, i) => (
        <Image
          key={slide.seed}
          src={`https://picsum.photos/seed/${slide.seed}/1800/900`}
          alt={slide.alt}
          fill
          sizes="100vw"
          priority={i === 0}
          aria-hidden={i !== active}
          className={`-z-10 object-cover transition-all duration-[1400ms] ${
            i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-brand-950/70 via-brand-900/60 to-brand-950/85"
      />

      <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
        <p className="animate-fade-up font-display text-sm font-semibold tracking-wide text-marigold-300 sm:text-base">
          {site.name}
        </p>
        <h1
          className="mt-4 animate-fade-up font-display text-4xl leading-tight font-bold text-balance sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          પરંપરા, વિશ્વાસ અને એકતા
        </h1>
        <span
          aria-hidden
          className="ornament mt-5 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          ✦
        </span>
        <p
          className="mt-4 max-w-2xl animate-fade-up text-base leading-relaxed text-white/85 sm:text-lg"
          style={{ animationDelay: "260ms" }}
        >
          ઇવેન્ટ્સ, જાહેરાતો, સમિતિ અપડેટ્સ અને પરિવારની સેવાઓ — બધું એક જ
          ડિજિટલ ઘરમાં.
        </p>
        <div
          className="mt-8 flex animate-fade-up flex-wrap justify-center gap-3"
          style={{ animationDelay: "340ms" }}
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-md bg-marigold-500 px-7 py-3.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-marigold-400"
          >
            <Icon name="calendar" size={17} />
            ઇવેન્ટ્સ
          </Link>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-800"
          >
            <Icon name="users" size={17} />
            પરિવાર ડિરેક્ટરી
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.seed}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-8 bg-marigold-400" : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
