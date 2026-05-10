import { NextResponse }
    from "next/server";

import pool
    from "../../../../lib/db";

import { comparePassword }
    from "../../../../lib/auth";

export async function POST(req) {

    try {

        const {
            email,
            password
        } = await req.json();

        // Find user
        const [rows] = await pool.query(

            "SELECT * FROM users WHERE email = ?",

            [email]

        );

        const user = rows[0];

        // User not found
        if (!user) {

            return NextResponse.json(

                {
                    msg: "User not found"
                },

                {
                    status: 404
                }

            );

        }

        // Compare password
        const isMatch =
            await comparePassword(

                password,
                user.password

            );

        // Wrong password
        if (!isMatch) {

            return NextResponse.json(

                {
                    msg: "Wrong password"
                },

                {
                    status: 401
                }

            );

        }

        // LOGIN SUCCESS
        return NextResponse.json(

            {

                msg: "Login success",

                user: {

                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,

                }

            },

            {
                status: 200
            }

        );

    } catch (err) {

        console.log(err);

        return NextResponse.json(

            {
                msg: "Server error"
            },

            {
                status: 500
            }

        );

    }

}