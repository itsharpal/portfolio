// All structured content for the site lives here.
//
// Client products are never named. `clients` below holds the only two approved
// descriptors; nothing else anywhere in this repository may describe a client.
// Reversing that decision is an edit to this object and nothing more.

export const clients = {
  cards: "a multi-tenant digital business card platform",
  books: "a Shopify book-dropshipping platform serving around 650 merchant stores",
} as const;

export const site = {
  name: "Harpal Chapatwala",
  role: "Backend engineer",
  location: "Surat, India",
  // Production origin. Metadata, sitemap and robots all derive from this, so a
  // custom domain later is one edit.
  url: "https://harpal-chapatwala.vercel.app",
  email: "harpal.chapatwala.official@gmail.com",
  linkedin: "https://www.linkedin.com/in/harpalvc",
  github: "https://github.com/itsharpal",
  resume: "/resume.pdf",
  bio: "Backend engineer at AppsStoneLab Technologies in Surat, working in TypeScript and Node.js. Most of my work is system and schema design — deciding how data should be modelled, migrating it when the model turns out to be wrong, keeping queries fast as tables grow, and integrating billing and commerce platforms. When something is slow, the answer is usually the query, sometimes the index, and occasionally an assumption I made six months ago.",
};

export type WorkItem = {
  n: string;
  slug: string;
  title: string;
  meta: string;
  hook: string;
};

export const work: WorkItem[] = [
  {
    n: "01",
    slug: "licensing-unit",
    title: "Moving the licensing unit off users",
    meta: "Judgment during a breaking change",
    hook: "One record was standing in for two things: the person, and the card they published. Pulling them apart changed what the product billed for, without breaking the public URLs or the reporting already attached to them.",
  },
  {
    n: "02",
    slug: "status-columns",
    title: "Making failure legible",
    meta: "Modelling data for operability",
    hook: "One status field stood in for several independent steps, so a failure could not be located or retried on its own. Modelling each step separately turned an opaque field into something you could query.",
  },
  {
    n: "03",
    slug: "bulk-mutations",
    title: "Deleting a class of sync failure",
    meta: "Removing a failure mode",
    hook: "Several background jobs repeated the same work in an order nothing guaranteed. Batching them into a single call removed the failure mode instead of retrying around it.",
  },
  {
    n: "04",
    slug: "a-table-for-one-query",
    title: "A table for one query",
    meta: "Performance under real data volume",
    hook: "A routine sync was joining several large tables every time it ran, and at real data volume the cost showed. I built a table shaped for that one question and left everything else alone.",
  },
];

export const roles = [
  {
    company: "AppsStoneLab Technologies",
    title: "Software Engineer (SDE-1)",
    period: "April 2026 — Present",
    location: "Surat, India",
    stack: [
      "TypeScript",
      "AdonisJS",
      "PlanetScale",
      "Shopify Admin API",
      "Redis",
      "Bull Queue",
      "Stripe",
    ],
  },
  {
    company: "AppsStoneLab Technologies",
    title: "NodeJS Developer Intern",
    period: "January 2026 — April 2026",
    location: "Surat, India",
    stack: ["TypeScript", "AdonisJS", "MySQL", "ChargeBee", "Next.js"],
  },
];

export const skills = [
  {
    group: "Languages & runtime",
    items: ["TypeScript", "JavaScript", "Node.js", "AdonisJS", "Python"],
  },
  {
    group: "Data",
    items: [
      "MySQL",
      "PlanetScale",
      "Redis",
      "Lucid ORM",
      "Query optimisation",
      "Indexing",
      "Schema migration",
    ],
  },
  {
    group: "Integrations & billing",
    items: ["Stripe", "ChargeBee", "Shopify Admin API", "HubSpot", "AWS S3"],
  },
  {
    group: "Tooling & delivery",
    items: ["Docker", "Git", "Japa", "Bull Queue", "Next.js", "React"],
  },
];

export const projects = [
  {
    name: "E-Commerce Backend API",
    stack: ["AdonisJS", "TypeScript", "Stripe", "MySQL", "Redis"],
    description:
      "A production-grade REST API covering catalogue, cart, orders, reviews and payments. Stripe webhooks are deduplicated and orders created transactionally, so a retry can never double-charge or double-decrement stock, and refunds restore inventory atomically. Seller capabilities sit behind active-subscription middleware with per-tier limits, over multi-role auth with signed-URL email verification and rate-limited login.",
    // Deliberately null. The public repository of this name is a much smaller
    // Express project, not the AdonisJS one described here — spec §4.
    repo: null,
  },
];
