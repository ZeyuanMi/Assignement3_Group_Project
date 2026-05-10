"use client";

import { useEffect, useState }
    from "react";

import { useRouter }
    from "next/navigation";

export default function LoginPage() {

    const router = useRouter();

    // States
    const [email, setEmail]
        = useState("");

    const [password, setPassword]
        = useState("");

    // Errors
    const [emailError, setEmailError]
        = useState("");

    const [passwordError, setPasswordError]
        = useState("");

    // Load localStorage
    useEffect(() => {

        const savedEmail =
            localStorage.getItem("email");

        const savedPassword =
            localStorage.getItem("password");

        if (savedEmail !== null) {

            setEmail(savedEmail);

        }

        if (savedPassword !== null) {

            setPassword(savedPassword);

        }

    }, []);

    // Save localStorage
    useEffect(() => {

        localStorage.setItem(
            "email",
            email
        );

        localStorage.setItem(
            "password",
            password
        );

    }, [email, password]);

    // Email validation
    function isValidEmail(email) {

        return (
            email.includes("@")
            &&
            email.includes(".")
        );

    }

    // Password validation
    function isValidPassword(password) {

        const passwordRegex =
            /^.{6,20}$/;

        return passwordRegex.test(password);

    }

    // Email change
    function handleEmailChange(e) {

        const newEmail =
            e.target.value;

        setEmail(newEmail);

        if (
            newEmail
            &&
            !isValidEmail(newEmail)
        ) {

            setEmailError(
                "Invalid email format."
            );

        } else {

            setEmailError("");

        }

    }

    // Password change
    function handlePasswordChange(e) {

        const newPassword =
            e.target.value;

        setPassword(newPassword);

        if (
            newPassword
            &&
            !isValidPassword(newPassword)
        ) {

            setPasswordError(
                "Password must be 6-20 characters."
            );

        } else {

            setPasswordError("");

        }

    }

    // Login submit
    async function handleSubmit(e) {

        e.preventDefault();

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

        const data =
            await response.json();

        alert(data.msg);

        // SAVE USER
        sessionStorage.setItem(

            "user",

            JSON.stringify(data.user)

        );

        // Success
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

            <h1>
                LOGIN
            </h1>

            <form onSubmit={handleSubmit}>

                {/* Email */}
                <div
                    style={{
                        marginBottom: "20px",
                    }}
                >

                    <label>
                        Email
                    </label>

                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                    />

                    <div
                        style={{
                            color: "red",
                        }}
                    >
                        {emailError}
                    </div>

                </div>

                {/* Password */}
                <div
                    style={{
                        marginBottom: "20px",
                    }}
                >

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                        }}
                    />

                    <div
                        style={{
                            color: "red",
                        }}
                    >
                        {passwordError}
                    </div>

                </div>

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