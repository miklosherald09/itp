import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await prisma.item.findMany({
      where: { userId: Number(id), type: "Money" },
    });

    // COMPUTE TOTAL VALUE
    const total = response?.reduce((total, item) => {
      return (item?.price ?? 0) + total;
    }, 0);

    return NextResponse.json({ total });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error getting item offers" },
      { status: 401 }
    );
  }
}
