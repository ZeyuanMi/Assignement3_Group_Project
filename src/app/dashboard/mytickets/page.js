"use client";

import { useEffect, useState }
    from "react";

export default function ProfilePage() {

    const [user, setUser]
        = useState(null);

    useEffect(() => {

        const userData =
            sessionStorage.getItem("user");

        if (userData) {

            setUser(
                JSON.parse(userData)
            );

        }

    }, []);

    return (

        <div
            style={{
                padding: "40px",
                fontFamily: "monospace",
            }}
        >

            <h1>
                PROFILE
            </h1>

            {

                user && (

                    <div
                        style={{
                            border: "2px solid black",
                            padding: "20px",
                            backgroundColor: "white",
                            marginTop: "20px",
                        }}
                    >

                        <p>
                            Name:
                            {" "}
                            {user.name}
                        </p>

                        <p>
                            Email:
                            {" "}
                            {user.email}
                        </p>

                        <p>
                            Role:
                            {" "}
                            {user.role}
                        </p>

                    </div>

                )

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