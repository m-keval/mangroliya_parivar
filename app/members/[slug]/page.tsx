import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  childrenOf,
  getMember,
  members,
  siblingsOf,
  spouseOf,
} from "@/lib/data";
import { PageHero, PageSection, TextLink } from "@/components/page-hero";
import { Avatar, MemberCard, MemberRow } from "@/components/member-card";
import { Icon } from "@/components/icon";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata(
  props: PageProps<"/members/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const member = getMember(slug);
  if (!member) return { title: "Member not found" };

  return {
    title: `${member.name} — Parivar Directory`,
    description: `${member.name}, generation ${member.generation} of the Mangroliya Parivar. ${member.role} · ${member.city}. ${member.bio}`,
    alternates: { canonical: `/members/${member.slug}` },
  };
}

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink/8 py-3.5 sm:flex-row sm:items-baseline sm:gap-6">
      <dt className="w-40 shrink-0 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
        {label}
      </dt>
      <dd className="text-sm font-medium text-ink">{children}</dd>
    </div>
  );
}

export default async function MemberPage(
  props: PageProps<"/members/[slug]">,
) {
  const { slug } = await props.params;
  const member = getMember(slug);
  if (!member) notFound();

  const parent = member.parent ? getMember(member.parent) : undefined;
  const spouse = spouseOf(member);
  const children = childrenOf(member.slug);
  const siblings = siblingsOf(member);
  const related = members
    .filter(
      (m) =>
        m.branch === member.branch &&
        m.slug !== member.slug &&
        m.generation === member.generation,
    )
    .slice(0, 3);

  const details: { label: string; value: React.ReactNode }[] = [
    { label: "Generation", value: `Generation ${member.generation}` },
    { label: "Branch", value: member.branch },
    { label: "Lives in", value: member.city },
    { label: "Work", value: member.profession },
    { label: "Role in family", value: member.role },
    ...(member.since ? [{ label: "Born", value: String(member.since) }] : []),
    ...(member.focus ? [{ label: "Known for", value: member.focus }] : []),
    ...(member.email
      ? [
          {
            label: "Email",
            value: (
              <a
                href={`mailto:${member.email}`}
                className="text-brand-700 underline-offset-4 hover:underline"
              >
                {member.email}
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <>
      <PageHero
        title={member.name}
        crumbs={[{ label: "Parivar", href: "/members" }]}
      />

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          {/* Left: profile */}
          <div>
            <div className="flex flex-wrap items-center gap-5 rounded-3xl border border-ink/10 bg-sand/60 p-6">
              <Avatar member={member} size="xl" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-brand-700 uppercase">
                  {member.branch}
                </p>
                <h2 className="mt-1.5 font-display text-2xl leading-tight font-semibold">
                  {member.name}
                </h2>
                <p className="mt-1.5 text-sm text-muted">
                  {member.profession} · {member.city}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold">
                About this member
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                {member.bio}
              </p>
              {member.focus && (
                <p className="mt-4 flex gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-4 text-sm leading-relaxed text-brand-900">
                  <Icon
                    name="star"
                    size={18}
                    className="mt-0.5 shrink-0 text-brand-600"
                  />
                  <span>
                    <span className="font-semibold">Known for:</span>{" "}
                    {member.focus}
                  </span>
                </p>
              )}
            </div>

            <dl className="mt-9">
              <h3 className="mb-2 font-display text-xl font-semibold">
                Particulars
              </h3>
              {details.map((row) => (
                <DetailRow key={row.label} label={row.label}>
                  {row.value}
                </DetailRow>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/members"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-sand"
              >
                <Icon name="arrow-left" size={16} />
                Back to directory
              </Link>
            </div>
          </div>

          {/* Right: relations */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-ink/10 bg-cream p-6">
              <h3 className="font-display text-lg font-semibold">
                In the family
              </h3>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                    Parent
                  </p>
                  <div className="mt-2">
                    {parent ? (
                      <MemberRow member={parent} />
                    ) : (
                      <p className="text-sm text-muted">
                        A founder of the parivar — no recorded parent.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                    Spouse
                  </p>
                  <div className="mt-2">
                    {spouse ? (
                      <MemberRow member={spouse} />
                    ) : (
                      <p className="text-sm text-muted">Not recorded yet.</p>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                    Children ({children.length})
                  </p>
                  <div className="mt-2 space-y-2">
                    {children.length ? (
                      children.map((child) => (
                        <MemberRow key={child.slug} member={child} />
                      ))
                    ) : (
                      <p className="text-sm text-muted">No children recorded.</p>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                    Siblings ({siblings.length})
                  </p>
                  <div className="mt-2 space-y-2">
                    {siblings.length ? (
                      siblings.map((sib) => (
                        <MemberRow key={sib.slug} member={sib} />
                      ))
                    ) : (
                      <p className="text-sm text-muted">
                        Only child of this parent.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-ink p-6 text-cream">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-marigold-300 uppercase">
                Something wrong?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                If a detail here is out of date, tell the trust and it will be
                corrected before the January print edition.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-marigold-300"
              >
                Request a correction
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </PageSection>

      {related.length > 0 && (
        <PageSection tone="sand" className="border-t border-ink/8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] text-brand-700 uppercase">
                Same branch, same generation
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Others in the {member.branch.replace("'s Branch", "")} line
              </h2>
            </div>
            <TextLink href="/members">Full directory</TextLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((m) => (
              <MemberCard key={m.slug} member={m} />
            ))}
          </div>
        </PageSection>
      )}
    </>
  );
}
