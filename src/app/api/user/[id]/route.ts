import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await prisma.item.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "error fetching user" }, { status: 444 });
  }
}
