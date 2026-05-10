"use client";

export default function BookPage() {

    const flights = [

        {
            id: 1,
            from: "Dublin",
            to: "London",
            price: 120,
        },

        {
            id: 2,
            from: "Paris",
            to: "Rome",
            price: 180,
        },

        {
            id: 3,
            from: "Berlin",
            to: "Madrid",
            price: 210,
        },

    ];

    async function handleBooking(flightId) {

        const user =
            JSON.parse(
                sessionStorage.getItem("user")
            );

        const response = await fetch(

            "/api/bookings",

            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({

                    user_id: user.id,
                    flight_id: flightId,

                }),
            }

        );

        const data =
            await response.json();

        alert(data.msg);

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
                BOOK FLIGHT
            </h1>

            {

                flights.map((flight) => (

                    <div
                        key={flight.id}
                        style={{
                            border: "2px solid black",
                            padding: "20px",
                            marginBottom: "20px",
                            backgroundColor: "white",
                        }}
                    >

                        <h2>
                            {flight.from}
                            {" → "}
                            {flight.to}
                        </h2>

                        <p>
                            Price:
                            ${flight.price}
                        </p>

                        <button
                            onClick={() =>
                                handleBooking(
                                    flight.id
                                )
                            }
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Book Ticket
                        </button>

                    </div>

                ))

            }

            <a
                href="/dashboard"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "blue",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    display: "inline-block",
                }}
            >
                Back
            </a>
        </div>

    );

}