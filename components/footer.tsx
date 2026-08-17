import Link from "next/link";
import { site } from "@/content/site";

const link =
  "transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Footer() {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-rule py-8 text-[13px] text-muted">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/#work" className={link}>
          work
        </Link>
        <Link href="/#contact" className={link}>
          contact
        </Link>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          résumé ↗
        </a>
      </nav>
    </footer>
  );
}
