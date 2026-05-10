import Image from "next/image";

export default function Home() {
    return(
    <div style={{ textAlign: "center", marginTop: "50px",border: "30px solid gray"}}>

        <h1>Flight Booking</h1>

        <div style={{ marginTop: "30px" }}>
            <a href="/login" style={{ margin: "20px", padding: "10px 20px", background: "red", color: "white", textDecoration: "none", borderRadius: "5px",fontFamily: "Georgia" }}>
                Part A: Cinema Booking
            </a>
        </div>

    </div>
);
}
