import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const description = `${site.role} at AppsStoneLab Technologies. Written case studies on schema migration, data modelling and query performance.`;

export const metadata: Metadata = {
  // Without this, Open Graph URLs resolve against localhost and every share
  // renders no card — the exact bug the reference site ships (spec §5.2).
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
    url: site.url,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-mono text-[18px] antialiased">
        <Providers>
          {/* The nav differs per section — the home page gets the full nav,
              case studies get `← work` — so each section layout renders its
              own. Everything common stays here. */}
          <div className="mx-auto max-w-2xl px-6">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
