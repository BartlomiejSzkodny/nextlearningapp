import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <div>Not Found</div>
            <div>Go back to <Link href="/">Home</Link></div>
        </div>
    );
}