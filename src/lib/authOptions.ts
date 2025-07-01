// src/lib/authOptions.ts
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import { CustomPrismaAdapter } from "./customAdapter";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string | null;
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

export const authOptions = {
  adapter: CustomPrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        fullName: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        mode: { label: "Mode", type: "text" },
      },
      async authorize(credentials) {
        const isSignup = credentials?.mode === "login" ? true : false;
        console.log("isSignup", isSignup);
        console.log("credentials?.view", credentials);
        if (isSignup) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user || !user.password) {
            throw new Error("user does not exists please login first");
          }

          // Compare password (you should hash passwords with bcrypt)
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            profileImage: user.profileImage,
          };
        } else {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }

          let user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          // Attempt to find a default role (e.g., "user") for new users
          let userRole = await prisma.role.findUnique({
            where: { name: "user" },
          });

          if (!user) {
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            user = await prisma.user.create({
              data: {
                email: credentials.email,
                name: credentials.fullName,
                password: hashedPassword,
                profileImage: "",
                roles: { connect: { id: userRole?.id } },
              },
            });
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: userRole?.name,
            profileImage: user?.profileImage,
          };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          profileImage: profile.picture,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: import("next-auth/jwt").JWT;
      user?: import("next-auth").User;
    }) {
      // Only on first login
      if (user && user.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { id: true, roles: { select: { name: true } } },
        });
        if (dbUser?.id) {
          token.id = dbUser.id;
          token.role = dbUser.roles?.name || null;
        }
      }

      return token;
    },
    async signIn() {
      return true;
    },
    async session({
      session,
      token,
    }: {
      session: import("next-auth").Session;
      token: import("next-auth/jwt").JWT;
    }) {
      if (token && session.user) {
        session.user.id = token?.id || null;
        session.user.role = token?.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
