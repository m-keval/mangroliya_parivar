import type { Metadata } from "next";
import { Suspense } from "react";
import {
  DirectoryFallback,
  MemberDirectory,
} from "@/components/member-directory";
import { PageHero, PageSection } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Parivar — Member Directory",
  description:
    "Every registered member of the Mangroliya Parivar: four generations across nine cities, searchable by name, branch and generation.",
  alternates: { canonical: "/members" },
};

export default function MembersPage({
  searchParams,
}: PageProps<"/members">) {
  return (
    <>
      <PageHero
        title="Everyone in the parivar"
        crumbs={[{ label: "Parivar" }]}
      />

      <PageSection>
        {/* Runtime (per-request) data streams behind this boundary while the
            rest of the page stays in the prerendered shell. */}
        <Suspense fallback={<DirectoryFallback />}>
          <MemberDirectory searchParams={searchParams} />
        </Suspense>
      </PageSection>
    </>
  );
}
