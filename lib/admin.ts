import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const requireAdmin = async () => {
  const session = await getSession();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/platform");
  }
  return session;
};
