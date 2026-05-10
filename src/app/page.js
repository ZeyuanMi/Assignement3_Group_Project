import Image from "next/image";

export default function Home() {
    return(
    <div style={{ textAlign: "center", marginTop: "1px",border: "20px solid gray",backgroundColor: "white",minHeight: "130vh"}}>

        <img src="https://images.pexels.com/photos/33860674/pexels-photo-33860674.jpeg" alt="plane"
             style={{
            width: "400px",
            height: "300px",
            marginLeft: "auto",
            marginRight: "auto",}}
                />

        <h1 style={{fontWeight: "bold", fontSize: "32px" }}>Flight Booking</h1>

        <div style={{ marginTop: "50px" }}>
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
