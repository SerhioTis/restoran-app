import PostgresAdapter from '@auth/pg-adapter';
import bcrypt from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CreadentialsProvider from 'next-auth/providers/credentials';

import { getUserByEmail } from '@/actions/auth';
import { pool } from 'database';

const authOptions: NextAuthOptions = {
  adapter: PostgresAdapter(pool),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  providers: [
    CreadentialsProvider({
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
        const userPassword = user.rows?.[0]?.password;

        if (!user.rowCount || !userPassword) {
          return null;
        }

        const isMatched = bcrypt.compare(credentials.password, userPassword);

        if (!isMatched) {
          return null;
        }

        return user.rows[0];
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
