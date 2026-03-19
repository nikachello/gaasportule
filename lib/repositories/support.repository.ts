import prisma from "../prisma";

export const createSupportMessage = async ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  return prisma.supportMessage.create({
    data: { email, message },
  });
};
