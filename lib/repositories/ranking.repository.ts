import prisma from "../prisma";

export const getRankings = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      isAnonymous: true,
      contributions: {
        select: { amount: true },
      },
    },
  });

  return users
    .map((u) => ({
      id: u.id,
      name: u.isAnonymous ? "ანონიმური" : u.name,
      image: u.isAnonymous ? null : u.image,
      amount: u.contributions.reduce((sum, c) => sum + c.amount, 0),
    }))
    .filter((u) => u.amount > 0)
    .sort((a, b) => b.amount - a.amount);
};
