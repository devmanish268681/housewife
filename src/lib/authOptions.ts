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
        fullName: { label: "Full Name", type: "text" },
        password: { label: "Password", type: "password" },
        phoneNumber: { label: "Phone Number", type: "text" },
        otp: { label: "OTP", type: "text" },
        mode: { label: "Mode", type: "text" },
      },
      async authorize(credentials) {
        const mode = credentials?.mode;

        // ----------------- 1. OTP LOGIN -------------------
        if (mode === "otp") {
          const phone = credentials?.phoneNumber;
          const fullName = credentials?.fullName;
          const otp = credentials?.otp;

          if (!phone || !otp) {
            throw new Error("PHONE_AND_OTP_REQUIRED");
          }

          const otpRecord = await prisma.otpCode.findFirst({
            where: {
              phoneNumber: phone,
              otpHash: otp,
              expiresAt: { gte: new Date() }, // check not expired
            },
            orderBy: { createdAt: "desc" },
          });

          if (!otpRecord) {
            throw new Error("INVALID_OR_EXPIRED_OTP");
          }

          // Optional: delete used OTP
          await prisma.otpCode.delete({ where: { id: otpRecord.id } });

          // Find or create user
          let user = await prisma.user.findFirstOrThrow({
            where: { phoneNumber: phone },
          });

          if (!user) {
            user = await prisma.user.create({
              data: {
                phoneNumber: phone,
                name: fullName || "",
                email: null,
                password: null,
                profileImage: "",
                roles: {
                  connect: {
                    name: "user", // default role
                  },
                },
              },
            });
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            profileImage: user.profileImage,
          };
        }

        // ----------------- 2. EMAIL LOGIN -------------------
        if (mode === "signin") {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }

          const user = await prisma.user.findFirstOrThrow({
            where: { email: credentials.email },
          });

          if (!user || !user.password) {
            throw new Error("USER_NOT_FOUND");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error("INVALID_CREDENTIALS");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            profileImage: user.profileImage,
          };
        }

        // ----------------- 3. SIGNUP -------------------
        if (mode === "signup") {
          if (
            !credentials?.fullName ||
            !credentials?.email ||
            !credentials?.password
          ) {
            throw new Error("MISSING_FIELDS");
          }

          let user = await prisma.user.findFirstOrThrow({
            where: { email: credentials.email },
          });

          const userRole = await prisma.role.findUnique({
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

        throw new Error("INVALID_MODE");
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
  pages: {
    error: "/auth/error",
  },
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
        const dbUser = await prisma.user.findFirstOrThrow({
          where: { email: user.email ?? undefined },
          select: {
            id: true,
            roles: { select: { name: true } },
            profileImage: true,
          },
        });
        if (dbUser?.id) {
          token.id = dbUser.id;
          token.role = dbUser.roles?.name || null;
          token.profileImage = dbUser.profileImage || null;
        }
      }

      return token;
    },
    async signIn({
      user,
      account,
    }: {
      user: import("next-auth").User;
      account: import("next-auth").Account | null;
    }) {
      // if (account?.provider === "credentials") {
      //   let existingUser = await prisma.user.findUnique({
      //     where: { email: user.email ?? undefined },
      //   });

      //   if (!existingUser?.emailVerified) {
      //     throw new Error("EMAIL_NOT_VERIFIED");
      //   }
      // }
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
        session.user.image = token?.profileImage as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
