import Link from "next/link";
import { Chip } from "@/components/chip";
import { ContactButton } from "@/components/contact-button";
import { SectionHeading } from "@/components/section-heading";
import { projects, roles, site, skills, work } from "@/content/site";

export default function Home() {
  return (
    <>
      <section>
        <h1>{site.name}</h1>
        <p className="mt-3 text-[15px] text-muted">
          {site.role} · {site.location}
        </p>
        <p className="mt-8 leading-relaxed">{site.bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ContactButton
            href={`mailto:${site.email}`}
            label="Email"
            icon="email"
            external={false}
          />
          <ContactButton
            href={site.linkedin}
            label="LinkedIn"
            icon="linkedin"
          />
          <ContactButton href={site.github} label="GitHub" icon="github" />
        </div>
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
        <p className="mt-6 text-[15px] leading-relaxed text-muted">
          The fastest way to reach me is email — I read everything that
          isn&rsquo;t a template.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <ContactButton
            href={`mailto:${site.email}`}
            label="Email"
            icon="email"
            external={false}
          />
          <ContactButton
            href={site.linkedin}
            label="LinkedIn"
            icon="linkedin"
          />
          <ContactButton href={site.github} label="GitHub" icon="github" />
          <ContactButton href={site.resume} label="Résumé" icon="resume" />
        </div>

        <p className="mt-6 text-[13px] text-muted wrap-anywhere">
          {site.email}
        </p>
      </section>
    </>
  );
}
