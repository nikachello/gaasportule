import prisma from "../prisma";

export const getCollections = async ({
  cityId,
  sportId,
}: {
  cityId?: string;
  sportId?: string;
} = {}) => {
  return prisma.collection.findMany({
    where: {
      status: "ACTIVE",
      ...(cityId && { cityId }),
      ...(sportId && { sportId }),
    },
    include: {
      city: true,
      sport: true,
      contributions: {
        include: {
          user: {
            select: { id: true, name: true, image: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const getCollectionById = async (id: string) => {
  return prisma.collection.findUnique({
    where: { id },
    include: {
      city: true,
      sport: true,
      documents: true,
      contributions: {
        include: {
          user: {
            select: { id: true, name: true, image: true },
          },
        },
        orderBy: { amount: "desc" },
      },
    },
  });
};

export const getSimilarCollections = async (
  sportId: string,
  excludeId: string
) => {
  return prisma.collection.findMany({
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
            select: { id: true, name: true, image: true },
          },
        },
      },
    },
    take: 3,
  });
};
