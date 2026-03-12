import { GlassNavbar } from "@/components/landing/glassy-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <GlassNavbar />
      {children}
    </div>
  );
}
