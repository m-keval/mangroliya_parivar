import type { Metadata } from "next";
import Link from "next/link";
import { businessIndustries, businesses, getMember } from "@/lib/data";
import { PageHero, PageSection } from "@/components/page-hero";
import { Avatar } from "@/components/member-card";
import { Icon } from "@/components/icon";
import { BusinessDirectory } from "@/components/business-directory";

export const metadata: Metadata = {
  title: "બિસનેશ — Family Business Directory",
  description:
    "Businesses run by members of the Samast Mangroliya Parivar: textiles, manufacturing, healthcare, hospitality, design and professional services.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  const totalStaff = businesses.reduce((sum, b) => sum + b.staff, 0);
  const oldest = Math.min(...businesses.map((b) => b.since));

  return (
    <>
      <PageHero
        title="પરિવાર બિઝનેસ ડિરેક્ટરી"
        crumbs={[{ label: "બિસનેશ" }]}
      />

      <section className="relative bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-12 sm:pt-8 sm:pb-16">


        <BusinessDirectory
          businesses={businesses.map(b => ({
            ...b,
            ownerData: getMember(b.owner),
          }))}
          businessIndustries={businessIndustries}
        />
        </div>
      </section>

      <PageSection tone="ink">
        <div className="flex flex-col items-center gap-10">
          <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-8 md:p-10 text-cream shadow-2xl">
            {/* Background pattern/icon */}
            <Icon name="quote" size={200} strokeWidth={1} className="absolute -right-10 -top-10 text-brand-500/10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
              
              <div className="flex-1 w-full text-center">
                <blockquote>
                  <p className="font-display text-xl leading-relaxed font-semibold text-white sm:text-2xl">
                    "પહેલો વ્યવહાર પરિવારમાં કરો. જો કોઈ સભ્ય તે જરૂરિયાત પૂરી ન પાડી શકે, તો જ બહાર જાઓ — પણ તેમને તેનું કારણ અચૂક જણાવો."
                  </p>
                </blockquote>
              </div>
              
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-ink/15 bg-white px-8 py-4 text-base font-bold text-ink shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-700 hover:bg-brand-700 hover:text-white"
            >
              તમારો વ્યવસાય ઉમેરો
              <Icon name="arrow-right" size={18} />
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
