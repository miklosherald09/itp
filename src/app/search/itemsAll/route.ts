import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.items.findMany();

    return NextResponse.json(items);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "error fetching items" },
      { status: 444 }
    );
  }
}
