import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

//Inquire all flights
export async function GET() {
  const [flights] = await pool.query('SELECT * FROM flights');
  return NextResponse.json(flights);
}

// Add a new flight
export async function POST(req) {
  const { flight_no, departure, arrival, date, price } = await req.json();
  await pool.query(
    'INSERT INTO flights (flight_no, departure, arrival, date, price) VALUES (?,?,?,?,?)',
    [flight_no, departure, arrival, date, price]
  );
  return NextResponse.json({ msg: 'Flight added' }, { status: 201 });
}