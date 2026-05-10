"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

    // Router
    const router = useRouter();

    // States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error states
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Sticky form: read data from localStorage
    useEffect(() => {

        const savedName =
            localStorage.getItem("registerName");

        const savedEmail =
            localStorage.getItem("registerEmail");

        const savedPassword =
            localStorage.getItem("registerPassword");

        if (savedName !== null) {
            setName(savedName);
        }

        if (savedEmail !== null) {
            setEmail(savedEmail);
        }

        if (savedPassword !== null) {
            setPassword(savedPassword);
        }

    }, []);

    // Sticky form: save data to localStorage
    useEffect(() => {

        localStorage.setItem(
            "registerName",
            name
        );

        localStorage.setItem(
            "registerEmail",
            email
        );

        localStorage.setItem(
            "registerPassword",
            password
        );

    }, [name, email, password]);

    // Name validation
    function isValidName(name) {

        const nameRegex =
            /^[a-zA-Z\s]{2,15}$/;

        return nameRegex.test(name);
    }

    // Email validation
    function isValidEmail(email) {

        return (
            email.includes("@")
            && email.includes(".")
        );
    }

    // Password validation
    function isValidPassword(password) {

        const passwordRegex =
            /^.{6,20}$/;

        return passwordRegex.test(password);
    }

    // Real-time name validation
    function handleNameChange(e) {

        const newName = e.target.value;

        setName(newName);

        if (
            newName
            && !isValidName(newName)
        ) {

            setNameError(
                "Name must be 2-15 letters."
            );

        } else {

            setNameError("");

        }
    }

    // Real-time email validation
    function handleEmailChange(e) {

        const newEmail = e.target.value;

        setEmail(newEmail);

        if (
            newEmail
            && !isValidEmail(newEmail)
        ) {

            setEmailError(
                "Invalid email format."
            );

        } else {

            setEmailError("");

        }
    }

    // Real-time password validation
    function handlePasswordChange(e) {

        const newPassword = e.target.value;

        setPassword(newPassword);

        if (
            newPassword
            && !isValidPassword(newPassword)
        ) {

            setPasswordError(
                "Password must be 6-20 characters."
            );

        } else {

            setPasswordError("");

        }
    }

    // Submit register form
    async function handleSubmit(e) {

        e.preventDefault();

        // Empty name
        if (!name.trim()) {

            setNameError(
                "Please enter your name."
            );

            return;
        }

        // Invalid name
        if (!isValidName(name)) {

            setNameError(
                "Invalid name format."
            );

            return;
        }

        // Invalid email
        if (!isValidEmail(email)) {

            setEmailError(
                "Invalid email."
            );

            return;
        }

        // Invalid password
        if (!isValidPassword(password)) {

            setPasswordError(
                "Invalid password."
            );

            return;
        }

        // Register request
        const response = await fetch(
            "/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            }
        );

        const data = await response.json();

        alert(data.msg);

        // Register success
        if (response.ok) {

            router.push("/login");

        }
    }

    return (

        <div
            style={{
                maxWidth: "500px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #000",
                backgroundColor: "#fff",
                fontFamily: "monospace",
            }}
        >

            <h1
                style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "24px",
                    borderBottom: "1px solid #000",
                    paddingBottom: "8px",
                }}
            >
                REGISTER
            </h1>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div style={{ marginBottom: "16px" }}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                        }}
                    >
                        Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                    />

                    <div
                        style={{
                            color: "red",
                            fontSize: "12px",
                        }}
                    >
                        {nameError}
                    </div>

                </div>

                {/* Email */}
                <div style={{ marginBottom: "16px" }}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
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
                            padding: "10px",
                        }}
                    />

                    <div
                        style={{
                            color: "red",
                            fontSize: "12px",
                        }}
                    >
                        {emailError}
                    </div>

                </div>

                {/* Password */}
                <div style={{ marginBottom: "16px" }}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
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
                            padding: "10px",
                        }}
                    />

                    <div
                        style={{
                            color: "red",
                            fontSize: "12px",
                        }}
                    >
                        {passwordError}
                    </div>

                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>

            </form>
            <p1></p1>
            <p1></p1>
            <p1></p1>
            <button onClick={() => router.push("/")}>
                Home
            </button>

        </div>
    );
}