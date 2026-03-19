"use server";

import { utapi } from "@/lib/uploadthing";
import { requireAdmin } from "@/lib/admin";

export const deleteUploadedFile = async (url: string) => {
  await requireAdmin();

  // extract file key from URL
  // https://jruymqxm7o.ufs.sh/f/FILE_KEY
  const fileKey = url.split("/f/")[1];
  if (!fileKey) return;

  await utapi.deleteFiles(fileKey);
};
