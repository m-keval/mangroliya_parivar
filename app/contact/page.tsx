import type { Metadata } from "next";
import { site } from "@/lib/data";
import { PageHero, PageSection } from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Contact the Trust",
  description:
    "Write to the Samast Mangroliya Parivar trust: add a family member, correct an entry, request a date or ask about scholarships.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    icon: "map-pin" as const,
    title: "Parivar Bhavan",
    lines: site.address,
  },
  {
    icon: "mail" as const,
    title: "Email",
    lines: [site.email, "Replies within two working days"],
  },
  {
    icon: "phone" as const,
    title: "Phone",
    lines: [site.phone, "Mon–Sat, 10 AM to 7 PM"],
  },
  {
    icon: "users" as const,
    title: "Your branch trustee",
    lines: [
      "Rameshbhai · Surat & Ahmedabad",
      "Mohanbhai · Rajkot & Pune",
      "Dineshbhai · Mumbai & Bengaluru",
    ],
  },
];

const faqs = [
  {
    q: "How do I add a new baby or a new marriage to the directory?",
    a: "Send a note through this form with the name, date and branch. The entry goes live within a week and appears in the January print edition.",
  },
  {
    q: "Who can apply for a family scholarship?",
    a: "Any child or grandchild of a registered member, from Class VI to post-graduation. Applications open every September and close on 31 October.",
  },
  {
    q: "Can I borrow the original ledger?",
    a: "No — but every page has been photographed. Ask the archive team for a scan, or view the transcriptions kept with the trust.",
  },
  {
    q: "Is there a subscription to be part of the samast parivar?",
    a: "No subscription. The trust runs on voluntary contributions at Diwali and Holi.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Write to the trust"
        crumbs={[{ label: "Contact" }]}
      />

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-ink/10 bg-cream p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-cream">
                    <Icon name={card.icon} size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {card.title}
                  </h3>
                  <div className="mt-2 space-y-0.5 text-sm text-muted">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative mt-6 overflow-hidden rounded-3xl border border-ink/10 bg-ink p-8 text-cream">
              <div
                aria-hidden
                className="glow-dots absolute inset-0 opacity-30"
              />
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-marigold-300 uppercase">
                  {site.chapter}, Gujarat
                </p>
                <p className="mt-3 font-display text-2xl leading-snug font-semibold">
                  {site.name}
                </p>
                <p className="mt-2 text-sm text-cream/65">
                  {site.address.join(", ")}
                </p>
                <p className="mt-5 text-xs text-cream/50">
                  સ્થાપના : {site.founded} · {site.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/10 bg-sand/60 p-6 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-brand-700 uppercase">
              Server action
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Send a note
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Submitted to a Next.js Server Action — validated on the server,
              never in your browser alone.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection tone="sand" className="border-t border-ink/8">
        
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-ink/10 bg-cream p-6"
            >
              <h3 className="font-display text-lg leading-snug font-semibold">
                {faq.q}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
