import Link from "next/link";
import {cookies} from 'next/headers';


export default function Navbar() {
    
    if (cookies().has("loggedIn")){
        return (
            <nav>
                <div className="navbar">
                    <div>MindWork</div>
                    <div></div>
                            <Link href="/">Home</Link>
                            <Link href="/profile">Profile</Link>
                            <Link href="/logout">Logout</Link>
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
