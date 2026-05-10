import { NextResponse }
    from "next/server";

import pool
    from "../../../../lib/db";

import { hashPassword }
    from "../../../../lib/auth";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    const hashedPwd = await hashPassword(password);

    await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPwd, 'user']
    );

    return NextResponse.json({ msg: 'Register success' }, { status: 201 });
  } catch (err) {

      console.log(err);

      return NextResponse.json(

          {
              msg: "Register failed"
          },

          {
              status: 500
          }

      );

  }
}