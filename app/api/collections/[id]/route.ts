import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  const collection = await prisma.collection.findUnique({
    where: { id },
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
        orderBy: {
          amount: "desc",
        },
      },
    },
  });

  if (!collection) {
    return NextResponse.json(
      { error: "Collection not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(collection);
};
