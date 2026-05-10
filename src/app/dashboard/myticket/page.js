"use client";

import { useEffect, useState }
    from "react";

export default function TicketsPage() {

    // Tickets state
    const [tickets, setTickets]
        = useState([]);

    // Load tickets
    useEffect(() => {

        loadTickets();

    }, []);

    // Get bookings
    async function loadTickets() {

        const response = await fetch(

            "/api/bookings"

        );

        const data =
            await response.json();

        setTickets(data);

    }

    return (

        <div
            style={{
                padding: "40px",
                fontFamily: "monospace",
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "40px",
                }}
            >
                MY TICKETS
            </h1>

            {

                tickets.map((ticket) => (

                    <div
                        key={ticket.id}
                        style={{
                            border: "2px solid black",
                            padding: "20px",
                            marginBottom: "20px",
                            backgroundColor: "white",
                        }}
                    >

                        <h2>
                            Booking ID:
                            {" "}
                            {ticket.id}
                        </h2>

                        <p>
                            Flight ID:
                            {" "}
                            {ticket.flight_id}
                        </p>

                        <p>
                            User ID:
                            {" "}
                            {ticket.user_id}
                        </p>

                    </div>

                ))

            }

            <a
                href="/dashboard"
                style={{
                    padding: "10px 20px",
                    background: "#3b82f6",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    display: "inline-block"
                }}
            >
                Back to dashboard
            </a>

        </div>

    );

}