"use server";

import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { log } from "@/lib/logger";
import prisma from "../prisma";

export const updateUserProfile = async ({
  name,
  isAnonymous,
}: {
  name: string;
  isAnonymous: boolean;
}) => {
  const session = await getSession();

  if (!session) {
    log.warn("Unauthorized profile update attempt");
    return { error: "Unauthorized" };
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { name, isAnonymous },
    });

    log.info("User profile updated", { userId: session.user.id, isAnonymous });
    revalidatePath("/platform");
    return { success: true };
  } catch (error) {
    log.error("Failed to update user profile", {
      userId: session.user.id,
      error: String(error),
    });
    return { error: "შეცდომა" };
  }
};
