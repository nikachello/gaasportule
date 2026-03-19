"use server";

import { utapi } from "@/lib/uploadthing";
import { requireAdmin } from "@/lib/admin";
import { log } from "@/lib/logger";

export const deleteUploadedFile = async (url: string) => {
  const session = await requireAdmin();

  try {
    const fileKey = url.split("/f/")[1];
    if (!fileKey) {
      log.warn("Invalid file URL for deletion", { url });
      return;
    }

    await utapi.deleteFiles(fileKey);
    log.info("File deleted", { fileKey, adminId: session.user.id });
  } catch (error) {
    log.error("Failed to delete file", {
      url,
      error: String(error),
    });
  }
};
