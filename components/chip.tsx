import { logos } from "@/content/logos";

export function Chip({ children }: { children: string }) {
  const path = logos[children];

  return (
    <span className="inline-flex items-center gap-1.5 border border-rule px-2 py-1 text-[13px] text-muted">
      {path ? (
        // currentColor, so the mark takes the chip's colour rather than the
        // brand's — fifteen brand palettes would overwhelm a two-colour page.
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="shrink-0 opacity-80"
        >
          <path d={path} />
        </svg>
      ) : null}
      {children}
    </span>
  );
}
