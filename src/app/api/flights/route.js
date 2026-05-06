import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
//Get all flights
export async function GET() {
  try {
    const [flights] = await pool.query('SELECT * FROM flights');
    return NextResponse.json(flights);
  } catch (err) {
    return NextResponse.json({ msg: 'Failed to fetch flights' }, { status: 500 });
  }
}