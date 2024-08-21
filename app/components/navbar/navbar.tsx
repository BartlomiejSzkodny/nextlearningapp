import Link from "next/link";


export default function Navbar() {
    return (
        <div>
            <div>Logo</div>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>            
        </div>
    );
    }
