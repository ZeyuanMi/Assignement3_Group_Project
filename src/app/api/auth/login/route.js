import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';
import { comparePassword, generateToken } from '../../../../lib/auth';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (!user) return NextResponse.json({ msg: 'User not found' }, { status: 404 });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return NextResponse.json({ msg: 'Invalid password' }, { status: 401 });

    const token = generateToken(user);
    return NextResponse.json({
      token,
      user: { id: user.id, email: user.email, role: user.role }
    });
  } catch (err) {
    return NextResponse.json({ msg: 'Server error' }, { status: 500 });
  }
}