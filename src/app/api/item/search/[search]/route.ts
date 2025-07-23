import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ search: string }> }
) {
  try {
    const { search } = await params;

    const decoded = decodeURIComponent(search);
    // console.log("searchxx", decoded);
    const trimed = decoded.replace(/ {2,}/g, " ").trim();
    const concat = trimed?.replace(" ", " | ");

    const response = await prisma.item.findMany({
      where: { name: { search: concat } },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error searching items" },
      { status: 444 }
    );
  }
}
