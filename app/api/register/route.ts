import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import { pool } from '@/database';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password)
    return new NextResponse(
      JSON.stringify({
        message: 'Missing some fields: name, email, password',
        error: 'validation',
      }),
      {
        status: 400,
      },
    );

  const isExist = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);

  if (isExist.rowCount)
    return new NextResponse(
      JSON.stringify({ message: 'User already exist', error: 'exist' }),
      { status: 400 },
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await pool.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)',
    [name, email, hashedPassword, 'customer'],
  );

  const isSuccess = !!createdUser.rowCount;

  return new NextResponse(
    isSuccess
      ? JSON.stringify({ message: 'User successfuly created' })
      : JSON.stringify({ message: 'Something went wrong', error: 'smtWrong' }),
    {
      status: isSuccess ? 201 : 500,
    },
  );
}
