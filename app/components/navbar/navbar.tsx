"use client";
import Link from "next/link";
import { iflogged, logout } from "../../lib/cookieslog";
import { useState } from "react";

export default function Navbar() {
    const [log, setLog] = useState(iflogged() as boolean);

    const handleLogout = () => {
        logout();
    };

    if (log) {
        return (
            <nav>
                <div className="navbar">
                    <div>MindWork</div>
                    <div></div>
                    <Link href="/">Home</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/" onClick={handleLogout}>Logout</Link>
                    <div></div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav>
                <div className="navbar">
                    <div>MindWork</div>
                    <div></div>
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                    <div></div>
                </div>
            </nav>
        );
    }
}
