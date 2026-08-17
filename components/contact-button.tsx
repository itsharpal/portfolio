import { logos } from "@/content/logos";

// Stroke icons for the two destinations that have no brand mark. LinkedIn's
// mark is not in the icon set used elsewhere (removed over trademark), so it
// uses its wordmark letters rather than a hand-drawn approximation.
const stroke = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
};

function Glyph({ icon }: { icon: ContactIcon }) {
  if (icon === "github") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d={logos.GitHub} />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <span
        aria-hidden="true"
        className="w-[15px] shrink-0 text-center text-[13px] font-[750] leading-none"
      >
        in
      </span>
    );
  }

  if (icon === "resume") {
    return (
      <svg {...stroke}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    );
  }

  return (
    <svg {...stroke}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export type ContactIcon = "email" | "linkedin" | "github" | "resume";

export function ContactButton({
  href,
  label,
  icon,
  external = true,
}: {
  href: string;
  label: string;
  icon: ContactIcon;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2.5 border border-rule px-4 py-2.5 text-[15px] text-muted transition-colors hover:border-fg hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Glyph icon={icon} />
      <span>{label}</span>
      <span className="ml-1 transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
