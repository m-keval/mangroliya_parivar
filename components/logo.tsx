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
    tone === "dark" ? "text-muted" : "text-ink/60";

  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="h-10 w-10 sm:h-12 sm:w-12" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base leading-tight font-semibold tracking-tight transition-colors sm:text-lg ${titleColor}`}>
          {site.name}
        </span>
      </span>
    </Link>
  );
}
