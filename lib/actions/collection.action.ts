"use server";

import { CollectionStatus } from "@/lib/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { log } from "@/lib/logger";
import prisma from "../prisma";

export const updateCollectionStatus = async ({
  id,
  status,
}: {
  id: string;
  status: CollectionStatus;
}) => {
  const session = await requireAdmin();

  try {
    await prisma.collection.update({
      where: { id },
      data: { status },
    });

    log.info("Collection status updated", {
      collectionId: id,
      status,
      adminId: session.user.id,
    });

    revalidatePath("/manage-gsp-m-c/collections");
    revalidatePath(`/manage-gsp-m-c/collections/${id}`);
    revalidatePath("/platform");
  } catch (error) {
    log.error("Failed to update collection status", {
      collectionId: id,
      error: String(error),
    });
  }
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
  const session = await requireAdmin();

  try {
    const collection = await prisma.collection.create({
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

    log.info("Collection created", {
      collectionId: collection.id,
      title,
      adminId: session.user.id,
    });

    revalidatePath("/manage-gsp-m-c/collections");
    revalidatePath("/platform");

    return { success: true };
  } catch (error) {
    log.error("Failed to create collection", {
      title,
      error: String(error),
    });
    return { error: "შექმნა ვერ მოხერხდა" };
  }
};

export const addCollectionDocument = async ({
  collectionId,
  name,
  url,
}: {
  collectionId: string;
  name: string;
  url: string;
}) => {
  const session = await requireAdmin();

  try {
    const doc = await prisma.collectionDocument.create({
      data: { collectionId, name, url },
    });

    log.info("Collection document added", {
      collectionId,
      documentId: doc.id,
      name,
      adminId: session.user.id,
    });

    revalidatePath(`/manage-gsp-m-c/collections/${collectionId}`);
    revalidatePath(`/platform/collection/${collectionId}`);

    return doc;
  } catch (error) {
    log.error("Failed to add collection document", {
      collectionId,
      error: String(error),
    });
    return null;
  }
};

export const removeCollectionDocument = async (id: string) => {
  const session = await requireAdmin();

  try {
    await prisma.collectionDocument.delete({ where: { id } });

    log.info("Collection document removed", {
      documentId: id,
      adminId: session.user.id,
    });
  } catch (error) {
    log.error("Failed to remove collection document", {
      documentId: id,
      error: String(error),
    });
  }
};
