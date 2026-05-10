"use client";

import { useState } from "react";

export default function LoginPage() {

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error states
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    // Email validation
    function isValidEmail(email) {

        return (
            email.includes("@")
            && email.includes(".")
        );
    }

    // Submit form
    function handleSubmit(e) {

        e.preventDefault();

        // Empty name
        if (!name.trim()) {

            setNameError(
                "Please enter your name."
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

        // Success
        alert("Login success");
    }

    return (

        <div
            style={{
                maxWidth: "500px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid black",
                backgroundColor: "white",
            }}
        >

            <h1
                style={{
                    fontSize: "24px",
                    marginBottom: "20px",
                }}
            >
                Login
            </h1>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div
                    style={{
                        marginBottom: "15px",
                    }}
                >

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                    />

                    <p style={{ color: "red" }}>
                        {nameError}
                    </p>

                </div>

                {/* Email */}
                <div
                    style={{
                        marginBottom: "15px",
                    }}
                >

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                    />

                    <p style={{ color: "red" }}>
                        {emailError}
                    </p>

                </div>

                {/* Password */}
                <div
                    style={{
                        marginBottom: "15px",
                    }}
                >

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                    />

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                    }}
                >
                    Login
                </button>

            </form>

        </div>
    );
}