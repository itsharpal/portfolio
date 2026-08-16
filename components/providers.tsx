"use client";

import { ThemeProvider } from "next-themes";

// `attribute="class"` is required — next-themes defaults to `data-theme`, which
// the dark variant in globals.css does not match. The remaining behaviour comes
// from next-themes' own defaults: defaultTheme="system", enableSystem=true.
export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
