import Link from "next/link";


export default function Navbar() {
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
