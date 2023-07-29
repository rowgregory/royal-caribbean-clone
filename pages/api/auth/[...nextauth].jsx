import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../prisma/client.ts";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await fetch(
          `https://royal-caribbean-clone-r26xosxca-rowgregory.vercel.app/api/user?endpoint=login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        if (response.ok) {
          const user = await response.json();
          if (user.message) {
            throw new Error(user.message);
          }
          return user;
        } else {
          const errorMessage = await response.json();
          const customError = {
            error: errorMessage.message || "Authentication failed",
            status: response.status,
          };
          return customError;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (session.user.name === undefined) return {};

      session.credentials = token;

      return session;
    },
    async signIn({ user }) {
      // Provide a custom error message if the sign-in fails
      if (user.error || user.message) {
        const error = new Error(user.error || user.message);
        error.status = 401;
        throw error;
      }
      return user;
    },
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);
