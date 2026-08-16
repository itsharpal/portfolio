import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-rule py-8 text-[13px] text-muted">
      <p>© {new Date().getFullYear()} Harpal Chapatwala</p>
      <Link
        href="/#work"
        className="transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        work
      </Link>
    </footer>
  );
}
