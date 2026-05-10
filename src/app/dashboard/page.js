"use client";

import { useRouter }
    from "next/navigation";

export default function DashboardPage() {

    const router = useRouter();

    // Logout
    function handleLogout() {

        sessionStorage.removeItem("user");

        alert("Logout success");

        router.push("/");

    }

    return (

        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f2f2f2",
                padding: "40px",
                fontFamily: "monospace",
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    fontSize: "40px",
                    marginBottom: "50px",
                    borderBottom: "3px solid black",
                    paddingBottom: "20px",
                }}
            >
                FLIGHT BOOKING DASHBOARD
            </h1>

            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    backgroundColor: "white",
                    border: "3px solid black",
                    padding: "40px",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "30px",
                        justifyContent: "center",
                    }}
                >

                    {/* Book Flight */}
                    <button
                        onClick={() =>
                            router.push("/dashboard/bookings")
                        }
                        style={{
                            width: "220px",
                            height: "120px",
                            backgroundColor: "red",
                            color: "white",
                            fontSize: "22px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Book Flight
                    </button>

                    {/* My Tickets */}
                    <button
                        onClick={() =>
                            router.push("/dashboard/flights")
                        }
                        style={{
                            width: "220px",
                            height: "120px",
                            backgroundColor: "blue",
                            color: "white",
                            fontSize: "22px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        My Tickets
                    </button>

                    {/* Profile */}
                    <button
                        onClick={() =>
                            router.push("/dashboard/mytickets")
                        }
                        style={{
                            width: "220px",
                            height: "120px",
                            backgroundColor: "green",
                            color: "white",
                            fontSize: "22px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Profile
                    </button>

                    {/* Help */}
                    <button
                        onClick={() =>
                            router.push("/help")
                        }
                        style={{
                            width: "220px",
                            height: "120px",
                            backgroundColor: "purple",
                            color: "white",
                            fontSize: "22px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Help
                    </button>

                </div>

                <div
                    style={{
                        marginTop: "60px",
                        textAlign: "center",
                    }}
                >

                    <button
                        onClick={handleLogout}
                        style={{
                            padding: "15px 40px",
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                            fontSize: "18px",
                            cursor: "pointer",
                        }}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>

    );

}