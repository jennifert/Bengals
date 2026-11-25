"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/facts", label: "Facts" },
        { href: "/rescue", label: "Rescue" },
        { href: "/about", label: "About" },
    ];

    return (
        <header className="container">
            <nav aria-label="Main navigation">
                <ul>
                    <li>
                        <Link href="/">
                            <strong>Bengal Fan Page 🐆🐈</strong>
                        </Link>
                    </li>
                </ul>

                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                aria-current={
                                    pathname === link.href ? "page" : undefined
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}