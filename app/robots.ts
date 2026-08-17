import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// The résumé names both clients. It stays reachable for a human and invisible
// to search — this disallow is half of that; the `X-Robots-Tag: noindex` header
// in next.config.ts is the other half. Neither is sufficient alone.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: site.resume,
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
