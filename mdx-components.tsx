import type { MDXComponents } from "mdx/types";

// Required by @next/mdx with the App Router — it will not work without this
// file. Case study prose is set in the sans face by app/work/layout.tsx; these
// only carry the rhythm and the rules between sections.
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-14 font-mono text-[20px] font-[750] tracking-[-0.4px]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-10 font-mono text-[17px] font-[750]" {...props} />
  ),
  p: (props) => <p className="mt-5 text-[19px] leading-[1.7]" {...props} />,
  ul: (props) => (
    <ul className="mt-5 list-disc space-y-2 pl-5 text-[19px] leading-[1.7]" {...props} />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 text-[19px] leading-[1.7]"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  // The quoted passages are the client's words, not Harpal's — they need to
  // read as someone else speaking.
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-rule pl-5 text-muted [&>p]:text-[17px] [&>p:first-child]:mt-0"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-[650]" {...props} />,
  hr: () => <hr className="mt-12 border-rule" />,
  a: (props) => (
    <a
      className="underline underline-offset-4 transition-colors hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
