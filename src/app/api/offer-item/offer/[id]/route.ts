import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const response = await prisma.offerItem.findMany({
      where: { offerId: Number(id) },
      include: { item: true },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error searching items" },
      { status: 401 }
    );
  }
}
