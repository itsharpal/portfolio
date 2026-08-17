import { CleanHash } from "@/components/clean-hash";
import { Nav } from "@/components/nav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CleanHash />
      <Nav />
      <main>{children}</main>
    </>
  );
}
