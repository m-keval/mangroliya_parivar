import Link from "next/link";
import {
  branches,
  cities,
  members,
  searchMembers,
} from "@/lib/data";
import { MemberCard } from "@/components/member-card";
import { Icon } from "@/components/icon";

type SearchQuery = { [key: string]: string | string[] | undefined };

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

const control =
  "w-full rounded-xl border border-ink/12 bg-cream px-4 py-3 text-sm text-ink transition-colors focus:border-brand-500 focus:outline-none";

/**
 * Server-rendered directory: filtering happens on the server from the query
 * string, so the HTML that arrives already contains the right results.
 */
export async function MemberDirectory({ searchParams }: { searchParams: Promise<SearchQuery> }) {
  const sp = await searchParams;
  const q = first(sp.q);
  const branch = first(sp.branch);
  const generation = first(sp.generation);

  const results = searchMembers({ q, branch, generation });
  const isFiltered = Boolean(q || (branch && branch !== "all") || (generation && generation !== "all"));

  return (
    <>
      <form
        method="get"
        className="grid gap-4 rounded-3xl border border-ink/10 bg-sand/70 p-5 sm:p-6 lg:grid-cols-[1.6fr_1fr_1fr_auto]"
      >
        <div className="relative">
          <label htmlFor="q" className="sr-only">
            Search members
          </label>
          <Icon
            name="search"
            size={18}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
          />
          <input
            id="q"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="Search by name, city, profession…"
            className={`${control} pl-11`}
          />
        </div>

        <div>
          <label htmlFor="branch" className="sr-only">
            Branch
          </label>
          <select
            id="branch"
            name="branch"
            defaultValue={branch || "all"}
            className={`${control} appearance-none`}
          >
            <option value="all">All branches</option>
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="generation" className="sr-only">
            Generation
          </label>
          <select
            id="generation"
            name="generation"
            defaultValue={generation || "all"}
            className={`${control} appearance-none`}
          >
            <option value="all">All generations</option>
            <option value="1">Generation 1 — founders</option>
            <option value="2">Generation 2</option>
            <option value="3">Generation 3</option>
            <option value="4">Generation 4</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Search
          </button>
          {isFiltered && (
            <Link
              href="/members"
              className="grid w-11 place-items-center rounded-xl border border-ink/12 text-muted transition-colors hover:bg-cream"
              aria-label="Clear filters"
              title="Clear filters"
            >
              <Icon name="close" size={17} />
            </Link>
          )}
        </div>
      </form>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{results.length}</span>{" "}
          {results.length === 1 ? "member" : "members"}
          {isFiltered && <> of {members.length} matching your filters</>}
        </p>
        <p className="flex items-center gap-2 text-xs text-muted">
          <Icon name="globe" size={14} className="text-brand-600" />
          {cities.length} cities · 4 generations
        </p>
      </div>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-ink/20 bg-cream px-6 py-16 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sand text-muted">
            <Icon name="search" size={24} />
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold">
            No member found
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Nobody in the register matches that search. Try a different name —
            or if someone is genuinely missing, ask the trust to add them.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Request an addition
          </Link>
        </div>
      )}
    </>
  );
}

export function DirectoryFallback() {
  return (
    <div aria-busy="true">
      <div className="h-[104px] animate-pulse rounded-3xl border border-ink/10 bg-sand/70" />
      <div className="mt-6 h-5 w-40 animate-pulse rounded-full bg-ink/10" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 animate-pulse rounded-2xl border border-ink/8 bg-ink/5"
          />
        ))}
      </div>
    </div>
  );
}
