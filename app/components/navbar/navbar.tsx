import Link from "next/link";


export default function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div>Logo</div>
                <div></div>
                        <Link href="/">Home</Link>
                        <Link href="/login">Login</Link> 
            </div>
        </nav>
    );
    }
