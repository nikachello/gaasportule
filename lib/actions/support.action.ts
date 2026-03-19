"use server";

import { revalidatePath } from "next/cache";
import { createSupportMessage } from "@/lib/repositories/support.repository";
import prisma from "../prisma";
import { requireAdmin } from "../admin";

export const submitSupportMessage = async ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  try {
    await createSupportMessage({ email, message });
    return { success: true };
  } catch {
    return { success: false, error: "შეტყობინება ვერ გაიგზავნა" };
  }
};

export const markSupportMessageAsRead = async (id: string) => {
  await requireAdmin();

  await prisma.supportMessage.update({
    where: { id },
    data: { isRead: true },
  });

  revalidatePath("/manage-gsp-m-c/support");
  revalidatePath("/manage-gsp-m-c");
};
