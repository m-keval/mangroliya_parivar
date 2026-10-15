import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/lib/data";
import { PageHero, PageSection } from "@/components/page-hero";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "સમાચાર / Blog",
  description: "Latest news, updates and articles from Mangroliya Parivar.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="સમાચાર / Blog"
        crumbs={[{ label: "સમાચાર" }]}
      />

      <PageSection className="py-12 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex flex-col justify-between bg-white rounded-3xl p-6 md:p-8 border border-ink/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-200"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-[12px] font-bold tracking-wider uppercase">
                    {item.tag}
                  </span>
                  <span className="text-ink/50 text-[13px] font-medium">
                    {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink leading-tight mb-3 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-5">
                <span className="text-sm font-semibold text-ink">
                  {item.author}
                </span>
                <div className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-ink/50 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                  <Icon name="arrow-right" size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}
