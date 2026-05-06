import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET() {
  try {
    const [users] = await pool.query('SELECT id, name, email, role, created_at FROM users');
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ msg: 'Failed to fetch users' }, { status: 500 });
  }
}