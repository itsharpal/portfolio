import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
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

export const metadata: Metadata = {
  title: "Harpal Chapatwala — Backend engineer",
  description:
    "Backend engineer at AppsStoneLab Technologies. Written case studies on licensing migrations, data modelling and query performance.",
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
