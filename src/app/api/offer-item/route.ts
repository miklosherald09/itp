import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await prisma.offerItem.createMany({ data: body });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error create offer item" },
      { status: 401 }
    );
  }
}
