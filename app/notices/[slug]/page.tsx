import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getNotice, notices } from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export function generateStaticParams() {
  return notices.map((notice) => ({ slug: notice.slug }));
}

export async function generateMetadata(
  props: PageProps<"/notices/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const notice = getNotice(slug);
  if (!notice) return { title: "Notice not found" };

  return {
    title: notice.title,
    description: notice.excerpt,
    alternates: { canonical: `/notices/${notice.slug}` },
  };
}

export default async function NoticePage(
  props: PageProps<"/notices/[slug]">,
) {
  const { slug } = await props.params;
  const notice = getNotice(slug);
  if (!notice) notFound();

  const others = notices.filter((n) => n.slug !== notice.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={notice.title}
        crumbs={[{ label: "Notices", href: "/notices" }]}
      />

      <PageSection>
        <article className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-sand/60 p-5">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-cream">
              <Icon name="book" size={19} />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-ink">{notice.author}</p>
              <p className="text-muted">
                Posted {formatDate(notice.date, "full")} · Samast Mangroliya
                Parivar
              </p>
            </div>
          </div>

          <div className="mt-9 space-y-6">
            {notice.body.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed text-ink/80 ${
                  i === 0
                    ? "text-lg first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:leading-[0.85] first-letter:font-semibold first-letter:text-brand-700 sm:text-xl"
                    : "text-base"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-ink/10 pt-8">
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-sand"
            >
              <Icon name="arrow-left" size={16} />
              All notices
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
            >
              Ask the trust
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </article>

        <div className="mx-auto mt-16 max-w-5xl border-t border-ink/10 pt-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold">
              Also on the board
            </h2>
            <TextLink href="/notices">See all notices</TextLink>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/notices/${other.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-cream p-5 transition-all hover:-translate-y-1 hover:border-brand-300"
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-brand-700 uppercase">
                    {other.tag}
                  </span>
                  <span className="mt-2 block font-display text-lg leading-snug font-semibold transition-colors group-hover:text-brand-700">
                    {other.title}
                  </span>
                  <span className="mt-3 block text-xs text-muted">
                    {formatDate(other.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>
    </>
  );
}
