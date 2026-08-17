// A template remounts on every navigation into this segment, which is what lets
// the enter animation run. A layout would not — it persists across navigations.
export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-enter">{children}</div>;
}
