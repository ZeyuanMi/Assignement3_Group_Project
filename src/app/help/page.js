"use client";

import { useRouter } from "next/navigation";

export default function HelpPage() {

    const router = useRouter();

    return (

        <div
            style={{
                maxWidth: "700px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid black",
                backgroundColor: "white",
                fontFamily: "monospace",
            }}
        >

            <h1
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                Help Center
            </h1>

            <p style={{ marginBottom: "20px" }}>
                Welcome to the Flight Booking System.
            </p>

            <h3>How to use this website:</h3>

            <ul
                style={{
                    marginTop: "15px",
                    lineHeight: "30px",
                }}
            >

                <li>
                    Register a new account.
                </li>

                <li>
                    Login with your email and password.
                </li>

                <li>
                    View available flights.
                </li>

                <li>
                    Book your flight ticket.
                </li>

                <li>
                    Manage your bookings.
                </li>

                <li>
                    Logout safely after using the website.
                </li>

            </ul>

            <button
                onClick={() => router.back()}
                style={{
                    marginTop: "30px",
                    padding: "10px 20px",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Back
            </button>

        </div>

    );
}