import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await pool.query('DELETE FROM bookings WHERE id = ?', [id]);
    return NextResponse.json({ msg: 'Booking cancelled' });
  } catch (err) {
    return NextResponse.json({ msg: 'Cancel failed' }, { status: 500 });
  }
}