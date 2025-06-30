// lib/customAdapter.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AdapterUser } from "next-auth/adapters";

export function CustomPrismaAdapter(prisma: PrismaClient) {
  const baseAdapter = PrismaAdapter(prisma);

  return {
    ...baseAdapter,
    async createUser(data: Omit<AdapterUser, "id">) {
      const user = await prisma.user.create({
        data: {
          email: data.email,
          emailVerified: data.emailVerified
            ? data.emailVerified.toISOString()
            : null,
          name: data.name || "",
          profileImage: data.image || "",
          roles: {
            connect: {
              name: "user",
            },
          },
        },
      });

      return user;
    },
  };
}
