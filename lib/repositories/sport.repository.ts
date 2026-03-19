import prisma from "../prisma";

export const getSports = async () => {
  return prisma.sportCategory.findMany({
    orderBy: { name: "asc" },
  });
};
