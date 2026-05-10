"use client";

import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    // save form data
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // sticky form: read data from localStorage
    useEffect(() => {
        const savedemail = localStorage.getItem("email");
        const savedrouter = localStorage.getItem("router");
        const savedname = localStorage.getItem("name");

        if (savedemail !== null) setemail(savedemail);
        if (savedrouter !== null) setrouter(savedrouter);
        if (savedname !== null) setname(savedname);
}, []);

    // sticky form: save data to localStorage
    useEffect(() => {
        localStorage.setItem("email", email);
        localStorage.setItem("router", router);
        localStorage.setItem("name", name);}, [email,router,name]);

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

    //Email verification.
    function isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }

}