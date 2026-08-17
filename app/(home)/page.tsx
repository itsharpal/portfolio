import Link from "next/link";
import { Chip } from "@/components/chip";
import { SectionHeading } from "@/components/section-heading";
import { projects, roles, site, skills, work } from "@/content/site";

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

      <section className="mt-24">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-8 space-y-8">
          {roles.map((role) => (
            <div key={role.title} className="border-t border-rule pt-6">
              <h3 className="text-[17px] font-[750] tracking-[-0.3px]">
                {role.title}
              </h3>
              <p className="mt-1 text-[15px] text-muted">
                {role.company} · {role.period}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading>Projects</SectionHeading>
        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <div key={project.name} className="border-t border-rule pt-6">
              <h3 className="text-[17px] font-[750] tracking-[-0.3px]">
                {project.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-8 space-y-7">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-[15px] text-muted">{group.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-24 scroll-mt-8">
        <SectionHeading>Contact</SectionHeading>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
          {/* The address is one unbreakable token and overflows below ~340px,
              so it is allowed to break rather than push the page wider. */}
          <li className="min-w-0 max-w-full">
            <a
              href={`mailto:${site.email}`}
              className={`${inlineLink} wrap-anywhere`}
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              linkedin ↗
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              github ↗
            </a>
          </li>
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLink}
            >
              résumé ↗
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
