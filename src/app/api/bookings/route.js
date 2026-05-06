import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    const [bookings] = await pool.query(
      'SELECT * FROM bookings WHERE user_id = ?',
      [userId]
    );
    return NextResponse.json(bookings);
  } catch (err) {
    return NextResponse.json({ msg: 'Failed to fetch bookings' }, { status: 500 });
  }
}