import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { gallery, photoCategories } from "@/lib/data";
import { PageHero, PageSection } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Gallery — The Family Album",
  description:
    "Weddings, festivals, the courtyard hall and the fields — photographs from the Mangroliya Parivar archive.",
  alternates: { canonical: "/gallery" },
};

type SearchQuery = { [key: string]: string | string[] | undefined };

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

async function GalleryGrid({ searchParams }: { searchParams: Promise<SearchQuery> }) {
  const sp = await searchParams;
  const category = first(sp.category);
  const active = photoCategories.includes(category as never) ? category : "all";
  const photos =
    active === "all" ? gallery : gallery.filter((p) => p.category === active);

  return (
    <>
      <form
        method="get"
        className="flex flex-wrap items-center gap-2 rounded-3xl border border-ink/10 bg-sand/60 p-3"
      >
        <span className="flex items-center gap-2 px-3 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
          <Icon name="camera" size={15} className="text-brand-600" />
          Filter
        </span>
        <button
          type="submit"
          name="category"
          value="all"
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === "all"
              ? "bg-ink text-cream"
              : "bg-cream text-ink/70 hover:text-ink"
          }`}
        >
          All
        </button>
        {photoCategories.map((cat) => (
          <button
            key={cat}
            type="submit"
            name="category"
            value={cat}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-ink text-cream"
                : "bg-cream text-ink/70 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto px-3 text-xs text-muted">
          {photos.length} {photos.length === 1 ? "photograph" : "photographs"}
        </span>
      </form>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure
            key={photo.slug}
            className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 ${
              photo.tall ? "lg:row-span-2" : ""
            }`}
          >
            <Image
              src={`https://picsum.photos/seed/${photo.seed}/800/${photo.tall ? 1100 : 640}`}
              alt={photo.title}
              width={800}
              height={photo.tall ? 1100 : 640}
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                photo.tall ? "h-72 lg:h-full" : "h-56 sm:h-64"
              }`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-linear-to-t from-ink via-ink/85 to-transparent p-5 text-cream">
              <span className="block font-display text-lg leading-snug font-semibold">
                {photo.title}
              </span>
              <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-cream/70">
                <span className="text-marigold-300">{photo.category}</span>
                <span>{photo.year}</span>
                <span>📷 {photo.credit}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

function GalleryFallback() {
  return (
    <div aria-busy="true">
      <div className="h-16 animate-pulse rounded-3xl border border-ink/10 bg-sand/60" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 animate-pulse rounded-3xl border border-ink/8 bg-ink/5"
          />
        ))}
      </div>
    </div>
  );
}

export default function GalleryPage({
  searchParams,
}: PageProps<"/gallery">) {
  return (
    <>
      <PageHero
        title="The family album"
        crumbs={[{ label: "Gallery" }]}
      />

      <PageSection>
        <Suspense fallback={<GalleryFallback />}>
          <GalleryGrid searchParams={searchParams} />
        </Suspense>

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
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Contribute a photo
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </PageSection>
    </>
  );
}
