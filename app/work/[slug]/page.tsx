import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, work } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

// Each MDX body exports its own "In short" alongside the prose, so the whole
// case study stays in one file.
type CaseStudyModule = {
  default: React.ComponentType;
  inShort: string;
};

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

// Anything outside the four slugs 404s instead of being rendered on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((entry) => entry.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} — ${site.name}`,
    description: item.hook,
  };
}

const footLink =
  "text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params;
  const index = work.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const item = work[index];
  const { default: Body, inShort } = (await import(
    `@/content/work/${slug}.mdx`
  )) as CaseStudyModule;

  const previous = work[index - 1];
  const next = work[index + 1];

  return (
    <>
      <article>
        <header>
          <p className="font-mono text-[15px] text-accent">{item.n}</p>
          <h1 className="mt-2 font-mono">{item.title}</h1>
          <p className="mt-3 font-mono text-[15px] text-muted">{item.meta}</p>
        </header>

        {/* Part 1 of the template — the only part a non-engineer needs. */}
        <div className="mt-10 border border-rule p-5 font-mono text-[15px] leading-[1.65]">
          <p className="text-muted">In short</p>
          <p className="mt-2">{inShort}</p>
        </div>

        <Body />

        {/* Stacks on a phone, two columns from 640px. The arrow sits on the
          label line so it can never be orphaned by a wrapping title. */}
        <nav className="mt-16 grid gap-8 border-t border-rule pt-8 font-mono text-[15px] sm:grid-cols-2">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className={footLink}>
              <span className="block text-[13px]">← previous</span>
              <span className="mt-1 block text-balance">{previous.title}</span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className={`${footLink} sm:text-right ${
                previous ? "" : "sm:col-start-2"
              }`}
            >
              <span className="block text-[13px]">next →</span>
              <span className="mt-1 block text-balance">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </article>
    </>
  );
}
