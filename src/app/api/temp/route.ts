import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.users.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 444 }
    );
  }
}
