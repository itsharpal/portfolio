import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex items-center justify-between pt-9 pb-16 font-mono text-[15px]">
        {/* Back to the list, not the top of the home page. */}
        <Link
          href="/#work"
          className="text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          ← work
        </Link>
        <ThemeToggle />
      </nav>

      {/* The one deliberate divergence from the all-monospace reference: these
          pages carry 600–900 words, and monospace gives the eye no width
          variation to track along — spec §3.5. */}
      <main className="font-sans">{children}</main>
    </>
  );
}
