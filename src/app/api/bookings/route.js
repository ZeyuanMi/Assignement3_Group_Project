import { NextResponse }
    from "next/server";

import pool
    from "../../../lib/db";


// GET bookings
export async function GET(req) {

    try {

        const { searchParams }
            = new URL(req.url);

        const userId =
            searchParams.get("userId");

        const [bookings]
            = await pool.query(

            "SELECT * FROM bookings WHERE user_id = ?",

            [userId]

        );

        return NextResponse.json(
            bookings
        );

    } catch (err) {

        console.log(err);

        return NextResponse.json(

            {
                msg: "Failed"
            },

            {
                status: 500
            }

        );

    }

}


// POST booking
export async function POST(req) {

    try {

        const {
            user_id,
            flight_id
        } = await req.json();

        await pool.query(

            "INSERT INTO bookings (user_id, flight_id) VALUES (?, ?)",

            [
                user_id,
                flight_id
            ]

        );

        return NextResponse.json(

            {
                msg: "Booking success"
            }

        );

    } catch (err) {

        console.log(err);

        return NextResponse.json(

            {
                msg: "Booking failed"
            },

            {
                status: 500
            }

        );

    }

}