import type { FamilyEvent } from "@/lib/data";
import { dateParts, formatDate } from "@/lib/data";
import { Icon } from "@/components/icon";

const categoryStyles: Record<FamilyEvent["category"], string> = {
  Festival: "bg-marigold-200 text-marigold-600",
  Meeting: "bg-brand-50 text-brand-800",
  Education: "bg-indigo-50 text-indigo-700",
  "Get-together": "bg-rose-50 text-rose-600",
  Ceremony: "bg-teal-50 text-teal-700",
};

export function EventCard({ event }: { event: FamilyEvent }) {
  const { day, month, weekday } = dateParts(event.date);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_28px_60px_-40px_rgba(14,19,18,0.6)]">
      <div className="flex items-start gap-5">
        <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-ink text-cream transition-colors duration-300 group-hover:bg-brand-700">
          <span className="text-[10px] font-semibold tracking-[0.18em] text-marigold-300 uppercase">
            {month}
          </span>
          <span className="font-display text-3xl leading-none font-semibold">
            {day}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryStyles[event.category]}`}
            >
              {event.category}
            </span>
            <span className="text-xs text-muted">{weekday}</span>
          </div>
          <h3 className="mt-2.5 font-display text-xl leading-snug font-semibold text-ink text-balance">
            {event.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {event.description}
      </p>

      <dl className="mt-5 grid gap-2.5 border-t border-ink/8 pt-4 text-sm">
        <div className="flex gap-3 text-ink/75">
          <dt className="sr-only">Date</dt>
          <Icon name="calendar" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          <dd>{formatDate(event.date, "full")}</dd>
        </div>
        <div className="flex gap-3 text-ink/75">
          <dt className="sr-only">Time</dt>
          <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          <dd>{event.time}</dd>
        </div>
        <div className="flex gap-3 text-ink/75">
          <dt className="sr-only">Venue</dt>
          <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-brand-600" />
          <dd>
            {event.venue}
            <span className="text-muted"> · {event.city}</span>
          </dd>
        </div>
      </dl>

      <p className="mt-5 flex items-center gap-2 text-xs text-muted">
        <Icon name="users" size={14} className="text-marigold-500" />
        Hosted by {event.host}
      </p>
    </article>
  );
}
