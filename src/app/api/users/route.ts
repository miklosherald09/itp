import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const user = await prisma.users.findUnique({
      where: { email: email ?? "" },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "error fetching user" }, { status: 444 });
  }
}
