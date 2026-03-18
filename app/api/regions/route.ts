import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cities = await prisma.city.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(cities);
};
