// Fails the build if a client product name reaches the output.
//
// This is the only automated test in the project, because it is the only
// failure with consequences that cannot be undone by a later commit — once a
// name is indexed, it is out.
//
// Scope note: public/resume.pdf legitimately contains both client names. It is
// protected by `X-Robots-Tag: noindex` and a robots.txt disallow, not by
// redaction, so binary assets are deliberately not scanned.

import { readdir, readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const FORBIDDEN = ["onetapconnect", "bookscloud", "splitshops", "eduraiser"];

// Text formats a crawler or reader can actually see.
const SCANNED = new Set([".html", ".js", ".mjs", ".json", ".txt", ".xml", ".css", ".rsc"]);

const ROOTS = [".next/server", ".next/static", "app", "components", "content"];

const SKIP_DIRS = new Set(["node_modules", ".git", "cache"]);

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return; // root absent (e.g. no build yet) — nothing to scan
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(path);
    } else if (SCANNED.has(extname(entry.name)) || extname(entry.name) === ".tsx" || extname(entry.name) === ".ts" || extname(entry.name) === ".mdx") {
      yield path;
    }
  }
}

const hits = [];

for (const root of ROOTS) {
  try {
    await stat(root);
  } catch {
    continue;
  }
  for await (const file of walk(root)) {
    const text = (await readFile(file, "utf8")).toLowerCase();
    for (const name of FORBIDDEN) {
      if (text.includes(name)) {
        hits.push({ file, name });
      }
    }
  }
}

if (hits.length > 0) {
  console.error("\n✗ Confidentiality check failed — client name in output:\n");
  for (const hit of hits) {
    console.error(`  ${hit.name}  →  ${hit.file}`);
  }
  console.error(
    "\nUse the descriptors in content/site.ts instead. Nothing else may describe a client.\n",
  );
  process.exit(1);
}

console.log("✓ Confidentiality check passed — no client name in output.");
