import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../prisma/client.ts';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const response = await fetch(
          `http://localhost:3000/api/user?endpoint=login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          }
        );

        if (response.ok) {
          const user = await response.json();

          return user;
        } else {
          throw new Error('User login failed');
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.credentials = token;

      return session;
    },
  },
  session: {
    // Set to jwt in order to CredentialsProvider works properly
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
};

export default NextAuth(authOptions);
