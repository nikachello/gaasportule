"use server";

import { createSupportMessage } from "@/lib/repositories/support.repository";

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
  } catch (error) {
    return { success: false, error: "შეტყობინება ვერ გაიგზავნა" };
  }
};
