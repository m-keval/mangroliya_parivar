import type { Metadata } from "next";
import Link from "next/link";
import { dateParts, events, pastEvents } from "@/lib/data";
import { PageHero, PageSection } from "@/components/page-hero";
import { EventCard } from "@/components/event-card";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Events — What the Parivar Is Planning",
  description:
    "Upcoming gatherings of the Samast Mangroliya Parivar: Diwali Milan, the AGM, the scholarship ceremony, Uttarayan, the family picnic and Holi Milan.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Gatherings of the parivar"
        crumbs={[{ label: "Events" }]}
      />

      <PageSection>
        

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-3xl border border-brand-100 bg-brand-50 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-brand-900">
              Want to add a gathering?
            </h3>
            <p className="mt-1.5 text-sm text-brand-800/80">
              Branch trustees can request a slot on the samast calendar.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Request a date
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </PageSection>

      {/* Past */}
      <PageSection tone="sand" className="border-t border-ink/8">
        

        <ul className="mt-12 space-y-4">
          {pastEvents.map((event) => {
            const { day, month, year } = dateParts(event.date);
            return (
              <li key={event.slug}>
                <article className="flex flex-col gap-5 rounded-2xl border border-ink/10 bg-cream p-6 transition-colors hover:border-brand-300 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-sand text-center">
                      <span className="font-display text-2xl leading-none font-semibold">
                        {day}
                      </span>
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                        {month} {year}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <span className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-muted">
                        {event.category}
                      </span>
                      <h3 className="mt-2 font-display text-lg leading-snug font-semibold">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                  <p className="flex shrink-0 items-center gap-2 text-xs text-muted sm:w-40 sm:justify-end">
                    <Icon name="map-pin" size={14} className="text-brand-600" />
                    {event.city}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </PageSection>
    </>
  );
}
