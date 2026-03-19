"use server";

import { CollectionStatus } from "@/lib/generated/prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { requireAdmin } from "../admin";

export const updateCollectionStatus = async ({
  id,
  status,
}: {
  id: string;
  status: CollectionStatus;
}) => {
  await requireAdmin();
  await prisma.collection.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/manage-gsp-m-c/collections");
  revalidatePath(`/manage-gsp-m-c/collections/${id}`);
  revalidatePath("/platform");
};

export const createCollection = async ({
  title,
  description,
  howWillHelp,
  goal,
  imageUrl,
  cityId,
  sportId,
}: {
  title: string;
  description: string;
  howWillHelp: string;
  goal: number;
  imageUrl: string;
  cityId: string;
  sportId: string;
}) => {
  await requireAdmin();
  try {
    await prisma.collection.create({
      data: {
        title,
        description,
        howWillHelp,
        goal,
        imageUrl,
        cityId,
        sportId,
      },
    });

    revalidatePath("/manage-gsp-m-c/collections");
    revalidatePath("/platform");

    return { success: true };
  } catch {
    return { error: "შექმნა ვერ მოხერხდა" };
  }
};
