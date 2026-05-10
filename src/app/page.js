import Image from "next/image";

export default function Home() {
    return(
    <div style={{ textAlign: "center", marginTop: "1px",border: "10px solid gray",backgroundColor: "yellow",minHeight: "100vh"}}>

        <h1 style={{fontWeight: "bold", fontSize: "32px" }}>Flight Booking</h1>

        <div style={{ marginTop: "200px" }}>
            <a href="/login" style={{ marginRight:"120px",  fontSize: "18px", padding: "30px 65px", background: "red", color: "white", textDecoration: "none", borderRadius: "5px",fontFamily: "Georgia" }}>
                Login
            </a>

            <a href="/register" style={{ marginLeft:"120px",  fontSize: "18px", padding: "30px 65px", background: "red", color: "white", textDecoration: "none", borderRadius: "5px",fontFamily: "Georgia" }}>
                Register
            </a>
        </div>

        <div style={{ marginTop: "100px" }}>
            <a href="/help" style={{   fontSize: "18px", padding: "30px 65px", background: "blue", color: "white", textDecoration: "none", borderRadius: "5px",fontFamily: "Georgia" }}>
                Help
            </a>
        </div>

    </div>
);
}
