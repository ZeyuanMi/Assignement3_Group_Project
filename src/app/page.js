import Image from "next/image";

export default function Home() {
    return(
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh"}}>


        <div style={{ backgroundColor: "#003580", padding: "60px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
                            Flight Booking System
                        </span>
                        <div>
                        <a href="/login" style={{ color: "white", marginRight: "16px", textDecoration: "none", fontSize: "14px" }}>Login</a>
                                            <a href="/register" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Register</a>
                                        </div>
                                    </div>


{/* Banner */}
            <div style={{ backgroundColor: "#0057b8", padding: "346px 24px", textAlign: "center" }}>
                <h1 style={{ color: "white", fontSize: "32px", marginBottom: "12px" }}>
                    Welcome to Flight Booking
                </h1>
                <p style={{ color: "#cce0ff", fontSize: "16px", marginBottom: "32px" }}>
                    Register or login to book your flights.
                </p>
                <a href="/register" style={{ backgroundColor: "white", color: "#0057b8", padding: "10px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", marginRight: "12px" }}>
                    Register

                </a>
                <a href="/login" style={{ backgroundColor: "transparent", color: "white", padding: "10px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", border: "1px solid white" }}>
                    Login
                </a>

                <a href="/help" style={{ marginLeft:"20px",backgroundColor: "transparent", color: "white", padding: "10px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", border: "1px solid white" }}>
                                    Help
                                </a>

            </div>


    </div>
);
}
