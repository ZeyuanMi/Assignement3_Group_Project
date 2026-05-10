"use client";

import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    // save form data
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // sticky form: read data from localStorage
    useEffect(() => {
        const savedemail = localStorage.getItem("email");
        const savedname = localStorage.getItem("name");
        const savedpassword = localStorage.getItem("password");

        if (savedemail !== null) setEmail(savedemail);
        if (savedname !== null) setName(savedname);
        if (savedpassword !== null) setPassword(savedpassword);
    }, []);

    // sticky form: save data to localStorage
    useEffect(() => {
            localStorage.setItem("email", email);
            localStorage.setItem("name", name);
            localStorage.setItem("password", password);
        },

        [email,router,password,name]);

    function goToHome() {
        window.location.href = "/";

    }

    //check name(Use regular expressions,2-15 letters as a limit)
    const isValidName = (name) => {
        const nameRegex = /^[a-zA-Z\s]{2,15}$/;
        return nameRegex.test(name);
    }

    //Real time name verification (automatically checked upon input)
    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        if (newName && !isValidName(newName)) {
            setNameError("The name should be 2-30 characters long and can only contain English letters");
        } else {
            setNameError("");
        }
    };

    //check name(Use regular expressions,2-15 letters as a limit)
    const isValidPassword = (password) => {
        const passwordRegex = /^.{6,20}$/;
        return passwordRegex.test(password);
    }

    //Real time name verification (automatically checked upon input)
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (newPassword && !isValidPassword(newPassword)) {
            setPasswordError("The password length must be within 6-20 strings");
        } else {
            setPasswordError("");
        }
    };

    //Email verification.
    function isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }

    //Real time email verification (automatically checked upon input)
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (newEmail && !isValidEmail(newEmail)) {
            setEmailError("The email needs to include '@' and '.'");
        } else {
            setEmailError("");
        }
    };


    // Verify upon submission
    const handleSubmit =  async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setNameError("Input your name,please.");
            return;
        }

        if (!isValidName(name)) {
            setNameError("Name format is wrong.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address");
            return;
        }

        if (!isValidPassword(password)) {

            setPasswordError(
                "Password format is wrong."
            );

            return;
        }

        //Verified successful, execute login logic
        console.log("login information:", { name, email });
    };

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #000",
                backgroundColor: "#fff",
                fontFamily: "monospace",
            }}>
            <h1
                style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    borderBottom: "1px solid #000",
                    paddingBottom: "8px",
                }}

            >
                LOGIN(Please enter your correct information)
            </h1>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div style={{ marginBottom: "16px" }}>
                    <label
                        style={{
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginBottom: "4px",
                        }}
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        style={{
                            width: "100%",
                            padding: "6px 8px",
                            fontSize: "12px",
                            border: "1px solid #000",
                            borderRadius: "0",
                            boxSizing: "border-box",
                        }}
                    />
                    {nameError && (
                        <div style={{ color: "red", fontSize: "10px", marginTop: "4px" }}>
                            {nameError}
                        </div>
                    )}
                    <div style={{ fontSize: "10px", color: "#666", marginTop: "4px" }}>
                        Fill in this field with 2-15 strings that are not empty.
                    </div>
                </div>





                {/* Email */}
                <div style={{ marginBottom: "16px" }}>

                    <label
                        style={{
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginBottom: "4px",
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        style={{
                            width: "100%",
                            padding: "6px 8px",
                            fontSize: "12px",
                            border: "1px solid #000",
                            boxSizing: "border-box",
                        }}
                    />

                    {emailError && (

                        <div
                            style={{
                                color: "red",
                                fontSize: "10px",
                                marginTop: "4px"
                            }}
                        >
                            {emailError}
                        </div>

                    )}

                </div>





                {/* Password */}
                <div style={{ marginBottom: "16px" }}>

                    <label
                        style={{
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginBottom: "4px",
                        }}
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                        style={{
                            width: "100%",
                            padding: "6px 8px",
                            fontSize: "12px",
                            border: "1px solid #000",
                            boxSizing: "border-box",
                        }}
                    />

                    {passwordError && (

                        <div
                            style={{
                                color: "red",
                                fontSize: "10px",
                                marginTop: "4px"
                            }}
                        >
                            {passwordError}
                        </div>

                    )}

                </div>

                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>

            <button onClick={() => router.push("/")}>
                Home
            </button>

        </div>
    );
}