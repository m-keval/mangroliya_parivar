import Link from "next/link";
import type { Member } from "@/lib/data";
import { initials, tintIndex } from "@/lib/data";
import { Icon } from "@/components/icon";

const gradients = [
  "from-brand-400 to-brand-700",
  "from-marigold-300 to-marigold-600",
  "from-sky-400 to-indigo-600",
  "from-rose-400 to-rose-600",
  "from-teal-400 to-emerald-700",
  "from-amber-300 to-orange-600",
];

export function Avatar({
  member,
  size = "md",
  className = "",
}: {
  member: Pick<Member, "slug" | "name">;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    sm: "h-9 w-9 rounded-lg text-xs",
    md: "h-12 w-12 rounded-xl text-sm",
    lg: "h-20 w-20 rounded-2xl text-xl",
    xl: "h-28 w-28 rounded-3xl text-3xl",
  }[size];

  return (
    <span
      className={`grid shrink-0 place-items-center bg-linear-to-br ${gradients[tintIndex(member.slug)]} font-display font-semibold text-white ring-1 ring-black/10 shadow-[0_8px_20px_-14px_rgba(14,19,18,0.9)] ${sizes} ${className}`}
      aria-hidden
    >
      {initials(member.name)}
    </span>
  );
}

export function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/members/${member.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_24px_50px_-32px_rgba(14,19,18,0.55)]"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-500 to-marigold-400 transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex items-start gap-4">
        <Avatar member={member} size="lg" />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-brand-700 uppercase">
            Gen {member.generation}
          </p>
          <h3 className="mt-1 truncate font-display text-lg leading-snug font-semibold text-ink">
            {member.name}
          </h3>
          <p className="mt-0.5 truncate text-sm text-muted">{member.role}</p>
        </div>
        <Icon
          name="arrow-right"
          size={18}
          className="mt-1 shrink-0 text-ink/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-600"
        />
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted">
        {member.bio}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink/8 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-ink/70">
          <Icon name="map-pin" size={12} />
          {member.city}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-800">
          <Icon name="tree" size={12} />
          {member.branch.replace("'s Branch", "")} line
        </span>
      </div>
    </Link>
  );
}

export function MemberRow({ member }: { member: Member }) {
  return (
    <Link
      href={`/members/${member.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-cream px-4 py-3 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
    >
      <Avatar member={member} size="sm" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-ink">
          {member.name}
        </span>
        <span className="block truncate text-xs text-muted">
          {member.city} · {member.profession}
        </span>
      </span>
      <Icon
        name="arrow-right"
        size={15}
        className="shrink-0 text-ink/25 transition-transform group-hover:translate-x-1 group-hover:text-brand-600"
      />
    </Link>
  );
}
