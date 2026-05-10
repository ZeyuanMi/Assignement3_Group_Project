import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {

    try {

        // Delete session cookie
        cookies().delete("user");

        return NextResponse.json(
            {msg: "Logout successful"},
            {status: 200}
        );


    }



}
