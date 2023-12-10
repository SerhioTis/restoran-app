import 'server-only';
import { Pool } from 'pg';

if (
  // !(
  //   process.env.PG_USER &&
  //   process.env.PG_HOST &&
  //   process.env.PG_DATABASE &&
  //   process.env.PG_PASSWORD &&
  //   process.env.PG_PORT
  // ) ||
  !process.env.POSTGRES_URL
)
  throw new Error('Invalid configs for postrgresql');

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});
