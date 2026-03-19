import prisma from "../prisma";

export const getCities = async () => {
  return prisma.city.findMany({
    orderBy: { name: "asc" },
  });
};
