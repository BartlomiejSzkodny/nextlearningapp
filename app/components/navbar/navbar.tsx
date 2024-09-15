"use client";
import Link from "next/link";
import { iflogged,logout } from "../../lib/cookieslog";


export default function Navbar() {

    function logoutbutton(){
        logout();
    }
    
    if (iflogged()){
        return (
            <nav>
                <div className="navbar">
                    <div>MindWork</div>
                    <div></div>
                            <Link href="/">Home</Link>
                            <Link href="/profile">Profile</Link>
                            <Link href="/" onClick={logoutbutton}>Logout</Link>
                    <div></div>
                </div>
            </nav>
        );
    }
    else{
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
