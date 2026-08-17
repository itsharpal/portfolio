// Sits below app/work/layout.tsx, so the `← work` header stays put while the
// case study body animates in — including when moving between case studies,
// where only the [slug] param changes.
export default function WorkTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-enter">{children}</div>;
}
