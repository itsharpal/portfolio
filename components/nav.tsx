import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

const link =
  "text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Nav() {
  return (
    <nav className="flex items-center justify-between pt-9 pb-16 text-[15px]">
      <Link
        href="/"
        className="text-[17px] font-[750] tracking-[-0.5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        HC<span className="text-accent">.</span>
      </Link>

      <div className="flex items-center gap-6">
        {/* Hidden on mobile — spec §3.5 collapses the nav to `HC.` plus the
            toggle. Both destinations remain reachable from the page body. */}
        {/* A plain anchor, not next/link. This nav only renders on the home
            page, so the target is always on this page — and a native anchor
            re-scrolls every time it is activated, whereas next/link sees the
            hash already set on a second click and does nothing. */}
        <a href="#work" className={`hidden sm:inline ${link}`}>
          work
        </a>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden sm:inline ${link}`}
        >
          résumé ↗
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
