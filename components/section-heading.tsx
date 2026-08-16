export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[27.2px] font-[750] tracking-[-0.5px]">
      {children}
      <span className="text-accent">.</span>
    </h2>
  );
}
