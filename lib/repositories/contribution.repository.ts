import prisma from "../prisma";

export const getUserContributions = async (userId: string) => {
  return prisma.contribution.findMany({
    where: { userId },
    include: {
      collection: {
        include: {
          city: true,
          sport: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const getUserTotalContributed = async (userId: string) => {
  const result = await prisma.contribution.aggregate({
    where: { userId },
    _sum: { amount: true },
  });
  return result._sum.amount ?? 0;
};
