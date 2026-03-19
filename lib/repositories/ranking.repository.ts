import prisma from "../prisma";

export const getRankings = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      contributions: {
        select: { amount: true },
      },
    },
    orderBy: {
      contributions: {
        _count: "desc",
      },
    },
  });
};
