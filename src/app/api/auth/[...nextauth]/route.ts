import { prisma } from "@/lib/prisma";
import NextAuth, { Account, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }: { account: Account; profile: Profile }) {
      if (!profile?.email) throw new Error("no profle");

      await prisma.users.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
        },
        update: {
          name: profile.name,
        },
      });
      return true;
    },
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
