"use server";

import { revalidatePath } from "next/cache";
import { createSupportMessage } from "@/lib/repositories/support.repository";
import { requireAdmin } from "@/lib/admin";
import { log } from "@/lib/logger";
import prisma from "../prisma";

export const submitSupportMessage = async ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  try {
    await createSupportMessage({ email, message });
    log.info("Support message submitted", { email });
    return { success: true };
  } catch (error) {
    log.error("Failed to submit support message", {
      email,
      error: String(error),
    });
    return { success: false, error: "შეტყობინება ვერ გაიგზავნა" };
  }
};

export const markSupportMessageAsRead = async (id: string) => {
  const session = await requireAdmin();

  try {
    await prisma.supportMessage.update({
      where: { id },
      data: { isRead: true },
    });

    log.info("Support message marked as read", {
      messageId: id,
      adminId: session.user.id,
    });

    revalidatePath("/manage-gsp-m-c/support");
    revalidatePath("/manage-gsp-m-c");
  } catch (error) {
    log.error("Failed to mark support message as read", {
      messageId: id,
      error: String(error),
    });
  }
};
