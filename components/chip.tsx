export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-rule px-2 py-1 text-[13px] text-muted">
      {children}
    </span>
  );
}
