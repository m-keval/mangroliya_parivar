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
    title: "પરિવાર ભવન",
    lines: site.address,
  },
  {
    icon: "mail" as const,
    title: "ઈમેલ",
    lines: [site.email, "બે કામકાજના દિવસમાં જવાબ"],
  },
  {
    icon: "phone" as const,
    title: "ફોન",
    lines: [site.phone, "સોમ-શનિ, સવારે ૧૦ થી સાંજે ૭"],
  },
  {
    icon: "users" as const,
    title: "તમારા બ્રાન્ચ ટ્રસ્ટી",
    lines: [
      "રમેશભાઈ · સુરત અને અમદાવાદ",
      "મોહનભાઈ · રાજકોટ અને પુણે",
      "દિનેશભાઈ · મુંબઈ અને બેંગલુરુ",
    ],
  },
];

const faqs = [
  {
    q: "ડિરેક્ટરીમાં નવા બાળક અથવા નવા લગ્નની નોંધણી કેવી રીતે કરવી?",
    a: "આ ફોર્મ દ્વારા નામ, તારીખ અને બ્રાન્ચ સાથે એક નોંધ મોકલો. એન્ટ્રી એક અઠવાડિયામાં ઓનલાઈન થઈ જશે અને જાન્યુઆરીની પ્રિન્ટ આવૃત્તિમાં દેખાશે.",
  },
  {
    q: "પરિવારની સ્કોલરશિપ માટે કોણ અરજી કરી શકે છે?",
    a: "કોઈપણ નોંધાયેલ સભ્યના બાળકો અથવા પૌત્ર-પૌત્રીઓ, ધોરણ ૬ થી પોસ્ટ-ગ્રેજ્યુએશન સુધી. અરજીઓ દર સપ્ટેમ્બરમાં ખુલે છે અને ૩૧ ઓક્ટોબરે બંધ થાય છે.",
  },
  {
    q: "શું હું અસલ ચોપડો ઉછીનો લઈ શકું?",
    a: "ના — પરંતુ દરેક પાનાના ફોટોગ્રાફ્સ લેવામાં આવ્યા છે. સ્કેન માટે આર્કાઇવ ટીમનો સંપર્ક કરો, અથવા ટ્રસ્ટ પાસે રાખેલી નકલો જુઓ.",
  },
  {
    q: "શું સમસ્ત પરિવારનો ભાગ બનવા માટે કોઈ વાર્ષિક લવાજમ છે?",
    a: "કોઈ લવાજમ નથી. ટ્રસ્ટ દિવાળી અને હોળી પર સ્વેચ્છિક યોગદાનથી ચાલે છે.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="ટ્રસ્ટને લખો"
        crumbs={[{ label: "સંપર્ક" }]}
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
            <div className="relative mt-6 overflow-hidden rounded-3xl border border-ink/10 bg-sand p-8 text-ink">
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-marigold-600 uppercase">
                  ગુજરાત
                </p>
                <p className="mt-3 font-display text-2xl leading-snug font-semibold">
                  {site.name}
                </p>
                <p className="mt-2 text-sm text-ink/65">
                  {site.address.join(", ")}
                </p>
                <p className="mt-5 text-xs text-ink/50">
                  સ્થાપના : {site.founded} · {site.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/10 bg-sand/60 p-6 sm:p-8">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-brand-700 uppercase">
              સંપર્ક ફોર્મ
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              અમને સંદેશો મોકલો
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              નીચે આપેલ ફોર્મ ભરીને તમે ટ્રસ્ટનો સીધો સંપર્ક કરી શકો છો.
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
