import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // .mdx is listed so the loader applies to the case study bodies in
  // content/work/. Those are imported by the [slug] route, not routed to
  // directly — there are no .mdx files under app/.
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  async headers() {
    return [
      {
        // The résumé names both clients. It stays reachable for a human and
        // invisible to search. This header and the robots.txt disallow are two
        // halves of one control — ship them together or neither.
        source: "/resume.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
