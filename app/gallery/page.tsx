import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { gallery, photoCategories } from "@/lib/data";
import { PageHero, PageSection } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { GalleryDirectory } from "@/components/gallery-directory";

export const metadata: Metadata = {
  title: "Gallery — The Family Album",
  description:
    "Weddings, festivals, the courtyard hall and the fields — photographs from the Mangroliya Parivar archive.",
  alternates: { canonical: "/gallery" },
};



export default function GalleryPage({
  searchParams,
}: PageProps<"/gallery">) {
  return (
    <>
      <PageHero
        title="ગેલેરી"
        crumbs={[{ label: "ગેલેરી" }]}
      />

      <PageSection>
        <GalleryDirectory photos={gallery} categories={photoCategories} />

        <div className="mt-14 flex flex-col gap-4 rounded-3xl border border-dashed border-ink/20 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">
              Have photographs to add?
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              Send scans or originals to the archive team — credit is always
              given.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-white"
          >
            Contribute a photo
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </PageSection>
    </>
  );
}
