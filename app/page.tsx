import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { site, work } from "@/content/site";

const inlineLink =
  "text-muted underline underline-offset-4 transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Home() {
  return (
    <>
      <section>
        <h1>{site.name}</h1>
        <p className="mt-3 text-[15px] text-muted">
          {site.role} · {site.location}
        </p>
        <p className="mt-8 leading-relaxed">{site.bio}</p>
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <a href={`mailto:${site.email}`} className={inlineLink}>
            email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={inlineLink}
          >
            linkedin ↗
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={inlineLink}
          >
            github ↗
          </a>
        </p>
      </section>

      <section id="work" className="mt-24 scroll-mt-8">
        <SectionHeading>Selected work</SectionHeading>

        <ul className="mt-8">
          {work.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="group block border-t border-rule py-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex gap-5">
                  <span className="pt-1 text-[15px] text-accent">{item.n}</span>
                  <div>
                    <h2 className="text-[20px] font-[750] tracking-[-0.4px]">
                      {item.title}
                      <span className="ml-2 inline-block text-muted transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </h2>
                    <p className="mt-1 text-[15px] text-muted">{item.meta}</p>
                    <p className="mt-3 text-[15px] leading-relaxed">
                      {item.hook}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
