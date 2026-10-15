import type { Metadata } from "next";
import Link from "next/link";
import { villages } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { ScrollSpyNav } from "./scroll-spy-nav";

export const metadata: Metadata = {
  title: "ગામની યાદી",
  description: "સમસ્ત માંગરોળીયા પરિવાર જે ગામો અને શહેરોમાંથી આવે છે.",
  alternates: { canonical: "/village" },
};

export default function VillagePage() {
  const groupedVillages = villages.reduce((acc, village) => {
    const name = village.nameGu || village.name;
    const firstLetter = name.charAt(0);
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(village);
    return acc;
  }, {} as Record<string, typeof villages>);

  const sortedLetters = Object.keys(groupedVillages).sort((a, b) =>
    a.localeCompare(b, "gu")
  );

  return (
    <>
      <PageHero
        title="ગામની યાદી"
        crumbs={[{ label: "ગામની યાદી" }]}
      />

      {/* Alphabet Navigation - True Full Width with Scroll Spy */}
      <ScrollSpyNav letters={sortedLetters} />

      <PageSection>
        <div className="flex flex-col gap-8 pt-4">
          {sortedLetters.map((letter) => (
            <div key={letter} id={letter} className="scroll-mt-56">
              <h3 className="mb-5 flex items-center gap-4 w-full">
                <span className="h-px flex-1 bg-gradient-to-l from-brand-200 to-transparent"></span>
                <span className="flex shrink-0 items-center justify-center w-11 h-11 rounded-[0.85rem] bg-brand-50 text-brand-700 font-display text-xl font-bold shadow-sm border border-brand-100">
                  {letter}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent"></span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {groupedVillages[letter].map((village) => (
                  <div
                    key={village.slug}
                    className="group relative flex flex-col items-center justify-between gap-3 overflow-hidden rounded-[1.25rem] border border-ink/5 bg-white p-3.5 text-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-200"
                  >
                    {/* Background Icon Watermark */}
                    <Icon name="map-pin" size={60} className="absolute -bottom-2 -right-2 text-brand-700 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:opacity-[0.06] pointer-events-none" />

                    <div className="relative z-10 w-full">
                      <h5 className="font-display text-[17.5px] font-bold text-ink leading-tight transition-colors duration-300 group-hover:text-brand-700">
                        {village.nameGu || village.name}
                      </h5>
                    </div>
                    
                    <div className="relative z-10 w-full mt-1.5">
                      <div className="flex items-center justify-center gap-2 bg-brand-50/80 group-hover:bg-brand-100 transition-colors duration-300 rounded-xl px-2 py-2 border border-brand-100/50">
                        <div className="flex items-center gap-1">
                          <span className="font-display text-[15px] font-bold text-brand-900">{village.families}</span>
                          <span className="text-[13px] font-bold text-brand-700/80">પરિવાર</span>
                        </div>
                        
                        <span className="text-brand-300 text-[10px]">●</span>
                        
                        <div className="flex items-center gap-1">
                          <span className="font-display text-[15px] font-bold text-brand-900">{village.households * 4}</span>
                          <span className="text-[13px] font-bold text-brand-700/80">સભ્યો</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection tone="sand" className="border-t border-ink/8">
        <div className="flex flex-col gap-4 rounded-3xl border border-ink/10 bg-cream p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold">
              શું તમારું ગામ યાદીમાં નથી?
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              સ્થળ, સંપર્ક અને પરિવારોની માહિતી ઉમેરો — ટ્રસ્ટ જાન્યુઆરી આવૃત્તિમાં આ સુધારો પ્રકાશિત કરશે.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
          >
            ઉમેરવા વિનંતી કરો
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="mt-8">
          <TextLink href="/members">સંપૂર્ણ સભ્ય ડિરેક્ટરી</TextLink>
        </div>
      </PageSection>
    </>
  );
}
