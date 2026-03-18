import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cityId = searchParams.get("cityId");
  const sportId = searchParams.get("sportId");

  const collections = await prisma.collection.findMany({
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
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(collections);
};
