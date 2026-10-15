import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.26em] uppercase ${
        tone === "brand"
          ? "text-brand-700"
          : tone === "light"
            ? "text-marigold-600"
            : "text-cream"
      }`}
    >
      <span
        aria-hidden
        className={`h-px w-8 ${tone === "brand" ? "bg-brand-500" : tone === "light" ? "bg-marigold-400/70" : "bg-cream/70"}`}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "brand",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "brand" | "light";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display text-3xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-cream/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
