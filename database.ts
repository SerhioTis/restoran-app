import 'server-only';
import { Pool } from 'pg';

console.log('process.env.PG_PORT',process.env.PG_PORT);


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

const connectToDB = async() => {

  const client = await pool.connect()
  if(!client) {
    throw new Error('cant connect to postrgresql');
  } 
  
  console.log('CONNECT TO DB SUCCESSFUL, PORT:', process.env.PG_PORT)
}

connectToDB()