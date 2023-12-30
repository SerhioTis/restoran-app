import PostgresAdapter from '@auth/pg-adapter';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { getUserByEmail } from '@/actions/auth';
import { pool } from '@/database';

export const authOptions: NextAuthOptions = {
  adapter: PostgresAdapter(pool),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
  callbacks: {
    session: async ({ session }) => {
      if (session?.user?.email) {
        const userData = await getUserByEmail({
          email: session.user.email,
        });
        session.user.id = userData.id;
      }

      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await getUserByEmail(credentials);

        const userPassword = user.password;

        if (!user || !userPassword) {
          return null;
        }

        const isMatched = bcrypt.compare(credentials.password, userPassword);

        if (!isMatched) {
          return null;
        }

        return user;
      },
    }),
  ],
};
