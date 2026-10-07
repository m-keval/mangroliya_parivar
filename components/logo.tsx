import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";

/**
 * The official Samast Mangroliya Parivar emblem (transparent PNG, 1254×1254).
 */
export function LogoMark({
  className = "h-12 w-12",
}: {
  className?: string;
}) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes="48px"
        className="object-contain"
        priority
      />
    </span>
  );
}

export function Wordmark({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const titleColor =
    tone === "dark" ? "text-ink group-hover:text-brand-700" : "text-cream";
  const subColor =
    tone === "dark" ? "text-muted" : "text-cream/60";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg leading-tight font-semibold tracking-tight transition-colors sm:text-xl ${titleColor}`}>
          {site.name}
        </span>
        <span className="mt-1.5 hidden font-semibold text-[11px] tracking-[0.06em] sm:block sm:text-[13px]">
          <span className={tone === "dark" ? "text-brand-700" : "text-marigold-300"}>
            {site.nameGu}
          </span>
          <span className={`ml-2 ${subColor}`}>· {site.chapter}</span>
        </span>
      </span>
    </Link>
  );
}
