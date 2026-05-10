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

    //check name
    function