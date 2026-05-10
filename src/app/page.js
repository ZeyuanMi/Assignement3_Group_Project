import Image from "next/image";

export default function Home() {
    return(
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh"}}>

        <img src="https://images.pexels.com/photos/33860674/pexels-photo-33860674.jpeg" alt="plane"
             style={{
            width: "400px",
            height: "300px",
            marginLeft: "auto",
            marginRight: "auto",}}
                />

        <div style={{ backgroundColor: "#003580", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
                            Flight Booking System
                        </span>
                        <div>
                        <a href="/login" style={{ color: "white", marginRight: "16px", textDecoration: "none", fontSize: "14px" }}>Login</a>
                                            <a href="/register" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>Register</a>
                                        </div>
                                    </div>


        <div style={{ marginTop: "100px" }}>
            <a href="/help" style={{   fontSize: "18px", padding: "30px 65px", background: "blue", color: "white", textDecoration: "none", borderRadius: "5px",fontFamily: "Georgia" }}>
                Help
            </a>
        </div>

    </div>
);
}
