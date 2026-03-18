import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const sports = await prisma.sportCategory.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(sports);
};
