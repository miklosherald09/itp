import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { AcceptOfferParamsT } from "@/types/offer";

export async function PUT(request: NextRequest) {
  try {
    const payload = await request.json();
    const { status, offerId }: AcceptOfferParamsT = payload;

    // UPDATE OFFER STATUS
    if (!status) throw new Error("no status");

    const offer = await prisma.offer.update({
      where: { id: Number(offerId) },
      data: { status },
    });

    if (status === "ACCEPTED") {
      // UPDATE EXCHANGED ITEM TO ITEM OWNER
      const exhanged = await prisma.offerItem.findMany({
        where: { offerId: offer?.id },
      });

      // GET ORIGINAL ITEM OWNER
      const item = await prisma.item.findUnique({
        where: { id: offer?.itemId },
      });

      const itemIds = exhanged?.map((item) => item?.itemId);

      console.log("itemIds", itemIds, item);

      await prisma.item.updateMany({
        where: { id: { in: itemIds } },
        data: { userId: item?.userId },
      });

      // UPDATE OFFER ITEM TO OFFERER
      await prisma.item.update({
        where: { id: offer?.itemId },
        data: { userId: offer?.userId },
      });
    }

    return NextResponse.json({ offer });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error accepting offer" },
      { status: 401 }
    );
  }
}
