import Image from "next/image";

export default function Home() {
    return(
    <div style={{ textAlign: "center", marginTop: "50px",border: "10px solid gray",backgroundColor: "white"}}>

        <h1>Flight Booking</h1>

        <div style={{ marginTop: "30px" }}>
            <a href="/login" style={{ margin: "40px", padding: "10px 20px", background: "red", color: "white", textDecoration: "none", borderRadius: "5px",fontFamily: "Georgia" }}>
                Login
            </a>
        </div>

    </div>
);
}
