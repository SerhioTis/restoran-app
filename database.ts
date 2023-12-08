import 'server-only';
import { Pool } from 'pg';

if (
  !process.env.PG_USER ||
  !process.env.PG_HOST ||
  !process.env.PG_DATABASE ||
  !process.env.PG_PASSWORD ||
  !process.env.PG_PORT
)
  throw new Error('Invalid configs for postrgresql');

export const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: +process.env.PG_PORT,
});
