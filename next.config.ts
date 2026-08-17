import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // .mdx is listed so the loader applies to the case study bodies in
  // content/work/. Those are imported by the [slug] route, not routed to
  // directly — there are no .mdx files under app/.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
