"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    // Router
    const router = useRouter();

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error states
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Sticky form: read localStorage
    useEffect(() => {

        const savedName =
            localStorage.getItem("name");

        const savedEmail =
            localStorage.getItem("email");

        const savedPassword =
            localStorage.getItem("password");

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

    // Sticky form: save localStorage
    useEffect(() => {

        localStorage.setItem(
            "name",
            name
        );

        localStorage.setItem(
            "email",
            email
        );

        localStorage.setItem(
            "password",
            password
        );

    }, [name, email, password]);

    // Back button
    function goBack() {

        router.back();

    }

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
                "Invalid email."
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

    // Submit login form
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

        // Login request
        const response = await fetch(

            "/api/auth/login",

            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({

                    email,
                    password,

                }),
            }
        );

        const data = await response.json();

        alert(data.msg);

        // Login success
        if (response.ok) {

            router.push("/dashboard");

        }
    }

    return (

        <div
            style={{
                maxWidth: "500px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid black",
                backgroundColor: "white",
                fontFamily: "monospace",
            }}
        >

            <h1
                style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                LOGIN
            </h1>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div style={{ marginBottom: "15px" }}>

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
                <div style={{ marginBottom: "15px" }}>

                    <label
                        style={{
                            display: "block",
                            marginBottom: "5px",
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="text"
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
                <div style={{ marginBottom: "15px" }}>

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

                {/* Login button */}
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        marginRight: "10px",
                    }}
                >
                    Login
                </button>

                {/* Back button */}
                <button
                    type="button"
                    onClick={goBack}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "gray",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Back
                </button>

            </form>

        </div>
    );
}