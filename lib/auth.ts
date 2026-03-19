import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    additionalFields: {
      role: {
        type: "string",
      },
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
      },
    },
  },
});
