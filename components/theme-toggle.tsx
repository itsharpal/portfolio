"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const order = ["light", "dark", "system"] as const;
type Theme = (typeof order)[number];

// Reports false during SSR and hydration, true afterwards. Defined outside the
// component so the subscription is stable across renders.
const neverChanges = () => () => {};
const onClient = () => true;
const onServer = () => false;

function Icon({ theme }: { theme: Theme }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (theme === "light") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg {...common}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </svg>
  );
}

export function ThemeToggle() {
  // useTheme returns undefined on the server, so the icon cannot be rendered
  // until mount. The button keeps its size either way, so the nav never shifts.
  const mounted = useSyncExternalStore(neverChanges, onClient, onServer);
  const { theme, setTheme } = useTheme();

  const current = (mounted ? (theme as Theme) : undefined) ?? "system";
  const next = order[(order.indexOf(current) + 1) % order.length];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={mounted ? `Theme: ${current}. Switch to ${next}.` : "Theme"}
      className="flex size-9 items-center justify-center text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {mounted ? <Icon theme={current} /> : <span className="size-[18px]" />}
    </button>
  );
}
