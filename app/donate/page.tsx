import type { Metadata } from "next";
import { site } from "@/lib/data";
import { Icon, type IconName } from "@/components/icon";
import { PageHero, PageSection } from "@/components/page-hero";
import DonateForm from "@/components/donate-form";

export const metadata: Metadata = {
  title: "દાન",
  description: `${site.name}ને લવાજમ, ભોજન પાસ અથવા ડોનેશન UPI દ્વારા ઓનલાઈન મોકલો.`,
  alternates: { canonical: "/donate" },
};

const uses: { icon: IconName; title: string; text: string }[] = [
  { icon: "graduation", title: "શિક્ષણ સહાય", text: "તેજસ્વી વિદ્યાર્થીઓને શિષ્યવૃત્તિ અને ઇનામ વિતરણ." },
  { icon: "users", title: "સ્નેહમિલન", text: "વાર્ષિક સ્નેહમિલન, દિવાળી મિલન અને પરિવાર પ્રસંગો." },
  { icon: "heart", title: "સેવા કાર્ય", text: "રક્તદાન કેમ્પ, આરોગ્ય કેમ્પ અને જરૂરિયાતમંદોને સહાય." },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate to Mangroliya Parivar"
        title="દાન / લવાજમ"
        description="પરિવારની પ્રવૃત્તિઓમાં આપનો સહયોગ — દરેક રૂપિયાનો હિસાબ વાર્ષિક સામાન્ય સભામાં રજૂ થાય છે."
        crumbs={[{ label: "દાન" }]}
      />

      <PageSection tone="sand">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
            <DonateForm />
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl border border-line bg-white p-6">
              <h2 className="font-display text-xl font-bold text-brand-700">
                આપનું દાન ક્યાં વપરાય છે
              </h2>
              <ul className="mt-5 space-y-5">
                {uses.map((u) => (
                  <li key={u.title} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Icon name={u.icon} size={18} />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{u.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                        {u.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-brand-800 p-6 text-white">
              <Icon name="shield" size={22} className="text-marigold-400" />
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                ચુકવણી સીધી ટ્રસ્ટના બેંક ખાતામાં જમા થાય છે. ખજાનચી દ્વારા
                ચકાસણી પછી રસીદ આપના મોબાઈલ પર મોકલવામાં આવે છે.
              </p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-marigold-300 hover:text-white"
              >
                <Icon name="phone" size={15} />
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </PageSection>
    </>
  );
}
