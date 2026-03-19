import { toPublicUser } from "@/lib/mappers/user.mapper";
import prisma from "../prisma";

export const getCollectionById = async (id: string) => {
  const collection = await prisma.collection.findUnique({
    where: { id },
    include: {
      city: true,
      sport: true,
      documents: true,
      contributions: {
        include: {
          user: {
            select: { id: true, name: true, image: true, isAnonymous: true },
          },
        },
        orderBy: { amount: "desc" },
      },
    },
  });

  if (!collection) return null;

  return {
    ...collection,
    contributions: collection.contributions.map((c) => ({
      ...c,
      user: toPublicUser(c.user),
    })),
  };
};

export const getCollections = async ({
  cityId,
  sportId,
}: {
  cityId?: string;
  sportId?: string;
} = {}) => {
  const collections = await prisma.collection.findMany({
    where: {
      status: "ACTIVE",
      ...(cityId && { cityId }),
      ...(sportId && { sportId }),
    },
    include: {
      city: true,
      sport: true,
      documents: true,
      contributions: {
        include: {
          user: {
            select: { id: true, name: true, image: true, isAnonymous: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return collections.map((c) => ({
    ...c,
    contributions: c.contributions.map((contrib) => ({
      ...contrib,
      user: toPublicUser(contrib.user),
    })),
  }));
};

export const getSimilarCollections = async (
  sportId: string,
  excludeId: string
) => {
  const collections = await prisma.collection.findMany({
    where: {
      sportId,
      id: { not: excludeId },
      status: "ACTIVE",
    },
    include: {
      city: true,
      sport: true,
      documents: true,
      contributions: {
        include: {
          user: {
            select: { id: true, name: true, image: true, isAnonymous: true },
          },
        },
      },
    },
    take: 3,
  });

  return collections.map((c) => ({
    ...c,
    contributions: c.contributions.map((contrib) => ({
      ...contrib,
      user: toPublicUser(contrib.user),
    })),
  }));
};
