"use server";

import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export const updateUserProfile = async ({
  name,
  isAnonymous,
}: {
  name: string;
  isAnonymous: boolean;
}) => {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  await prisma.user.update({
    where: { id: session.user.id },
    data: { name, isAnonymous },
  });

  revalidatePath("/platform");
  return { success: true };
};
