import { pool } from '@/database';
import { User } from '@/types/user';

interface Credential {
  email: string;
}

export const getUserByEmail = async (credentials: Credential) => {
  const user = await pool.query<User>('SELECT * FROM users WHERE email = $1', [
    credentials.email,
  ]);

  return user?.rows?.[0] ?? null;
};
