import type { Metadata } from "next";
import Link from "next/link";
import { committee, committeeTerm } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { CommitteeTabs } from "@/components/committee-tabs";

export const metadata: Metadata = {
  title: "મુખ્ય સમિતિ — Main Committee",
  description:
    "The Samast Mangroliya Parivar samiti for the term 2025 – 2028: ten posts, direct phone lines, duties and the rules it works by.",
  alternates: { canonical: "/committee" },
};

export default function CommitteePage() {
  return (
    <>
      <PageHero
        title="પરિવારનું સંચાલન કરતી સમિતિ"
        crumbs={[{ label: "મુખ્ય સમિતિ" }]}
      />

      {/* Committee tabs section */}
      <PageSection>
        <CommitteeTabs posts={committee} />
      </PageSection>


    </>
  );
}
