import { getSession } from "@/lib/session";
import { SessionProvider } from "@/providers/session-provider";
export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
