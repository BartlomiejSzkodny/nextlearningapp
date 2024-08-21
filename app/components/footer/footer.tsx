import Link from "next/link";

export default function Footer() {
    return (
        <div className="footerbar">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia pulvinar imperdiet.
                 Vivamus convallis nec sem quis sagittis. Vivamus ut sem efficitur, molestie ex a, ullamcorper sapien.
                  Sed libero purus, volutpat id aliquet ut, feugiat eu orci.</div>
                <Link href={"/"}>Facebook</Link>
                <Link href={"/"}>Instagram</Link>
        </div>
    );
}